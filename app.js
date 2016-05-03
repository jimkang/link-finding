var director = require('director');

var routes = {
  '/thing/:imgurl/desc/:desc': renderImage,
  // '/concept/:concept': getConcept
};

(((((((function go() {
  var router = director.Router(routes);
  // router.notfound = getRandom; 
  router.init();
})()))))));

function renderImage(imgurl, desc) {
  var thingImg = document.querySelector('#thing');
  var imgSrc = decodeURIComponent(imgurl);
  thingImg.src = imgSrc;
  thingImg.alt = decodeURIComponent(desc);
}
