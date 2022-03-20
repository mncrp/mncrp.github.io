window.addEventListener('DOMContentLoaded',()=>{
  document.body.innerHTML=`
    <header>
      <h1><a href="/me/">Sorakime</a></h1>
      <div>
        <div>
          <a href="/me/picture/">Picture</a>
          <a href="/me/music/">Music</a>
        </div>
      </div>
    </header>
    ${document.body.innerHTML}
  `
  document.querySelector('main').innerHTML=`${document.querySelector('main').innerHTML}
  <footer>
    <div>
      <span>
        <h4>ページ</h4>
        <p><a href="/me/sitemap">サイトマップ</a></p>
        <p><a href="/me/music/">音楽</a></p>
        <br>
        <h4>必読</h4>
        <p><a href="/me/agreement">規約など</a></p>
      </span>
      <span>
        <h4>SNSなど</h4>
        <p>
          <a href="https://twitter.com/Sorakime_" target="_blank">Twitter</a>
        </p>
        <p>
          <a href="https://note.com/sorakime">note</a>
        </p>
        <p>
          <a href="https://www.instagram.com/sorakime_">Instagram</a>
        </p>
        <p>
          <a href="https://anchor.fm/Sorakime">Anchor</a>
        </p>
        <p>
          <a href="https://www.youtube.com/channel/UCtTYek-N2sjl_9z-GS-IjAA" target="_blank">YouTube</a>
        </p>
        <p>
          <a href="https://github.com/Sorakime">GitHub</a>
        </p>
      </span>
      <span>
        <h4>所属グループ</h4>
        <p><a href="https://escgrp.org">Escape Group</a></p>
        <p><a herf="https://liquidverse.tk">LiquidVerse</a></p>
        <p><a href="https://vcborn.com">VCborn</a></p>
        <p><a href="https://thinking-grp.github.io">thinking</a></p>
        <p>等</p>
      </span>
    </div>
    <small>Copyright &copy; 2021 Sorakime All rights reserved.</small>
  </footer>`;
  document.head.innerHTML=`
    ${document.head.innerHTML}
    <link rel="stylesheet" href="/style/default.css">
    <link rel="stylesheet" href="/me/style/main.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  `
})
