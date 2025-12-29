function renderLegend() {
    const legend = document.getElementById('ratio-legend');
    theaterData.ratios.forEach(r => {
        legend.innerHTML += `<span class="bg-[#1c2128] px-3 py-1.5 rounded-md text-[11px] border border-[#30363d] font-mono"><b class="text-blue-400 mr-2">${r.label}</b> ${r.desc}</span>`;
    });
}

function getOrderClass(name) {
    if (name.includes("數位 4K")) return "card-4k";
    if (name.includes("IMAX")) return "card-imax";
    if (name.includes("DOLBY")) return "card-dolby";
    if (name.includes("CJ 4DPLEX")) return "card-cj";
    if (name.includes("MEDIA MATION")) return "card-media";
    if (name.includes("D-BOX")) return "card-dbox";
    return "";
}

function createCardHtml(cat, f4k, fL, fM) {
    let catBody = '';
    let count = 0;
    const is4KCategory = cat.name.includes("數位 4K");

    cat.subgroups.forEach(sub => {
        const items = sub.items.filter(i => (!f4k || i.is4k) && (!fL || i.isLarge) && (!fM || i.isMotion));
        if (items.length > 0) {
            count += items.length;
            // 4K 影廳加上 flow-column-2 類別，讓 CSS 決定它是雙排還是單排
            const listClass = is4KCategory ? 'flow-column-2' : 'space-y-1';

            catBody += `
                <div class="subgroup-box">
                    <h3 class="text-[16px] uppercase tracking-[0.05em] font-bold mb-2 border-l-4 pl-3" style="color: ${sub.color}; border-color: ${sub.color}">${sub.subtitle}</h3>
                    <ul class="${listClass}">
                        ${items.map(i => {
                            const col = i.color || sub.color;
                            const isLong = i.hall.length > 4;
                            const scaleClass = isLong ? 'scale-x-90' : 'scale-x-100';
                            return `
                            <li class="flex items-center justify-between text-[14px] border-b border-gray-800/40 pb-1 mb-1" style="break-inside: avoid;">
                                <div class="min-w-0 pr-2"><span class="font-medium truncate" style="color: ${col}ee">${i.theater}</span></div>
                                <div class="flex items-center gap-2 flex-shrink-0">
                                    <span class="font-semibold inline-block transform ${scaleClass} origin-right" style="color: ${col}dd">${i.hall}</span>
                                    <span class="ratio-tag w-4" style="color: ${col}dd">${i.ratio || '-'}</span>
                                    <div class="flex items-center gap-1 w-[46px] justify-end">
                                        ${i.isLarge ? '<span class="status-badge badge-large">大</span>' : '<span class="w-[22px]"></span>'}
                                        ${i.is4k ? '<span class="status-badge badge-4k">4K</span>' : '<span class="w-[22px]"></span>'}
                                    </div>
                                </div>
                            </li>`;
                        }).join('')}
                    </ul>
                </div>`;
        }
    });

    if (count > 0) {
        const orderClass = getOrderClass(cat.name);
        return `
            <div class="category-card ${orderClass}" style="border-color: ${cat.color}aa">
                <h2 class="text-xl font-black mb-6 pb-2 border-b-2 flex items-center justify-between" style="border-color: ${cat.color}; color: ${cat.color}">
                    ${cat.name}
                    <span class="text-xs bg-gray-800 text-gray-300 px-3 py-0.5 rounded-full font-mono">${count}</span>
                </h2>
                ${catBody}
            </div>`;
    }
    return '';
}

function updateView() {
    const container = document.getElementById('container');
    const f4k = document.getElementById('f4k').checked;
    const fL = document.getElementById('fL').checked;
    const fM = document.getElementById('fM').checked;
    
    const col1Names = ["數位 4K 影廳"];
    const col2Names = ["IMAX 系列", "CJ 4DPLEX 系列", "MEDIA MATION"];
    const col3Names = ["DOLBY 系列", "D-BOX Technologies"];

    let htmlCol1 = '';
    let htmlCol2 = '';
    let htmlCol3 = '';

    theaterData.categories.forEach(cat => {
        const cardHtml = createCardHtml(cat, f4k, fL, fM);
        if (col1Names.includes(cat.name)) htmlCol1 += cardHtml;
        else if (col2Names.includes(cat.name)) htmlCol2 += cardHtml;
        else if (col3Names.includes(cat.name)) htmlCol3 += cardHtml;
    });

    container.innerHTML = `
        <div class="column-group">${htmlCol1}</div>
        <div class="column-group">${htmlCol2}</div>
        <div class="column-group">${htmlCol3}</div>
    `;
}

renderLegend();
updateView();