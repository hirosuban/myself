async function fetchZennArticles() {
    const username = 'kannna5296';
    const cacheKey = `zenn_articles_${username}`;
    const cacheTimeKey = `zenn_articles_time_${username}`;
    const cacheDuration = 60 * 60 * 1000; // 1時間（ミリ秒）

    const container = document.getElementById('zenn-articles');

    // キャッシュをチェック
    const cachedData = localStorage.getItem(cacheKey);
    const cachedTime = localStorage.getItem(cacheTimeKey);
    const now = new Date().getTime();

    if (cachedData && cachedTime && (now - parseInt(cachedTime)) < cacheDuration) {
        displayArticles(JSON.parse(cachedData));
        return;
    }

    // APIから取得
    const rssUrl = `https://zenn.dev/${username}/feed`;
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === 'ok' && data.items.length > 0) {
            const articles = data.items.slice(0, 3);

            localStorage.setItem(cacheKey, JSON.stringify(articles));
            localStorage.setItem(cacheTimeKey, now.toString());

            displayArticles(articles);
        } else {
            container.innerHTML = '<div class="error-text">記事を取得できませんでした</div>';
        }
    } catch (error) {
        console.error('記事取得エラー:', error);
        container.innerHTML = '<div class="error-text">記事の読み込みに失敗しました</div>';
    }
}

function displayArticles(articles) {
    const container = document.getElementById('zenn-articles');
    container.innerHTML = '';

    // 最新記事からの経過日数を計算
    if (articles.length > 0) {
        const latestArticleDate = new Date(articles[0].pubDate);
        const today = new Date();
        const diffDays = Math.floor((today - latestArticleDate) / (1000 * 60 * 60 * 24));

        const daysSinceElement = document.getElementById('days-since-post');
        if (diffDays > 0) {
            daysSinceElement.innerHTML = `投稿を（<span class="days-number">${diffDays}</span>日サボっています）`;
        } else {
            daysSinceElement.textContent = '（今日投稿！）';
        }
        daysSinceElement.style.display = 'inline';
    }

    articles.forEach(article => {
        const date = new Date(article.pubDate).toLocaleDateString('ja-JP', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });

        const link = document.createElement('a');
        link.href = article.link;
        link.target = '_blank';
        link.className = 'article-card';

        const dateSpan = document.createElement('span');
        dateSpan.className = 'article-date';
        dateSpan.textContent = date;

        const titleSpan = document.createElement('span');
        titleSpan.className = 'article-title';
        titleSpan.textContent = article.title;

        const arrowSpan = document.createElement('span');
        arrowSpan.className = 'article-arrow';
        arrowSpan.textContent = '↗';

        link.appendChild(dateSpan);
        link.appendChild(titleSpan);
        link.appendChild(arrowSpan);
        container.appendChild(link);
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fetchZennArticles);
} else {
    fetchZennArticles();
}
