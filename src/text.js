window.MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        packages: {'[+]': ['ams']}
    },
    svg: {
        fontCache: 'global'
    },
    startup: {
        ready: () => {
            console.log('MathJax is ready');
            MathJax.startup.defaultReady();
            loadMarkdown();
        }
    }
};

function protectMath(text) {
    return text.replace(/\$\$(.+?)\$\$/gs, function(match, p1) {
        return `$$${encodeURIComponent(p1)}$$`;
    }).replace(/\\\((.+?)\\\)/gs, function(match, p1) {
        return `\\(${encodeURIComponent(p1)}\\)`;
    });
}

function restoreMath(html) {
    return html.replace(/\$\$(.+?)\$\$/gs, function(match, p1) {
        return `$$${decodeURIComponent(p1)}$$`;
    }).replace(/\\\((.+?)\\\)/gs, function(match, p1) {
        return `\\(${decodeURIComponent(p1)}\\)`;
    });
}

function loadMarkdown() {
    const query = new URLSearchParams(window.location.search);
    const path = query.get('file');
    if (path) {
        fetch('../' + path)
            .then(response => response.text())
            .then(text => {
                const filenameElement = document.getElementById('filename');
                const contentElement = document.getElementById('content');
                if (!contentElement || !filenameElement) {
                    console.error('Element not found');
                    return;
                }

                const protectedText = protectMath(text);
                const html = marked.parse(protectedText);
                const finalHtml = restoreMath(html);

                filenameElement.textContent = decodeURIComponent(path.split('/').pop().replace(/\.md$/, ''));
                document.title = filename;
                contentElement.innerHTML = finalHtml;
                Prism.highlightAll();
                MathJax.typesetPromise().then(() => {
                    console.log('MathJax has typeset the content');
                }).catch(err => console.error('MathJax typesetting error:', err));
            })
            .catch(err => {
                console.error('Failed to load or process markdown file:', err);
            });
    } else {
        console.error('No file specified in the URL query parameters');
    }
}
