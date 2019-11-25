var Router = /** @class */ (function() {
  function Router() {
    this.routes = new Map();
    this.outlet = null;
    this.start = this.start.bind(this);
  }
  Router.prototype.defineRoutes = function(routes) {
    var _this = this;
    routes.map(function(route) {
      _this.routes.set(route.path, route.component);
      return route;
    });
  };
  Router.prototype.setOutlet = function(out) {
    if (typeof out === 'string') {
      this.outlet = document.querySelector(out);
    } else {
      this.outlet = out;
    }
  };
  Router.prototype.start = function() {
    var _this = this;
    window.onpopstate = function() {
      var path = _this.getCurrentRoute();
      // @ts-ignore: Object is possibly 'null'.
      _this.outlet.innerHTML = _this.routes.get(path);
    };
  };
  Router.prototype.to = function(path) {
    window.location.hash = path;
  };
  Router.prototype.getCurrentRoute = function() {
    return window.location.hash;
  };
  return Router;
})();
