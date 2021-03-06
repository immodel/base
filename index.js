module.exports = function(replace) {
  replace = replace || {};

  // Write it all out so that it works with browserify
  return this
    .use(replace.types || require('immodel-types'))
    .use(replace.hooks || require('immodel-hooks'))
    .use(replace['getter-setter'] || require('immodel-getter-setter'))
    .use(replace.defaults || require('immodel-defaults'))
    .use(replace.cast || require('immodel-cast'))
    .use(replace.methods || require('immodel-methods'))
    .use(replace.attrs || require('immodel-attrs'))
    .use(replace.validation || require('immodel-validation'))
    .use(replace.required || require('immodel-required'))
    .use(replace.enum || require('immodel-enum'))
    .use(replace.discriminators || require('immodel-discriminators'))
    .use(replace.primitives || require('immodel-primitives'));
};