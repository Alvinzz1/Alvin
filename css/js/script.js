// navbar fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};

// Hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// download cv
window.onload = function () {
  var downloadBtn = document.getElementById('downloadBtn');
  downloadBtn.addEventListener('click', downloadImage);
};

function downloadImage() {
  var url = 'css/img/cv-claymment.jpeg';
  var a = document.createElement('a');
  a.href = url;
  a.download = 'CV-Clayment.png';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}