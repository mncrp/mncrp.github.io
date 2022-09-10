const pathname = location.pathname;

if (pathname.match(/monot/) !== null) {
  document.getElementById('sidebar').innerHTML += `
    <hr>
    <a href="/docs/monot/setting">設定項目</a>
    <a href="/docs/monot/css-theme">CSSによるテーマ</a>
    <a href="/docs/monot/setup">開発環境の構築</a>
    <a href="/docs/monot/directory">ディレクトリ構造</a>
    <a href="/docs/monot/branch">ブランチルール</a>
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
`;
