// ------------ Carrousel ---------------------------------------
let index = 0;
const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".element");
const image = document.querySelectorAll(".element img");
const totalSlides = slides.length;

function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    index = (index + 1) % totalSlides;
    updateCarousel();

}
carousel.addEventListener('mouseenter', stopSlide);
carousel.addEventListener('mouseleave', startSlide);

document.querySelector('.btnNext').addEventListener('click', () => {
    nextSlide();
    resetSlide();
})

document.querySelector('.btnPrev').addEventListener('click', () => {
    index = (index - 1 + totalSlides) % totalSlides;
    updateCarousel();
    resetSlide();
})

function startSlide() {
    timer = setInterval(nextSlide, 3000);
}
function stopSlide() {
    clearInterval(timer);
}
function resetSlide() {
    stopSlide();
    startSlide();
}
startSlide();

// Animation navbar

const sections = document.querySelectorAll("section:not(#nosProduits)");
const a = Array.from(document.querySelectorAll("nav>ul>li>a"));
let pos = 0;
let observer = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
        if (e.isIntersecting)
        {
            a.find((elem)=>elem.hash ===`#${e.target.id}`).classList.remove("inactive");
            a.find((elem)=>elem.hash ===`#${e.target.id}`).classList.add("active");
        }
        else
        {
            a.find((elem)=>elem.hash ===`#${e.target.id}`).classList.remove("active");
            a.find((elem)=>elem.hash ===`#${e.target.id}`).classList.add("inactive");
        }
        
    });
}, { threshold: .9});
let observer2 = new IntersectionObserver(entries=>{
    if (entries[0].isIntersecting)
        {
            a.find((elem)=>elem.hash ===`#nosProduits`).classList.remove("inactive");
            a.find((elem)=>elem.hash ===`#nosProduits`).classList.add("active");
        }
        else
        {
            a.find((elem)=>elem.hash ===`#nosProduits`).classList.remove("active");
            a.find((elem)=>elem.hash ===`#nosProduits`).classList.add("inactive");
        } 
}, { threshold: 0.2});
sections.forEach(e=>observer.observe(e));
observer2.observe(document.querySelector("#nosProduits"));
