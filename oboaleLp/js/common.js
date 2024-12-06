/**
 * コンテンツのリサイズ
 */
window.addEventListener( 'DOMContentLoaded', (e) =>{
  //
  // コンテンツの最小の高さを調整
  //
  const cw =     document.querySelector('#content-wrap');
  const header = document.querySelector('#wrapper>header');
  const footer = document.querySelector('#wrapper>footer');
  
  let winH =     e.currentTarget.innerHeight;
  let headerH =  header.clientHeight+2;
  let footerH =  footer.clientHeight;
  let cwH =      cw.clientHeight;
  let siteH =    headerH + cwH + footerH;

  if( winH > siteH ){
    cw.style.minHeight = ( cwH + ( winH - siteH ) ) + 'px';
  }

  //
  // コピーライトの年度更新
  //
  const year =     document.querySelector('#year');
  year.innerText = ( new Date() ).getFullYear();

});
