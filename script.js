/**
 * [功能] 產生頁面底部的「比例說明圖例」
 */
function renderLegend() {
    const legend = document.getElementById('ratio-legend');
    theaterData.ratios.forEach(r => {
        legend.innerHTML += `<span class="bg-[#1c2128] px-3 py-1.5 rounded-md text-[11px] border border-[#30363d] font-mono"><b class="text-blue-400 mr-2">${r.label}</b> ${r.desc}</span>`;
    });
}

/**
 * [功能] 根據分類名稱給予特定的 CSS Class
 * 這樣在 CSS 裡才能用 order 屬性來控制手機版的顯示順序
 */
function getOrderClass(name) {
    if (name.includes("數位 4K")) return "card-4k";
    if (name.includes("IMAX")) return "card-imax";
    if (name.includes("DOLBY")) return "card-dolby";
    if (name.includes("CJ 4DPLEX")) return "card-cj";
    if (name.includes("MEDIA MATION")) return "card-media";
    if (name.includes("D-BOX")) return "card-dbox";
    return "";
}

/**
 * [功能] 核心函數：根據資料與篩選條件，產生一張卡片的 HTML
 */
function createCardHtml(cat, filters) {
    let catBody = '';
    let count = 0;
    const is4KCategory = cat.name.includes("數位 4K");

    // 跑遍子分類（例如：IMAX 雷射、IMAX 數位）
    cat.subgroups.forEach(sub => {
        // [篩選邏輯] 只有同時滿足所有勾選條件的影廳才會留下來
        const items = sub.items.filter(i => 
            (!filters.f4k || i.is4k) && 
            (!filters.fL || i.isLarge) && 
            (!filters.fM || i.isMotion) &&
            (!filters.fIMAX || i.isIMAX) &&
            (!filters.fAtmos || i.isAtmos) &&
            (!filters.fLUXE || i.isLUXE)
        );

        if (items.length > 0) {
            count += items.length;
            // 如果是 4K 分類且項目多，就給予雙欄顯示類別
            const listClass = (is4KCategory && items.length > 9) ? 'flow-column-2' : 'space-y-1';

            catBody += `
                <div class="subgroup-box">
                    <h3 class="text-[16px] uppercase tracking-[0.05em] font-bold mb-2 border-l-4 pl-3" style="color: ${sub.color}; border-color: ${sub.color}">${sub.subtitle}</h3>
                    <ul class="${listClass}">
                        ${items.map(i => {
                            const col = i.color || sub.color;
                            const isLong = i.hall.length > 4; // 影廳名太長就縮小一點點
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
        // [核心修改] 幫卡片加上 ID (用於導航跳轉)，移除空白與特殊字元
        const anchorID = "cat-" + cat.name.replace(/\s+/g, '').replace(/[^\w\s]/gi, '');
        
        return { 
            html: `
            <div id="${anchorID}" class="category-card ${orderClass}" style="border-color: ${cat.color}aa">
                <h2 class="text-xl font-black mb-6 pb-2 border-b-2 flex items-center justify-between" style="border-color: ${cat.color}; color: ${cat.color}">
                    ${cat.name}
                    <span class="text-xs bg-gray-800 text-gray-300 px-3 py-0.5 rounded-full font-mono">${count}</span>
                </h2>
                ${catBody}
            </div>`, 
            count: count 
        };
    }
    return { html: '', count: 0 };
}

/**
 * [功能] 每次勾選 checkbox 或網頁開啟時，重新刷新畫面
 */
function updateView() {
    const container = document.getElementById('container');
    // 取得畫面上所有勾選框的狀態
    const filters = {
        f4k: document.getElementById('f4k').checked,
        fL: document.getElementById('fL').checked,
        fM: document.getElementById('fM').checked,
        fIMAX: document.getElementById('fIMAX').checked,
        fAtmos: document.getElementById('fAtmos').checked,
        fLUXE: document.getElementById('fLUXE').checked
    };
    
    // 設定哪三個直排欄位要放哪些分類
    const col1Names = ["數位 4K 影廳"];
    const col2Names = ["IMAX 系列", "CJ 4DPLEX 系列", "MEDIA MATION"];
    const col3Names = ["DOLBY 系列", "D-BOX Technologies"];

    let htmlCol1 = '';
    let htmlCol2 = '';
    let htmlCol3 = '';
    let total4KItems = 0;

    // 分配資料到三個直排中
    theaterData.categories.forEach(cat => {
        const res = createCardHtml(cat, filters);
        if (col1Names.includes(cat.name)) {
            htmlCol1 += res.html;
            total4KItems += res.count;
        }
        else if (col2Names.includes(cat.name)) htmlCol2 += res.html;
        else if (col3Names.includes(cat.name)) htmlCol3 += res.html;
    });

    // [自動縮窄邏輯] 如果 4K 項目少於 10 個，給予標記，讓它在 CSS 中變成一倍寬度
    const isNarrow = total4KItems <= 9;
    container.className = isNarrow ? "is-narrow-4k" : "";

    // 把組合好的 HTML 塞進網頁
    container.innerHTML = `
        <div class="column-group col-group-4k ${isNarrow ? 'is-narrow' : ''}">${htmlCol1}</div>
        <div class="column-group col-group-main">${htmlCol2}</div>
        <div class="column-group col-group-side">${htmlCol3}</div>
    `;
}

// 初始執行
renderLegend();
updateView();