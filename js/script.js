$(document).ready((function(){const e=$('[data-slider="slick"]');let l=$("#header"),a=$("#intro"),t=a.innerHeight(),s=$(window).scrollTop();$(window).on("scroll load resize",(function(){t=a.innerHeight(),s=$(this).scrollTop(),s>t?l.addClass("fixed"):l.removeClass("fixed")})),$("[data-scroll]").on("click",(function(e){e.preventDefault();let l=$(this).data("scroll"),a=$(l).offset().top;$("#menu a.active").removeClass("active"),$(this).addClass("active"),$("html, body").animate({scrollTop:a-80},700)})),$("#header__burger").click((function(e){$("#header__burger, #menu").toggleClass("active"),$("#header").toggleClass("active"),$("body").toggleClass("lock")})),$("[data-filter]").on("click",(function(e){e.preventDefault();let l=$(this).data("filter");"all"==l?$("[data-cat]").removeClass("hide"):$("[data-cat]").each((function(){$(this).data("cat")!=l?$(this).addClass("hide"):$(this).removeClass("hide")}))}));let o=$("[data-modal]"),i=$("[data-close]");o.on("click",(function(e){e.preventDefault();let l=$(this).data("modal");$(l).addClass("show"),$("body").addClass("no-scroll"),setTimeout((function(){$(l).find(".modal__dialog").css({transform:"scale(1)"})}),300)})),i.on("click",(function(e){e.preventDefault();let l=$(this).parents(".modal");l.find(".modal__dialog").css({transform:"scale(0)"}),setTimeout((function(){l.removeClass("show"),$("body").removeClass("no-scroll")}),300)})),$(".modal").on("click",(function(e){let l=$(this);l.find(".modal__dialog").css({transform:"scale(0)"}),setTimeout((function(){l.removeClass("show"),$("body").removeClass("no-scroll")}),300)})),$(".modal__dialog").on("click",(function(e){e.stopPropagation()})),e.slick({infinite:!0,slidesToShow:1,slidesToScroll:1,fade:!0,arrows:!1,dots:!0}),$(".slickPrev").on("click",(function(e){e.preventDefault(),$(this).parents(".modal").find('[data-slider="slick"]').slick("slickPrev")})),$(".slickNext").on("click",(function(e){e.preventDefault(),$(this).parents(".modal").find('[data-slider="slick"]').slick("slickNext")}))}));