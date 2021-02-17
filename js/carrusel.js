$(function() {
  $.getJSON('js/data.json', function(data) {
    if(lang == "EN"){
      data = data.EN
      changeModal_1(data.modal_1);
      changeModal_2(data.modal_2);
      changeModal_3(data.modal_3);
      changeModal_4(data.modal_4);
      changeModal_5(data.modal_5);
      changeModal_6(data.modal_6);
      changeModal_7(data.modal_7);
      changeModal_8(data.modal_8);
    }
    if(lang == "ES"){
      data = data.ES
      changeModal_1(data.modal_1);
      changeModal_2(data.modal_2);
      changeModal_3(data.modal_3);
      changeModal_4(data.modal_4);
      changeModal_5(data.modal_5);
      changeModal_6(data.modal_6);
      changeModal_7(data.modal_7);
      changeModal_8(data.modal_8);
    }
  });
})

function changeModal_1(modal){
  var position = 0; //Esta variable nos dice en que imagen,titulo y subitutlo estamos.

// Hace que el carrusel se active desde que damos click (sin landing)
  $('#img-modal-01').click(function(){
    //add image
    $("#img-01").attr("src",modal[position].image)

    //add titulo
    $("#title-01").text(modal[position].title)

    //add subtitle
    $("#sub-01").text(modal[position].subtitle)
  })


	$("#img-01").animate({opacity: '1'},750);

  $('#right-arrow-1').click(function(){
    position += 1;
    if (position >= modal.length) {
      position = 0;
    }
    //Change image
    $("#img-01").animate({opacity: '0'},500,function(){
      $("#img-01").attr("src",modal[position].image)
    });
    $("#img-01").animate({opacity: '1'},500);

    //Change text
    $("#title-01").animate({opacity: '0'},500,function(){
      $("#title-01").text(modal[position].title)
    });
    $("#title-01").animate({opacity: '1'},500);

    //Change subtitle
    $("#sub-01").animate({opacity: '0'},500,function(){
      $("#sub-01").text(modal[position].subtitle)
    });
    $("#sub-01").animate({opacity: '1'},500);
  });

  $('#left-arrow-1').click(function(){
    position -= 1;
    if (position < 0) {
      position = modal.length-1
    }
    //change image
    $("#img-01").animate({opacity: '0'},500,function(){
      $("#img-01").attr("src",modal[position].image)
    });
    $("#img-01").animate({opacity: '1'},500);

    //Change text
    $("#title-01").animate({opacity: '0'},500,function(){
      $("#title-01").text(modal[position].title)
    });
    $("#title-01").animate({opacity: '1'},500);

    //Change subtitle
    $("#sub-01").animate({opacity: '0'},500,function(){
      $("#sub-01").text(modal[position].subtitle)
    });
    $("#sub-01").animate({opacity: '1'},500);
  });
};

function changeModal_2(modal){
  var position = 0; //Esta variable nos dice en que imagen,titulo y subitutlo estamos.

  $('#img-modal-02').click(function(){
    //Change image
    $("#img-02").attr("src",modal[position].image)

    //Change text
    $("#title-02").text(modal[position].title)

    //Change subtitle
    $("#sub-02").text(modal[position].subtitle)
  })

	$("#img-02").animate({opacity: '1'},750);

  $('#right-arrow-2').click(function(){
    position += 1;
    if (position >= modal.length) {
      position = 0;
    }
    //Change image
    $("#img-02").animate({opacity: '0'},500,function(){
      $("#img-02").attr("src",modal[position].image)
    });
    $("#img-02").animate({opacity: '1'},500);

    //Change text
    $("#title-02").animate({opacity: '0'},500,function(){
      $("#title-02").text(modal[position].title)
    });
    $("#title-02").animate({opacity: '1'},500);

    //Change subtitle
    $("#sub-02").animate({opacity: '0'},500,function(){
      $("#sub-02").text(modal[position].subtitle)
    });
    $("#sub-02").animate({opacity: '1'},500);
  });

  $('#left-arrow-2').click(function(){
    position -= 1;
    if (position < 0) {
      position = modal.length-1
    }
    //change image
    $("#img-02").animate({opacity: '0'},500,function(){
      $("#img-02").attr("src",modal[position].image)
    });
    $("#img-02").animate({opacity: '1'},500);

    //Change text
    $("#title-02").animate({opacity: '0'},500,function(){
      $("#title-02").text(modal[position].title)
    });
    $("#title-02").animate({opacity: '1'},500);

    //Change subtitle
    $("#sub-02").animate({opacity: '0'},500,function(){
      $("#sub-02").text(modal[position].subtitle)
    });
    $("#sub-02").animate({opacity: '1'},500);
  });
};

