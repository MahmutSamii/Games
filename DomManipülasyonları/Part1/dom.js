/*var buton = document.getElementById('buton');
var renk = document.querySelector('body');
var isred = false;
buton.addEventListener('click',function (){
    if (isred){
        renk.style.backgroundColor="white";
    }else{
        renk.style.backgroundColor="#fff0a4";
    }
    isred=!isred;
})*/
var buton = document.querySelector('#buton');

buton.addEventListener('click',function (){
   document.body.classList.toggle('red');
});
