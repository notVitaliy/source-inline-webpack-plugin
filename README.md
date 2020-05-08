# Source Inline Webpack Plugin

This [webpack](http://webpack.github.io/) plugin is 3rd party addon to [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin).

## Installation

Install the plugin with npm:

```shell
$ npm install source-inline-webpack-plugin --save-dev
```

Install the plugin with yarn:

```shell
$ yarn add source-inline-webpack-plugin --dev
```

## Basic Usage

This plugin will inline all script tags that have an `inline` attribute.

```html
<html>
  <head>
    <script inline src="./example.js"></script>
  </head>
</html>
```

Will generate:

```html
<html>
  <head>
    <script>
      const example = 'js'
    </script>
  </head>
</html>
```

## Advanced Usage

There is also the `inline-prod` and `inline-staging` attributes, which will _only_ inline the asset if `NODE_ENV === '[production|staging]'` or the env variable `INLINE_[PROD|STAGING]` is truthy. Otherwise, it removes the script tag from the HTML document. This is useful for analytics scripts that should only be included in production environments.

If not a production environemnt

```html
<html>
  <head>
    <script inline src="./example.js"></script>
    <script inline-staging src="./example-staging.js"></script>
    <script inline-prod src="./example-prod.js"></script>
  </head>
</html>
```

Will generate:

```html
<html>
  <head>
    <script>
      const example = 'js'
    </script>
  </head>
</html>
```

If on a staging environment

```html
<html>
  <head>
    <script inline src="./example.js"></script>
    <script inline-staging src="./example-staging.js"></script>
    <script inline-prod src="./example-prod.js"></script>
  </head>
</html>
```

Will generate:

```html
<html>
  <head>
    <script>
      const example = 'js'
    </script>
    <script>
      const exampleStaging = 'staging'
    </script>
  </head>
</html>
```

If on a production environment

```html
<html>
  <head>
    <script inline src="./example.js"></script>
    <script inline-staging src="./example-staging.js"></script>
    <script inline-prod src="./example-prod.js"></script>
  </head>
</html>
```

Will generate:

```html
<html>
  <head>
    <script>
      const example = 'js'
    </script>
    <script>
      const exampleProd = 'prod'
    </script>
  </head>
</html>
```

## Supported Assets Types

- script `<script inline src="./example.js"></script>`
- style `<link inline href="./example.css" />`
- img `<img inline href="./example.png" />`
- svg `<img inline href="./example.svg" />`
- remote assets `<link inline href="http://example.com/bootstrap-6.1.css" />`
