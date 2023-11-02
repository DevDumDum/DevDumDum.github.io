$(function() {
    var counter = 0;
    
    var slideCount =  $(".slider ul li").length;
    var slideWidth =  $(".slider ul li").width();
    var slideHeight =  $(".slider ul li").height();
    var slideUlWidth =  slideCount * slideWidth;
    
    $(".slider").css({"max-width":slideWidth, "height": slideHeight});
    $(".slider ul").css({"width":slideUlWidth, "margin-left": - slideWidth });
    $(".slider ul li:last-child").prependTo($(".slider ul"));
    document.getElementById(counter).style.color = 'rgb(255, 215, 95)';

    function moveLeft() {
      $(".slider ul").stop().animate({
        left: + slideWidth
      },700, function() {
        $(".slider ul li:last-child").prependTo($(".slider ul"));
        $(".slider ul").css("left","");
      });
    }
    
    function moveRight() {
      $(".slider ul").stop().animate({
        left: - slideWidth
      },700, function() {
        $(".slider ul li:first-child").appendTo($(".slider ul"));
        $(".slider ul").css("left","");
      });

        
        if(counter < slideCount-1){
            counter++;
        } else {
            counter = 0;
        }
    if(counter-1 >= 0){
        document.getElementById(counter-1).style.color = 'rgb(220,220,220)';
    } else {
        document.getElementById(slideCount-1).style.color = 'rgb(220,220,220)';
    }
    document.getElementById(counter).style.color = 'rgb(255, 215, 95)';
    setTimeout(moveRight, 3000);
    }
    
    
    $(".next").on("click",function(){
      moveRight();
    });
    
    $(".prev").on("click",function(){
      moveLeft();
    });
    
    setTimeout(moveRight, 3000);    
  });