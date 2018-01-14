import React, { Component } from 'react';

class ReactCaptchaGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: props.height,
      width: props.width,
      textColor: props.textColor,
      fontFamily: props.fontFamily,
      fontSize: props.fontSize,
      paddingLeft: props.paddingLeft,
      paddingTop: props.paddingTop,
      length: props.length,
      background: props.background
    };
    this.setData = this.setData.bind(this);
  }

  componentWillMount() {
    this.setData();
  }

  componentWillReceiveProps({ toggleRefresh }) {
    if (toggleRefresh != this.props.toggleRefresh) {
      this.setData();
    }
  }

  setData() {
    const text = this.props.text;
    let length = this.state.length;
    if (text != '') {
      length = text.length;
    }

    this.text = [];
    this.originText = [];
    this.possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
      let char = this.possible.charAt(Math.floor(Math.random() * this.possible.length));
      if (text != '') {
        char = text[i];
      }
      this.text.push(
        `<text
                    font-family="${this.state.fontFamily}"
                    font-size="${this.state.fontSize}"
                    x="${this.state.paddingLeft * i}"
                    y="${this.state.paddingTop}"
                    fill="${this.props.textColor ? this.props.textColor : '#' + (((1 << 24) * Math.random()) | 0).toString(16)}"
                    transform="rotate(${Math.random() * (5 - 0) + 0})"
                >${char}</text>`
      );
      this.originText.push(char);
    }
    this.props.result(this.originText.join(''));
  }

  render() {
    const { height, width } = this.state;
    let image;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" height="${height}" width="${width}">${this.text.join()}</svg>`;
    image = btoa(svg);
    return <img style={{ background: this.state.background, height: height, width: width }} src={`data:image/svg+xml;base64,${image}`} alt="" />;
  }
}

ReactCaptchaGenerator.defaultProps = {
  height: 100,
  width: 100,
  textColor: false,
  fontFamily: 'Verdana',
  fontSize: '30',
  paddingLeft: '20',
  paddingTop: '60',
  length: '5',
  background: 'none',
  text: '',
  toggleRefresh: false
};

export default ReactCaptchaGenerator;
