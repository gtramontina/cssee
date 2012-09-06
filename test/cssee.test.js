describe('cssee.js', function() {

  it('adds a style tag to the body', function() {
    expect($('body style#cssee')).to.not.be.empty();
  });

});