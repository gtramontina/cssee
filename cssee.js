(function() {
  var cssee = 'http://raw.github.com/gtramontina/cssee/master/cssee.css';

  var head = document.getElementsByTagName('head')[0];
  head.innerHTML += '<link rel="stylesheet" href="'+cssee+'" />';

  var existingClasses = document.body.getAttribute('class') || '';
  document.body.setAttribute('class', existingClasses + ' debug');
})();