var mHeroSection = document.getElementById("hero-section");
var mHeroTitle = document.getElementById("hero-section-title");
var mHeroParag = document.getElementById("hero-section-text");
var mHeroSectionPoints = document.getElementsByClassName("hero-section-label");

var heroSectionData = [
  {
    id: 1,
    image: "../Imgs/muaythaiHero.jpg",
    title: "مواي تاي ",
    text: `تعلم المواي تاي للدفاع معا افضل المدربين `,
  },
  {
    id: 2,
    image: "../Imgs/zumbaDanceHero.jpg",
    title: "زومبا",
    text: `تعلم رقص الزومبا  مع افضل المدربات (غير مختلط) `,
  },
];


mHeroSectionPoints[0].addEventListener('click', () => {
  mHeroTitle.style.opacity = '0';
  mHeroParag.style.opacity = '0';
  setTimeout(function () {
    mHeroTitle.style.opacity = '1';
    mHeroParag.style.opacity = '1';
    mHeroSection.style.backgroundImage = `url(${heroSectionData[0].image})`;
    mHeroSection.style.backgroundSize = "cover";
    mHeroTitle.innerText = heroSectionData[0].title;
    mHeroParag.innerText = heroSectionData[0].text;
  }, 300)
})
mHeroSectionPoints[1].addEventListener('click', () => {
  mHeroTitle.style.opacity = '0';
  mHeroParag.style.opacity = '0';
  setTimeout(function () {
    mHeroTitle.style.opacity = '1';
    mHeroParag.style.opacity = '1';
    mHeroSection.style.backgroundImage = `url(${heroSectionData[1].image})`;
    mHeroSection.style.BackgroundSize = "cover";
    mHeroSection.style.backgroundPosition = "center";
    mHeroTitle.innerText = heroSectionData[1].title;
    mHeroParag.innerText = heroSectionData[1].text;
  }, 300)
})

var mburger = document.querySelector(".burger-menu");
// var mbody = document.querySelector("body");
var mmobilNav = document.querySelector(".mobil-nav");

mburger.onclick = function () {
  mburger.classList.toggle("is-active");
};

mmobilNav.onclick = function () {
  mmobilNav.style.left = "-50%";
};



window.onscroll = () => {
  var mBack = document.querySelector(".HomeBack");
  if (window.screenY = 580) {
    mBack.style.display = 'flex';
  }
};

const  sr = ScrollReveal({
  origin: 'bottom',
  distance: '40px',
  duration: '2000',
  reset: true
});


sr.reveal('.hero-section-container, .about-section-container, .directory-section-content, .directory-section-img, .contact-section-cards')