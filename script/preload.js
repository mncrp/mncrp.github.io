pageTitle = function() {
  try {
    return pageTitle;
  } catch (e) {
    return '';
  }
}();

const style = function() {
  const pathname = location.pathname;
  if (
    pathname !== '/' &&
    pathname !== '/index' &&
    pathname !== '/index.html' &&
    pathname !== '/about/' &&
    pathname !== '/about/index' &&
    pathname !== '/about/index.html' &&
    pathname !== '/project/' &&
    pathname !== '/project/index' &&
    pathname !== '/project/index.html'
  ) {
    document.head.innerHTML = `
      ${document.head.innerHTML}
      <link rel="stylesheet" href="/style/content.css">
    `
  }
}();

document.head.innerHTML = `
  ${document.head.innerHTML}
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="/style/common.css">
`;

document.body.innerHTML = `
  <header>
    <a href="javascript:menu();" id="menu-button"></a>
    <a href="/">
      <div id="header-title">
        <div id="logo"></div>
        <h1>monochrome Project.</h1>
      </div>
    </a>
    <p id="pageTitle">${pageTitle}</p>
  </header>
  <div id="sidebar">
    <a href="/about">About</a>
    <a href="/project">Project</a>
    <a href="/about/member">Member</a>
    <a href="/link">Link</a>
    <a href="/news">News</a>
  </div>
  ${document.body.innerHTML}
  <footer>
    <small>
      <a href="/about">About</a>
      <a href="/project">Project</a>
      <a href="/about/member">Member</a>
      <p>Copyright &copy; 2022 monochrome Project. All rights reserved.</p>
    </small>
  </footer>
`;

function menu() {
  document.getElementById('menu-button').classList.toggle('opened');
  document.getElementById('sidebar').classList.toggle('opened');
}
