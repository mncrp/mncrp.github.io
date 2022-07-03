const pathname = location.pathname;

if (pathname.match(/monot/) !== null) {
  document.getElementById('sidebar').innerHTML += `
    <hr>
    <a href="/document/monot/setting">設定項目</a>
    <a href="/document/monot/css-theme">CSSによるテーマ</a>
  `;
}

document.head.innerHTML += `
  <style>
    img {
      display: inline-block;
      width: 48%;
    }
    h4 {
      font-size: 23px;
    }
    code {
      background-color: #000b;
      color: #fff;
    }
  </style>
`
