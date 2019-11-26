# light-js-router

This package is an easy way to simply switch HTML contents using routing based on browser URL hash.

## Getting Started

### Running

Using the router should be pretty straightforward. Define routes and start the router.
Ensure that the href links and the path defined in the object passed to defineRoutes() are the same.

```
<a href="#part1" >Go to P1</a>
<a href="#part2" >Go to P2</a>
<a href="#part3" >Go to P3</a>

<div id="out">default</div>

<script src="./node_modules/light-js-router.js" ></script>
<script type="text/javascript">
    let router = new Router();
    router.defineRoutes([{
        path: 'part1',
        component: `<h2>Test content for part 1</h2>`,
    },
    {
        path: 'part2',
        component: `<h2>Test content for part 2</h2>`,
    },
    {
        path: 'part3',
        component: `<h2>Test content for part 3</h2>`,
    }]);
    router.setOutlet("#out");
    router.start();
</script>
```

## How it works

The router simply replaces contents of the outlet using innerHTML. 

## Repository

* **Winston Jude** - [github.com/WinstonMarvel](https://github.com/WinstonMarvel/js-router)

## License

This project is licensed under the MIT License

