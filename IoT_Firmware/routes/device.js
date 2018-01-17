var express = require('express');
var router = express.Router();
//requiring the schema to connect with DB
const Devices = require("../models/device")

//API to get the list of all registered vehicles
router.get('/',(req,res,next)=>{
    Devices.getDevices((err, device)=>{
        if(err){
            console.error(err)
            res.json({
                success:false,
                msg:"Some error"
            });
        }
        else {
            res.json({
                success:true,
                devices:device
            });
        }
        
    });
});

//API to get the list of all registered vehicles through mongo id
router.get('/:_Id',(req,res,next)=>{
    var Id = req.params._Id
    Devices.getDeviceByID(Id,(err, devices)=>{
        if(err){
            console.error(err)
            res.json({
                success:false,
                msg:"Some error"
            });
        }
        else {
            res.json({
                success:true,
                devices:devices
            });
        }
        
    });
});

//API for registering the vehicle and if that vehicle is already registered than doesnot register it
router.post('/register',(req, res,next)=>{
    
    var newDevice = req.body;
    var Name = newDevice.device_Name;
    Devices.getDeviceByDeviceName(Name,(err, device)=>{
        if (device.length != 0){
            console.log("helloo")        
            res.json({
                success:false,
                msg:"Device already exist"
            });
        }
    else {
    Devices.addDevice(newDevice, (err, device)=> {
        console.log("helloo - adding")
        if(err){
            console.error(err);
            res.json({
                success:false,
                msg: "some error"
            });
        }
        else {
                res.json({
                    success:true,
                    msg:"Registered UUID is =",
                    UUID:device._id                    //returning an UUID to the registered vehicle
                });
        }
    });
}
});
});

//API written to update the metadata of the registered vehicle in DB
router.put('/update',(req, res)=> {
    var newdevice = req.body;
    console.log(newdevice);
    var ID= newdevice._id
    console.log(ID)
    Devices.getDeviceByID(ID,(err, device)=>{
      if (device.length != 0 ){
      Devices.updateDevice(newdevice, {}, (err, device) =>{
        if(err){
            console.error(err);
            res.json({
                success:false,
                msg: "some error"
            });
        }
        else {
                res.json({
                    success:true,
                    msg:"Data Updated"
                });
        }
    });
    }
    else {
      res.json({
        success:false,
        msg:"Device doesnot exist"
      })
    }
});
})
       
module.exports = router;
