function initTheme() {
    const themeInputs = document.querySelectorAll('input[name="theme"]');
    
    themeInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            const selectedTheme = e.target.value;
            document.body.setAttribute('data-theme', selectedTheme);
            localStorage.setItem('theme', selectedTheme);
        });
    });
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
    document.getElementById(`${savedTheme}-theme`).checked = true;
}
document.addEventListener('DOMContentLoaded', initTheme);