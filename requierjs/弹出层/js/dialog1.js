/**
 * Created by Administrator on 2018/3/15 0015.
 */
requirejs.config({
    paths:{
        jquery:'jquery-3.3.1'
    }
});
define(['jquery'],function ($) {
  function Dialog() {
      this.defaultSettings={
          width:500,
          height:400,
          title:'弹出层',
          content:''
      };
      this.$container = $('<div class="dialog-container">')
  }
  Dialog.prototype.open = function () {

  };
  return Dialog;
});