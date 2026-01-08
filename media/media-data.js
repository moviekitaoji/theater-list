const mediaSpecData = [
    {
        id: "mx4d",
        introTitle: "★ MX4D",
        introDesc: "由美國公司 MediaMation 開發的 4D 電影系統",
        // 補齊介紹卡細節
        introDetails: [
            { label: "座椅動態效果", items: "上下左右前後、戳臀、戳背、搔腿、搔頸、震動" },
            { label: "座椅周邊效果", items: "噴水、噴氣、吹風、氣味" },
            { label: "影廳環境特效", items: "颶風、閃光、煙霧、下雨、泡泡、雪" }
        ],
        introBG: "#004d4d", // 深青色背景
        color: "#00fff0",   // 主題亮青色
        // 將不同公式的據點拆開
        rows: [
            {
                type: "MX4D + Dolby Atmos (全景聲規格)",
                projector: "2K / 4K 放映系統",
                logic: [
                    { text: "MX4D 技術", class: "bg-logic-mx4d" },
                    { text: "一般畫面", class: "bg-logic-standard" },
                    { text: "杜比全景聲", class: "bg-dolby-atmos" }
                ],
                cinemas: [
                    { name: "台中中港新光", hall: "(Atmos) MX4D", ratio: "S", is4k: false, color: "#00fff0" }
                ]
            },
            {
                type: "MX4D Standard (標準規格)",
                projector: "2K / 4K 放映系統",
                logic: [
                    { text: "MX4D 技術", class: "bg-logic-mx4d" },
                    { text: "一般畫面", class: "bg-logic-standard" }
                ],
                cinemas: [
                    { name: "嘉義in89", hall: "MX4D", ratio: "S", is4k: false, color: "#ff7200" }
                ]
            }
        ]
    }
];