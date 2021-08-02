const express=require('express');
const request=require('request');

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
    console.log(body);
});

const server=express();

server.get('/light',(req,res)=>{
    light();
    respond.json({})
});

server.listen(5000,()=>{
    console.log('server is running');
});