  AOS.init({
    disable: function() {
      var maxWidth = 1068;
      return window.innerWidth < maxWidth;
    }
  });
  var mySwiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.projects-pagination',
        bulletClass: 'projects-bullet',
        bulletActiveClass: 'projects-bullet-active', 
        clickable: true
    },
  });