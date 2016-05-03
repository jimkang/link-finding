var director = require('director');

var linkMarginLeft = 32;

var routes = {
  '/thing/:imgurl/desc/:desc': renderImage,
  '/thing/:imgurl/desc/:desc/trim/': renderImageWithTrim,
  // '/concept/:concept': getConcept
};

(((((((function go() {
  var router = director.Router(routes);
  // router.notfound = getRandom; 
  router.init();
})()))))));

function renderImageWithTrim(imgurl, desc) {
  renderImage(imgurl, desc, true);
}

function renderImage(imgurl, desc, shouldTrim) {
  var thingImg = document.querySelector('#thing');
  var imgSrc = decodeURIComponent(imgurl);
  thingImg.src = imgSrc;
  thingImg.alt = decodeURIComponent(desc);

  if (shouldTrim) {
    setTimeout(resizePage, 500);
  }
}

function resizePage() {
  var thingImg = document.querySelector('#thing');
  var linkImg = document.querySelector('#link');
  
  var pageWidth = thingImg.clientWidth;
  if (pageWidth < linkImg.clientWidth + linkMarginLeft) {
    pageWidth = linkImg.clientWidth + linkMarginLeft;
  }
  
  var pageHeight = thingImg.clientHeight + linkImg.clientHeight;

  var html = document.querySelector('html');

  document.body.style.width = pageWidth;
  document.body.style.height = pageHeight;
  html.style.width = pageWidth;
  html.style.height = pageHeight;
}
