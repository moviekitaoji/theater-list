/**
 * [資料說明] 補齊圖片中所有影廳據點，並統一 IMAX 區塊顏色為深藍色
 */
const imaxSpecData = [
    {
        id: "imax-gt",
        type: "IMAX 雷射 GT 3D",
        projector: "雙機雙鏡 4K",
        cardColor: "#002d53", // 修正 2：標題區與框線統一深藍
        logic: [
            { text: "支援 IMAX 1.43/1.90:1 擴展畫幅", class: "bg-logic-ratio" },
            { text: "IMAX DMR 數位原底翻版影像強化", class: "bg-logic-dmr" },
            { text: "IMAX 12 聲道系統", class: "bg-logic-12ch" }
        ],
        cinemas: [
            { name: "美麗華大直", sound: "12ch", size: "28.4m × 20.54m", is4k: true, color: "#ff3333" }
        ]
    },
    {
        id: "imax-commercial",
        type: "IMAX 商業雷射",
        projector: "單機雙鏡 4K",
        cardColor: "#002d53", // 修正 2：統一深藍
        logic: [
            { text: "支援 IMAX 1.90:1 擴展畫幅", class: "bg-logic-ratio" },
            { text: "IMAX DMR 數位原底翻版影像強化", class: "bg-logic-dmr" },
            { text: "IMAX 12 聲道系統", class: "bg-logic-12ch" }
        ],
        cinemas: [
            { name: "花蓮威秀", sound: "12ch", size: "21.33m × 12.04m", is4k: true, color: "#38c6ff" },
            { name: "嘉義in89", sound: "12ch", size: "21.49m × 12.31m", is4k: true, color: "#ff7200" }
        ]
    },
    {
        id: "imax-xt",
        type: "IMAX 雷射 XT",
        projector: "單機 4K",
        cardColor: "#002d53", // 修正 2：統一深藍
        logic: [
            { text: "支援 IMAX 1.90:1 擴展畫幅", class: "bg-logic-ratio" },
            { text: "IMAX DMR 數位原底翻版影像強化", class: "bg-logic-dmr" },
            { text: "IMAX 6 聲道系統", class: "bg-logic-6ch" }
        ],
        cinemas: [
            { name: "板橋大遠百威秀", sound: "6ch", size: "21.33m × 11.46m", is4k: true, color: "#38c6ff" },
            { name: "新店裕隆城威秀", sound: "6ch", size: "21.4m × 11.6m", is4k: true, color: "#38c6ff" },
            { name: "高雄大遠百威秀", sound: "6ch", size: "15.88m × 8.17m", is4k: true, color: "#38c6ff" }
        ]
    },
    {
        id: "imax-xenon",
        type: "IMAX 數位氖燈",
        projector: "雙機 2K 交錯強化 (解析度≒2.9K)",
        cardColor: "#002d53", // 修正 2：統一深藍
        logic: [
            { text: "支援 IMAX 1.90:1 擴展畫幅", class: "bg-logic-ratio" },
            { text: "IMAX DMR 數位原底翻版影像強化", class: "bg-logic-dmr" },
            { text: "IMAX 6 聲道系統", class: "bg-logic-6ch" }
        ],
        cinemas: [
            { name: "美麗新台茂", sound: "6ch", size: "19m × 9.75m", is4k: false, color: "#ff00b4" },
            { name: "新竹巨城威秀", sound: "6ch", size: "17.77m × 9.69m", is4k: false, color: "#38c6ff" },
            { name: "台中大遠百威秀", sound: "6ch", size: "18.26m × 9.36m", is4k: false, color: "#38c6ff" },
            { name: "台南南紡威秀", sound: "6ch", size: "21.79m × 12.16m", is4k: false, color: "#38c6ff" }
        ]
    }
];

// 頂部介紹內容
const imaxIntroData = {
    title: "★ IMAX",
    subtitle: "加拿大 IMAX 公司開發的巨型銀幕電影放映技術",
    content: "擁有專利的 <span class='text-[#38c6ff] font-bold'>IMAX DMR 影像強化技術</span> 與獨家的 <span class='text-white font-bold'>6/12 聲道音響環繞系統</span>。部分使用 <span class='text-[#ffd700] font-bold'>IMAX 攝影機</span> 拍攝的電影，能呈現專屬的擴展畫幅，帶來震撼磅礡的觀影體驗。",
    bgColor: "#002d53"
};