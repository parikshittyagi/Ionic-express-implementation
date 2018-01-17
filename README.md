# Ionic-express-implementation

IOT FIRMWARE ->

It is the backend running on express server and all the sending of Data is done on Localhost, that is connected to mongoDB data base. You can simply run the express server by node app.js but recommended is to run with nodemon if any changes are to be done. First you need to register the vehicle by posting on https://URL of server/register neccessary details like vehicle_name, vahicle_type and metadata that contains city name and location and an UUID is returned by the server to the user through which he can trace the vehicle.

Location Trace ->

You can find the app https://github.com/parikshittyagi/IonicApp. It is basically implementation of angular for exclusively apps. Ionic Framework supports both android and ios applications. Here you can fetch the location of the registed vehicle by giving the UUID given at the time of registration and if the vehicle leaves the city then an alert is generated on the App.

Put Random Cities ->

Since here in the use case, there were only stimulated values hence not real time locations were used, they were created randomly but you can get real time locations by registering in https://developers.google.com/maps/documentation/javascript/get-api-key for tracing real time locations and you can use https://ionicframework.com/docs/native/geolocation/ for connecting it with the application.
