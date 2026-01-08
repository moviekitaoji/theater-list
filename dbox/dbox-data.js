const dboxSpecData = [
    {
        id: "dbox",
        introTitle: "★ D-BOX",
        introDesc: "由加拿大公司 D-BOX Technologies 開發的動態座椅",
        introDetails: "會隨著電影畫面，產生<span class='text-[#ffd700] font-bold'>上下左右前後的搖動</span>，可依個人喜好調整震動強度。",
        introBG: "#1a4d2e", // D-BOX 專屬深綠色背景
        color: "#00ff44",   // 主題亮綠色
        rows: [
            {
                type: "D-BOX + Dolby Atmos (全景聲版)",
                projector: "2K / 4K 放映系統",
                logic: [
                    { text: "D-BOX 技術", class: "bg-logic-dbox" },
                    { text: "一般畫面", class: "bg-logic-standard" },
                    { text: "杜比全景聲", class: "bg-dolby-atmos" }
                ],
                cinemas: [
                    { name: "國賓大戲院", hall: "鉅院廳", ratio: "F", is4k: true, note: "(Atmos)", color: "#00ff44" },
                    { name: "林口昕境國賓", hall: "2廳", ratio: "S", is4k: false, note: "(Atmos)", color: "#00ff44" },
                    { name: "桃園八德國賓", hall: "2/3廳", ratio: "T", is4k: true, note: "(Atmos)", color: "#00ff44" },
                    { name: "高雄草衙道國賓", hall: "9/10廳", ratio: "F", is4k: false, note: "(Atmos)", color: "#00ff44" }
                ]
            },
            {
                type: "D-BOX Standard (一般版)",
                projector: "2K / 4K 放映系統",
                logic: [
                    { text: "D-BOX 技術", class: "bg-logic-dbox" },
                    { text: "一般畫面", class: "bg-logic-standard" }
                ],
                cinemas: [
                    { name: "高雄義大國賓", hall: "1廳", ratio: "S", is4k: false, note: "", color: "#00ff44" },
                    { name: "屏東環球國賓", hall: "1廳", ratio: "F", is4k: false, note: "", color: "#00ff44" }
                ]
            }
        ]
    }
];