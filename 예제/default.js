let _btn = document.querySelectorAll('button');
let _body = document.querySelector('body');
let mainTit =  document.querySelector('h1>a');
let navList =  document.querySelectorAll('li>a,li');
let _li =  document.querySelectorAll('li');
let _p = document.querySelector('p');
console.log(_btn);

//마우스 오버 이벤트
for(let idx=0;idx<_btn.length;idx++){
    _btn[idx].addEventListener('mouseover',(event)=>{
        event.target.style.opacity=1;
    })
}
//마우스 아웃 이벤트
for(let idx=0;idx<_btn.length;idx++){
    _btn[idx].addEventListener('mouseout',(event)=>{
        event.target.style.opacity=0.3;
    })
}
//마우스 클릭 이벤트
function btn(arr,bg,tit,p,list){
    _btn[arr].addEventListener('click',()=>{
        _body.style.backgroundColor=bg;
        mainTit.style.color=tit;
        _p.style.color=p; 
        for(let idx=0; idx<navList.length; idx++){
            navList[idx].style.color=list;
        }         
    })
}

btn(0,'#000','#fff','#fff','#fff');
btn(1,'#fff','#000','#000','#000');
