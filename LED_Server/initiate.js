const shell=require('shelljs');

const luna_command='/usr/bin/luna-send -n 1 -f luna://com.webos.service.peripheralmanager/gpio/'
const pin="gpio4";

function init_gpio(){
    var open_param=`'{"pin":"${pin}"}'`;
    shell.exec(luna_command+'open '+open_param,function(code,stdout,stderr){
        var obj=JSON.parse(stdout);
        if(!obj.returnValue){
            console.log(stderr);
            shell.exit(1);
        }
    });
    
    var direction_param=`'{"pin":"${pin}","direction":"outLow"}'`;
    shell.exec(luna_command+'setDirection '+direction_param,function(code,stdout,stderr){
        var obj=JSON.parse(stdout);
        if(!obj.returnValue){
            console.log(stderr);
            shell.exit(1);
        }
    });
}


init_gpio();