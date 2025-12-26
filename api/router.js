const routes = {
    '': { path: 'pages/home.html', title: 'Bits Per Logic' },
    '#/': { path: 'pages/home.html', title: 'Bits Per Logic' },
    '#/about': { path: 'pages/about.html', title: 'Bits Per Logic - About' },
    '#/contact': { path: 'pages/contact.html', title: 'Bits Per Logic - Contact' },
    '#/blog': { path: 'pages/blog.html', title: 'Bits Per Logic - Blog' }
};

async function handleRouting() {
    const hash = window.location.hash || '#/';
    const route = routes[hash] || { path: 'pages/404.html', title: '404' };
    document.title = route.title;

    try {
        const response = await fetch(route.path);
        const html = await response.text();
        const root = document.getElementById('root');
        
        if (root) {
            root.innerHTML = html;
            window.scrollTo(0, 0);
            autoInitComponents();
        }
    } catch (err) {
        console.error("Routing error:", err);
    }
}

function autoInitComponents() {
    if (document.getElementById('hero') && typeof heroFunction === 'function') {
        heroFunction();
    }
    // Add more component initializations here if needed in the future
}

window.addEventListener('hashchange', handleRouting);
window.addEventListener('click', (e) => {
    const anchor = e.target.closest('a');
    if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('/') && !href.startsWith('//')) {
            e.preventDefault();
            window.location.hash = '#' + href;
        }
    }
});
document.addEventListener('DOMContentLoaded', handleRouting);