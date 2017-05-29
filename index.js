const path = require('path');
const loaderUtils = require('loader-utils');

module.exports = function(source) {
  this.cacheable && this.cacheable();

  const parsedQuery = loaderUtils.parseQuery(this.query);
  const injectablesPath = parsedQuery.inject || '';
  const templateContext = Object.assign({},
                                        parsedQuery,
                                        injectablesPath ? require(path.resolve(injectablesPath)) : {});
  const Engine = require('velocity').Engine;
  const engine = new Engine({template: source});
  const result = engine.render(templateContext);

  return 'module.exports = ' + JSON.stringify(result) + ';';
};
