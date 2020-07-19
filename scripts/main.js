(function() {
  "use strict";

  createHTML(data);

  function createHTML(context) {
    var template = document.getElementById("bcp").innerHTML,
        templateCompile = Handlebars.compile(template),
        templateHTML = templateCompile(context);
    document.getElementById("app").innerHTML = templateHTML;
  }

  // =======Burger menu========
  function closeBurgerMenu() {
    $(".header__menu__overlay").slideUp(400, function() {
      $(".header__menu__overlay").removeAttr("style");
      $("#app").removeClass("menu-open");
      $('body').removeAttr('style');
    })
  };

  $(".header__burger--trigger").click(function() {
    if ($(".header__menu__overlay").css("display") === "block") {
      closeBurgerMenu();
    } else {
      $(".header__menu__overlay").slideDown(400, function() {
        if ($(this).css("display") === "none") {
          $(this).removeAttr("style");
        }
        $("#app").addClass("menu-open");
        $('body').css('overflow', 'hidden');
      });
    }
  });

  $('.header__nav-link').click(function() {
    closeBurgerMenu();
  })

  $(document).click(function(event) {
    if ($(event.target).closest(".header__burger--trigger").length) return;
    if ($(event.target).hasClass("header__menu")) return;
    if (($(".header__menu__overlay").css("display") === "block" || $(event.target).hasClass("header__nav-link"))&& $('#app').hasClass("menu-open")) {
      closeBurgerMenu();
    };
    event.stopPropagation();
  });

  //=====Scroll=====
  $('a[href^="#"], *[data-href^="#"]').on('click', function(e){
    e.preventDefault();
    var t = 1000;
    var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
    $('html,body').stop().animate({ scrollTop: $(d).offset().top}, t);
  });

  //========Select=========
  var x, i, j, selElmnt, a, b, c;
  /* Look for any elements with the class "custom-select": */
  x = document.getElementsByClassName("custom-select");
  for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
      /* For each option in the original select element,
      create a new DIV that will act as an option item: */
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function(e) {
          /* When an item is clicked, update the original select box,
          and the selected item: */
          var y, i, k, s, h;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          h = this.parentNode.previousSibling;
          for (i = 0; i < s.length; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName("same-as-selected");
              for (k = 0; k < y.length; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", "same-as-selected");
              break;
            }
          }
          h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
      /* When the select box is clicked, close any other select boxes,
      and open/close the current select box: */
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }

  function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < x.length; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }

  /* If the user clicks anywhere outside the select box,
  then close all select boxes: */
  document.addEventListener("click", closeAllSelect);

  // =====Header animation=====
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('header').outerHeight();
  const section = $('.nav-anchor'),
        nav = $('.header');
  nav.find('a').first().addClass("active");

  $(window).scroll(function(event){
      didScroll = true;

      const position = $(this).scrollTop();

      // ======Set current nav item=======
      section.each(function () {
          const top = $(this).offset().top - navbarHeight - 5,
                bottom = top + $(this).outerHeight();

          if (position >= top && position <= bottom) {
              nav.find('a').removeClass('active');
              section.removeClass('active');

              $(this).addClass('active');
              nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
          }
      });
  });

  setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }, 250);

  function hasScrolled() {
      var st = $(document).scrollTop();
      if(Math.abs(lastScrollTop - st) <= delta)
          return;
      if (st > lastScrollTop && st > navbarHeight){
          $('#top-nav').removeClass('site-header').addClass('site-header-hide');
      } else {
          if(st + $(window).height() < $(document).height()) {
              $('#top-nav').removeClass('site-header-hide').addClass('site-header');
          }
      }
      lastScrollTop = st;
  }

  // Screen rotation 
  window.addEventListener('orientationchange', function () {
    navbarHeight = $('header').outerHeight();
  }, false);

  nav.find('a').on('click', function () {
      const id = $(this).attr('href');

      $('html, body').animate({
          scrollTop: $(id).offset().top - navbarHeight
      }, 500);

      return false;
  });

  //Back to top button
  $(window).scroll(function(){
    if ($(window).scrollTop() >= $(window).height()) {
      if ($('#back-to-top').css('opacity') === '0') {
        $('#back-to-top').css({
          'opacity': '1',
          'pointer-events': 'all'
        })
      }
    } else {
      if ($('#back-to-top').css('opacity') === '1') {
        $('#back-to-top').css({
          'opacity': '0',
          'pointer-events': 'none'
        })
      }
    }
  });
})();