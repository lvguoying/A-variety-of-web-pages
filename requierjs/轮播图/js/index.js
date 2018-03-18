/**
 * Created by Administrator on 2018/3/17 0017.
 */
require(['jquery','carousel'],function ($,Carousel) {
    var c1 = new Carousel();
    var settings1 = {
        selector:'#div1',
        imgArr:['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'],
        speed: 500,
        buttonStyle:'square'//circle
    };
    c1.init(settings1);

    var c2 = new Carousel();

    var settings2 = {
        selector:'#div2',
        imgArr:['img/2.jpg','img/3.jpg','img/4.jpg'],
        buttonStyle:'circle'//circle
    };

    c2.init(settings2);
});