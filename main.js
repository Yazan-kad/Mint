const fade = () => {
    const wrapper = 
    document.querySelector('.wrapper');
    wrapper.classList.add('fade')
}

window.addEventListener('load', fade)


let navbar = document.querySelectorAll('.nav-link');

const changeActiveItem = () => {
   navbar.forEach(item => {
    item.classList.remove('active');
   })
}
navbar.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
    })
})

let workitem = document.querySelectorAll('.left ul li');

const changeActiveBtn = () => {
    workitem.forEach(item => {
        item.classList.remove('main-btn')
    })
}
workitem.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveBtn();
        item.classList.add('main-btn');
    })
})

let span = document.querySelector('.up');

window.onscroll = () => {
    this.scrollY >= 700 ?  span.classList.add("show") : span.classList.remove("show");
}
span.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}




let switcher = document.querySelectorAll('.switcher li');
let imgs = document.querySelectorAll('.box img');
 
switcher.forEach((li) => {
    li.addEventListener("click", manageImgs);
});
function manageImgs() {
    imgs.forEach((img) => {
        img.style.display = "none";
        });
        document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display = "block";
        });
}
