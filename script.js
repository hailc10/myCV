const ball = document.querySelector('.switch');
const lightThemeBtn = document.querySelector('.wrapper');
const lightThemeCanvas = document.getElementById('body');
lightThemeBtn.addEventListener('click', function(){
    if(lightThemeCanvas.classList.contains('light-theme')){
        lightThemeCanvas.classList.remove('light-theme')
    }   
    else{
        lightThemeCanvas.classList.add('light-theme')
    }
});