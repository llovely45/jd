

var i = dialogs.select(
    "请选择你想要的功能", 
    "最后战役",/*1*/
    "待更新",
    "待更新", 
    "退出");
if (i == -1) {
    toast("选一个呗");
}
if (i == 0) {gn1()}
else if (i == 1){gn0()}
else if (i == 2){gn0()}
else if (i == 3){exit()}



function gn0(){toastLog("敬请期待");}
function gn1(){
    file = open("./"+"最后战役血量","a");
    file.close();
    file = open("./"+"最后战役血量","r");
    a=file.read();
    file.close();
    if (a==""){
    下载("最后战役血量");}else{
    shell("chmod 777 /data/data/com.lin/files/project/最后战役血量",true)
    shell("rm /data/data/最后战役血量",true)
    var result = shell("cp /data/data/com.lin/files/project/最后战役血量 /data/data", true);
toast(result.error);
//开启包名为com.xxx.xxx 完整服务名为com.xxx.xxx.TestService的无障碍辅助功能
//shell("settings put secure enabled_accessibility_services com.lin/com.stardust.autojs.inrt.SplashActivity",true);
//shell("settings put secure accessibility_enabled 1",true);
 
//关闭包名为com.xxx.xxx 完整服务名为com.xxx.xxx.TestService的无障碍辅助功能
//shell("settings put secure enabled_accessibility_services com.xxx.xxx/com.xxx.xxx.TestService",true);
//shell("settings put secure accessibility_enabled 0",true);
auto();
console.show();
threads.start(function() {
    //在子线程中调用observeKey()从而使按键事件处理在子线程执行
    events.observeKey();
    events.on("key_down", function(keyCode, events) {
        //音量键关闭脚本
        if (keyCode == keys.volume_down) {
            exit();
        }
    });
});

toast("音量下键关闭脚本");

events.on("exit", function() {
    toast("脚本已结束");
});
``
while (true) {
    log("脚本运行中...");
    sleep(2000);
}
}
    
}
function gn2(){}
function gn3(){}





function 下载(file){
        url = "https://raw.githubusercontent.com/llovely45/jd/master/"+file;
        res = http.get(url);
        if(res.statusCode == 200){
        update = res.body.string();
        file = open("./"+file,"w");
        file.write(update);
        file.close();
        toastLog(file+"下载成功");
        b = 1;
        }else{
            b=0;
            toastLog(file+"下载失败失败:"+res.statusMessage);}
        if (b!=1){toast("请重新下载");}else{
            toastLog("更新完成")
            }
}
    
function exit(){
    let mm = 0
    var 脚本数组 = engines.all()
    var 元素数量 = 脚本数组.length
    var 当前脚本 = engines.myEngine()
    for (let i = 0; i < 元素数量; i++) {
        var 删除数组 = 脚本数组.pop()

        if (删除数组 != 当前脚本) {
            mm++
            删除数组.forceStop()

        } else {}
    }}
    
 