// START task 1
const hideCat = document.getElementById("closeCat");
const hideButton = document.getElementById("hideMe"); //setting up variables for javascript
let isHidden = false;

hideButton.addEventListener('click', (event) => { //when you click the button...
    isHidden = !isHidden;
    if(isHidden){
        hideCat.style.visibility="visible"; //show the cat image
    }
    else{
        hideCat.style.visibility="hidden"; //hide the cat image
    }
    
})
// END task 1

// START task 2
const changeButton = document.getElementById("changeMe");

changeButton.addEventListener('click', (changeImg) => {
    document.getElementById("changeCat").src = document.getElementById("changeTxt").value;
});
// END task 2

// START task 3
const colourButton = document.getElementById("colourMe");

colourButton.addEventListener('click', (changeColour) => {
    document.getElementById("task3header").style.color=document.getElementById("favColour").value;
});
// END task 3

// START bonus
const catImg = document.getElementById("danceCat");
const danceButton = document.getElementById("makeDance"); 
let catRight = false; //is the cat facing right? initially its not

danceButton.addEventListener('click', (makeDance) =>{ // when the button is clicked..
    catRight = !catRight; //this variable becomes opposite boolean value. basically, the cat has been told to change direction
    if(catRight){ //if catRight is true
        catImg.src="cat right.jpg"; //change image to cat facing right
        catImg.alt="a cat on its hind legs with its paws in the air, facing left"; //update alt text accordingly
    }
    else{ //if catRight is false
        catImg.src="cat left.jpg"; //change image to cat facing left
        catImg.alt="a cat on its hind legs with its paws in the air, facing right";//update alt text accordingly
    };
});
// END bonus