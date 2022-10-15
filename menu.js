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
    下载("最后战役血量");}else{toast("ok");
    var result = shell("cp ./最后战役血量 /data/lost_found", true);
toast(result.error);}
    
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