function changeModal_3(modal){
  var position = 0; //Esta variable nos dice en que imagen,titulo y subitutlo estamos.

  $('#img-modal-03').click(function(){
    //Change image
    $("#img-03").attr("src",modal[position].image)

    //Change text
    $("#title-03").text(modal[position].title)

    //Change subtitle
    $("#sub-03").text(modal[position].subtitle)
  })

	$("#img-03").animate({opacity: '1'},750);

  $('#right-arrow-3').click(function(){
    position += 1;
    if (position >= modal.length) {
      position = 0;
    }
    //Change image
    $("#img-03").animate({opacity: '0'},500,function(){
      $("#img-03").attr("src",modal[position].image)
    });
    $("#img-03").animate({opacity: '1'},500);

    //Change text
    $("#title-03").animate({opacity: '0'},500,function(){
      $("#title-03").text(modal[position].title)
    });
    $("#title-03").animate({opacity: '1'},500);

    //Change subtitle
    $("#sub-03").animate({opacity: '0'},500,function(){
      $("#sub-03").text(modal[position].subtitle)
    });
    $("#sub-03").animate({opacity: '1'},500);
  });

  $('#left-arrow-3').click(function(){
    position -= 1;
    if (position < 0) {
      position = modal.length-1
    }
    //change image
    $("#img-03").animate({opacity: '0'},500,function(){
      $("#img-03").attr("src",modal[position].image)
    });
    $("#img-03").animate({opacity: '1'},500);

    //Change text
    $("#title-03").animate({opacity: '0'},500,function(){
      $("#title-03").text(modal[position].title)
    });
    $("#title-03").animate({opacity: '1'},500);

    //Change subtitle
    $("#sub-03").animate({opacity: '0'},500,function(){
      $("#sub-03").text(modal[position].subtitle)
    });
    $("#sub-03").animate({opacity: '1'},500);
  });
};

function changeModal_4(modal){
  var position = 0; //Esta variable nos dice en que imagen,titulo y subitutlo estamos.

  $('#img-modal-04').click(function(){
    //Change image
    $("#img-04").attr("src",modal[position].image)

    //Change text
    $("#title-04").text(modal[position].title)

    //Change subtitle
    $("#sub-04").text(modal[position].subtitle)
  })

	$("#img-04").animate({opacity: '1'},750);

  $('#right-arrow-4').click(function(){
    position += 1;
    if (position >= modal.length) {
      position = 0;
    }
    //Change image
    $("#img-04").animate({opacity: '0'},500,function(){
      $("#img-04").attr("src",modal[position].image)
    });
    $("#img-04").animate({opacity: '1'},500);

    //Change text
    $("#title-04").animate({opacity: '0'},500,function(){
      $("#title-04").text(modal[position].title)
    });
    $("#title-04").animate({opacity: '1'},500);

    //Change subtitle
    $("#sub-04").animate({opacity: '0'},500,function(){
      $("#sub-04").text(modal[position].subtitle)
    });
    $("#sub-04").animate({opacity: '1'},500);
  });

  $('#left-arrow-4').click(function(){
    position -= 1;
    if (position < 0) {
      position = modal.length-1
    }
    //change image
    $("#img-04").animate({opacity: '0'},500,function(){
      $("#img-04").attr("src",modal[position].image)
    });
    $("#img-04").animate({opacity: '1'},500);

    //Change text
    $("#title-04").animate({opacity: '0'},500,function(){
      $("#title-04").text(modal[position].title)
    });
    $("#title-04").animate({opacity: '1'},500);

    //Change subtitle
    $("#sub-04").animate({opacity: '0'},500,function(){
      $("#sub-04").text(modal[position].subtitle)
    });
    $("#sub-04").animate({opacity: '1'},500);
  });
};

