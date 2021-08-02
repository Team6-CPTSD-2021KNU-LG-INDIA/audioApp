const shell=require('shelljs');

exec('/usr/bin/luna-send -n 1 -f luna://com.webos.service.wifi/getNetworks \'{}\'',function(code,stdout,stderr){
    console.log(code);
    console.log(stdout);
    console.log(stderr);
});
