describe('cssee.js', function() {

  it('loads the external debugger stylesheet into the head', function() {
    expect($('head > link[rel=stylesheet][href$="css.ee"]')).to.not.be.empty();
  });

  it('adds a "cssee-debug" class to the body tag', function() {
    expect($('body').hasClass('cssee-debug')).to.be.ok();
  });
});