//画笑脸
var win = floaty.rawWindow(
    <relative id="win"alpha="0.8">
      <img id="cd_1" layout_gravity="left|top" w="1px" h="1px" src="@drawable/ic_keyboard_arrow_right_black_48dp" />
      <img id="cd_2" layout_gravity="left|top" w="1px" h="1px" src="@drawable/ic_settings_black_48dp" />
      <img id="cd_3" layout_gravity="left|top" w="1px" h="1px" src="@drawable/ic_power_settings_new_black_48dp" />
      <img id="cd_4" layout_gravity="left|top" w="1px" h="1px" src="@drawable/ic_add_circle_black_48dp" />
      <img id="cd_0" layout_gravity="left|top" w="150px" h="150px" tint="yellow" src="@drawable/ic_sentiment_satisfied_black_48dp" />
    </relative>
);


setInterval(() => {}, 100);
win.setPosition(0,0.2*device.height)
win.setSize(150,150)

win.cd_1.setTranslationX(75)
win.cd_2.setTranslationX(75)
win.cd_3.setTranslationX(75)
win.cd_4.setTranslationX(75)
win.cd_1.setTranslationY(75)
win.cd_2.setTranslationY(75)
win.cd_3.setTranslationY(75)
win.cd_4.setTranslationY(75)

/**********************************************************************************************************************/


/**********************************************跟随手指移动************************************************************************/
// win.win.setOnTouchListener(
//   function (view,event){
//     switch (event.getAction()){
//       case event.ACTION_DOWN:
//         x=event.getRawX()
//         y=event.getRawY()
//         windowX=win.getX()
//         windowY=win.getY()
//         return true
//       case event.ACTION_MOVE:
//       //移动手指调整悬浮窗位置
//        win.setPosition(windowX+(event.getRawX()-x),windowY+(event.getRawY()-y))
//     }
   
//     return true

//   }
// )

/**********************************************************************************************************************/

/**********************************************************************************************************************/
var Y=1
win.cd_0.setOnTouchListener(function(view, event) {
  switch (event.getAction()) {
      case event.ACTION_DOWN:
          x = event.getRawX();
          y = event.getRawY();
          windowX = win.getX();
          windowY = win.getY();
          downTime = new Date().getTime();
          return true;
      case event.ACTION_MOVE:
          //移动手指时调整悬浮窗位置
          win.setPosition(windowX+(event.getRawX()-x),windowY+(event.getRawY()-y))
          
          if(Y==1){
            threads.start(function() {
              sleep (200)
              //靠近屏幕边缘(win)
            });
          }
          //if(new Date().getTime() - downTime > 1000){
          //exit();
          //}
          return true;
      case event.ACTION_UP:
          //手指弹起时如果偏移很小则判断为点击
        if (Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5) {
            threads.start(function() {engines.execScriptFile("./js/menu.js");
            });
          }
          return true;
  }
  return true;
});


/*************************************************控制按钮*********************************************************************/

  


/**********************************************************************************************************************/
var x = win.getX();
var y = win.getY();
var w = win.getWidth();
var h = win.getHeight();
log(x)
log(y)
log(w)
log(h)

/**********************************************************************************************************************/
