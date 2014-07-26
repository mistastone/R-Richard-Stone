$(window).on("scroll",function(e){
        // How far are we scrolled down? in PX
        var tipTop = $(window).scrollTop();
        // Where in the document is our nav? In PX
        var navPosition = $('ul.nav').css('position');
        var navHeight = $('ul.nav').height();
        var navTop = $('ul.nav').position().top;

        // this is a way to store the old navigation top
        if(navTop > 0) { // if NOT fixed
          oldTop = navTop; // store the value of the old navTop
        }

        //if we have scrolled past it
        if(tipTop >= navTop){
          $('body').addClass('sticky');
          $('body').css('padding-top',navHeight);
        }
        else {
          $('body').removeClass('sticky');
          $('body').css('padding-top',0);
        }

        // check if we need to unstick it because of the fixed bug
        if(oldTop > tipTop) {
          $('body').removeClass('sticky');
          $('body').css('padding-top',0);
        }

      });