const cjSpecData = [
    {
        id: "screenx",
        type: "ScreenX (270度全景影廳)",
        projector: "主畫面4K投影 + 延伸投影(較糊)",
        introTitle: "★ ScreenX",
        introDesc: "由韓國公司 CJ 4DPLEX 與韓國科學技術院 KAIST 共同開發的沉浸式全景電影格式。會在電影的關鍵時刻，將畫面延伸投影到左右牆面，填滿觀眾的餘光視野，帶來高達 270 度的環繞式觀影體驗。",
        introBG: "#3d306b", // 深紫色背景
        logic: [
            { text: "一般畫面", class: "bg-logic-standard" },
            { text: "側牆延伸投影", class: "bg-logic-wall" }
        ],
        color: "#ec7fff",
        cinemas: [
            { name: "台北欣欣秀泰", hall: "(1) SCREENX", ratio: "S", is4k: true, color: "#ec7fff" },
            { name: "樹林秀泰", hall: "(1) SCREENX", ratio: "F", is4k: true, color: "#ec7fff" },
            { name: "台中站前秀泰", hall: "(1) SCREENX", ratio: "F", is4k: true, color: "#ec7fff" },
            { name: "台中文心秀泰", hall: "(1) SCREENX", ratio: "F", is4k: true, color: "#ec7fff" },
            { name: "嘉義秀泰", hall: "(1) SCREENX", ratio: "F", is4k: true, color: "#ec7fff" },
            { name: "岡山秀泰", hall: "(1) SCREENX", ratio: "F", is4k: true, color: "#ec7fff" },
            { name: "高雄夢時代秀泰", hall: "(12) SCREENX", ratio: "F", is4k: true, color: "#ec7fff" },
            { name: "台北大巨蛋秀泰", hall: "SCREENX", ratio: "", is4k: true, color: "#ec7fff" }
        ]
    },
    {
        id: "4dx",
        type: "4DX (動態體感影廳)",
        projector: "2K / 4K 放映系統",
        introTitle: "★ 4DX",
        introDesc: "由韓國公司 CJ 4DPlex 開發的 4D 電影系統。包含座椅動態效果（上下左右前後、震動等）、座椅周邊效果（臉部風效、水霧、氣味等）以及影廳環境特效（泡泡、煙霧、閃光、雪花等）。",
        introBG: "#8c1c31", // 深紅色背景
        logic: [
            { text: "4DX 技術", class: "bg-logic-4dx" },
            { text: "一般畫面", class: "bg-logic-standard" }
        ],
        color: "#38c6ff",
        cinemas: [
            { name: "台北信義威秀", hall: "4DX", ratio: "S", is4k: false, color: "#38c6ff" },
            { name: "林口三井威秀", hall: "4DX", ratio: "F", is4k: true, color: "#38c6ff" },
            { name: "台南大遠百威秀", hall: "4DX", ratio: "F", is4k: false, color: "#38c6ff" },
            { name: "高雄大遠百威秀", hall: "4DX", ratio: "F", is4k: false, color: "#38c6ff" },
            { name: "台中站前秀泰", hall: "4DX", ratio: "", is4k: false, color: "#ec7fff" }
        ]
    },
    {
        id: "ultra4dx",
        type: "ULTRA 4DX (4DX + ScreenX)",
        projector: "結合了 4DX 與 ScreenX 兩種放映系統",
        introTitle: "★ ULTRA 4DX",
        introDesc: "這是 CJ 4DPLEX 的頂級規格，將 4DX 的動態體感與環境特效，完美結合 ScreenX 的 270 度全景視覺，提供最強大的沉浸感。",
        introBG: "#311b4e", // 深靛色背景
        logic: [
            { text: "4DX", class: "bg-logic-4dx" },
            { text: "ScreenX", class: "bg-logic-screenx" }
        ],
        color: "#ffd700",
        cinemas: [
            { name: "台北大巨蛋秀泰", hall: "(1) ULTRA 4DX", ratio: "", is4k: true, color: "#ec7fff" },
            { name: "台北大巨蛋秀泰", hall: "(2) ULTRA 4DX", ratio: "", is4k: true, color: "#ec7fff" },
            { name: "台中文心秀泰", hall: "ULTRA 4DX", ratio: "", is4k: true, color: "#ec7fff" },
            { name: "高雄夢時代秀泰", hall: "ULTRA 4DX", ratio: "", is4k: true, color: "#ec7fff" }
        ]
    }
];