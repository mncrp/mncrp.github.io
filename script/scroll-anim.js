window.addEventListener('scroll', () => {
  let elem = document.getElementsByClassName('scroll-anim');
  if (!elem) return;
  let time = window.innerHeight > 768 ? 0 : 40;
  let scrollY = window.pageYOffset;
  let windowHeight = window.innerHeight;

  Object.keys(elem).forEach((item, i) => {
    let elemClientRect = elem[i].getBoundingClientRect();
    let elemY = scrollY + elemClientRect.top;

    if (scrollY + windowHeight - time > elemY) {
      elem[i].classList.add('showed');
    } else if (scrollY + windowHeight < elemY){
      elem[i].classList.remove('showed');
    }
  });
});
