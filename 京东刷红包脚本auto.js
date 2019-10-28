auto.waitFor()
var appRun = currentActivity()
var t=0
if(appRun != 'com.jingdong.app.mall') {
    launchApp("京东")
    toast("打开京东中...");
    //sleep(5000)
}

function run(){
    var b = className("android.widget.ImageView").desc("浮层icon").findOne().bounds();
    click(b.centerX(), b.centerY());
    sleep(4000);
    className("android.view.View").depth(17).boundsInside(device.width /2, device.height / 2, device.width, device.height).clickable(true).findOne().click()
    sleep(1000)	
    while(!text("逛逛好店（25/25个）").exists()){
    let a = textContains("逛逛好店").findOne().bounds();
    click(a.centerX(), a.centerY());
    sleep(1000)
    back()
    sleep(1000)
    text("朕知道了").click()
    sleep(1000)
    }
    while(!text("精彩会场（3/3个）").exists()){
        let a = textContains("精彩会场").findOne().bounds();
        click(a.centerX(), a.centerY());
        sleep(1000)
        back()
        sleep(1000)
        text("朕知道了").click()
        sleep(1000)
    }
    while(!text("精选好物（25/25个）").exists()){
        let a = textContains("精选好物").findOne().bounds();
        click(a.centerX(), a.centerY());
        sleep(1000)
        back()
        sleep(1000)
        text("朕知道了").click()
        sleep(1000)
    }

    while(!text("更多好玩互动（4/4个）").exists()){
        let a = textContains("好玩互动").findOne().bounds();
        click(a.centerX(), a.centerY());
        sleep(1000)
        back()
        sleep(1000)
        text("朕知道了").click()
        sleep(1000)
    }
    while(!text("看京品推荐官直播/视频（4/4个）").exists()){
        let a = textContains("看京品").findOne().bounds();
        click(a.centerX(), a.centerY());
        sleep(1000)
        back()
        sleep(1000)
        text("朕知道了").click()
        sleep(1000)
    }
}
run()

