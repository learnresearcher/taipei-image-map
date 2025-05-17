document.addEventListener("DOMContentLoaded", function() {
    const hamburgerBtn = document.querySelector('.hamburger-btn');      // 選取漢堡按鈕
    const menuDropdown = document.querySelector('#navbar .menu-dropdown');  // 選取下拉選單容器
    const carousel = document.querySelector('.Carousel'); // 獲取幻燈片元素

    if (hamburgerBtn && menuDropdown) {                     // 確認元素都存在
        hamburgerBtn.addEventListener('click', function() { //監聽漢堡按鈕點擊
            const isExpanded = this.getAttribute('aria-expanded') === 'true' || false;        //獲取 aria-expanded 狀態
            this.setAttribute('aria-expanded', !isExpanded);                            //切換 aria-expanded 狀態
            this.classList.toggle('active');                        // 用於漢堡按鈕變 X 的動畫
            menuDropdown.classList.toggle('open');                 // 切換下拉選單的 .open class (觸發 CSS max-height 動畫)
        });
    }

    // 點擊選單項目後自動收合選單 (可選)
    const menuLinks = document.querySelectorAll('#navbar .menu-dropdown ul li a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 800) { // 只在移動版視圖作用
                if (hamburgerBtn && menuDropdown) {
                    hamburgerBtn.setAttribute('aria-expanded', 'false');
                    hamburgerBtn.classList.remove('active');
                    menuDropdown.classList.remove('open');
                }
            }  
        });
    });
});