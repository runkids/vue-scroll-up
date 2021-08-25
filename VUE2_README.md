# vue-scroll-up 
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/) [![npm](https://img.shields.io/npm/v/vue-scroll-up.svg)](https://www.npmjs.com/package/vue-scroll-up) [![npm](https://img.shields.io/npm/dt/vue-scroll-up.svg)](https://www.npmjs.com/package/vue-scroll-up) [![npm](https://img.shields.io/npm/l/vue-scroll-up.svg)](https://github.com/runkids/Vue-Scroll-Up/blob/master/LICENSE)


<img src="https://i.imgur.com/OOlKiny.gif"/>

## Installation 
Get from npm / yarn:
```js
npm i vue-scroll-up@1.1.0
```
```js
yarn add vue-scroll-up@1.1.0
```
or
just include [vue-scroll-up.js](https://github.com/runkids/Vue-Scroll-Up/blob/master/dist/vue-scroll-up.js) to your view like 

```js
<script src='./vue-scroll-up.js'></script>
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

##### With Default CSS 
```js
import 'vue-scroll-up/dist/style.css'
```
or
just include [style.css](https://github.com/runkids/Vue-Scroll-Up/blob/master/dist/style.css)

The scroll button class name is `vue-scroll-up`

##### HTML
```html
<scroll-up :scroll-duration="1000" :scroll-y="250"></scroll-up>
```

## Props

| Property  |  Type |  Default Value |  Description |
| ------------ | ------------ | ------------ | ------------ |
|scroll-duration  |  Number  |  1000  | Page to top speed.|
| scroll-y  |  Number  |  250    | Show button when scrollY equals a number.|
