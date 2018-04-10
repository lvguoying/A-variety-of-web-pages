var startBtn = document.getElementById('btn');
var box = document.getElementById('box');
var flagBox = document.getElementById('flagBox');
var alertBox = document.getElementById('alertBox');
var alertImg = document.getElementById('alertImg');
var closeBtn = document.getElementById('close')
var minesNum;
var mineOver;
var block;
var mineMap = [];
bindEvent();
function bindEvent() {
    startBtn.onclick = function () {
        box.style.diplay = 'block';
        flagBox.style.diplay = 'block';
        init();
    };
    box.onmousedown = function(e){
        var event = e.target;
        if(e.which==1){
            leftClick(event);
        }else if(e.which==3){
            rightClick(event);
        }
        closeBtn.onclick = function(){
            alertBox.style.display = 'none';
            flagBox.style.display = 'none';
            box.style.display = 'none';
            box.innerHTML = '';
        }
    };

    box.oncontextmenu = function () {
        return false
    }
};

function init() {
    minesNum = 10;
    mineOver = 10;
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            var con = document.createElement('div');
            con.classList.add('block');
            con.setAttribute('id', i + '-' + j);
            box.appendChild(con);
            mineMap.push({ mine: 0 });
        }
    }
    block = document.getElementsByClassName('block');
    while (minesNum) {
        var minIndex = Math.floor(Math.random * 100);
        if (mineMap[minIndex].mine === 0) {
            mineMap[minIndex].mine = 1;
            block[minIndex].classList.add('islei');
            minesNum--;
        };
    };
};

function leftClick(dom){
     var islei = document.getElementsByClassName('islei');
     if(dom && dom.classList.contains('islei')){
         console.log("gameover");
         for(var i =0 ;i<islei.length;i++){
             islei[i].classList.add('show');
         }
         setTimeout(() => {
            alertBox.style.display = 'block';
            alertImg.style.backgroundImage = 'url("img/over.jpg")';
         }, 800);
     }else{
         var n = 0;

     }

};