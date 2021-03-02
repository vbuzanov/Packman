let body = document.body;
let pakman = document.getElementById('pakman');
let mouthPakm = document.getElementById('mouthPakm');
let apple = document.getElementById('apple');
let score = document.getElementById('score');
let appleW = parseInt(getComputedStyle(apple).width);
let appleH = parseInt(getComputedStyle(apple).height);
let bodyW = body.getBoundingClientRect().width;
let bodyH = body.getBoundingClientRect().height;
let pakmanW = pakman.getBoundingClientRect().width;
let pakmanH = pakman.getBoundingClientRect().height;
let x = y = 0;
let xApple = Math.floor(Math.random()*(bodyW-appleW));
let yApple = Math.floor(Math.random()*(bodyH-appleH));

apple.style.left = xApple+'px';
apple.style.top = yApple+'px';
apple.style.display = 'block';
let step = 3;
let count = 0;
let countKey = new Array(4);

body.addEventListener('keydown', (event)=>{
    if(countKey[0] == 'KeyD' && countKey[3] == 'KeyW'){
        x+=step;
        y-=step;
        mouthPakm.classList.toggle('bigMouthPakm')
        pakman.style.transform = 'rotate(-45deg)';
    }
    else if(countKey[3] == 'KeyW' && countKey[1] == 'KeyA'){
        x-=step;
        y-=step;
        mouthPakm.classList.toggle('bigMouthPakm')
        pakman.style.transform = 'rotate(-135deg)';
    }
    else if(countKey[1] == 'KeyA' && countKey[2] == 'KeyS'){
        x-=step;
        y+=step;
        mouthPakm.classList.toggle('bigMouthPakm')
        pakman.style.transform = 'rotate(135deg)';
    }
    else if(countKey[2] == 'KeyS' && countKey[0] == 'KeyD'){
        x+=step;
        y+=step;
        mouthPakm.classList.toggle('bigMouthPakm')
        pakman.style.transform = 'rotate(45deg)';
    }
    else{
        if(event.code == 'KeyD'){
            countKey[0] = 'KeyD';
            x+=step;
            mouthPakm.classList.toggle('bigMouthPakm')
            pakman.style.transform = '';
        }
        if(event.code == 'KeyA'){
            countKey[1] = 'KeyA';
            x-=step;
            mouthPakm.classList.toggle('bigMouthPakm')
            pakman.style.transform = 'rotate(180deg)';
        }
           if(event.code == 'KeyS'){
            countKey[2] = 'KeyS';
            y+=step;
            mouthPakm.classList.toggle('bigMouthPakm')
            pakman.style.transform = 'rotate(90deg)';
        } 
        if(event.code == 'KeyW'){
            countKey[3] = 'KeyW';
            y-=step;
            mouthPakm.classList.toggle('bigMouthPakm')
            pakman.style.transform = 'rotate(-90deg)';
        } 
    }
    if(x < 0) x = 0
    if(x > bodyW-pakmanW) x = bodyW-pakmanW
    if(y < 0) y = 0
    if(y > bodyH-pakmanH) y = bodyH-pakmanH

    pakman.style.left = x +'px';
    pakman.style.top = y +'px';
 
    if(xApple+appleW/3 < x + pakmanW && xApple+appleW/3*2 > x && yApple+appleH/3 < y + pakmanH && yApple+appleH/3*2 > y){
        xApple = Math.floor(Math.random()*(bodyW-appleW));
        yApple = Math.floor(Math.random()*(bodyH-appleH));
        apple.style.left = xApple+'px';
        apple.style.top = yApple+'px';
        score.innerText = ++count;
    }
})

body.addEventListener('keyup', (event)=>{
    if(event.code == 'KeyD') countKey[0] = '';
    if(event.code == 'KeyA') countKey[1] = '';
    if(event.code == 'KeyS') countKey[2] = '';
    if(event.code == 'KeyW') countKey[3] = '';
  });