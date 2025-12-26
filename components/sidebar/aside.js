async function asideFunction() {
    const container = document.getElementById("aside-placeholder");
    if (!container) return;
    try {
        const response = await fetch('/components/sidebar/aside.html');
        const html = await response.text();
        container.innerHTML = html;
        initAside();
    } catch (err) {
        console.error(err);
    }
}

function initAside() {
    const toggleBtn = document.getElementById('aside-toggle');
    const sidebar = document.querySelector('aside');
    const root = document.getElementById('root');
    if (!sidebar) return;

    const setCollapsed = (collapsed) => {
        if (collapsed) {
            sidebar.classList.add('collapsed');
            if (root) root.classList.add('expanded');
        } else {
            sidebar.classList.remove('collapsed');
            if (root) root.classList.remove('expanded');
        }
        localStorage.setItem('aside-collapsed', collapsed);
    };

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const isCollapsed = sidebar.classList.toggle('collapsed');
            if (root) root.classList.toggle('expanded');
            localStorage.setItem('aside-collapsed', isCollapsed);
        });
    }

    const saved = localStorage.getItem('aside-collapsed');
    if (saved !== null) setCollapsed(saved === 'true');
}

document.addEventListener('DOMContentLoaded', asideFunction);