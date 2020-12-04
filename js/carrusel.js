function changeImage_1(){
  var image_index = 0;
  var imgs = ['images/perrito.jpg', 'images/tenis.jpeg'];
	$("#img-01").animate({opacity: '1'},750);

  $('#right-arrow-1').click(function(){
    image_index += 1;
    if (image_index >= imgs.length) {
      image_index = 0;
    }
    $("#img-01").animate({opacity: '0'},500,function(){
      $("#img-01").attr("src",imgs[image_index])
    });
    $("#img-01").animate({opacity: '1'},500);
  });

  $('#left-arrow-1').click(function(){
    image_index -= 1;
    if (image_index < 0) {
      image_index = imgs.length-1
    }
    $("#img-01").animate({opacity: '0'},500,function(){
      $("#img-01").attr("src",imgs[image_index])
    });
    $("#img-01").animate({opacity: '1'},500);
  });
};

changeImage_1();

function changeImage_2(){
  var image_index = 0;
  var imgs = ['images/perrito.jpg', 'images/tenis.jpeg'];
	$("#img-02").animate({opacity: '1'},750);

  $('#right-arrow-2').click(function(){
    image_index += 1;
    if (image_index >= imgs.length) {
      image_index = 0;
    }
    $("#img-02").animate({opacity: '0'},500,function(){
      $("#img-02").attr("src",imgs[image_index])
    });
    $("#img-02").animate({opacity: '1'},500);
  });

  $('#left-arrow-2').click(function(){
    image_index -= 1;
    if (image_index < 0) {
      image_index = imgs.length-1
    }
    $("#img-02").animate({opacity: '0'},500,function(){
      $("#img-02").attr("src",imgs[image_index])
    });
    $("#img-02").animate({opacity: '1'},500);
  });
};

changeImage_2();
