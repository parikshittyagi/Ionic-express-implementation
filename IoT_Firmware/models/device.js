const mongoose = require('mongoose');

//Schema required for connecting the registering the vehicle
const DeviceSchema = mongoose.Schema({
    vehicle_Name: {
        type: String,
        required: true,
    },

    
    vehicle_Type: {
        type: String,
        required: true
    },

    metadata: {
        type: JSON,
        required: true
    },


    create_data: {
        type: Date,
        default: Date.now
    }
});


const Device = module.exports = mongoose.model('Device',DeviceSchema);


module.exports.addDevice = (device, callback)=> {
    Device.create(device, callback);
}

module.exports.getDevices = (callback,limit) => {
    Device.find(callback).limit(limit);
}

module.exports.getDeviceByID = (id, callback) => {
    Device.findById(id, callback);
}

module.exports.getDeviceByDeviceName = (DeviceName, callback)=>{
    query={
        device_Name: DeviceName
    }
    Device.find(query, callback);
}

module.exports.updateDevice = (device, options, callback) => {
    console.log("In update function")
    console.log(device)
    query = {
        device_Name: device.device_Name
    }
    var update = {
        device_Type:device.device_Type,
        metadata:device.metadata
    }
    Device.findOneAndUpdate(query, update, options, callback);
}


