let button = document.createElement("button");

button.innerText = "I am a button";
button.style = "width: 100px; height; 50px; background-color:red;"; 

document.body.appendChild(button);

function buttonCliked()
{
  // button.style = "width: 100px; height:50px; background-color:blue; color:white;"
  button.className = "clicked-button";

}
button.addEventListener("click", buttonClicked);
