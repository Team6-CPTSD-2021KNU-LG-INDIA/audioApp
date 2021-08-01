const express=require('express');
const request=require('request');

const options={
    uri:'http://localhost:3000/register',
    method:'POST',
    body:{
        id:'abc',
        device_name:'audio',
        api:'http://localhost:5000/audio'
    },
    json:true
};

request.post(options,function(err,httpRespond,body){
    console.log(body);
});

const server=express();
server.get('/test',(req,res)=>{
    respond.send("test complete");
});

server.listen(5000,()=>{
    console.log('server is running');
});