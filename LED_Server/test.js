const shell=require('shelljs');

exec('/usr/bin/luna-send -n 1 -f luna://com.webos.service.wifi/getNetworks \'{}\'',function(stdout){
    console.log(stdout);
    var obj=JSON.parse(stdout);
    console.log(obj);
})