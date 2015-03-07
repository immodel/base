module.exports = function(model, replace) {
  replace = replace || {};
  
  // Write it all out so that it works with browserify
  model = model
    .use(replace['getter-setter'] || require('getter-setter'))
    .use(replace.cast || require('cast'))
    .use(replace.methods || require('methods'))
    .use(replace.attrs || require('attrs'))
    .use(replace.validation || require('validation'))
    .use(replace.required || require('required'))
    .use(replace.defaults || require('defaults'))
    .use(replace.discriminators || require('discriminators'));
  
  (replace.primitives || require('primitives'))(model);
  return model;
};