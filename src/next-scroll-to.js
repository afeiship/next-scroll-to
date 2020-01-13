(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var DEFAULT_OPTIONS = { el: global, to: 'top' };

  nx.scrollTo = function(inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var distance = options.to;
    distance === 'top' && (distance = 0);
    distance === 'bottom' && (distance = options.el.scrollHeight);
    options.el.scrollTop = distance;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.scrollTo;
  }
})();
