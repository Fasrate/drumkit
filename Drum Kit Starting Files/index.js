for(var i=0;i<7;i++)
{

  document.querySelectorAll("button")[i].addEventListener("click",handleclick);

}

 function handleclick()
 {
   var buttonpressed=this.innerHTML;

  makesound(buttonpressed);
  animate(buttonpressed);
  }

  document.addEventListener("keydown",handlekey);

   function handlekey()
   {

     makesound(event.key);
     animate(event.key);
   }

   function makesound(key)
   {
     switch(key)
     {
       case "w":
           var audio = new Audio("sounds/tom-1.mp3");
           audio.play();
         break;
       case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
          break;
       case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
          break;
       case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
          break;
       case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
           break;
      case "k":
          var audio = new Audio("sounds/kick-bass.mp3");
          audio.play();
        break;
      case "l":
          var audio = new Audio("sounds/snare.mp3");
          audio.play();
        break;
        default:  console.log(key);
      }

   }
   function animate(key)
   {

     document.querySelector("."+key).classList.add("pressed");
     setTimeout(fun,100);
     function fun()
     {
       document.querySelector("."+key).classList.remove("pressed");
     }
   }
