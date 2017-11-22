# react captcha generator
Component for captcha generation.

## Using
1) Import to file
```js
import RCG from 'react-captcha-generator';
...
```
2) Add to сode
```js
...
  <Aaa
    result={this.result} // Callback function with code
  />
...
  result(text){
    console.log('code --->',text)
  }
...
```
3) Optional settings:
* height
* width
* textColor
* fontFamily
* fontSize
* paddingLeft
* paddingTop
* lenght
* background