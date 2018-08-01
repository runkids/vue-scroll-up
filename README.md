# vue-scroll-up 
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/) [![npm](https://img.shields.io/npm/v/vue-scroll-up.svg)](https://www.npmjs.com/package/vue-scroll-up) [![npm](https://img.shields.io/npm/dm/vue-scroll-up.svg)](https://www.npmjs.com/package/vue-scroll-up)
<img src="https://i.imgur.com/OOlKiny.gif"/>

## Installing 
Get from npm:
```js
npm i vue-scroll-up
```
## Usage
Use this inside your app:
``` js
import ScrollUp from 'vue-scroll-up'

export default {
  name: 'app',
  components: {
    ScrollUp,
  }
}
```

If you want to use from browser, simply :
```js
<script src='./vue-scroll-up.js'></script>
```

##### With Default CSS 
```js
import 'vue-scroll-up/dist/style.css'
```
The scroll button class name is `vue-scroll-up`

##### HTML
```html
<ScrollUp :scroll-duration="1000" scroll-y="250"/>
```

## Props

| Props Name  |  Type |  Default Value |  Info |
| ------------ | ------------ | ------------ | ------------ |
|scroll-duration  |  Number  |  1000  | Page to top speed.|
| scroll-y  |  Number  |  250    | Show button when scrollY equals a number.|

