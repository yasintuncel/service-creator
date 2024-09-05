var Service = require('node-windows').Service;

const serviceName = 'Service Name'
const serviceDescription = 'Sevice Description'
const appPath = 'C:\\service\\path\\server.js'

var svc = new Service({
  name: serviceName,
  description: serviceDescription,
  script: appPath,
});

svc.on('install', function () {
  svc.start();
});

svc.install();