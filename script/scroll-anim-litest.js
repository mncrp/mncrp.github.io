function anim() {
  const parent = document.getElementById('reborn-content');
  const elem = document.getElementById('reborn-background');
  if (!elem) return;
  const scrollY = window.pageYOffset;
  const img1 = document.getElementById('reborn-img1');
  const img2 = document.getElementById('reborn-img2');
  const img3 = document.getElementById('reborn-img3');

  if (parent.getBoundingClientRect().top < 0) {
    img1.style.opacity = 1 - (scrollY - 1000) / 400;
    img2.style.opacity = (scrollY - 1000) / 400;
    if (img2.style.opacity > 1) {
      img3.classList.add('display');
    } else {
      img3.classList.remove('display');
    }
  }
}
window.addEventListener('scroll', anim);
anim();
