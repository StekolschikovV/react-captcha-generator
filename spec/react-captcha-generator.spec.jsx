import React from 'react/addons';
import ReactCaptchaGenerator from '../lib/react-captcha-generator.jsx';

describe('ReactCaptchaGenerator', function() {
  var component;

  beforeEach(function() {
    component = React.addons.TestUtils.renderIntoDocument(
      <ReactCaptchaGenerator/>
    );
  });

  it('should render', function() {
    expect(component.getDOMNode().className).toEqual('react-captcha-generator');
  });
});
