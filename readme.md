# Velocity Injectable Loader

velocity templates loader for webpack.

somewhat configurable.

inspired by [velocity-loader](https://github.com/zhongzhi107/velocity-loader)
but this one allows you to set data source to be injected

# Installation

`npm i velocity-injectable-loader`

# Usage

## No data injection

either use directly with `imports` (or `require`s):

```js
import template from 'velocity-injectable-loader!index.vm';

// or

const template = require('velocity-injectable-loader!index.vm');
```

`template` now contains a string of `index.vm`.

or use with, e.g., `HtmlWebpackPlugin`:

```js
plugins: [
    new HtmlWebpackPlugin({
        template: 'velocity-injectable-loader?inject=data.js!./src/index.vm',
        inject: false
    })
]
```

## With data injection

when `./velocity.vm` contains:

```vm
Hello ${name}
```

and `./injectables.js` contains:

```js
module.exports = {
  name: 'Doggo'
};
```

then `./some-file.js`:

```js
import injected from 'velocity-injectable-loader?inject=injectables.js!velocity.vm';
```

will output `Hello Doggo`.

