const button2 = document.querySelector('.button2');

function alertbtn(){

alert(" Hey I am btn2 I Love JavaScript");

}

button2.addEventListener("click",alertbtn);


const newBgColor = document.querySelector(".box3");

function changeBgColor(){

  newBgColor.style.backgroundColor = "black";
}


function revertBgColor(){
newBgColor.style.backgroundColor="#003663"

}

newBgColor.addEventListener("mouseover", changeBgColor);
newBgColor.addEventListener("mouseout", changeBgColor);