var director = require('director');
var probable = require('probable');

var linkMarginLeft = 32;

var routes = {
  '/thing/:imgurl/desc/:desc': renderImage,
  '/thing/:imgurl/desc/:desc/width/:width/height/:height': renderImageRespectingSize,
  '/thing/:imgurl/desc/:desc/trim/': renderImageWithTrim,
  // '/concept/:concept': getConcept
};

var bgStyleTable = probable.createTableFromDef({
  '0-39': 'background-white',
  '40-74': 'background-black',
  '75-99': 'background-overworld'
});

var sceneryTable = probable.createTableFromDef({
  '0-24': 'fires',
  '25-29': 'grave',
  '30-39': 'woods-a',
  '40-44': 'woods-b',
  '45-47': 'woods-c',
  '48-49': 'grumble',
  '50-54': 'old-man-cave',
  '55-59': 'old-woman-cave',
  '60-74': 'shop',
  '75-76': 'fairy-pool'
});

(((((((function go() {
  var router = director.Router(routes);
  // router.notfound = getRandom; 
  router.init();
})()))))));

function renderImageWithTrim(imgurl, desc) {
  renderImage(imgurl, desc, true);
}

function renderImageRespectingSize(imgurl, desc, thingWidth, thingHeight) {
  renderImage(imgurl, desc, false, thingWidth, thingHeight);
}

function renderImage(imgurl, desc, shouldTrim, thingWidth, thingHeight) {
  setBackgroundStyle();

  if (thingWidth > 400 && probable.roll(5) === 0) {
    showScenery();
  }

  var thingImg = document.querySelector('#thing');
  thingImg.onload = reportImageLoaded;

  if (probable.roll(8) === 0) {
    thingImg.classList.add('flipped');
  }

  if (probable.roll(10) === 0) {
    var linkImg = document.querySelector('#link');
    linkImg.src = 'static/link-both-arms-up.png';
  }

  thingImg.alt = decodeURIComponent(desc);
  var imgSrc = decodeURIComponent(imgurl);
  thingImg.src = imgSrc;

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

function setBackgroundStyle() {
  document.body.classList.add(bgStyleTable.roll());
}

function showScenery() {
  var sceneryId = sceneryTable.roll();
  var scenery = document.getElementById(sceneryId);
  scenery.classList.remove('hide');
}

function reportImageLoaded() {
  console.log('Thing image loaded!');
  if (typeof window.callPhantom === 'function') {
    window.callPhantom('takeShot');
  }
}
