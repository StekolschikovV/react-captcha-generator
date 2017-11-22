# react captcha generator

Get the AMD module located at `react-captcha-generator.js` and include it in your project.

Here is a sample integration:

```js
require.config({
  paths: {
    'react': 'vendor/bower_components/react/react',
    'ReactCaptchaGenerator': 'react-captcha-generator'
  }
});

require(['react', 'ReactCaptchaGenerator'], function(React, ReactCaptchaGenerator) {

  React.render(React.createElement(ReactCaptchaGenerator), document.getElementById('widget-container'));

});
```

## Development

* Development server `npm start`.
* Continuously run tests on file changes `npm run watch-test`;
* Run tests: `npm test`;
* Build `npm run build`;
