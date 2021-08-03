var test={
    subscribed: false,
    returnValue: true,
    gpioList: [
      { status: 'available', name: 'gpio12' },
      { status: 'available', name: 'gpio13' },
      { status: 'available', name: 'gpio16' },
      { status: 'available', name: 'gpio17' },
      { status: 'available', name: 'gpio18' },
      { status: 'available', name: 'gpio19' },
      { status: 'available', name: 'gpio20' },
      { status: 'available', name: 'gpio21' },
      { status: 'available', name: 'gpio22' },
      { status: 'available', name: 'gpio23' },
      { status: 'available', name: 'gpio24' },
      { status: 'available', name: 'gpio25' },
      { status: 'available', name: 'gpio4' },
      { status: 'available', name: 'gpio5' },
      { status: 'available', name: 'gpio6' }
    ]
};
console.log(test.gpioList);
var found=test.gpioList.find((item,idx)=>{
    return item.name=="gpio4";
});
console.log(foundIndex);
//var foundindex=obj.gpioList