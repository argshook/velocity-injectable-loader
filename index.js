const path = require('path');
const loaderUtils = require('loader-utils');

module.exports = function(source) {
  this.cacheable && this.cacheable();

  const injectablesPath = loaderUtils.parseQuery(this.query).inject || '';
  const templateContext = require(path.resolve(injectablesPath));
  const Engine = require('velocity').Engine;
  const engine = new Engine({template: source});
  const result = engine.render(injectablesPath ? templateContext : {});

  return 'module.exports = ' + JSON.stringify(result) + ';';
};
