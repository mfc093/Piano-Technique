$( document ).ready(function() {
    console.log( "ready!" );


function sayHello() {
    document.getElementById("demo").innerHTML = "Congratulations! You are Pollini!";
    window.alert("Welcome to a whole new world of knowledge and dreams!");
    // document.getElementById("bodyid").style.backgroundColor="gold";
    // document.getElementById("wrist").innerHTML = "Canello";
    // document.querySelector(".footer").style.backgroundColor="gold";
    // document.getElementsByClassName('card')[2].style.backgroundColor="red";
    // document.querySelector(".card-container").children[0].innerHTML = "hola";

  }
  //Ojo que amb doble entrecomillado no em funcionava el selector
  function changeOrder(){
    const firstCard = document.querySelector('.card-container').children[0].innerHTML;
    document.querySelector('.card-container').children[0].innerHTML = document.querySelector('.card-container').children[1].innerHTML;
    document.querySelector('.card-container').children[1].innerHTML = document.querySelector('.card-container').children[2].innerHTML;
    document.querySelector('.card-container').children[2].innerHTML = document.querySelector('.card-container').children[3].innerHTML;
    document.querySelector('.card-container').children[3].innerHTML = firstCard;
  }


  //jQuery example (if you want to try to make your own you can start with more simple ones)

  $('.container h1').on('click', function(){
    console.log('You can read me at the console and prove that the selector is working correctly');

    //generate a random number between 0 and 100
    const randomSize = Math.floor(Math.random() * 100);

    //generate two random HEX colors
    const randomHex1 = '#' + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);
    const randomHex2 = '#' + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);
    const randomHex3 = '#' + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);
    const randomHex4 = '#' + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);

    //assign random size to the font-size
    $(this).css('font-size', randomSize);

    //assign random color 1 as background-color
    $(this).css('background-color', randomHex1);

    $('body').css('background-color', randomHex2);

    //assign random color 2 as font color
    $(this).css('color', randomHex3);

    //i va de propina tambien le asignem el color al header, toma ya
    $('.my_navbar').css('background-color', randomHex4);
  });

});
