const express=require('express');
const request=require('request');
const shell=require('shelljs');

const luna_command='/usr/bin/luna-send -n 1 -f luna://com.webos.service.peripheralmanager/gpio/'
const pin="gpio4";

function init_gpio(){
    shell.exec(luna_command+'list \'{}\'',function(code,stdout,stderr){
        var obj=JSON.parse(stdout);
        //let foundItem=users.findIndex(u=>u.id===req.params.id);
        var found=obj.gpioList.find((item,idx)=>{
            return item.name==pin;
        });
        if(found.status!="used"){
            var open_param=`'{"pin":"${pin}"}'`;
            shell.exec(luna_command+'open '+open_param,function(code,stdout,stderr){
                var obj=JSON.parse(stdout);
                if(!obj.returnValue){
                    console.log(stderr);
                    shell.exit(1);
                }
            });
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

const options={
    uri:'http://192.168.56.1:3000/register',
    method:'POST',
    body:{
        id:'abc',
        device_name:'LED',
        port:'5000',
        function:'light'
    },
    json:true
};

request.post(options,function(err,httpRespond,body){
    console.log(err);
    console.log(httpRespond);
    console.log(body);
});

const server=express();

function turn_on(){
    var direction_param=`'{"pin":"${pin}","direction":"outHigh"}'`;
    shell.exec(luna_command+'setDirection '+direction_param,function(code,stdout,stderr){
        var obj=JSON.parse(stdout);
        if(!obj.returnValue){
            console.log(stderr);
        }
    });
}
function turn_off(){
    var direction_param=`'{"pin":"${pin}","direction":"outLow"}'`;
    shell.exec(luna_command+'setDirection '+direction_param,function(code,stdout,stderr){
        var obj=JSON.parse(stdout);
        if(!obj.returnValue){
            console.log(stderr);
        }
    });
}

function light(){
    var get_param=`'{"pin":"${pin}"}'`;
    shell.exec(luna_command+'getValue '+get_param,function(code,stdout,stderr){
        var obj=JSON.parse(stdout);
        if(obj.value=="low"){
            turn_on();
        }else{
            turn_off();
        }
    });
}

server.get('/light',(req,res)=>{
    light();
    respond.json({returnmessage})
});

server.listen(5000,()=>{
    console.log('server is running');
});