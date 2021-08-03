const pin="gpio4";
var param=`{"pin":"${pin}"}`
const luna_command='/usr/bin/luna-send -n 1 -f luna://com.webos.service.peripheralmanager/gpio/'
console.log(param);
console.log(luna_command+'open '+param);