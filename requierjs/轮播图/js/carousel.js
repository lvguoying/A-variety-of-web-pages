/**
 * Created by Administrator on 2018/3/17 0017.
 */
define(['jquery'],function ($) {
    //轮播图
    function Carousel() {
        this.$container = $('<div class="carousel-container"></div>');
        this.$img = $('<div class="carousel-img"></div>');
        this.$nav = $('<ul class="carousel-nav"></ul>');
        this.$arrows = $('<div class="carousel-arrows"></div>');
        this.$prev = $('<span>&lt;</span>');
        this.$next = $('<span>&gt;</span>');
        this.defaultSettings = {
            imgArr:[],
            speed: 1000,
            buttonStyle:'square',//circle
            selector:document.body


    };
        this.nowIndex = 0;//保存当前对象现实的图片的索引
        this.timer = null;
    }
    Carousel.prototype.init = function (settings) {
        $.extend(this.defaultSettings,settings);
        this.$arrows.append(this.$prev).append(this.$next);
        this.$container.append(this.$img).append(this.$nav).append(this.$arrows).appendTo(this.defaultSettings.selector);
        for(var i=0;i<this.defaultSettings.imgArr.length;i++){
            this.$img.append('<img src="'+this.defaultSettings.imgArr[i]+'"/>');
            this.$nav.append('<li>'+ [i+1] +'</li>');
        }
        $('img:eq(0)',this.$img).add($('li:eq(0)',this.$nav)).addClass('selected');
        if(this.defaultSettings.buttonStyle =='circle'){
            $('li',this.$nav).css({
                borderRadius:'50%'
            }).html('');
        }

        var This = this;
        $('li',this.$nav).on('mouseover',function () {
            This.nowIndex = $(this).index();
            changeImg()
        });
        this.$prev.on('click',function () {
            This.nowIndex--;
            if(This.nowIndex == -1){
                This.nowIndex =This.defaultSettings.imgArr.length -1
            }
            changeImg()
        });
        this.$next.on('click',function () {
            This.nowIndex++;
            if(This.nowIndex == This.defaultSettings.imgArr.length){
                This.nowIndex=0
            }
            changeImg()
        });
        this.$container.hover(function () {
            clearInterval(This.timer);
        },function () {
            play()
        });
        play();

        function play() {
            This.timer = setInterval(function () {
                This.$next.trigger('click')
            },This.defaultSettings.speed);
        }
       // 所有方法
        function changeImg() {

            $('li',This.$nav).eq(This.nowIndex).add($('img',This.$img).eq(This.nowIndex)).addClass('selected').siblings().removeClass('selected');

                 }
    };
        return Carousel;
});