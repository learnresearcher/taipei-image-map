// scripts .js
// 第一層：監聽 DOM 內容載入事件
// 第二層：選取所有行政區
// 第三層：將每個區域添加滑鼠事件監聽器
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM content loaded.");

    // 選取 SVG 所有次分區
    let subdistricts = document.querySelectorAll("#District-Map .subdistrict");
    console.log("Subdistrict of selected.", subdistricts);

    // 行政區頁面路徑
    const subdistrictPages = {
        // Shilin
        "Yangmingshan-Shilin": "../Subdistrict/Shilin/Yangmingshan-Shilin.html",
        "Tianmu": "../Subdistrict/Shilin/Tianmu.html",
        "Zhishanyan": "../Subdistrict/Shilin/Zhishanyan.html",
        "Lanya": "../Subdistrict/Shilin/Lanya.html",
        "Jieshang": "../Subdistrict/Shilin/Jieshang.html",
        "Hougang": "../Subdistrict/Shilin/Hougang.html",
        "Shezi": "../Subdistrict/Shilin/Shezi.html",
        // Beitou
        "Yangmingshan-Beitou": "../Subdistrict/Beitou/Yangmingshan-Beitou.html",
        "Guandu": "../Subdistrict/Beitou/Guandu.html",
        "Shipai": "../Subdistrict/Beitou/Shipai.html",
        "Qilian": "../Subdistrict/Beitou/Qilian.html",
        "Datun": "../Subdistrict/Beitou/Datun.html",
        "Jiubeitou": "../Subdistrict/Beitou/Jiubeitou.html",
        "Xinbeitou": "../Subdistrict/Beitou/Xinbeitou.html",
        
        // Daan
        "Xinsheng": "../Subdistrict/Daan/Xinsheng.html",
        "Dunnan": "../Subdistrict/Daan/Dunnan.html",
        "Anhe": "../Subdistrict/Daan/Anhe.html",
        "Heping": "../Subdistrict/Daan/Heping.html",
        "Xuefu": "../Subdistrict/Daan/Xuefu.html",
        "Wolong": "../Subdistrict/Daan/Wolong.html",
        "Ruian": "../Subdistrict/Daan/Ruian.html",

        // Datong
        "Lanzhou": "../Subdistrict/Datong/Lanzhou.html",
        "Dalong": "../Subdistrict/Datong/Dalong.html",
        "Yanping": "../Subdistrict/Datong/Yanping.html",
        "Jiancheng": "../Subdistrict/Datong/Jiancheng.html",

        // Nangang
        "Zhongyan": "../Subdistrict/Nangang/Zhongyan.html",
        "Sanchongpu": "../Subdistrict/Nangang/Sanchongpu.html",
        "Xinzhuangzi": "../Subdistrict/Nangang/Xinzhuangzi.html",
        "Houshanpo": "../Subdistrict/Nangang/Houshanpo.html",

        // Neihu
        "Xihu": "../Subdistrict/Neihu/Xihu.html",
        "Donghu": "../Subdistrict/Neihu/Donghu.html",
        "Jinlong": "../Subdistrict/Neihu/Jinlong.html",
        "Ziyang": "../Subdistrict/Neihu/Ziyang.html",
        "Wanzai": "../Subdistrict/Neihu/Wanzai.html",
        "Zhouwei": "../Subdistrict/Neihu/Zhouwei.html",

        // Songshan
        "Sanmin": "../Subdistrict/Songshan/Sanmin.html",
        "Dongshe": "../Subdistrict/Songshan/Dongshe.html",
        "Zhonglun": "../Subdistrict/Songshan/Zhonglun.html",
        "Benjian": "../Subdistrict/Songshan/Benjian.html",

        // Wanhua
        "Ximen": "../Subdistrict/Wanhua/Ximen.html",
        "Longshan": "../Subdistrict/Wanhua/Longshan.html",
        "Dali": "../Subdistrict/Wanhua/Dali.html",
        "Qingnian": "../Subdistrict/Wanhua/Qingnian.html",
        "Dongyuan": "../Subdistrict/Wanhua/Dongyuan.html",
        "Xiyuan": "../Subdistrict/Wanhua/Xiyuan.html",

        // Wenshan
        "Muzha": "../Subdistrict/Wenshan/Muzha.html",
        "Jingmei": "../Subdistrict/Wenshan/Jingmei.html",
        "Wanfang": "../Subdistrict/Wenshan/Wanfang.html",
        "Xinglong": "../Subdistrict/Wenshan/Xinglong.html",
        "Ergeshan": "../Subdistrict/Wenshan/Ergeshan.html",

        // Xinyi
        "Sanzhangli": "../Subdistrict/Xinyi/Sanzhangli.html",
        "Wufenpu": "../Subdistrict/Xinyi/Wufenpu.html",
        "Fude": "../Subdistrict/Xinyi/Fude.html",
        "Wuxing": "../Subdistrict/Xinyi/Wuxing.html",
        "Liuzhangli": "../Subdistrict/Xinyi/Liuzhangli.html",

        // Zhongshan
        "Dazhi": "../Subdistrict/Zhongshan/Dazhi.html",
        "Yuanshan": "../Subdistrict/Zhongshan/Yuanshan.html",
        "Linsen": "../Subdistrict/Zhongshan/Linsen.html",
        "Zhucelun": "../Subdistrict/Zhongshan/Zhucelun.html",
        "Changchun": "../Subdistrict/Zhongshan/Changchun.html",
        "Xinzhuang": "../Subdistrict/Zhongshan/Xinzhuang.html",
        "Xiapitou": "../Subdistrict/Zhongshan/Xiapitou.html",

        // Zhongzheng
        "Gongguan": "../Subdistrict/Zhongzheng/Gongguan.html",
        "Guting": "../Subdistrict/Zhongzheng/Guting.html",
        "Dongmen": "../Subdistrict/Zhongzheng/Dongmen.html",
        "Nanmen": "../Subdistrict/Zhongzheng/Nanmen.html",
        "Chengnei": "../Subdistrict/Zhongzheng/Chengnei.html",
        "Kanding": "../Subdistrict/Zhongzheng/Kanding.html"

        // "": "../Subdistrict/#/.html"
        // 檢查確認所有行政區的 SVG ID 與 Key 以及 subdistrict 路徑內的檔名完全一致
    };

    subdistricts.forEach(function(subdistrict){

        //  行政區域點擊事件
        subdistrict.addEventListener("click", function(){
            let subdistrictId = subdistrict.id;
            console.log("Subdistrict of clicked.", subdistrictId);
            
         // 根據區域 id 跳轉到指定頁面
            let targetUrl = subdistrictPages[subdistrictId];      // 查找對應的 URL

            if (targetUrl) {
                console.log("Navigating to:", targetUrl);
                window.open(targetUrl, '_blank');          // 開啟新分頁進入頁面
                // 直接跳轉頁面
                // window.location.href = targetUrl;
            } else {
                console.warn(`路徑未定義於 districtPages 物件中的ID: ${subdistrictId}`);
                // 錯誤處理或設定預設行為
            }
        });
    });
});