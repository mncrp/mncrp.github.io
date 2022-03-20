window.onload = () => {
  document.head.innerHTML=`
    ${document.head.innerHTML}
    <link rel="stylesheet" href="/me/style/picture.css">
  `
}

var i = 0;

setInterval(() => {
  if (i == 0) {
    document.getElementById(`top-slider-image-4`).style.opacity = 0;
  } else {
    document.getElementById(`top-slider-image-${i - 1}`).style.opacity = 0;
  }
  document.getElementById(`top-slider-image-${i}`).style.opacity = 1;

  if (i == 4) {
    i = 0;
  } else {
    i++;
  }
}, 10000);

function scroll(){
  scrollTo({
    top: document.getElementById('macbook-pro').getBoundingClientRect().top + window.pageYOffset - 100,
    left: 0,
    behavior: 'smooth'
  })
}

// annimations
function anim() {
  let elem = document.getElementsByClassName('anim-scroll');
  if (!elem) return;
  let time = window.innerHeight > 768 ? 0 : 40;
  let scrollY = window.pageYOffset;
  let windowHeight = window.innerHeight;

  Object.keys(elem).forEach((item, i) => {
    let elemClientRect = elem[i].getBoundingClientRect();
    let elemY = scrollY + elemClientRect.top;
    if (scrollY + windowHeight - time > elemY) {
      elem[i].classList.add('showed');
    } else if (scrollY + windowHeight < elemY) {
      elem[i].classList.remove('showed');
    }
  });


  if (scrollY / windowHeight / 1.1 < 1){
    let el = document.getElementById('top-slider-image-cover');
    el.style.opacity = scrollY / windowHeight /1.1;
  }

  let mbpEl = document.getElementById('macbook-pro');
  let mbpTop = mbpEl.getBoundingClientRect().top; //mbpElのウィンドウの上から何pxか
  let mbp2 = document.getElementById('macbook-pro-2');
  mbp2.style.top = `${scrollY / 2 - 75}px`;

  let sakura = document.getElementById('sakura');
  if (sakura.getBoundingClientRect().top < windowHeight / 2) { //sakuraの座標がwindowの高さの半分なら
    let sakura1 = document.getElementById('sakura-1');
    sakura1.style.height = `${
      windowHeight / 2 + (windowHeight - sakura1.getBoundingClientRect().top)
    }vh`;
    console.log(windowHeight / 2 + windowHeight - sakura1.getBoundingClientRect().top);
  } else {
    let sakura1 = document.getElementById('sakura-1');
    sakura1.style.height = `50vh`;
  }
}

anim();
window.addEventListener('scroll',anim);
