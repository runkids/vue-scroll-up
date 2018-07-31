# vue-scroll-up 
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/) [![npm](https://img.shields.io/npm/v/vue-scroll-up.svg)](https://www.npmjs.com/package/vue-scroll-up) [![npm](https://img.shields.io/npm/dm/vue-scroll-up.svg)](https://www.npmjs.com/package/vue-scroll-up)
<img src="https://i.imgur.com/OOlKiny.gif"/>

## Installing 
Get from npm:
```js
npm i vue-scroll-up
```
And use this inside your app:
``` js
import ScrollUp from 'vue-scroll-up'

export default {
  name: 'app',
  components: {
    ScrollUp,
  }
}
```

And if you want to use from browser, simply :
```js
<script src='./vue-scroll-up.js'></script>
```

##### With Default CSS 
```js
import 'vue-scroll-up/dist/style.css'
```
## Usage
Example:
```html
<scroll-up :scrollDuration="1000" :scrollY="250"></scroll-up>
```

## Props

`scrollDuration` : Page to top speed

`scrollY` : Show button when scrollY equals a number

Note: All props type is Number