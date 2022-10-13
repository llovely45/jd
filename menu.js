var i = dialogs.select("请选择你想要的功能", "待更新", "待更新", "待更新", "退出");
if (i == -1) {
    toast("选一个呗");
}
if (i == 0) {toast(1);}
else if (i == 1){toast(2);}
else if (i == 2){toast(3);}
else if (i == 3){
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