(function() {
  var id = 'http://raw.github.com/gtramontina/cssee/master/cssee.css';
  if (document.getElementById(id)) return;

  var link  = document.createElement('link');
  link.id   = id;
  link.href = id;
  link.rel  = 'stylesheet';
  link.type = 'text/css';
  document.getElementsByTagName('head')[0].appendChild(link);

  var existingClasses = document.body.getAttribute('class');
  document.body.setAttribute('class', existingClasses + ' debug');
})();