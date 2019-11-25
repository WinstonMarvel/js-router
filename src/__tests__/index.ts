import Router from '../index';

const comp1 = `<h2> Component 1 </h2>`;
const comp2 = `<h2> Component 1 </h2>`;
const page = `<div id="root"></div>`;
const outlet = document.createElement('div');

describe('Router', () => {
  it('Should be a function', () => {
    expect(typeof Router === 'function').toBeTruthy();
  });
  it('Should work as expected', () => {
    let router = new Router();
    router.defineRoutes([
      {
        path: 'page1',
        component: comp1,
      },
      {
        path: 'page2',
        component: comp2,
      },
    ]);
    router.setOutlet(outlet);
  });
});
