import React, { Component } from 'react';

class ReactCaptchaGenerator extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.setState({
            height: this.props.height ? this.props.height : 100,
            width: this.props.width ? this.props.width : 100,
            textColor: this.props.textColor ? this.props.textColor : false,
            fontFamily: this.props.fontFamily ? this.props.fontFamily : 'Verdana',
            fontSize: this.props.fontSize ? this.props.fontSize : '30',
            paddingLeft: this.props.paddingLeft ? this.props.paddingLeft : '20',
            paddingTop: this.props.paddingTop ? this.props.paddingTop : '60',
            lenght: this.props.lenght ? this.props.lenght : '5',
            background: this.props.background ? this.props.background : 'none',
        })
    }

    render() {
        let text = []
        let originText = []
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < this.state.lenght; i++) {
            let char = possible.charAt(Math.floor(Math.random() * possible.length))
            text.push(
                `<text 
                    font-family="${this.state.fontFamily}" 
                    font-size="${this.state.fontSize}" 
                    x="${this.state.paddingLeft * i}" 
                    y="${this.state.paddingTop}"
                    fill="${ this.props.textColor ? this.props.textColor : "#" + ((1 << 24) * Math.random() | 0).toString(16)}"
                    transform="rotate(${Math.random() * (5 - 0) + 0})"
                >${char}</text>`
            )
            originText.push(
                char
            )
        }
        this.props.result(originText.join(''))
        return (
            <img
                style={{ background: this.state.background }}
                src={
                    'data:image/svg+xml;base64,' +
                    btoa('<svg ' +
                        'xmlns="http://www.w3.org/2000/svg" ' +
                        'height="' + this.state.height + '" ' +
                        'width="' + this.state.width + '">' +
                        text.join() +
                        '</svg>')
                }
                alt="" />
        );
    }
}

export default ReactCaptchaGenerator;