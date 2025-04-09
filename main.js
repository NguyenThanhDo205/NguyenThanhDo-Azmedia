// Slide show 
let slide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

function nextSlide() {
    slide = (slide + 1) % slides.length;
    showSlide(slide);
}
setInterval(nextSlide, 2000);


// Đô xuốngk hi nhấp vào 
function toggleContent(wrapperId) {
    let contentWrapper = document.getElementById(wrapperId);
    if (contentWrapper.style.maxHeight === "0px") {
        contentWrapper.style.maxHeight = contentWrapper.scrollHeight + "px";
    } else {
        contentWrapper.style.maxHeight = "0px";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let wrappers = [
        "contentWrapper0",
        "contentWrapper1", 
        "contentWrapper2", 
        "contentWrapper3",
        "contentWrapper4", 
        "contentWrapper5"
    
    ];

    wrappers.forEach(wrapperId => {
        let contentWrapper = document.getElementById(wrapperId);
        contentWrapper.style.maxHeight = contentWrapper.scrollHeight + "px";
    });
});


//khi nhấp vào tiêu đề
function content() {
    toggleContent("contentWrapper0");
}

function content1() {
    toggleContent("contentWrapper1");
}

function content2() {
    toggleContent("contentWrapper2");
}

function content3() {
    toggleContent("contentWrapper3");
}

function content4() {
    toggleContent("contentWrapper4");
}

function content5() {
    toggleContent("contentWrapper5");
}


// Khi nhấp vào tiêu đề 
document.querySelectorAll('.question-card h3').forEach((question) => {
    question.addEventListener('click', () => {
        const answerBox = question.nextElementSibling;
        answerBox.classList.toggle('show');
    });
});

// click menu humburger 
function toggleMenu() {
    const menu = document.getElementById("nav-links");
    menu.classList.toggle("active");
    
}

// Click menu humburger ngoài 
document.addEventListener("click", function(event) {
    const menu = document.getElementById("nav-links");
    const hamburger = document.querySelector(".hamburger");

    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove("active");
    }
});


// cuộn trang 
let scrollTop = 0;
const navbar = document.querySelector('.navbar');
const header = document.querySelector('header');
const navbarPlaceholder = document.getElementById('navbarPlaceholder');
const headerHeight = 50;

window.addEventListener('scroll', function() {
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollTop > headerHeight) {
        navbar.classList.add('fixed');
        navbarPlaceholder.classList.add('active');
    } else {
        // Ở vị trí đầu
        navbar.classList.remove('fixed');
        navbarPlaceholder.classList.remove('active');
    }

    // Ẩn/hiện header
    if (currentScrollTop > scrollTop) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
    scrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
});

scrollToTop.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Cuộn mượt mà
    });
});