const shell=require('shelljs');

var test=shell.exec('/usr/bin/luna-send -n 1 -f luna://com.webos.service.wifi/getNetworks \'{}\'',{async:true});
test.stdout.on('test',function(data){
    console.log(data);
    //data는 json형태의 string
    var obj=JSON.parse(data);
    if(!obj.returnValue){
        console.log(obj.returnValue);
    }
});