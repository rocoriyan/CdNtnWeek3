/* index script */
// START task 1
let hideCat = document.getElementById("closeCat");
const hideButton = document.getElementById("hideMe"); //setting up variables for javascript
let isHidden = false;

hideButton.addEventListener('click', (event) => { //when you click the button...
    hideCat.classList.toggle('hide'); //toggle visibility. toggle is used here as otherwise first click does nothing. previous code was similar to bonus, using boolean
})
// END task 1

// START task 2
const changeButton = document.getElementById("changeMe");

changeButton.addEventListener('click', (changeImg) => {
    document.getElementById("changeCat").src = document.getElementById("changeTxt").value; //change img source to text found in text input
    document.getElementById("changeCat").alt = "your chosen image"; //change alt because otherwise it'll say "a cat hiding under the covers" for every image
});
// END task 2

// START task 3
const colourButton = document.getElementById("colourMe");

colourButton.addEventListener('click', (changeColour) => { //when button is clicked...
    document.getElementById("task3header").style.color=document.getElementById("favColour").value; //recolour the header for task 3
});
// END task 3

// START task 4
document.addEventListener('click', (outputPos) => { //when page is clicked
    document.getElementById("task4p").textContent = `Click co-ordinates - X: ${outputPos.clientX}  Y: ${outputPos.clientY}`; //output x and y position
})
// END task 4

// START bonus
const catImg = document.getElementById("danceCat");
const danceButton = document.getElementById("makeDance"); 
let catRight = false; //is the cat facing right? initially its not

danceButton.addEventListener('click', (makeDance) =>{ // when the button is clicked..
    catRight = !catRight; //this variable becomes opposite boolean value. basically, the cat has been told to change direction
    if(catRight){ //if cat is facing right
        catImg.src="cat left.jpg"; //change image to cat facing left
        catImg.alt="a cat on its hind legs with its paws in the air, facing left";//update alt text accordingly
    }
    else{ //if cat is facing left
        catImg.src="cat right.jpg"; //change image to cat facing right
        catImg.alt="a cat on its hind legs with its paws in the air, facing right"; //update alt text accordingly
    };
});
// END bonus