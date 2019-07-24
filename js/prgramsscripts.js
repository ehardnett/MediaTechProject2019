// When the user clicks on div, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}


function PopUp ()
{
    var popup2 = document.getElementById("myPopup2");
    popup2.classList.toggle("show2")
}

$( function grow() {
    $( ".internship" ).on( "click", function() {
      $( "#effect" ).toggleClass( "newClass", 1000, "linear" );
 document.getElementById("associate").style.left = "0px";

    });
 
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeClass( "newClass" );
      }, 2000 );
    }

  });

$( function grow2() {
    $( ".associates" ).on( "click", function() {
      $( "#effect2" ).toggleClass( "newClass2", 1000, "linear" );
 document.getElementById("associate").style.left = "0px";

    });
 
    function callback2() {
      setTimeout(function() {
        $( "#effect2" ).removeClass( "newClass2" );
      }, 2000 );
}
  });