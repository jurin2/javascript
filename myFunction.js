let _btn = document.querySelector('button');
let _body = document.querySelector('body');
let mainTit =  document.querySelector('h1>a');
let navList =  document.querySelectorAll('li>a,li');
let _li =  document.querySelectorAll('li');
let _p = document.querySelector('p');
let _hr = document.querySelector('hr');


let setColor ={
    dark:()=>{
        _btn.addEventListener('click',()=>{
            _body.style.backgroundColor='#000';
            mainTit.style.color='#fff';
            _hr.style.backgroundColor = '#fff';
            _p.style.color='#fff'; 
            for(let idx=0; idx<navList.length; idx++){
                navList[idx].style.color='#fff';
            }         
        })
    },
    light:()=>{
        _btn.addEventListener('click',()=>{
            _body.style.backgroundColor='#fff';
            mainTit.style.color='#8b0000';
            _hr.style.backgroundColor = '#000';
            _p.style.color='#000'; 
            for(let idx=0; idx<navList.length; idx++){
                navList[idx].style.color='#00008b';
            }         
        })   
    }
}


export{setColor};

// export {dark,light};