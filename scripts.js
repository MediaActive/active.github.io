function showTab(tabId) {
    // Tüm sekmeleri gizle
    var tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });

    // Seçili sekmeyi göster
    var selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active');
}
