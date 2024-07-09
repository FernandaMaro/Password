const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordEL1 = document.getElementById("password-el")
let passwordEL2 = document.getElementById("password-el2")
let generateBtn = document.getElementById("generate-btn")
generateBtn.addEventListener("click", function getPassword(){
    passwordEL1.textContent = "";
    passwordEL2.textContent = "";
    for (let i=0; i<15;i++){
        let randomCharacters1 = Math.floor(Math.random()*characters.length)
        let randomCharacters2 = Math.floor(Math.random()*characters.length)
        passwordEL1.textContent+= characters[randomCharacters1]
        passwordEL2.textContent+= characters[randomCharacters2]
  }
}) 

function toggleTheme() {
  let body = document.body;
  let themeButton = document.getElementById('toggleTheme');

  body.classList.toggle('dark-mode');
  let isDarkMode = body.classList.contains('dark-mode');

  themeButton.setAttribute('aria-checked', isDarkMode);
  themeButton.textContent = isDarkMode ? 'Dark Mode' : 'Light Mode';
}


