// displays navbar when clicked on menu-btn and removes everything else
document.querySelector("#menu-btn").onclick = () => {
    document.querySelector('.navbar').classList.toggle('active');
    document.querySelector('.cart-items-container').classList.remove('active');
    document.querySelector('.search-form').classList.remove('active');
};
// displays cart when clicked on it and removes everything else
document.querySelector("#cart-btn").onclick = () => {
    document.querySelector('.cart-items-container').classList.toggle('active');
    document.querySelector('.navbar').classList.remove('active');
    document.querySelector('.search-form').classList.remove('active');
};
// displays search when clicked on it and removes everything else
document.querySelector("#search-btn").onclick = () => {
    document.querySelector('.search-form').classList.toggle('active');
    document.querySelector('.navbar').classList.remove('active');
    document.querySelector('.cart-items-container').classList.remove('active');
};
window.onscroll = () =>{
    document.querySelector('.navbar').classList.remove('active');
    document.querySelector('.cart-items-container').classList.remove('active');
    document.querySelector('.search-form').classList.remove('active');
}