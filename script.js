const passwordDisplay = document.querySelector("#password");
const passwordBtn = document.querySelector("#generate");

let passwordSize;
let generated = "";
let lowCaps = false;
let highCaps = false;
let numCaps = false;
let spcCaps = false;
let mixCaps;

let lowCapsArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w","x","y","z"];
let highCapsArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let numCapsArray = ["1","2","3","4","5","6","6","7","8","9","10"];
let spcCapsArray = ["!","@","#","$","%","&","*"];
let mixCapsArray = [];

passwordBtn.addEventListener("click", function(){
  mixCapsArray.length = 0;
  generated = "";
  getPassword()
});


function getPassword(){
do {
  passwordSize = parseInt(prompt("Choose your password length: 8 - 128"));
console.log(passwordSize);
}
while (passwordSize < 8 || passwordSize > 128);


  lowCaps = confirm ("Do you want it to contain smallcaps?");
  highCaps = confirm ("Do you want it to contain capital characters?");
  numCaps = confirm ("Do you want it to contain numbers?");
  spcCaps = confirm ("Do you want it to contain special characters?");
  console.log(lowCaps);

  if (lowCaps == true){
    mixCapsArray = mixCapsArray.concat(lowCapsArray);
  }

  if (highCaps == true){
    mixCapsArray = mixCapsArray.concat(highCapsArray);
  }

  if (numCaps == true){
    mixCapsArray = mixCapsArray.concat(numCapsArray);
  }

  if (spcCaps == true){
    mixCapsArray = mixCapsArray.concat(spcCapsArray);
  }
  console.log(mixCapsArray);

  for (i = 0; i < passwordSize; i++){

    if (i == 1 && lowCaps == true){
     lowCaps = Math.floor(Math.random() * lowCapsArray.length);
      generated += lowCapsArray[lowCaps];
    }
    else if (i == 3 && highCaps == true){
      highCaps = Math.floor(Math.random() * highCapsArray.length);
      generated += highCapsArray[highCaps];
    }
    else if (i == 7 && numCapsArray == true){
      numCaps = Math.floor(Math.random() * numCapsArray.length);
      generated += numCapsArray[spcCaps];
    }
    else if (i == 9 && spcCapsArray == true){
      spcCaps = Math.floor(Math.random() * spcCapsArray.length);
      generated += spcCapsArray[spcCaps];
    }
    else {
      mixCaps = Math.floor(Math.random() * mixCapsArray.length);
      generated += mixCapsArray[mixCaps];
    }

    passwordDisplay.textContent = generated;
  }
}