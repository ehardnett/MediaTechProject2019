$(document).ready(function($){
    var parPosition = [];
    for (var i = 1; i < 7; i++) {
        var section = ".section0" + i.toString()
        var topParam = getComputedStyle(document.querySelector(section)).top
        topParam = topParam.substring(0, topParam.length - 2);
        parPosition.push(parseInt(topParam))
    }

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
      ref = '.' + ref.substring(1);
      $('.states').animate({
          scrollTop: getComputedStyle(document.querySelector(ref)).top
      }, 500);
      return false;
  });
  
     
  
     $('.states').scroll(function(){
  var position = $('.states').scrollTop();
          var index; 
          for (var i=0; i<parPosition.length; i++) {
                if (position <= parPosition[i]) {
              index = i;
              break;
          }
            }
$('.vNav ul li a').removeClass('active');
      $('.vNav ul li a:eq('+index+')').addClass('active');
  });
  
      $('.vNav ul li a').click(function () {
      $('.vNav ul li a').removeClass('active');
          $(this).addClass('active');
  });   
});


function showDiv(id, collapse1, collapse2, collapse3, blank) {
    var x = document.getElementById(id);
    var y = document.getElementById(blank);
    if (window.getComputedStyle(x).display === "none") {
        y.style.display = "none";
        x.style.display = "block";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
    document.getElementById(collapse1).style.display = "none";
    document.getElementById(collapse2).style.display = "none";
    document.getElementById(collapse3).style.display = "none";
}