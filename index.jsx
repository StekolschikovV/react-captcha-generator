import React, { Component } from 'react';

class ReactCaptchaGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: this.props.height ? this.props.height : 100,
      width: this.props.width ? this.props.width : 100,
      textColor: this.props.textColor ? this.props.textColor : false,
      fontFamily: this.props.fontFamily ? this.props.fontFamily : 'Verdana',
      fontSize: this.props.fontSize ? this.props.fontSize : '30',
      paddingLeft: this.props.paddingLeft ? this.props.paddingLeft : '20',
      paddingTop: this.props.paddingTop ? this.props.paddingTop : '60',
      length: this.props.length ? this.props.length : '5',
      background: this.props.background ? this.props.background : 'none'
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
    let text = this.props.text;
    let isDesignatedText = false;
    let length = this.state.length;
    if (text && text != '') {
      isDesignatedText = true;
      length = text.length;
    }

    this.text = [];
    this.originText = [];
    this.possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
      let char = this.possible.charAt(Math.floor(Math.random() * this.state.length));
      if (isDesignatedText) {
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
    return (
      <img
        style={{ background: this.state.background, height: this.state.height, width: this.state.width }}
        src={
          'data:image/svg+xml;base64,' +
          base64_encode('<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'height="' + this.state.height + '" ' + 'width="' + this.state.width + '">' + this.text.join() + '</svg>')
        }
        alt=""
      />
    );
  }
}

export default ReactCaptchaGenerator;
