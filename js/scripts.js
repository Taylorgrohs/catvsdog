$(document).ready(function(){
  $("button.btn").click(function(){
    $("ul#cat").append('<li>Meow!<br><img src="img/cat.gif"></li>');
    $("ul#cat").children("li").click(function(){
      (this).remove();
    });
  });
  $("button.btn").click(function(){
    $("ul#dog").append('<li>Bark!<br><img src="img/dog.gif"></li>');
    $("ul#dog").children("li").click(function(){
      (this).remove();
    });
  });
});
