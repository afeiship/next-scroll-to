/*!
 * name: @feizheng/next-scroll-to
 * description: Scroll to api.
 * url: https://github.com/afeiship/next-scroll-to
 * version: 1.0.0
 * date: 2020-01-13 15:02:32
 * license: MIT
 */

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

//# sourceMappingURL=next-scroll-to.js.map
