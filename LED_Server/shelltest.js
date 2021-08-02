const shell=require('shelljs');

var test=exec('/usr/bin/luna-send -n 1 -f luna://com.webos.service.wifi/getNetworks \'{}\'',{async:true});
test.stdout.on('returnValue',function(returnValue){
    console.log(returnValue);
});