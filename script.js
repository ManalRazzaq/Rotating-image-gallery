const imageConElem = document.querySelector('.image-container');
const prevEl = document.getElementById('previous');
const nextEl = document.getElementById('next');

let x = 0;
let timer;

prevEl.addEventListener('click' , ()=>{
x = x + 45;
clearTimeout(timer);
updateGalleryImages();
})
nextEl.addEventListener('click' , ()=>{
    x = x - 45;
    clearTimeout(timer);
    updateGalleryImages();
    })

const updateGalleryImages =() =>{
    imageConElem.style.transform = `perspective(1000px) rotateY(${x}deg)`;
   timer = setTimeout(() => {
        x = x - 45;
        updateGalleryImages();
    }, 3000);
}

updateGalleryImages();