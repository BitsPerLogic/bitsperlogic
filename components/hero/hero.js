async function heroFunction() {
    const container = document.getElementById("hero");
    if (!container) return;
    try {
        const response = await fetch("/components/hero/hero.html");
        const html = await response.text();
        container.innerHTML = html;
    } catch (err) {
        console.error("Hero load failed:", err);
    }
}