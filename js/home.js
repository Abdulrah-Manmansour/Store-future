$(document).ready(function(){
    //owl corsloe
    $('.header .owl-carousel').owlCarousel({
        loop:true,
    items:1,
    autoplay:true,
    animateOut:'fadeOut',
    smartSpeed:450,
    });
   //owl corsloe
   $('.brands .owl-carousel').owlCarousel({
    loop:true,
autoplay:true,
responsive:{0:{items:2},768:{items:3},992:{items:6}}

});

  //sidemenue
  $(".menue").on("click",function(){
    $(".sidemenue").toggleClass("open")
  });
  $(".fa-times").on("click",function(){
    $(".sidemenue").removeClass("open")
  });
  //toggel navs
$(window).scroll(function(){
  if($(this).scrollTop()>=30){
    $(".nav-left").fadeOut(500);
    $(".navtop").fadeIn(500);
  }
  else{
    $(".nav-left").fadeIn(500);
    $(".navtop").fadeOut(500);
  }
  });
  //counter app
  $(".num").counterUp({delay:10,time:1000});
  //counter down
  var contect= $(".countdown").html();
  $('.countdown').countdown('2022/7/01', function(event) {
    $(this).html(event.strftime(contect));
  });
  setTimeout(function(){
    $(".loadingbg").fadeToggle();
    },1000)
    $(window).scroll(function(){
      var scrlo=$(window).scrollTop(),
      dh=$(document).height(),
      dw=$(document).width();
      var scrolparent=(scrlo / (dh - dw)) * 783
      $(".porgresbar-scrlo").css('height',scrolparent);
    });
    $(window).scroll(function(){
      if($(window).scrollTop() > 20){
       $(".btntop button").fadeIn();
      }
      else{
        $(".btntop button").fadeOut();
      }
      });
      $(".btn-totp").on("click",function(){
        $("body, html").animate({
          scrollTop:0
        },800)
        });
        //show images popup img1
        $(".img1").on('click',function(e){
          e.preventDefault();
    $(".photo1").slideDown();
        });
        $(".fa-window-close").on('click',function(){
          $(".photo1").slideUp();
        });
             //show images popup img2
        $(".img2").on('click',function(e){
          e.preventDefault();
    $(".photo2").slideDown();
        });
        $(".fa-window-close").on('click',function(){
          $(".photo2").slideUp();
        })
      //show images popup img3
        $(".img3").on('click',function(e){
          e.preventDefault();
    $(".photo3").slideDown();
        });
        $(".fa-window-close").on('click',function(){
          $(".photo3").slideUp();
        })
           //show images popup img4
        $(".img4").on('click',function(e){
          e.preventDefault();
    $(".photo4").slideDown();
        });
        $(".fa-window-close").on('click',function(){
          $(".photo4").slideUp();
        })
        //dark mode
        var links=$('link[ data-color="switch"]');
        var logo=$(".logo img");
        
      $(".fa-moon-o").on("click",function(){
        if(links.attr('href') == 'css/style.css'){
        links.attr('href','css/stylelight.css')
        logo.attr('src','images/logo-dark.png')
        }
        else{
          links.attr('href','css/style.css')
          logo.attr('src','images/logo.png')
        }
      });
});