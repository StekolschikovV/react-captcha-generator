# react captcha generator
Component for captcha generation.

## Using
1) Import to file
```js
import RCG from 'react-captcha-generator';
...
```
### Add to сode
```js
...
  <RCG
    result={this.result} // Callback function with code
  />
...
  result(text){
    console.log('code --->',text)
  }
...
```
### Optional settings:
* height
* width
* textColor
* fontFamily
* fontSize
* paddingLeft
* paddingTop
* lenght
* background