document.getElementById("search").addEventListener("input", debounce(function () {
    let query = this.value.trim().toLowerCase();
    let newsItems = document.querySelectorAll(".news-item");

    newsItems.forEach(item => {
        let text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? "flex" : "none";
    });
}, 300));

function debounce(func, delay) {
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, arguments), delay);
    };
}
