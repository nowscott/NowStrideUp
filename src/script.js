window.onload = function () {
    fetch('../README.md')
        .then(response => response.text())
        .then(text => {
            const tocStart = text.indexOf('### 目录');
            let tocEnd = text.indexOf('###', tocStart + 1);
            tocEnd = tocEnd === -1 ? text.length : tocEnd;
            const tocText = text.substring(tocStart, tocEnd);
            const htmlContent = marked.parse(tocText);
            const tableOfContents = document.getElementById('tableOfContents');
            tableOfContents.innerHTML = htmlContent;

            // 添加事件监听器到目录中的所有链接
            const links = tableOfContents.getElementsByTagName('a');
            Array.from(links).forEach(function (link) {
                // 在 src/script.js 中添加的点击事件处理器
                link.addEventListener('click', function (event) {
                    event.preventDefault();
                    const url = link.getAttribute('href');
                    window.location.href = '../src/viewer.html?file=' + encodeURIComponent(url); // 在同一标签页打开
                });
            });
        })
        .catch(err => console.error('Failed to fetch README.md:', err));
};
