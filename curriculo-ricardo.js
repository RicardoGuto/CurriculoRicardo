const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    reset: true,
});

sr.reveal('.icons-social', {delay:200, origin:'right'});
sr.reveal('.barra-lateral', {delay: 200, origin: 'left'})
sr.reveal('.corpo-curriculo', {delay: 300, origin: 'center'})
sr.reveal('.barra-lateral', {delay: 200, origin: 'left'})



$(document).ready(function() {
    $('a').on('click', function(event) {
      if (this.hash !== '') {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function() {
          window.location.hash = hash;
        });
      }
    });
  });


  