$(document).ready(function(){
  $("button#cats").click(function(){
    $("body").removeClass();
    $("body").addClass("cat-background");
    $("ul#cat").append('<li>Meow!<br><img src="img/cat.gif"></li>');
    $("ul#cat").children("li").click(function(){
      (this).remove();
    });
  });
  $("button#dogs").click(function(){
    $("body").removeClass();
    $("body").addClass("dog-background");
    $("ul#dog").append('<li>Bark!<br><img src="img/dog.gif"></li>');
    $("ul#dog").children("li").click(function(){
      (this).remove();
    });
  });

    $("button#orgin").click(function(){
      $("body").removeClass();
      $("body").addClass("body");
    });
});
