$(document).ready(function(){
    function removeLoader() {
        $('.cssloader-parent').fadeOut(100,function(){
            $(this).remove();
        });
    }
    $('.cssloader-parent').show();
  
    $(window).on('load', function(){
        removeLoader();
    });
  });