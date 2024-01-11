let waiting = document.querySelector("header p");
let keyP = document.querySelector("#key p");
let codeP = document.querySelector("#code p");
let charP = document.querySelector("#charr p");
document.addEventListener('keypress', (keyClick) => {
    if(waiting.style.display != "none"){
        waiting.textContent="";
    }
    keyP.textContent = keyClick.key;
    codeP.textContent = keyClick.code;
    charP.textContent = keyClick.charCode;
});
let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent); //this is from stackoverflow (https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser)
if (isMobile) {
  /* your code here */
}