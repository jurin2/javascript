import {setColor} from './myFunction.js';

let _btn = document.querySelector('button');

//마우스 오버 이벤트
_btn.addEventListener('mouseover',(event)=>{
    event.target.style.opacity=1;
})

//마우스 아웃 이벤트
_btn.addEventListener('mouseout',(event)=>{
    event.target.style.opacity=0.3;
})

//버튼 클릭 이벤트
_btn.addEventListener('click',(event)=>{
    let btnTxt = event.target.innerText.toLowerCase();
    if(btnTxt == 'light'){
        event.target.innerText = 'dark';
        setColor.dark();
    }else if(btnTxt == 'dark'){
        event.target.innerText = 'light';
        setColor.light();
    }
});
    

