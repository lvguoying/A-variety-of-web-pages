window.onload = function () {
    (function () {

        var oContainer = document.getElementById('container');
        var aImg = oContainer.getElementsByTagName('img');
        var oBtn = document.getElementById('btn');
        var oNum = document.getElementById('num');
        var oKey = document.getElementById('key');
        var bKey = false;  //用于切换答案开关
        var oKeyImg = document.getElementById('keyImg');
        var zIndex = 1;
        var collide = [];
        var nearElem = null;

        for (var i = aImg.length - 1; i >= 0; i--) {
            aImg[i].style.left = aImg[i].offsetLeft + 'px';
            aImg[i].style.top = aImg[i].offsetTop + 'px';
            aImg[i].style.position = 'absolute';
            aImg[i].pos = {
                left: aImg[i].offsetLeft,
                top: aImg[i].offsetTop
            };
            drag(aImg[i]);
        }

        function drag(elem) {

            elem.onmousedown = function (e) {
                e = e || event;
                var iDisX = e.clientX - elem.offsetLeft;
                var iDisY = e.clientY - elem.offsetTop;
                elem.style.zIndex = zIndex++;

                document.onmousemove = function (e) {
                    e = e || event;
                    var iLeft = e.clientX - iDisX;
                    var iTop = e.clientY - iDisY;
                    elem.style.top = iTop + 'px';
                    elem.style.left = iLeft + 'px';
                    collide = [];
                    for (var i = 0; i < aImg.length; i++) {
                        if (aImg[i] == elem) {
                            continue;
                        }
                        var isCol = checkCollide(elem, aImg[i]);
                        if (isCol) {
                            collide.push(aImg[i]);
                        }
                    }
                    if (collide) {
                        nearElem = nearest(elem);
                    } else {
                        nearElem = null;
                    }
                    return false;
                };

                document.onmouseup = function () {
                    document.onmousemove = null;
                    if (nearElem) {
                        animate(elem, nearElem.pos);
                        animate(nearElem, elem.pos);
                        var tmpPos = elem.pos;
                        elem.pos = nearElem.pos;
                        nearElem.pos = tmpPos;
                        nearElem = null;
                    } else {
                        animate(elem, elem.pos);
                    }

                };
            }

        }

        function checkCollide(elem, target) {
            var elemR = elem.offsetLeft + elem.offsetWidth,
                elemB = elem.offsetTop + elem.offsetHeight,
                elemT = elem.offsetTop,
                elemL = elem.offsetLeft;
            var targetR = target.offsetLeft + target.offsetWidth,
                targetB = target.offsetTop + target.offsetHeight,
                targetT = target.offsetTop,
                targetL = target.offsetLeft;
            return !(elemR < targetL || elemB < targetT || elemL > targetR || elemT > targetB);
        }

        function nearest(elem) {
            var minDis = 9999;
            var index = -1;
            for (var i = 0; i < collide.length; i++) {
                var x = collide[i].offsetTop - elem.offsetTop;
                var y = collide[i].offsetLeft - elem.offsetLeft;
                var iDis = Math.sqrt(x * x + y * y);
                if (iDis < minDis) {
                    minDis = iDis;
                    index = i;
                }
            }
            return collide[index];
        }

        function random() {  //随机图片
            var aImage = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            var aSource = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            aImage.sort(function () {
                return Math.random() - 0.5;
            });
            aSource.sort(function () {
                return Math.random() - 0.5;
            });
            for (var i = 0; i < aImg.length; i++) {
                aImg[i].src = 'img/' + aSource[5] + '_0' + aImage[i] + '.png';
            }
            oNum.innerHTML = aSource[5].toString();
            oKeyImg.src = 'img/' + aSource[5] + '_00.jpg';
        }

        random();

        oBtn.onclick = function () {
            random();
            if (bKey) {
                oKey.onclick();
            }
        };

        oKey.onclick = function () {
            if (bKey) {
                oKeyImg.style.display = 'none';
                oKey.innerHTML = '答案';
            } else {
                oKeyImg.style.display = 'block';
                oKey.innerHTML = '隐藏';
            }
            bKey = !bKey;
        }


    })();
};