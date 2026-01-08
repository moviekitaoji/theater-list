/**
 * [功能] 規格指南頁面渲染邏輯 (含品牌欄位合併)
 */
function renderSpecPage() {
    const tableBody = document.getElementById('spec-table-body');
    const mobileList = document.getElementById('spec-mobile-list');

    if (!tableBody || !mobileList) return;

    tableBody.innerHTML = "";
    mobileList.innerHTML = "";

    // 用來記錄哪些索引的品牌欄位已經處理過 rowspan
    const processedIndices = new Set();

    specData.forEach((item, index) => {
        /**
         * [輔助功能] 格式化符號：將 ○ 轉黃色，✕ 轉白色，並加粗
         */
        const formatStatus = (val) => {
            if (val === "○") return '<span class="status-symbol-o">○</span>';
            if (val === "✕") return '<span class="status-symbol-x">✕</span>';
            return `<span style="font-weight: 500;">${val}</span>`;
        };

        const ratioHtml = formatStatus(item.ratio);
        const motionHtml = formatStatus(item.motion);
        const effectHtml = formatStatus(item.effect);

        // --- 桌面版表格合併邏輯 ---
        let brandTd = "";
        if (!processedIndices.has(index)) {
            // 計算從目前這筆開始，有幾筆連續的品牌是相同的
            let rowspan = 1;
            for (let j = index + 1; j < specData.length; j++) {
                if (specData[j].brand === item.brand) {
                    rowspan++;
                    processedIndices.add(j); // 標記這些索引，之後迴圈遇到時跳過品牌欄
                } else {
                    break;
                }
            }
            // 產生帶有 rowspan 的品牌欄位
            brandTd = `<td rowspan="${rowspan}" class="font-bold" style="color: #8b949e; vertical-align: middle; background-color: #0d1117;">${item.brand}</td>`;
        }

        // 生成桌面版表格內容 (注意：brandTd 若為空則不佔用 <td>)
        tableBody.innerHTML += `
            <tr>
                ${brandTd} 
                <td style="color: #58a6ff; font-weight: bold; white-space: normal;">${item.type}</td>
                <td style="white-space: normal;">${ratioHtml}</td>
                <td style="white-space: normal;">${item.vision}</td>
                <td style="white-space: normal;">${item.sound}</td>
                <td style="white-space: normal;">${item.res}</td>
                <td>${motionHtml}</td>
                <td>${effectHtml}</td>
                <td style="color: #8b949e; font-size: 12px; white-space: normal; text-align: left;">${item.locations}</td>
            </tr>
        `;

        // 手機版卡片維持原樣 (手機版不需要合併欄位)
        mobileList.innerHTML += `
            <div class="spec-card">
                <div class="spec-card-header">
                    <div class="text-xs" style="color: #8b949e;">${item.brand}</div>
                    <div class="text-lg font-bold" style="color: #58a6ff;">${item.type}</div>
                </div>
                <div class="spec-row"><span class="spec-label">主畫面增幅</span><span class="spec-value">${ratioHtml}</span></div>
                <div class="spec-row"><span class="spec-label">影像技術</span><span class="spec-value">${item.vision}</span></div>
                <div class="spec-row"><span class="spec-label">音響系統</span><span class="spec-value">${item.sound}</span></div>
                <div class="spec-row"><span class="spec-label">投影解析度</span><span class="spec-value">${item.res}</span></div>
                <div class="spec-row"><span class="spec-label">體感座椅</span><span class="spec-value">${motionHtml}</span></div>
                <div class="spec-row"><span class="spec-label">環境特效</span><span class="spec-value">${effectHtml}</span></div>
                <div class="mt-3 pt-2 border-t border-gray-800 text-xs" style="color: #8b949e;">
                    <i class="fas fa-map-marker-alt mr-1"></i> ${item.locations}
                </div>
            </div>
        `;
    });
}

window.onload = renderSpecPage;