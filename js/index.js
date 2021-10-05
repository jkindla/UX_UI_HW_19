function fade() {

    $(".preloader").fadeOut("slow")
    
    
    }
    setTimeout(fade, 1000);
    



    $(document).ready(function(){
        // Add smooth scrolling to all links
        $("a").on('click', function(event) {
      
          // Make sure this.hash has a value before overriding default behavior
          if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
      
            // Store hash
            var hash = this.hash;
      
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 1500, function(){
         
              // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
            });
          } // End if
        });
      });


      const hamburger = document.getElementById('hamburger');
      const navUl = document.getElementById('nav-ul');

      hamburger.addEventListener('click', () => {
          navUl.classList.toggle('show');
      }
      )

      $('.logo').first().delay(1100).animate({'opacity':'1'},1600);
      $('.nav-ul').last().delay(1400).animate({'opacity':'1'},1600);
      $('h1').delay(1600).animate({'opacity':'1'},1800);
      $('p').delay(2000).animate({'opacity':'1'},1800);
      $('.heroBut').delay(2100).animate({'opacity':'1'},1800);
      $('.heroPic').delay(2300).animate({'marginTop':'+=-80px','opacity':'1'},1800);




      