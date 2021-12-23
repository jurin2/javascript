window.onload = function(){
    document.querySelector('.box').style.position = 'fixed';
    document.querySelector('.box').style.left = '50%';
    document.querySelector('.box').style.top = '50%';
    document.querySelector('.box').style.width = '300px';
    document.querySelector('.box').style.height = '300px';
    document.querySelector('.box').style.backgroundColor = '#f00';
    document.querySelector('.box').style.transform = 'translate(-50%,-50%) rotate(45deg)';
}