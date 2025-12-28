export function renderLegend() {
  const container = document.getElementById("ratio-legend");
  fetch("../../data/ratio.json")
    .then((r) => r.json())
    .then((data) => {
      container.innerHTML = data.ratios
        .map(
          (r) => `
					<span>
						<b>${r.label}</b>
						${r.desc}
					</span>
				`
        )
        .join("");
    });
}
