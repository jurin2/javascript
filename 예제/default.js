let _btn = document.getElementsByTagName('button');
let _body = document.querySelector('body');
let mainTit = document.querySelector('h1>a');
let navList = document.querySelectorAll('li>a','li');

console.log(typeof _btn);

for(let i=0; i<_btn.length; i++){
    _btn[i].addEventListener('mouseover',(event)=>{ 
        event.target.style.opacity = 1;   
    });
}

for(let i=0; i<_btn.length; i++){
    _btn[i].addEventListener('mouseout',(event)=>{ 
        event.target.style.opacity = 0.3;   
    });
}



function btnDark(){
    _btn.addEventListener('click',()=>{
        _body.style.backgroundColor = 'black';
        _body.style.color = '#fff';
        mainTit.style.color = '#fff';
        for(let idx=0; idx<navList.length; idx++){
            navList[idx].style.color = '#fff';
        }
    })
}
btnTg();