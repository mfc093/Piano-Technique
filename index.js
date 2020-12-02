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
