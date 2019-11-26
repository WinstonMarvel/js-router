const router = require('../../lib/index');

const comp1 = `<h2> Component 1 </h2>`;
const comp2 = `<h2> Component 1 </h2>`;
const page = `<div id="root"></div>`;

describe('router', () => {
  it('Should be a function', () => {
    expect(typeof router === 'function').toBeTruthy();
  });
  it('Should take route object without failing', () => {
    let r = new router();
    r.defineRoutes([
      {
        path: 'page1',
        component: `<h2>123213</h2>`,
      },
      {
        path: 'page2',
        component: `<h2>sdasdasd</h2>`,
      },
      {
        path: 'One',
        component: `<h2>Hi this is atest</h2>`,
      },
    ]);
  });
  it('Should set outlet without failing', () => {
    let r = new router();
    r.setOutlet('#div');
  });
});
