$("p").click(function() {


  $(this).fadeOut(500, function(){

    var nuevo=document.createElement("h2");
    $ (nuevo).html("Esto es un subtitulo")
    $("body").append(nuevo);


  });


});