function changeModal_5(modal){
  var position = 0; //Esta variable nos dice en que imagen,titulo y subitutlo estamos.

  $('#img-modal-05').click(function(){
    //Change image
    $("#img-05").attr("src",modal[position].image)

    //Change text
    $("#title-05").text(modal[position].title)

    //Change subtitle
    $("#sub-05").text(modal[position].subtitle)
  })

	$("#img-05").animate({opacity: '1'},750);

  $('#right-arrow-5').click(function(){
    position += 1;
    if (position >= modal.length) {
      position = 0;
    }
    //Change image
    $("#img-05").animate({opacity: '0'},500,function(){
      $("#img-05").attr("src",modal[position].image)
    });
    $("#img-05").animate({opacity: '1'},500);

    //Change text
    $("#title-05").animate({opacity: '0'},500,function(){
      $("#title-05").text(modal[position].title)
    });
    $("#title-05").animate({opacity: '1'},500);

    //Change subtitle
    $("#sub-05").animate({opacity: '0'},500,function(){
      $("#sub-05").text(modal[position].subtitle)
    });
    $("#sub-05").animate({opacity: '1'},500);
  });

  $('#left-arrow-5').click(function(){
    position -= 1;
    if (position < 0) {
      position = modal.length-1
    }
    //change image
    $("#img-05").animate({opacity: '0'},500,function(){
      $("#img-05").attr("src",modal[position].image)
    });
    $("#img-05").animate({opacity: '1'},500);

    //Change text
    $("#title-05").animate({opacity: '0'},500,function(){
      $("#title-05").text(modal[position].title)
    });
    $("#title-05").animate({opacity: '1'},500);

    //Change subtitle
    $("#sub-05").animate({opacity: '0'},500,function(){
      $("#sub-05").text(modal[position].subtitle)
    });
    $("#sub-05").animate({opacity: '1'},500);
  });
};

function changeModal_6(modal){
  var position = 0; //Esta variable nos dice en que imagen,titulo y subitutlo estamos.

  $('#img-modal-06').click(function(){
    //Change image
    $("#img-06").attr("src",modal[position].image)

    //Change text
    $("#title-06").text(modal[position].title)

    //Change subtitle
    $("#sub-06").text(modal[position].subtitle)
  })

	$("#img-06").animate({opacity: '1'},750);

  $('#right-arrow-6').click(function(){
    position += 1;
    if (position >= modal.length) {
      position = 0;
    }
    //Change image
    $("#img-06").animate({opacity: '0'},500,function(){
      $("#img-06").attr("src",modal[position].image)
    });
    $("#img-06").animate({opacity: '1'},500);

    //Change text
    $("#title-06").animate({opacity: '0'},500,function(){
      $("#title-06").text(modal[position].title)
    });
    $("#title-06").animate({opacity: '1'},500);

    //Change subtitle
    $("#sub-06").animate({opacity: '0'},500,function(){
      $("#sub-06").text(modal[position].subtitle)
    });
    $("#sub-06").animate({opacity: '1'},500);
  });

  $('#left-arrow-6').click(function(){
    position -= 1;
    if (position < 0) {
      position = modal.length-1
    }
    //change image
    $("#img-06").animate({opacity: '0'},500,function(){
      $("#img-06").attr("src",modal[position].image)
    });
    $("#img-06").animate({opacity: '1'},500);

    //Change text
    $("#title-06").animate({opacity: '0'},500,function(){
      $("#title-06").text(modal[position].title)
    });
    $("#title-06").animate({opacity: '1'},500);

    //Change subtitle
    $("#sub-06").animate({opacity: '0'},500,function(){
      $("#sub-06").text(modal[position].subtitle)
    });
    $("#sub-06").animate({opacity: '1'},500);
  });
};

