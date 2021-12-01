document.getElementsByTagName('header')[0].innerHTML=
`${document.getElementsByTagName('header')[0].innerHTML}
<p style="float: right; margin-right: 15px; position: relative; top: 50%; transform: translateY(-50%);">Monot</p>`
document.getElementsByTagName('nav-cts')[0].innerHTML=
`${document.getElementsByTagName('nav-cts')[0].innerHTML}
<br>
<p><a href="#download">ダウンロード</a></p>`

//annimations
function anim(){
  let elem=document.getElementsByClassName('anim-scroll');
  if(!elem)return;
  let time=window.innerHeight>768?0:40;
  let scrollY=window.pageYOffset;
  let windowHeight=window.innerHeight;
  Object.keys(elem).forEach((item, i) => {
    let elemClientRect=elem[i].getBoundingClientRect();
    let elemY=scrollY+elemClientRect.top;
    if(scrollY+windowHeight-time>elemY) {
      elem[i].classList.add('showed');
    }else if(scrollY+windowHeight<elemY){
      elem[i].classList.remove('showed');
    }
  });
}

anim();
window.addEventListener('scroll',anim);
