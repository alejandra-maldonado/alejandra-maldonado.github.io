function changeModal_1(){
  var position = 0; //Esta variable nos dice en que imagen,titulo y subitutlo estamos.

  var modal = [
    {
      image: 'images/perrito.jpg',
      title: 'Little THIS puppy.',
      subtitle: 'I love all Dogs'
    },

    {
      image: 'images/tenis.jpeg',
      title: 'SNEAKERS.',
      subtitle: 'I love this design'
    }
  // AGREGAS ESTO QUE ESTA ENTRE LLAVES Y LE CAMBIAS LA DIRECCION DE IMAGEN, TITULO Y SUBTITULO... Y LA COMA!
    // {
    //   image: 'images/tenis.jpeg',
    //   title: 'SNEAKERS.',
    //   subtitle: 'I love this design'
    // }
  ]

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

changeModal_1();

function changeModal_2(){
  var position = 0; //Esta variable nos dice en que imagen,titulo y subitutlo estamos.

  var modal = [
    {
      image: 'images/intro-bg.jpg',
      title: 'Intro image',
      subtitle: 'Subtitle de intro'
    },

    {
      image: 'images/perrito.jpg',
      title: 'Little puppy.',
      subtitle: 'I love Dogs'
    },

    {
      image: 'images/tenis.jpeg',
      title: 'SNEAKERS.',
      subtitle: 'I love this design'
    },

   //PON LAS COMAAAS!!!!
  // AGREGAS ESTO QUE ESTA ENTRE LLAVES Y LE CAMBIAS LA DIRECCION DE IMAGEN, TITULO Y SUBTITULO... Y LA COMA!
    // {
    //   image: 'images/tenis.jpeg',
    //   title: 'SNEAKERS.',
    //   subtitle: 'I love this design'
    // }
  ]

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

changeModal_2();

/*
  Si quieres agregar más carruseles a los siguientes modales:
  1. Copia y pega la funcion changeModal_1(), esta nueva funcion pegada es con la que vamos a trabajar
  (puede ser la 2 tambien, no pasa nada, son "iguales")

    1.1 Copia y pega desde donde iniciamos la funcion hasta donde la cerramos y la mandamos a llamar, es decir:

          function changeModal_1(){ <-- aqui inicia
            ...
          }                         <-- aqui se cierra
          changeModal_1();          <-- Aqui la mandamos a llamar

    1.2 Cambia el nombre de la funcion por el modal que vayamos. Ej:

          function changeModal_x(){
            ...
          }
          changeModal_x();

  2. Cambia el objeto con nombre de variable "modal" por las imagenes, titulos y subitulos, es decir:

      var modal = [
        ...
      ]

    2.1 Cambia todos los ids por el numero de modal que vayamos.
      2.1.1 Los ids son los que tieneen #. Ej:

            $("#img-0x").animate({opacity: '1'},750);

            $('#right-arrow-x').click(function(){
              position += 1;
              if (position >= modal.length) {
                position = 0;
              }
              //Change image
              $("#img-0x").animate({opacity: '0'},500,function(){
                $("#img-0x").attr("src",modal[position].image)
              });
              $("#img-0x").animate({opacity: '1'},500);

  Y listooo!

*/
