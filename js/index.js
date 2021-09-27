function fade() {

    $(".preloader").fadeOut("slow")
    
    
    }
    setTimeout(fade, 3000);
    

    $("#heroPic").click(function(){
        $("#heroPic").animate({right: '550px'});
      }); 