// scripts .js
// 第一層：監聽 DOM 內容載入事件
// 第二層：選取所有行政區
// 第三層：將每個區域添加滑鼠事件監聽器
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM content loaded.");

    // 選取 SVG 所有行政區
    let districts = document.querySelectorAll("#Taipei-Map .district");
    console.log("District of selected.", districts);

    // 行政區頁面路徑
    const districtPages = {
        "Wenshan": "District/Wenshan.html",
        "Xinyi": "District/Xinyi.html",
        "Daan": "District/Daan.html",
        "Zhongzheng": "District/Zhongzheng.html",
        "Wanhua": "District/Wanhua.html",
        "Nangang": "District/Nangang.html",
        "Neihu": "District/Neihu.html",
        "Songshan": "District/Songshan.html",
        "Zhongshan": "District/Zhongshan.html",
        "Datong": "District/Datong.html",
        "Shilin": "District/Shilin.html",
        "Beitou": "District/Beitou.html"
        // 檢查確認所有行政區的 SVG ID 與 Key 以及 District 路徑內的檔名完全一致
    };

    districts.forEach(function(district){

        //  行政區域點擊事件
        district.addEventListener("click", function(){
            let districtId = district.id;
            console.log("District of clicked.", districtId);
            
             // 根據區域 id 跳轉到指定頁面
            let targetUrl = districtPages[districtId];      // 查找對應的 URL

            if (targetUrl) {
                console.log("Navigating to:", targetUrl);
                window.open(targetUrl, '_blank');          // 開啟新分頁進入頁面
                // 直接跳轉頁面
                // window.location.href = targetUrl;
            } else {
                console.warn(`路徑未定義於 districtPages 物件中的ID: ${districtId}`);
                // 錯誤處理或設定預設行為
            }
        });
    });
});