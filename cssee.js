(function() {
  var cssee = 'https://raw.github.com/gtramontina/cssee/master/css.ee';

  var head = document.getElementsByTagName('head')[0];
  head.innerHTML += '<link rel="stylesheet" href="'+cssee+'" type="text/css">';

  var existingClasses = document.body.getAttribute('class') || '';
  document.body.setAttribute('class', existingClasses + ' cssee-debug');
})();