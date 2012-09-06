/* CSS borrowed from Chris Page's "A Handy CSS Debugging Snippet" - http://homepage.mac.com/chrispage/iblog/C42511381/E20060806095030/index.html */
(function() {
  var cssee = '\
    * { outline: 2px dotted red !important }\
    * * { outline: 2px dotted green !important }\
    * * * { outline: 2px dotted orange !important }\
    * * * * { outline: 2px dotted blue !important }\
    * * * * * { outline: 1px solid red !important }\
    * * * * * * { outline: 1px solid green !important }\
    * * * * * * * { outline: 1px solid orange !important }\
    * * * * * * * * { outline: 1px solid blue !important }\
  ';

  var style = document.createElement('style');
  style.id = 'cssee';
  style.innerHTML = cssee;
  document.body.appendChild(style);

})();