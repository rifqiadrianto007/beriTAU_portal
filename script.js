document.getElementById("search").addEventListener("input", function() {
    let query = this.value.toLowerCase();
    let newsItems = document.querySelectorAll(".news-item");
    newsItems.forEach(item => {
        let text = item.textContent.toLowerCase();
        if (text.includes(query)) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });
});