function changeModal_7(modal){
  var position = 0; //Esta variable nos dice en que imagen,titulo y subitutlo estamos.

  $('#img-modal-07').click(function(){
    //Change image
    $("#img-07").attr("src",modal[position].image)

    //Change text
    $("#title-07").text(modal[position].title)

    //Change subtitle
    $("#sub-07").text(modal[position].subtitle)
  })

	$("#img-07").animate({opacity: '1'},750);

  $('#right-arrow-7').click(function(){
    position += 1;
    if (position >= modal.length) {
      position = 0;
    }
    //Change image
    $("#img-07").animate({opacity: '0'},500,function(){
      $("#img-07").attr("src",modal[position].image)
    });
    $("#img-07").animate({opacity: '1'},500);

    //Change text
    $("#title-07").animate({opacity: '0'},500,function(){
      $("#title-07").text(modal[position].title)
    });
    $("#title-07").animate({opacity: '1'},500);

    //Change subtitle
    $("#sub-07").animate({opacity: '0'},500,function(){
      $("#sub-07").text(modal[position].subtitle)
    });
    $("#sub-07").animate({opacity: '1'},500);
  });

  $('#left-arrow-7').click(function(){
    position -= 1;
    if (position < 0) {
      position = modal.length-1
    }
    //change image
    $("#img-07").animate({opacity: '0'},500,function(){
      $("#img-07").attr("src",modal[position].image)
    });
    $("#img-07").animate({opacity: '1'},500);

    //Change text
    $("#title-07").animate({opacity: '0'},500,function(){
      $("#title-07").text(modal[position].title)
    });
    $("#title-07").animate({opacity: '1'},500);

    //Change subtitle
    $("#sub-07").animate({opacity: '0'},500,function(){
      $("#sub-07").text(modal[position].subtitle)
    });
    $("#sub-07").animate({opacity: '1'},500);
  });
};

function changeModal_8(modal){
  var position = 0; //Esta variable nos dice en que imagen,titulo y subitutlo estamos.

  $('#img-modal-08').click(function(){
    //Change image
    $("#img-08").attr("src",modal[position].image)

    //Change text
    $("#title-08").text(modal[position].title)

    //Change subtitle
    $("#sub-08").text(modal[position].subtitle)
  })

	$("#img-08").animate({opacity: '1'},750);

  $('#right-arrow-8').click(function(){
    position += 1;
    if (position >= modal.length) {
      position = 0;
    }
    //Change image
    $("#img-08").animate({opacity: '0'},500,function(){
      $("#img-08").attr("src",modal[position].image)
    });
    $("#img-08").animate({opacity: '1'},500);

    //Change text
    $("#title-08").animate({opacity: '0'},500,function(){
      $("#title-08").text(modal[position].title)
    });
    $("#title-08").animate({opacity: '1'},500);

    //Change subtitle
    $("#sub-08").animate({opacity: '0'},500,function(){
      $("#sub-08").text(modal[position].subtitle)
    });
    $("#sub-08").animate({opacity: '1'},500);
  });

  $('#left-arrow-8').click(function(){
    position -= 1;
    if (position < 0) {
      position = modal.length-1
    }
    //change image
    $("#img-08").animate({opacity: '0'},500,function(){
      $("#img-08").attr("src",modal[position].image)
    });
    $("#img-08").animate({opacity: '1'},500);

    //Change text
    $("#title-08").animate({opacity: '0'},500,function(){
      $("#title-08").text(modal[position].title)
    });
    $("#title-08").animate({opacity: '1'},500);

    //Change subtitle
    $("#sub-08").animate({opacity: '0'},500,function(){
      $("#sub-08").text(modal[position].subtitle)
    });
    $("#sub-08").animate({opacity: '1'},500);
  });
};
