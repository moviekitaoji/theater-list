let hall_order = null;
let hall = null;
let theaters = null;
let theaterMap = null;

export async function initCard() {
  const response_hall_order = await fetch("../../data/halls-order.json");
  const response_hall = await fetch("../../data/halls.json");
  const response_theater = await fetch("../../data/theater.json");
  hall_order = await response_hall_order.json();
  hall = await response_hall.json();
  theaters = await response_theater.json();

  theaterMap = new Map();
  theaters.forEach((t) => theaterMap.set(t.theater, t.color));

  document
    .getElementById("filter-checkbox-4k")
    .addEventListener("click", function () {
      renderCard();
    });
  document
    .getElementById("filter-checkbox-Large")
    .addEventListener("click", function () {
      renderCard();
    });
  document
    .getElementById("filter-checkbox-Move")
    .addEventListener("click", function () {
      renderCard();
    });

  renderCard();
}

async function renderCard() {
  const container = document.getElementById("container");
  const f4k = document.getElementById("filter-checkbox-4k").checked;
  const fL = document.getElementById("filter-checkbox-Large").checked;
  const fM = document.getElementById("filter-checkbox-Move").checked;
  container.innerHTML = "";

  const sorted = hall.sort(
    (a, b) => hall_order.indexOf(a.name) - hall_order.indexOf(b.name)
  );

  sorted.forEach((cat) => {
    let catBody = "";
    let count = 0;

    cat.groups.forEach((sub) => {
      const items = sub.items.filter(
        (i) => (!f4k || i.is4k) && (!fL || i.isLarge) && (!fM || i.isMotion)
      );
      if (items.length > 0) {
        count += items.length;
        catBody += `
          <div class="subcategory">
              <h3 class="subcategory-title">
                  ${sub.title}
              </h3>

              <ul class="item-list">
                  ${items
                    .map((i) => {
                      console.log(
                        i.theater + " : " + theaterMap.get(i.theater)
                      );

                      const col = theaterMap.get(i.theater) || "#FFFFFF";
                      return `
                      <li class="item-row">
                          <div class="item-left">
                              <span class="item-left-theater" style="color:${col}">
                                  ${i.theater}
                              </span>
                          </div>

                          <div class="item-right">
                              <span class="item-right-hall" style="color:${col}">
                                  ${i.hall}
                              </span>

                              <span class="ratio-tag" style="color:${col}">
                                  ${i.ratio || "-"}
                              </span>

                              <div class="badge">
                                  ${
                                    i.isLarge
                                      ? '<span class="badge-status badge-large">大</span>'
                                      : '<span class="badge-placeholder"></span>'
                                  }

                                  ${
                                    i.is4k
                                      ? '<span class="badge-status badge-4k">4K</span>'
                                      : '<span class="badge-placeholder"></span>'
                                  }
                              </div>
                          </div>
                      </li>`;
                    })
                    .join("")}
              </ul>
          </div>
        `;
      }
    });

    if (count > 0) {
      container.innerHTML += `
        <div class="category-base" style="--category-color: ${cat.color}">
            <h2 class="category-title">
                ${cat.name}
                <span class="category-count">${count}</span>
            </h2>
            ${catBody}
        </div>      
      `;
    }
  });
}
