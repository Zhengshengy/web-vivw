let title = document.title
wx.miniProgram.postMessage({ data:{title: title,desc:''} });
var isMiniprogram = false
wx.miniProgram.getEnv(function (res) {
    if (res.miniprogram){
        isMiniprogram = true
    }
})
var test = window.location.search;
var  tie=test.replace("?","")
var url=window.location.href;
url = encodeURIComponent(url);
let str = tie.split('=')
str = str[1]
var obj = {'url':'/pages/index/index?return_url='+url}
if (isMiniprogram && str != "miniprogram") {
    wx.miniProgram.redirectTo(obj)
}