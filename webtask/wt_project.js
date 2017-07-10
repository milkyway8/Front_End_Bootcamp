module.exports = function(ctx, cb) {
  cb(null, { hello: ctx.data.name || 'Hello World' });  
};