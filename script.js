//Declare handlers
let length = document.querySelector("#passwordLength");
let lowCaps = document.querySelector("#lowYes");
let uppCaps = document.querySelector("#uppYes");
let numCaps = document.querySelector("#numYes");
let spcCaps = document.querySelector("#spcYes");
let genBtn = document.querySelector("#generate");
let backBtn = document.querySelector("#backBtn");
let presentBox = document.querySelector("#presentBox");
let message = document.querySelector("#message");
let container = document.querySelector("#container");
//Declare Password Arrays
let lowCapsArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w","x","y","z"];
let uppCapsArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let numCapsArray = ["1","2","3","4","5","6","6","7","8","9","10"];
let spcCapsArray = ["!","@","#","$","%","&","*"];
let mixCapsArray = [];

//fn Validate Parameters for password

function isPasswordValid(){
    message.textContent ="";
    if (isNaN(parseInt(length.value))){
    message.textContent += "Password Length is not a number! ";
    message.setAttribute("style", "background-color: red; color: white;");
    return false;
    }
    else if (parseInt(length.value) < 8 || parseInt(length.value) > 128){
        message.textContent += "Length should be within 8 - 128! ";
        message.setAttribute("style", "background-color: red; color: white;");
        return false;
    }
    
    let x = (lowCaps.checked + uppCaps.checked + numCaps.checked + spcCaps.checked);
    if (x === 0){
        message.textContent += "You need at least one character type! ";
        message.setAttribute("style", "background-color: red; color: white;");
        return false;
    }
    else {
        return true;
    }
}

//fn Make the password
function generate(){
    let generated = "";
    let generateLength = parseInt(length.value);
    if (lowCaps.checked == true){
        mixCapsArray = mixCapsArray.concat(lowCapsArray);
      }
    
      if (uppCaps.checked == true){
        mixCapsArray = mixCapsArray.concat(uppCapsArray);
      }
    
      if (numCaps.checked == true){
        mixCapsArray = mixCapsArray.concat(numCapsArray);
      }
    
      if (spcCaps.checked == true){
        mixCapsArray = mixCapsArray.concat(spcCapsArray);
      }

      for (let i = 0; i < generateLength; i++){
          if (i == 1 && lowCaps.checked == true){
              let z = Math.floor(Math.random() * lowCapsArray.length);
              generated += lowCapsArray[z];
          }
          else if (i == 3 && uppCaps.checked == true){
            let z = Math.floor(Math.random() * uppCapsArray.length);
            generated += uppCapsArray[z];
        }
        else if (i == 5 && spcCaps.checked == true){
            let z = Math.floor(Math.random() * spcCapsArray.length);
            generated += spcCapsArray[z];
        }
        else if (i == 7 && numCaps.checked == true){
            let z = Math.floor(Math.random() * numCapsArray.length);
            generated += numCapsArray[z];
        }
        else {
            let z = Math.floor(Math.random() * mixCapsArray.length);
            generated += mixCapsArray[z];
        }


      }

        return generated;
      
}

//fn Event Listener

genBtn.addEventListener("click", function(){
    event.preventDefault();
    let x = isPasswordValid();
    if (x == true) {
        let y = generate();
        presentBox.textContent = y;
        container.classList.add("flipped");
    }

});
