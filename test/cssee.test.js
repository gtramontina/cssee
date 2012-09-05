describe('cssee.js', function() {

  it('loads the external debugger stylesheet into the head', function() {
    expect($('head > link[rel=stylesheet][href$="cssee.css"]')).to.not.be.empty();
  });

  it('adds a "debug" class to the body tag', function() {
    expect($('body').hasClass('debug')).to.be.ok();
  });
});