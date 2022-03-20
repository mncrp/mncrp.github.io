function contents(which){
  if (which==true) {
    document.getElementById('contents-menu').setAttribute('class','opened');
    document.querySelector('header > h4 > a').setAttribute('href','javascript:contents(false)');
  } else {
    document.getElementById('contents-menu').removeAttribute('class');
    document.querySelector('header > h4 > a').setAttribute('href','javascript:contents(true)');
  }
}
window.onload = () => {
  document.getElementsByTagName('header')[0].innerHTML=`
  ${document.getElementsByTagName('header')[0].innerHTML}
  <h4><a href="javascript:contents(true)">Contents</a></h4>`;
}
