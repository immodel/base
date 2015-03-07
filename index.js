module.exports = function(model, replace) {
  replace = replace || {};
  
  // Write it all out so that it works with browserify
  model = model
    .use(replace['getter-setter'] || require('immodel-getter-setter'))
    .use(replace.cast || require('immodel-cast'))
    .use(replace.methods || require('immodel-methods'))
    .use(replace.attrs || require('immodel-attrs'))
    .use(replace.validation || require('immodel-validation'))
    .use(replace.required || require('immodel-required'))
    .use(replace.defaults || require('immodel-defaults'))
    .use(replace.discriminators || require('immodel-discriminators'));
  
  (replace.primitives || require('immodel-primitives'))(model);
  return model;
};