async function navbarFunction(){
    const container = document.getElementById("navbar");
    if(!container)
        return;
    try{
        const response = await fetch("/components/navbar/navbar.html");
        const html = await response.text();
        container.innerHTML = html;
    }catch(err){
        console.error("Failed to load navbar:", err);
    }
}
document.addEventListener("DOMContentLoaded", navbarFunction);

document.addEventListener('change', (e) => {
    if (e.target.name === 'theme') {
        const theme = e.target.value;
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('selected-theme', theme);
    }
});