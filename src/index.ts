interface IRoute {
  path: string;
  component: string;
}

class Router {
  private outlet: HTMLElement | null;
  private routes: Map<string, string>;
  private listening: boolean;

  constructor() {
    this.routes = new Map();
    this.outlet = null;
    this.listening = false;
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

  public to(path: string) {
    window.location.hash = path;
  }

  public setDefaultPath(path: string) {
    if (this.listening) {
      // tslint:disable-next-line:no-console
      console.error('Router is already listening. Cannot set default path');
      return;
    }
    if (this.routes.get(path)) {
      window.location.hash = path;
    } else {
      // tslint:disable-next-line:no-console
      console.error('Default path is not present in defined routes');
    }
  }

  public start() {
    this.listening = true;
    this.onPathChange();
    window.addEventListener('popstate', this.onPathChange);
  }

  public stop() {
    this.listening = true;
    window.removeEventListener('popstate', this.onPathChange);
  }

  private onPathChange = () => {
    const path: string = this.getCurrentRoute();
    const newContents = this.routes.get(path);
    if (newContents) {
      this.setContent(newContents);
    }
  };

  private getCurrentRoute(): string {
    return window.location.hash.slice(1);
  }

  private setContent(setContent: string) {
    // @ts-ignore: Object is possibly 'null'.
    this.outlet.innerHTML = setContent;
  }
}

if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
  module.exports = Router;
}
