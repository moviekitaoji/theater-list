const theaterData = {
    "categories": [
        {
            "name": "IMAX 系列",
            "color": "#ffffff",
            "subgroups": [
                { "subtitle": "IMAX GT 3D 雷射 (1.43:1)", "color": "#ffffff", "items": [
                    {"theater": "美麗華大直", "hall": "IMAX", "is4k": true, "isLarge": true, "ratio": "G", "color": "#ff3333"}
                ]},
                { "subtitle": "IMAX 商業雷射 (1.90:1)", "color": "#ffffff", "items": [
                    {"theater": "花蓮威秀", "hall": "IMAX", "is4k": true, "isLarge": true, "ratio": "I", "color": "#38c6ff"},
                    {"theater": "嘉義in89", "hall": "IMAX", "is4k": true, "isLarge": true, "ratio": "I", "color": "#ff7200"}
                ]},
                { "subtitle": "IMAX 雷射 XT (1.90:1)", "color": "#ffffff", "items": [
                    {"theater": "板橋大遠百威秀", "hall": "IMAX", "is4k": true, "isLarge": true, "ratio": "I", "color": "#38c6ff"},
                    {"theater": "新店裕隆城威秀", "hall": "IMAX", "is4k": true, "isLarge": true, "ratio": "I", "color": "#38c6ff"},
                    {"theater": "高雄大遠百威秀", "hall": "IMAX", "is4k": true, "isLarge": false, "ratio": "I", "color": "#38c6ff"}                           
                ]},
                { "subtitle": "IMAX 數位 Xenon (1.90:1)", "color": "#ffffff", "items": [
                    {"theater": "美麗華新台茂", "hall": "IMAX", "is4k": false, "isLarge": true, "ratio": "I", "color": "#ff00b4"},
                    {"theater": "台中大遠百威秀", "hall": "IMAX", "is4k": false, "isLarge": true, "ratio": "I", "color": "#38c6ff"},
                    {"theater": "新竹巨城威秀", "hall": "IMAX", "is4k": false, "isLarge": false, "ratio": "I", "color": "#38c6ff"},
                    {"theater": "台南南紡威秀", "hall": "IMAX", "is4k": false, "isLarge": true, "ratio": "I", "color": "#38c6ff"}
                ]}
            ]
        },
        {
            "name": "DOLBY 系列",
            "color": "#ffffff",
            "subgroups": [
                { "subtitle": "杜比影院 Dolby Cinema", "color": "#ffffff", "items": [
                    {"theater": "桃園青埔新光", "hall": "杜比影院", "is4k": true, "isLarge": true, "ratio": "F", "color": "#00fff0"},
                    {"theater": "美麗華大直", "hall": "杜比影院", "is4k": true, "isLarge": false, "ratio": "T", "color": "#ff3333"}
                ]},
                { "subtitle": "Dolby Vision + Atmos", "color": "#ffffff", "items": [
                    {"theater": "台北大巨蛋秀泰", "hall": "DVA 8廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#ec7fff"},
                    {"theater": "台北大巨蛋秀泰", "hall": "DVA 9廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#ec7fff"}
                ]},
                { "subtitle": "杜比全景聲 Dolby Atmos", "color": "#ffffff", "items": [
                    {"theater": "國賓大戲院", "hall": "(DBOX) 鉅院廳", "is4k": true, "isLarge": true, "ratio": "F", "isMotion": true, "color": "#00ff44"},
                    {"theater": "西門in89", "hall": "COACH", "is4k": true, "isLarge": false, "ratio": "S", "isMotion": false, "color": "#ff7200"},
                    {"theater": "林口昕境國賓", "hall": "(DBOX) 2廳", "is4k": false, "isLarge": false, "ratio": "S", "isMotion": true, "color": "#00ff44"},
                    {"theater": "國家影視廳中心", "hall": "大影格", "is4k": true, "isLarge": false, "ratio": "F", "isMotion": false, "color": "#ffffff"},
                    {"theater": "國家影視廳中心", "hall": "小影格", "is4k": true, "isLarge": false, "ratio": "F", "isMotion": false, "color": "#ffffff"},
                    {"theater": "宜蘭新月影城", "hall": "1廳", "is4k": false, "isLarge": false, "ratio": "S", "isMotion": false, "color": "#ffffff"},
                    {"theater": "桃園青埔新光", "hall": "LUXE廳", "is4k": true, "isLarge": false, "ratio": "S", "isMotion": false, "color": "#00fff0"},
                    {"theater": "桃園八德國賓", "hall": "(DBOX) 2廳", "is4k": true, "isLarge": false, "ratio": "T", "isMotion": true, "color": "#00ff44"},
                    {"theater": "桃園八德國賓", "hall": "(DBOX) 3廳", "is4k": true, "isLarge": false, "ratio": "T", "isMotion": true, "color": "#00ff44"},
                    {"theater": "中壢威尼斯影城", "hall": "7廳", "is4k": true, "isLarge": false, "ratio": "S", "isMotion": false, "color": "#ffffff"},
                    {"theater": "中壢威尼斯影城", "hall": "8廳", "is4k": true, "isLarge": false, "ratio": "S", "isMotion": false, "color": "#ffffff"},
                    {"theater": "竹北百老匯", "hall": "巨幕廳", "is4k": true, "isLarge": false, "ratio": "F", "isMotion": false, "color": "#ffffff"},
                    {"theater": "台中新時代威秀", "hall": "1廳", "is4k": true, "isLarge": false, "ratio": "F", "isMotion": false, "color": "#38c6ff"},
                    {"theater": "台中中港新光", "hall": "LUXE廳", "is4k": true, "isLarge": false, "ratio": "S", "isMotion": false, "color": "#00fff0"},
                    {"theater": "台中中港新光", "hall": "5廳", "is4k": true, "isLarge": false, "ratio": "S", "isMotion": false, "color": "#00fff0"},
                    {"theater": "台中文心秀泰", "hall": "11廳", "is4k": true, "isLarge": false, "ratio": "F", "isMotion": false, "color": "#ec7fff"},
                    {"theater": "台中日日新影城", "hall": "星光廳", "is4k": true, "isLarge": false, "ratio": "F", "isMotion": false, "color": "#ffffff"},
                    {"theater": "彰化員林影城", "hall": "A廳", "is4k": false, "isLarge": false, "ratio": "F", "isMotion": false, "color": "#ffffff"},
                    {"theater": "金門金獅影城", "hall": "A廳", "is4k": true, "isLarge": true, "ratio": "F", "isMotion": false, "color": "#ffffff"},
                    {"theater": "嘉義in89", "hall": "LUXE廳", "is4k": true, "isLarge": true, "ratio": "L", "isMotion": false, "color": "#ff7200"},
                    {"theater": "台南西門新光", "hall": "LUXE廳", "is4k": true, "isLarge": true, "ratio": "S", "isMotion": false, "color": "#00fff0"},
                    {"theater": "高雄台鋁影城", "hall": "1廳", "is4k": false, "isLarge": false, "ratio": "F", "isMotion": false, "color": "#ffffff"},
                    {"theater": "高雄草衙道國賓", "hall": "(DBOX) 9廳", "is4k": false, "isLarge": false, "ratio": "F", "isMotion": true, "color": "#00ff44"},
                    {"theater": "高雄草衙道國賓", "hall": "(DBOX) 10廳", "is4k": false, "isLarge": false, "ratio": "F", "isMotion": true, "color": "#00ff44"}
                ]}
            ]
        },
        {
            "name": "CJ 4DPLEX 系列",
            "color": "#ffffff",
            "subgroups": [
                { "subtitle": "ScreenX", "color": "#ffffff", "items": [
                    {"theater": "台北大巨蛋秀泰", "hall": "2廳 SCREENX", "is4k": true, "isLarge": false, "ratio": "F", "isMotion": false, "color": "#ec7fff"},
                    {"theater": "台北大巨蛋秀泰", "hall": "10廳 SCREENX", "is4k": true, "isLarge": false, "ratio": "F", "isMotion": false, "color": "#ec7fff"},
                    {"theater": "台北欣欣秀泰", "hall": "1廳 SCREENX", "is4k": true, "isLarge": false, "ratio": "S", "isMotion": false, "color": "#ec7fff"},
                    {"theater": "樹林秀泰", "hall": "1廳 SCREENX", "is4k": true, "isLarge": true, "ratio": "F", "isMotion": false, "color": "#ec7fff"},
                    {"theater": "台中站前秀泰", "hall": "1廳 SCREENX", "is4k": true, "isLarge": true, "ratio": "F", "isMotion": false, "color": "#ec7fff"},
                    {"theater": "台中文心秀泰", "hall": "1廳 SCREENX", "is4k": true, "isLarge": true, "ratio": "F", "isMotion": false, "color": "#ec7fff"},
                    {"theater": "嘉義秀泰", "hall": "1廳 SCREENX", "is4k": true, "isLarge": true, "ratio": "F", "isMotion": false, "color": "#ec7fff"},
                    {"theater": "岡山秀泰", "hall": "1廳 SCREENX", "is4k": true, "isLarge": true, "ratio": "F", "isMotion": false, "color": "#ec7fff"},
                    {"theater": "夢時代秀泰", "hall": "12廳 SCREENX", "is4k": true, "isLarge": true, "ratio": "F", "isMotion": false, "color": "#ec7fff"}
                ]},
                { "subtitle": "ULTRA 4DX", "color": "#ffffff", "items": [
                    {"theater": "台北大巨蛋秀泰", "hall": "1廳", "is4k": true, "isLarge": false, "ratio": "F", "isMotion": true, "color": "#ec7fff"},
                    {"theater": "台北大巨蛋秀泰", "hall": "14廳", "is4k": true, "isLarge": false, "ratio": "F", "isMotion": true, "color": "#ec7fff"}
                ]},
                { "subtitle": "4DX", "color": "#ffffff", "items": [
                    {"theater": "台北信義威秀", "hall": "4DX廳", "is4k": false, "isLarge": false, "ratio": "S", "isMotion": true, "color": "#38c6ff"},
                    {"theater": "林口三井威秀", "hall": "4DX廳", "is4k": true, "isLarge": false, "ratio": "F", "isMotion": true, "color": "#38c6ff"},
                    {"theater": "台南大遠百威秀", "hall": "4DX廳", "is4k": false, "isLarge": false, "ratio": "F", "isMotion": true, "color": "#38c6ff"},
                    {"theater": "高雄大遠百威秀", "hall": "4DX廳", "is4k": false, "isLarge": false, "ratio": "F", "isMotion": true, "color": "#38c6ff"}
                ]}
            ]
        },
        {
            "name": "數位 4K 影廳",
            "color": "#ffffff",
            "subgroups": [
                { "subtitle": "一般數位影廳", "color": "#ffffff", "items": [
                    {"theater": "台北松仁威秀", "hall": "泰坦廳", "is4k": true, "isLarge": true, "ratio": "F", "color": "#38c6ff"},
                    {"theater": "台北松仁威秀", "hall": "2廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#38c6ff"},
                    {"theater": "台北松仁威秀", "hall": "3廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#38c6ff"},
                    {"theater": "台北松仁威秀", "hall": "5廳", "is4k": true, "isLarge": false, "ratio": "S", "color": "#38c6ff"},
                    {"theater": "台北松仁威秀", "hall": "7廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#38c6ff"},
                    {"theater": "台北松仁威秀", "hall": "8廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#38c6ff"},
                    {"theater": "台北松仁威秀", "hall": "9廳", "is4k": true, "isLarge": false, "ratio": "S", "color": "#38c6ff"},
                    {"theater": "南港LaLaport威秀", "hall": "6廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#38c6ff"},
                    {"theater": "台北大巨蛋秀泰", "hall": "3廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#ec7fff"},
                    {"theater": "台北大巨蛋秀泰", "hall": "4廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#ec7fff"},
                    {"theater": "台北大巨蛋秀泰", "hall": "5廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#ec7fff"},
                    {"theater": "台北大巨蛋秀泰", "hall": "REMMI 6廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#ec7fff"},
                    {"theater": "台北大巨蛋秀泰", "hall": "7廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#ec7fff"},
                    {"theater": "台北大巨蛋秀泰", "hall": "11廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#ec7fff"},
                    {"theater": "台北大巨蛋秀泰", "hall": "12廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#ec7fff"},
                    {"theater": "台北大巨蛋秀泰", "hall": "13廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#ec7fff"},
                    {"theater": "美麗華大直", "hall": "1廳", "is4k": true, "isLarge": false, "ratio": "S", "color": "#ff3333"},
                    {"theater": "美麗華大直", "hall": "2廳", "is4k": true, "isLarge": false, "ratio": "S", "color": "#ff3333"},
                    {"theater": "美麗華大直", "hall": "5廳", "is4k": true, "isLarge": false, "ratio": "S", "color": "#ff3333"},
                    {"theater": "西門in89", "hall": "LUXE廳", "is4k": true, "isLarge": true, "ratio": "S", "color": "#ff7200"},
                    {"theater": "樂聲影城", "hall": "巨幕廳", "is4k": true, "isLarge": true, "ratio": "U", "color": "#ffffff"},
                    {"theater": "喜樂影城今日店", "hall": "時代廳", "is4k": true, "isLarge": false, "ratio": "S", "color": "#ffffff"},
                    {"theater": "台北長春國賓", "hall": "A廳", "is4k": true, "isLarge": false, "ratio": "S", "color": "#00ff44"},
                    {"theater": "光點華山", "hall": "A One 1廳", "is4k": true, "isLarge": false, "ratio": "S", "color": "#ffffff"},
                    {"theater": "光點華山", "hall": "A Two 2廳", "is4k": true, "isLarge": false, "ratio": "S", "color": "#ffffff"},
                    {"theater": "微風影城", "hall": "A廳", "is4k": true, "isLarge": false, "ratio": "S", "color": "#ffffff"},
                    {"theater": "微風影城", "hall": "B廳", "is4k": true, "isLarge": false, "ratio": "S", "color": "#ffffff"},
                    {"theater": "總督影城", "hall": "總督廳", "is4k": true, "isLarge": false, "ratio": "S", "color": "#ffffff"},
                    {"theater": "新店裕隆城威秀", "hall": "3廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#38c6ff"},
                    {"theater": "新店裕隆城威秀", "hall": "8廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#38c6ff"},
                    {"theater": "新店裕隆城威秀", "hall": "11廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#38c6ff"},
                    {"theater": "林口三井威秀", "hall": "2廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#38c6ff"},
                    {"theater": "林口三井威秀", "hall": "3廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#38c6ff"},
                    {"theater": "林口三井威秀", "hall": "5廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#38c6ff"},
                    {"theater": "林口三井威秀", "hall": "6廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#38c6ff"},
                    {"theater": "林口三井威秀", "hall": "7廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#38c6ff"},
                    {"theater": "林口三井威秀", "hall": "8廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#38c6ff"},
                    {"theater": "林口三井威秀", "hall": "9廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#38c6ff"},
                    {"theater": "林口三井威秀", "hall": "(Mappa) 10廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#38c6ff"},
                    {"theater": "天台影城", "hall": "1廳", "is4k": true, "isLarge": false, "ratio": "S", "color": "#ffffff"},
                    {"theater": "天台影城", "hall": "2廳", "is4k": true, "isLarge": false, "ratio": "S", "color": "#ffffff"},
                    {"theater": "天台影城", "hall": "3廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#ffffff"},
                    {"theater": "天台影城", "hall": "5廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#ffffff"},
                    {"theater": "天台影城", "hall": "6廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#ffffff"},
                    {"theater": "桃園青埔新光", "hall": "5廳", "is4k": true, "isLarge": false, "ratio": "S", "color": "#00fff0"},
                    {"theater": "桃園青埔新光", "hall": "6廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#00fff0"},
                    {"theater": "桃園青埔新光", "hall": "7廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#00fff0"},
                    {"theater": "桃園青埔新光", "hall": "8廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#00fff0"},
                    {"theater": "桃園青埔新光", "hall": "9廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#00fff0"},
                    {"theater": "桃園青埔新光", "hall": "11廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#00fff0"},
                    {"theater": "桃園青埔新光", "hall": "12廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#00fff0"},
                    {"theater": "桃園青埔新光", "hall": "ACG廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#00fff0"},
                    {"theater": "桃園青埔新光", "hall": "SEALY 席伊麗廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#00fff0"},
                    {"theater": "桃園青埔新光", "hall": "OSIM 天王廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#00fff0"},
                    {"theater": "桃園光影文化館", "hall": "放映廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#ffffff"},
                    {"theater": "新竹影像博物館", "hall": "放映大廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#ffffff"},
                    {"theater": "台中老虎城威秀", "hall": "泰坦廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#38c6ff"},
                    {"theater": "台中新時代威秀", "hall": "2廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#38c6ff"},
                    {"theater": "台中中港新光", "hall": "2廳", "is4k": true, "isLarge": false, "ratio": "S", "color": "#00fff0"},
                    {"theater": "台中日日新影城", "hall": "至尊廳", "is4k": true, "isLarge": true, "ratio": "S", "color": "#ffffff"},
                    {"theater": "台中親親影城", "hall": "1廳", "is4k": true, "isLarge": false, "ratio": "S", "color": "#ffffff"},
                    {"theater": "清水時代影城", "hall": "C廳", "is4k": true, "isLarge": false, "ratio": "S", "color": "#ffffff"},
                    {"theater": "南投戲院", "hall": "B廳", "is4k": true, "isLarge": false, "ratio": "S", "color": "#ffffff"},
                    {"theater": "台南西門新光", "hall": "2廳", "is4k": true, "isLarge": false, "ratio": "S", "color": "#00fff0"},
                    {"theater": "台南西門新光", "hall": "6廳", "is4k": true, "isLarge": false, "ratio": "S", "color": "#00fff0"},
                    {"theater": "南台影城", "hall": "5廳", "is4k": true, "isLarge": false, "ratio": "S", "color": "#ffffff"},
                    {"theater": "南台影城", "hall": "8廳", "is4k": true, "isLarge": false, "ratio": "F", "color": "#ffffff"},
                    {"theater": "高雄夢時代秀泰", "hall": "寬巨幕廳", "is4k": true, "isLarge": true, "ratio": "S", "color": "#ec7fff"},
                    {"theater": "內惟藝術中心", "hall": "Reel one 1廳", "is4k": true, "isLarge": false, "ratio": "S", "color": "#ffffff"},
                    {"theater": "內惟藝術中心", "hall": "Reel two 2廳", "is4k": true, "isLarge": false, "ratio": "S", "color": "#ffffff"}
                ]}
            ]
        },
        {
            "name": "MEDIA MATION",
            "color": "#ffffff",
            "subgroups": [
                { "subtitle": "MX4D", "color": "#ffffff", "items": [
                    {"theater": "台中中港新光", "hall": "(Atmos) MX4D", "is4k": false, "isLarge": false, "ratio": "S", "isMotion": true, "color": "#00fff0"},
                    {"theater": "嘉義in89", "hall": "MX4D", "is4k": false, "isLarge": false, "ratio": "S", "isMotion": true, "color": "#ff7200"}
                ]}
            ]
        },
        {
            "name": "D-BOX Technologies",
            "color": "#ffffff",
            "subgroups": [
                { "subtitle": "D-BOX", "color": "#ffffff", "items": [
                    {"theater": "高雄義大國賓", "hall": "1廳", "is4k": false, "isLarge": false, "ratio": "S", "isMotion": true, "color": "#00ff44"},
                    {"theater": "屏東環球國賓", "hall": "1廳", "is4k": false, "isLarge": false, "ratio": "F", "isMotion": true, "color": "#00ff44"}
                ]}
            ]
        }
    ],
    "ratios": [
        {"label": "G=1.43", "desc": "原生巨幕"},
        {"label": "F=1.85", "desc": "全高比例"},
        {"label": "I=1.9", "desc": "數位比例"},
        {"label": "L=1.95", "desc": "LUXE 比例"},
        {"label": "U=2.0", "desc": "特殊比例"},
        {"label": "S=2.35~2.39", "desc": "寬螢幕比例"},
        {"label": "T=2.1~2.2", "desc": "特殊比例"}
    ]
};

const sortOrder = ["IMAX 系列", "DOLBY 系列", "CJ 4DPLEX 系列", "數位 4K 影廳", "MEDIA MATION", "D-BOX Technologies"];