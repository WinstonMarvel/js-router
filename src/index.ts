interface IRoute {
  path: string;
  component: string;
}

class Router {
  private outlet: HTMLElement | null;
  private routes: Map<string, string>;

  constructor() {
    this.routes = new Map();
    this.outlet = null;
    this.start = this.start.bind(this);
  }

  public defineRoutes(routes: IRoute[]) {
    routes.map(route => {
      this.routes.set(route.path, route.component);
      return route;
    });
  }

  public setOutlet(out: HTMLElement | string): void {
    if (typeof out === 'string') {
      this.outlet = document.querySelector(out) as HTMLElement;
    } else {
      this.outlet = out as HTMLElement;
    }
  }

  public start() {
    window.onpopstate = () => {
      const path: string = this.getCurrentRoute();
      const newContents = this.routes.get(path);
      if (newContents) {
        // @ts-ignore: Object is possibly 'null'.
        this.outlet.innerHTML = newContents;
      }
    };
  }

  public to(path: string) {
    window.location.hash = path;
  }

  private getCurrentRoute(): string {
    return window.location.hash.slice(1);
  }
}

if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
  module.exports = Router;
}
