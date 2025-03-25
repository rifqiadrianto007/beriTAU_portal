const newsData = [
    { title: "Teknologi AI Makin Canggih", category: "Teknologi", image: "https://source.unsplash.com/120x80/?technology", content: "Teknologi kecerdasan buatan semakin berkembang pesat di berbagai bidang..." },
    { title: "Timnas Indonesia Menang 3-0", category: "Olahraga", image: "https://source.unsplash.com/120x80/?football", content: "Timnas Indonesia berhasil memenangkan pertandingan dengan skor telak..." },
    { title: "Investasi Saham Naik Tajam", category: "Bisnis", image: "https://source.unsplash.com/120x80/?business", content: "Bursa saham mengalami kenaikan tajam di awal bulan ini..." },
    { title: "Film Baru yang Wajib Ditonton", category: "Hiburan", image: "https://source.unsplash.com/120x80/?movie", content: "Film terbaru ini mendapat ulasan positif dari banyak kritikus..." }
];

function renderNews(newsList) {
    const container = document.getElementById("news-container");
    container.innerHTML = "";
    newsList.forEach(news => {
        const newsItem = document.createElement("div");
        newsItem.classList.add("news-item");
        newsItem.innerHTML = `
            <img src="${news.image}" alt="${news.title}">
            <div class="news-content">
                <h2>${news.title}</h2>
                <p>${news.content}</p>
                <a href="#" class="read-more">Read More</a>
            </div>
        `;
        container.appendChild(newsItem);
    });
}

document.getElementById("search").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const filteredNews = newsData.filter(news => news.title.toLowerCase().includes(query));
    renderNews(filteredNews);
});

renderNews(newsData);
