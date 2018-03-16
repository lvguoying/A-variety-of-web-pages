/**
 * Created by Administrator on 2018/3/15 0015.
 */
requirejs.config({
    paths:{
        jquery:'jquery-3.3.1'
    }
});
require(['jquery','dialog'],function ($,dialog) {
    $('#open').on('click',function () {
        var settings={
            width:300,
            height:200,
            title:'注册',
            content:'reigist.html'
        };
        dialog.open(settings);
        // var d1 = new Dialog();
        // var d2 = new Dialog();
    });
});