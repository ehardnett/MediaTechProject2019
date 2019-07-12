$(document).ready(function($){
    var parPosition = [];
  $('.par').each(function() {
      parPosition.push($(this).offset().top);
  });

  $('.vNav ul li a').click(function () {
    $('.vNav ul li a').removeClass('active');
        $(this).addClass('active');
}); 

$('.vNav a').hover(function() {
   $(this).find('.label').show();
   }, function() {
   $(this).find('.label').hide();
});

  $('.vNav a').click(function(){
      var ref = $.attr(this, 'href');
      $('.states').animate({
          scrollTop: $(ref.substring(1)).getComputedStyle.top
      }, 500);
      return false;
  });
  
     
  
     $('.states').scroll(function(){
  var position = $('.states').scrollTop(),
          index; 
          for (var i=0; i<parPosition.length; i++) {
          if (position <= parPosition[i]) {
              index = i;
              break;
          }
      }
$('.vNav ul li').removeClass('active');
      $('.vNav ul li:eq('+index+')').addClass('active');
  });
  
      $('.vNav ul li a').click(function () {
      $('.vNav ul li a').removeClass('active');
          $(this).addClass('active');
  });   
});


function showDiv(id, collapse1, collapse2, collapse3) {
    var x = document.getElementById(id);
    if (window.getComputedStyle(x).display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    document.getElementById(collapse1).style.display = "none";
    document.getElementById(collapse2).style.display = "none";
    document.getElementById(collapse3).style.display = "none";
}