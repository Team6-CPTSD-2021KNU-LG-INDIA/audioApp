const Service=require('webos-service');
//const luna='luna-send -n 1 -f luna://com.webos.service.wifi/getNetworks';

var service=new Service("com.webos.service");
service.call("luna://com.webos.service.connectionmanager/getstatus", {}, function(response) {
    console.log(response.payload);
});