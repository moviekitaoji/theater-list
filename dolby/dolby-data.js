const dolbySpecData = [
    {
        id: "dolby",
        introBG: "#002d53", // 杜比深藍色背景
        color: "#00fff0",   // 主題亮青色
        // 頂部三張介紹卡
        intros: [
            { 
                title: "★ 杜比全景聲 Dolby Atmos", 
                desc: "杜比實驗室開發的沉浸式音效系統。加入了<span class='text-[#ffd700] font-bold'>天空聲道與物件導向技術</span>，讓聲音能在三維空間自由移動與精準定位。觀眾能感覺到聲音從四面八方和頭頂包圍而來，帶來身歷其境的聽覺體驗。", 
                bgColor: "#005bb7" 
            },
            { 
                title: "★ 杜比視界 Dolby Vision", 
                desc: "杜比實驗室開發的 HDR 影像技術。具備<span class='text-white font-bold'>高亮度、高對比 (100萬:1)</span> 與更廣的色域，在呈現明亮鮮豔畫面的同時，也能保留深邃的暗部與細膩的明暗細節，使電影畫面更具真實感。", 
                bgColor: "#6a0dad" 
            },
            { 
                title: "★ 杜比認證影廳設計", 
                desc: "● <span class='text-white font-bold'>嚴謹的裝修規範：</span>從牆面、天花板、座椅到地毯，採用深色無反光材質，確保銀幕清晰、減少干擾。<br>● <span class='text-white font-bold'>音響的精密計算與設置：</span>包含嚴格控制混響時間、隱藏式揚聲器配置等，確保杜比全景聲能完整發揮效果。", 
                bgColor: "#238636" 
            }
        ],
        // 頁面內部的項目區塊
        groups: [
            {
                type: "Dolby Cinema 杜比影院",
                isAtmosGroup: false,
                projector: "雙機 4K HDR",
                logic: [
                    { text: "杜比影廳設計", class: "bg-logic-dolby-design" },
                    { text: "杜比視界", class: "bg-logic-vision" },
                    { text: "杜比全景聲", class: "bg-logic-atmos" }
                ],
                cinemas: [
                    { name: "桃園青埔新光", hall: "杜比影院", ratio: "F", is4k: true, color: "#00fff0" },
                    { name: "美麗華大直", hall: "杜比影院", ratio: "T", is4k: true, color: "#ff3333" }
                ]
            },
            {
                type: "Dolby Vision + Atmos (簡配杜比廳)",
                isAtmosGroup: false,
                projector: "單機 4k HDR",
                logic: [
                    { text: "一般影廳", class: "bg-logic-std-hall" },
                    { text: "杜比視界", class: "bg-logic-vision" },
                    { text: "杜比全景聲", class: "bg-logic-atmos" }
                ],
                cinemas: [
                    { name: "台北大巨蛋秀泰", hall: "DVA 8/9廳", ratio: "F", is4k: true, color: "#ec7fff" }
                ]
            },
            {
                type: "Dolby Atmos 杜比全景聲影廳",
                isAtmosGroup: true,
                rows: [
                    {
                        subType: "雙機 4k",
                        logicClasses: ["bg-logic-std-hall", "bg-logic-std-vision", "bg-logic-atmos"],
                        cinemas: [
                            { name: "國賓大戲院", hall: "鉅院廳", ratio: "F", is4k: true, color: "#00ff44" },
                            { name: "金門金獅影城", hall: "A廳", ratio: "F", is4k: true, color: "#ffffff" }
                        ]
                    },
                    {
                        subType: "RealD 終極銀幕",
                        logicClasses: ["bg-logic-std-hall", "bg-logic-std-vision", "bg-logic-atmos"],
                        cinemas: [
                            { name: "桃園青埔新光", hall: "LUXE廳", ratio: "S", is4k: true, color: "#00fff0" },
                            { name: "嘉義in89", hall: "LUXE廳", ratio: "L", is4k: true, color: "#ff7200" },
                            { name: "台南西門新光", hall: "LUXE廳", ratio: "S", is4k: true, color: "#00fff0" },
                            { name: "台中中港新光", hall: "LUXE廳", ratio: "S", is4k: true, color: "#00fff0" }
                        ]
                    },
                    {
                        subType: "LED 4K 螢幕",
                        logicClasses: ["bg-logic-std-hall", "bg-logic-std-vision", "bg-logic-atmos"],
                        cinemas: [
                            { name: "台中文心秀泰", hall: "11廳", ratio: "F", is4k: true, color: "#ec7fff" }
                        ]
                    },
                    {
                        subType: "4k / 2k 一般廳",
                        logicClasses: ["bg-logic-std-hall", "bg-logic-std-vision", "bg-logic-atmos"],
                        cinemas: [
                            { name: "西門in89", hall: "COACH廳", ratio: "S", is4k: true, color: "#ff7200" },
                            { name: "桃園八德國賓", hall: "2/3廳", ratio: "T", is4k: true, color: "#00ff44" },
                            { name: "中壢威尼斯影城", hall: "7/8廳", ratio: "S", is4k: true, color: "#ffffff" },
                            { name: "台中新時代威秀", hall: "1廳", ratio: "F", is4k: true, color: "#38c6ff" },
                            { name: "林口/宜蘭/彰化", hall: "一般廳", ratio: "F", is4k: false, color: "#ffffff" }
                        ]
                    }
                ]
            }
        ]
    }
];