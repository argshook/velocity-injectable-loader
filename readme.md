# Velocity Injectable Loader

velocity templates loader for webpack.

somewhat configurable.

inspired by [velocity-loader](https://github.com/zhongzhi107/velocity-loader)
but this one allows you to set data source to be injected

# Installation

`npm i velocity-injectable-loader`

# Usage

## No data injection

either use directly with `imports` (`require`s) or use with, e.g.,
`HtmlWebpackPlugin`:

```js
import 'velocity-injectable-loader!index.vm';

// or

require('velocity-injectable-loader!index.vm');
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

