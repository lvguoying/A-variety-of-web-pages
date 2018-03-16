/**
 * Created by Administrator on 2018/3/15 0015.
 */
requirejs.config({
    paths:{
        jquery:'jquery-3.3.1'
    }
});
define(['jquery'],function ($) {
    return {
        open:function (settings) {
            var defaultSettings={
                width:500,
                height:400,
                title:'其他',
                content:''
            };
            $.extend(defaultSettings,settings);

            var html = '<div class="dialog-container">'
                +'<div class="dialog-mask"></div>'
                +'<div class="dialog-box">'
                +'<div class="dialog-title">'
                +'<div class="dialog-item">'+defaultSettings.title+'弹出层</div>'
                +'<div class="dialog-close">[X]</div>'
                +'</div>'
                +'<div class="dialog-content"></div>'
                +'</div>'
                +'</div>';
            $(document.body).append(html);
            $('.dialog-box').css({
                width:defaultSettings.width,
                height:defaultSettings.height
            });
            console.log(defaultSettings.content);
            if(defaultSettings.content.indexOf('html')!=-1){

                $('.dialog-content').load(defaultSettings.content)

            }else{
                $('.dialog-content').html(defaultSettings.content);
            }
            $('.dialog-close').on('click',function () {
                $('.dialog-container').remove();
                $(this).closest('.dialog-container').remove();
            })
        }
    }
});