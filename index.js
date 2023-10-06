const logo = document.getElementById("logo");
const list = document.getElementsByClassName("list");
const title = document.getElementById("big_title");
const video = document.getElementById("video");
const descr = document.getElementById("About");

function changeColorAndSize() {
    const scroll = window.scrollY;
    const height = document.body.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollMax = height - windowHeight;
    const ratio = scroll / scrollMax;
    
    // Change logo color et list color pour fair un degrade de couleur entre 60,61,108 et 248, 161, 170  au scroll
    const color = "rgb(" + (60 + (188 * ratio)) + "," + (61 + (100 * ratio)) + "," + (108 + (62 * ratio)) + ")";
    logo.style.color = color;
    for (let i = 0; i < list.length; i++) {
        list[i].style.color = color;
        title.style.color = color;
    }

    // Adjust the font size of the title
    const titleSize = 100 - (400 * ratio);
    title.style.fontSize = titleSize + "px";
}

window.addEventListener("scroll", changeColorAndSize);



//start video when she is on middle of the screen

function playVideo() {
    const scroll = window.scrollY;
    const height = document.body.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollMax = height - windowHeight;
    const ratio = scroll / scrollMax;

    if (ratio > 0.5) {
        video.play();
    }else{
        video.pause();
    }
}

window.addEventListener("scroll", playVideo);

