const shell=require('shelljs');

const luna_command='/usr/bin/luna-send -n 1 -f luna://com.webos.service.peripheralmanager/gpio/'
const pin="gpio4";

function init_gpio(){
    var open_param=`'{"pin":"${pin}"}'`;
    var open_gpio=shell.exec(luna_command+'open '+open_param,{async:false});
    open_gpio.stdout.on('data',function(data){
        //console.log(data);
        //data는 json형태의 string
        var obj=JSON.parse(data);
        if(!obj.returnValue){
            console.log(obj.returnValue);
            shell.exit(1);
        }
    });
    var direction_param=`'{"pin":"${pin}","Direction":"outLow"}'`;
    var set_direction=shell.exec(luna_command+'setDirection '+direction_param,{async:false});
    set_direction.stdout.on('data',function(data){
        var obj=JSON.parse(data);
        if(!obj.returnValue){
            console.log(obj.errorText);
            shell.exit(1);
        }
    });
}

function turn_on(){
    var direction_param=`'{"pin":"${pin}","Direction":"outHigh"}'`;
    var set_direction=shell.exec(luna_command+'setDirection '+direction_param,{async:false});
    set_direction.stdout.on('data',function(data){
        var obj=JSON.parse(data);
        if(!obj.returnValue){
            console.log(obj.errorText);
            shell.exit(1);
        }
    });
}
function turn_off(){
    var direction_param=`'{"pin":"${pin}","Direction":"outLow"}'`;
    var set_direction=shell.exec(luna_command+'setDirection '+direction_param,{async:false});
    set_direction.stdout.on('data',function(data){
        var obj=JSON.parse(data);
        if(!obj.returnValue){
            console.log(obj.errorText);
            shell.exit(1);
        }
    });
}
function light(){
    var get_param=`'{"pin":"${pin}"}'`;
    var get_value=shell.exec(luna_command+'getValue '+get_param,{async:false});
    get_value.stdout.on('data',function(data){
        var obj=JSON.parse(data);
        if(obj.value=="low"){
            turn_on();
        }else{
            turn_off();
        }
    });
}

init_gpio();
light();