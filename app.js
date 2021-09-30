require('bytenode'); 
module.exports = require('./app.'+process.platform+'.'+process.version+'.jsc')