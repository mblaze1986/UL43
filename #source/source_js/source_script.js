$(document).ready(function () {

  const worksSlider = $('[data-slider="slick"]');

  let header = $("#header");
  let intro = $("#intro");
  let introH = intro.innerHeight();
  let scrollPos = $(window).scrollTop();


  $(window).on("scroll load resize", function () {
    introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();

    if (scrollPos > introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  });

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    $("#menu a.active").removeClass("active");
    $(this).addClass("active");

    $("html, body").animate({
      scrollTop: elementOffset - 80
    }, 700);
  });

  // burger
  $('#header__burger').click(function (event) {
    $('#header__burger, #menu').toggleClass('active');
    $('#header').toggleClass('active');
    $('body').toggleClass('lock');
  });


  // filter
  let filter = $("[data-filter]");
  filter.on("click", function (event) {
    event.preventDefault();
    let cat = $(this).data('filter');
    if (cat == 'all') {
      $("[data-cat]").removeClass('hide');
    } else {
      $("[data-cat]").each(function () {
        let workCat = $(this).data('cat');
        if (workCat != cat) {
          $(this).addClass('hide');
        } else {
          $(this).removeClass('hide');
        }
      });
    }
  });



  // modals_open
  let modalCall = $("[data-modal]");
  let modalClose = $("[data-close]");
  modalCall.on("click", function (event) {
    event.preventDefault();
    let $this = $(this);
    let modalId = $this.data('modal');

    $(modalId).addClass('show');
    $("body").addClass('no-scroll');

    setTimeout(function () {
      $(modalId).find(".modal__dialog").css({
        transform: "scale(1)"
      });
    }, 300);

    // worksSlider.slick('setPosition');
  });

  // modals_close
  modalClose.on("click", function (event) {
    event.preventDefault();

    let $this = $(this);
    let modalParent = $this.parents('.modal');

    modalParent.find(".modal__dialog").css({
      transform: "scale(0)"
    });

    setTimeout(function () {
      modalParent.removeClass('show');
      $("body").removeClass('no-scroll');
    }, 300);
  });

  // modals_close_by_mask
  $(".modal").on("click", function (event) {
    let $this = $(this);

    $this.find(".modal__dialog").css({
      transform: "scale(0)"
    });

    setTimeout(function () {
      $this.removeClass('show');
      $("body").removeClass('no-scroll');
    }, 300);
  });

  $(".modal__dialog").on("click", function (event) {
    event.stopPropagation();
  });



  // slider      http://kenwheeler.github.io/slick/
  worksSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true
  });

  $(".slickPrev").on('click', function(event){
    event.preventDefault();
    let currentSlider = $(this).parents(".modal").find('[data-slider="slick"]')
    currentSlider.slick("slickPrev");
  });

  $(".slickNext").on('click', function(event){
    event.preventDefault();
    let currentSlider = $(this).parents(".modal").find('[data-slider="slick"]')
    currentSlider.slick("slickNext");
  });

});