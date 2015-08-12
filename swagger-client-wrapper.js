module.exports = function(options){
    var SwaggerClient = require('swagger-client');
    var theSwag = require('swagger-spec-file-alias');
	options = options || {};
	options.spec = theSwag;
	return new SwaggerClient(options);
};