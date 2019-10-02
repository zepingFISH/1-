//index.js
//获取应用实例
const app = getApp()

Page({

    jj: function(e) {
      var zh = e.detail.value.zhanghao;
      var mima = e.detail.value.mima;
      if (zh.length==0&&mima.length==0) {
        console.log(12345678);
        wx.showModal({
          title: '提示',
          content: '请输入账号和密码'
        });
      } else if (zh.length == 0) {
        console.log(12345678);
        wx.showModal({
          title: '提示',
          content: '请输入账号'
        });
      } else if(mima.length == 0) {
        wx.showModal({
          title: '提示',
          content: '请输入密码'
        });
      }else {
        console.log(zh);
        console.log(mima);
        wx.navigateTo({
        url: '../logs/logs'
   })

      }

  },




 





})
