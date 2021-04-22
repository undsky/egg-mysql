require('bytenode'); 
module.exports = require('./app.'+process.platform+'.'+process.version.split('.')[0]+'.jsc')