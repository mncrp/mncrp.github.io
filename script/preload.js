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
        <h1>
          <svg viewBox="0 0 1815 183" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M97.4 37.6C86.2 37.6 75.4 41.4 67.6 54.6C62.2 43.4 51.8 37.6 40.8 37.6C31.4 37.6 21.6 41 14 51.6V44C14 41.4 12.6 40 10 40H4.8C2.2 40 0.800001 41.4 0.800001 44V136C0.800001 138.6 2.2 140 4.8 140H10C12.6 140 14 138.6 14 136V79.6C14 56.8 28.4 50.4 38.4 50.4C49 50.4 58.2 56.8 58.2 72.6V136C58.2 138.6 59.6 140 62.2 140H67.4C70 140 71.4 138.6 71.4 136V79.6C71.4 56.8 85.8 50.4 95.8 50.4C106.4 50.4 115.6 56.8 115.6 72.6V136C115.6 138.6 117 140 119.6 140H124.8C127.4 140 128.8 138.6 128.8 136V72.6C128.8 49.6 114 37.6 97.2 37.6H97.4ZM201.396 142.4C230.596 142.4 253.996 119.6 253.996 90C253.996 60.4 230.596 37.6 201.396 37.6C172.196 37.6 148.796 60.4 148.796 90C148.796 119.6 172.196 142.4 201.396 142.4ZM201.396 129.6C179.196 129.6 161.996 112.2 161.996 90C161.996 67.8 179.196 50.4 201.396 50.4C223.596 50.4 240.796 67.8 240.796 90C240.796 112.2 223.596 129.6 201.396 129.6ZM318.005 37.6C305.805 37.6 295.005 41.4 287.205 53.4V44C287.205 41.4 285.805 40 283.205 40H278.005C275.405 40 274.005 41.4 274.005 44V136C274.005 138.6 275.405 140 278.005 140H283.205C285.805 140 287.205 138.6 287.205 136V83.6C287.205 58.8 302.005 50.4 315.605 50.4C329.005 50.4 338.805 58.8 338.805 74.6V136C338.805 138.6 340.205 140 342.805 140H348.005C350.605 140 352.005 138.6 352.005 136V74.6C352.005 51.6 336.605 37.6 318.005 37.6ZM424.6 142.4C453.8 142.4 477.2 119.6 477.2 90C477.2 60.4 453.8 37.6 424.6 37.6C395.4 37.6 372 60.4 372 90C372 119.6 395.4 142.4 424.6 142.4ZM424.6 129.6C402.4 129.6 385.2 112.2 385.2 90C385.2 67.8 402.4 50.4 424.6 50.4C446.8 50.4 464 67.8 464 90C464 112.2 446.8 129.6 424.6 129.6ZM592.989 108H587.189C584.989 108 583.389 109 582.389 111C576.589 122.2 564.389 129.6 549.789 129.6C527.589 129.6 510.389 112.2 510.389 90C510.389 67.8 527.589 50.4 549.789 50.4C564.189 50.4 576.389 57.6 582.389 69C583.389 71 584.989 72 587.189 72H592.989C595.789 72 597.389 70.2 596.189 67.4C588.989 49.6 570.989 37.6 549.789 37.6C519.589 37.6 497.189 60.4 497.189 90C497.189 119.6 519.589 142.4 549.789 142.4C570.989 142.4 589.189 130.4 596.189 112.6C597.389 109.8 595.789 108 592.989 108ZM660.598 37.6C648.398 37.6 637.598 41.4 629.798 53.4V4C629.798 1.4 628.398 -9.53674e-06 625.798 -9.53674e-06H620.598C617.998 -9.53674e-06 616.598 1.4 616.598 4V136C616.598 138.6 617.998 140 620.598 140H625.798C628.398 140 629.798 138.6 629.798 136V83.6C629.798 58.8 644.598 50.4 658.198 50.4C671.598 50.4 681.398 58.8 681.398 74.6V136C681.398 138.6 682.798 140 685.398 140H690.598C693.198 140 694.598 138.6 694.598 136V74.6C694.598 51.6 679.198 37.6 660.598 37.6ZM755.393 38.6C744.393 39.6 734.593 44 727.793 55.4V44C727.793 41.4 726.393 40 723.793 40H718.593C715.993 40 714.593 41.4 714.593 44V136C714.593 138.6 715.993 140 718.593 140H723.793C726.393 140 727.793 138.6 727.793 136V84.4C727.793 61 741.793 52.2 756.793 51.2C758.393 51.2 759.393 49.6 759.393 47.2V42.4C759.393 39.8 757.993 38.4 755.393 38.6ZM814.844 142.4C844.044 142.4 867.444 119.6 867.444 90C867.444 60.4 844.044 37.6 814.844 37.6C785.644 37.6 762.244 60.4 762.244 90C762.244 119.6 785.644 142.4 814.844 142.4ZM814.844 129.6C792.644 129.6 775.444 112.2 775.444 90C775.444 67.8 792.644 50.4 814.844 50.4C837.044 50.4 854.244 67.8 854.244 90C854.244 112.2 837.044 129.6 814.844 129.6ZM984.033 37.6C972.833 37.6 962.033 41.4 954.233 54.6C948.833 43.4 938.433 37.6 927.433 37.6C918.033 37.6 908.233 41 900.633 51.6V44C900.633 41.4 899.233 40 896.633 40H891.433C888.833 40 887.433 41.4 887.433 44V136C887.433 138.6 888.833 140 891.433 140H896.633C899.233 140 900.633 138.6 900.633 136V79.6C900.633 56.8 915.033 50.4 925.033 50.4C935.633 50.4 944.833 56.8 944.833 72.6V136C944.833 138.6 946.233 140 948.833 140H954.033C956.633 140 958.033 138.6 958.033 136V79.6C958.033 56.8 972.433 50.4 982.433 50.4C993.033 50.4 1002.23 56.8 1002.23 72.6V136C1002.23 138.6 1003.63 140 1006.23 140H1011.43C1014.03 140 1015.43 138.6 1015.43 136V72.6C1015.43 49.6 1000.63 37.6 983.833 37.6H984.033ZM1086.35 37.6C1055.35 37.6 1035.15 60.6 1035.15 90C1035.15 120.2 1055.75 142.4 1086.35 142.4C1106.75 142.4 1123.15 131.8 1129.95 116.6C1130.95 114.2 1129.35 112.6 1126.35 112.6H1119.95C1117.75 112.6 1116.35 113.6 1115.15 115.4C1110.15 123.6 1099.95 129.6 1086.55 129.6C1066.15 129.6 1051.35 117 1048.75 96.6H1121.35H1130.75C1133.15 96.6 1134.75 95.4 1134.95 92.8V90.4C1134.95 63 1116.95 37.6 1086.35 37.6ZM1086.35 50.4C1103.35 50.4 1118.75 61.8 1121.15 83.8H1048.55C1051.15 64.4 1065.15 50.4 1086.35 50.4ZM1245.02 -9.53674e-06H1209.02H1199.02C1196.42 -9.53674e-06 1195.02 1.4 1195.02 4V136C1195.02 138.6 1196.42 140 1199.02 140H1205.02C1207.62 140 1209.02 138.6 1209.02 136V84H1245.02C1268.22 84 1287.02 65 1287.02 42C1287.02 18.8 1268.22 -9.53674e-06 1245.02 -9.53674e-06ZM1245.02 70.8H1209.02V13.2H1245.02C1260.42 13.2 1273.02 26 1273.02 42C1273.02 57.8 1260.42 70.8 1245.02 70.8ZM1347.79 38.6C1336.79 39.6 1326.99 44 1320.19 55.4V44C1320.19 41.4 1318.79 40 1316.19 40H1310.99C1308.39 40 1306.99 41.4 1306.99 44V136C1306.99 138.6 1308.39 140 1310.99 140H1316.19C1318.79 140 1320.19 138.6 1320.19 136V84.4C1320.19 61 1334.19 52.2 1349.19 51.2C1350.79 51.2 1351.79 49.6 1351.79 47.2V42.4C1351.79 39.8 1350.39 38.4 1347.79 38.6ZM1407.3 142.4C1436.5 142.4 1459.9 119.6 1459.9 90C1459.9 60.4 1436.5 37.6 1407.3 37.6C1378.1 37.6 1354.7 60.4 1354.7 90C1354.7 119.6 1378.1 142.4 1407.3 142.4ZM1407.3 129.6C1385.1 129.6 1367.9 112.2 1367.9 90C1367.9 67.8 1385.1 50.4 1407.3 50.4C1429.5 50.4 1446.7 67.8 1446.7 90C1446.7 112.2 1429.5 129.6 1407.3 129.6ZM1489.09 -9.53674e-06H1483.89C1481.29 -9.53674e-06 1479.89 1.4 1479.89 4V16C1479.89 18.6 1481.29 20 1483.89 20H1489.09C1491.69 20 1493.09 18.6 1493.09 16V4C1493.09 1.4 1491.69 -9.53674e-06 1489.09 -9.53674e-06ZM1489.09 40H1483.89C1481.29 40 1479.89 41.4 1479.89 44V148C1479.89 163.8 1473.69 170 1460.89 169.8C1458.49 169.8 1457.09 171.2 1457.09 173.8V178.6C1457.09 181 1458.49 182.6 1461.09 182.6C1481.49 183 1493.09 170.6 1493.09 148V44C1493.09 41.4 1491.69 40 1489.09 40ZM1564.3 37.6C1533.3 37.6 1513.1 60.6 1513.1 90C1513.1 120.2 1533.7 142.4 1564.3 142.4C1584.7 142.4 1601.1 131.8 1607.9 116.6C1608.9 114.2 1607.3 112.6 1604.3 112.6H1597.9C1595.7 112.6 1594.3 113.6 1593.1 115.4C1588.1 123.6 1577.9 129.6 1564.5 129.6C1544.1 129.6 1529.3 117 1526.7 96.6H1599.3H1608.7C1611.1 96.6 1612.7 95.4 1612.9 92.8V90.4C1612.9 63 1594.9 37.6 1564.3 37.6ZM1564.3 50.4C1581.3 50.4 1596.7 61.8 1599.1 83.8H1526.5C1529.1 64.4 1543.1 50.4 1564.3 50.4ZM1728.69 108H1722.89C1720.69 108 1719.09 109 1718.09 111C1712.29 122.2 1700.09 129.6 1685.49 129.6C1663.29 129.6 1646.09 112.2 1646.09 90C1646.09 67.8 1663.29 50.4 1685.49 50.4C1699.89 50.4 1712.09 57.6 1718.09 69C1719.09 71 1720.69 72 1722.89 72H1728.69C1731.49 72 1733.09 70.2 1731.89 67.4C1724.69 49.6 1706.69 37.6 1685.49 37.6C1655.29 37.6 1632.89 60.4 1632.89 90C1632.89 119.6 1655.29 142.4 1685.49 142.4C1706.69 142.4 1724.89 130.4 1731.89 112.6C1733.09 109.8 1731.49 108 1728.69 108ZM1793.6 40H1776.8V12C1776.8 9.39999 1775.4 7.99999 1772.8 7.99999H1767.6C1765 7.99999 1763.6 9.39999 1763.6 12V40H1746.6C1744 40 1742.6 41.4 1742.6 44V48.8C1742.6 51.4 1744 52.8 1746.6 52.8H1763.6V136C1763.6 138.6 1765 140 1767.6 140H1772.8C1775.4 140 1776.8 138.6 1776.8 136V52.8H1793.6C1796.2 52.8 1797.6 51.4 1797.6 48.8V44C1797.6 41.4 1796.2 40 1793.6 40ZM1800.81 140H1810.81C1813.41 140 1814.81 138.6 1814.81 136V126C1814.81 123.4 1813.41 122 1810.81 122H1800.81C1798.21 122 1796.81 123.4 1796.81 126V136C1796.81 138.6 1798.21 140 1800.81 140Z"/>
          </svg>
        </h1>
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
    bio: '代表やっとりまっせ',
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
    bio: 'monochrome Project.のお手伝いをしています。<br>後、CTOです。',
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
    bio: 'Monot for Androidを作ってます、圧縮形式です。',
    project: `
      <a href="/project/monot/android">Monot for Android</a>
    `,
    link: `
      <a href="https://twitter.com/ZIP_Muryobochi">Twitter</a>
      <a href="https://1234yosuke.github.io/">サイト</a>
    `
  },
  comamoca: {
    name: 'こまもか',
    role: '',
    bio: 'Vim',
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
    bio: 'Vimはいいぞ',
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
    bio: `Litestのデザインなどを提案している人。`,
    project: `
      <a href="/project/litest">Litest</a>
    `,
    link: `
      <a href="https://twitter.com/YukurriR">Twitter</a>
    `
  },
  dadan: {
    name: '駄々ん',
    role: '',
    bio: '',
    project: `
      <a href="/project/monot">Monot for Desktop</a>
    `,
    link: `
    `
  },
  usb3_14: {
    name: 'USB3.14',
    role: '',
    bio: '',
    project: `
      <a href="/project/monot">Monot for Desktop</a>
    `,
    link: ``
  },
  ao_skyblue: {
    name: '蒼凰',
    role: '',
    bio: '',
    project: `
      <a href="/project/monot">Monot for Desktop</a>
    `,
    link: ``
  },
  flatponch: {
    name: 'FlatPonch',
    role: '',
    bio: 'Monot for Desktopの一人です',
    project: `
      <a href="/project/monot">Monot for Desktop</a>
    `,
    link: `
      <a href="https://flatponch.github.io/">Website</a>
      <a href="https://linktr.ee/FrutPonch">Social Media</a>
    `
  },
  mf7cli: {
    name: 'mf7cli',
    role: '',
    bio: '複数のブラウザを開発してる人',
    project: `
      <a href="/project/monot">Monot for Desktop</a>
    `,
    link: `
      <a href="https://twitter.com/made_in_apple_">Twitter</a>
    `
  }
}

const developerElements = [document.getElementsByTagName('developer-element')][0];
for (let i = 0; i < developerElements.length; i++) {
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
          <p>${developer[name].bio}</p>
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
