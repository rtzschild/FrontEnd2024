$({ Counter: 0 }).animate({
  Counter: $('.Single').text()
}, {
  duration: 1000,
  easing: 'swing',
  step: function() {
    $('.Single').text(Math.ceil(this.Counter));
  }
});

