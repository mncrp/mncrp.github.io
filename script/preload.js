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

const developer = {
  sorakime: {
    name: 'Sorakime',
    role: 'Representative',
    via: '代表やっとりまっせ',
    project: `
      <a href="/project/litest">Litest</a>
      <a href="/project/monot">Monot for Desktop</a>
      <a href="/project/monodev">Monodev</a>
    `,
    link: `
      <a href="https://youtube.com/Sorakime">YouTube</a>
      <a href="https://soraki.me">僕のポートフォリオ的な</a>
      <a href="https://twitter.com/Sorakime_">Twitter</a>
    `
  },
  waryu_ynd: {
    name: 'waryu_YND',
    role: 'CTO',
    via: 'monochrome Project.のお手伝いをしています。<br>後、CTOです。',
    project: `
      <a href="/project/litest">Litest</a>
      <a href="/project/monot">Monot for Desktop</a>
      <a href="/project/monodev">Monodev</a>
    `,
    link: `
      <a href="https://twitter.com/waryu_ynd">Twitter</a>
    `
  },
  zip: {
    name: 'ZIP',
    role: '',
    via: '',
    project: `
      <a href="/project/monot/android">Monot for Android</a>
    `,
    link: `
      <a href="#">Link</a>
    `
  },
  comamoca: {
    name: 'こまもか',
    role: '',
    via: 'Vim',
    project: `
      <a href="/project/litest">Litest</a>
      <a href="/project/monot">Monot for Desktop</a>
      <a href="/project/monodev">Monodev</a>
    `,
    link: `
      <a href="https://twitter.com/Comamoca_?t=Zrf7UDDwWQKfdgJxv2BFCw&s=09">Twitter</a>
    `
  },
  hidemal: {
    name: 'ひでまる',
    role: '',
    via: 'Vimはいいぞ',
    project: `
      <a href="/project/litest">Litest</a>
      <a href="/project/monot">Monot for Desktop</a>
      <a href="/project/monot/android">Monot for Android</a>
    `,
    link: `
      <a href="https://twitter.com/Hidemal_OwO">Twitter</a>
    `
  },
  yukkuri_rmys: {
    name: 'Yukkuri_RMYS',
    role: '',
    via: ``,
    project: `
      <a href="/project/litest">Litest</a>
    `,
    link: `
    `
  },
  dadan: {
    name: '駄々ん',
    role: '',
    via: '',
    project: `
      <a href="/project/monot">Monot for Desktop</a>
    `,
    link: `
    `
  },
  usb3_14: {
    name: 'USB3.14',
    role: '',
    via: '',
    project: `
      <a href="/project/monot">Monot for Desktop</a>
    `,
    link: ``
  },
  ao_skyblue: {
    name: '蒼凰',
    role: '',
    via: '',
    project: `
      <a href="/project/monot">Monot for Desktop</a>
    `,
    link: ``
  }
}

const developerElements = [document.getElementsByTagName('developer-element')][0];
for (let i = 0; i < developerElements.length; i++){
  const item = developerElements[i];
  const name = item.attributes["data-developer"].nodeValue;
  const html = `
    <div class="member ${name}">
      <div class="left">
        <div class="icon" style="background-image: url('/image/icon/${name}.jpg')"></div>
        <div class="about">
          <h2>${developer[name].name}</h2>
          <p>${developer[name].role}</p>
        </div>
      </div>
      <div class="right">
        <div class="member-detail">
          <p>${developer[name].via}</p>
          <div class="project">
            <p>PROJECT</p>
            ${developer[name].project}
          </div>
          <div class="link">
            <p>LINK</p>
            ${developer[name].link}
          </div>
        </div>
      </div>
    </div>
  `
  item.innerHTML = html;
}
