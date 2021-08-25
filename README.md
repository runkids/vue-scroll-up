# vue-scroll-up 
[![vue3](https://img.shields.io/badge/vue-3.x-brightgreen.svg)](https://vuejs.org/) [![npm](https://img.shields.io/npm/v/vue-scroll-up.svg)](https://www.npmjs.com/package/vue-scroll-up)  [![Version](https://img.shields.io/npm/v/vue-scroll-up/next.svg)](https://www.npmjs.com/package/vue-scroll-up) [![npm](https://img.shields.io/npm/dt/vue-scroll-up.svg)](https://www.npmjs.com/package/vue-scroll-up) [![npm](https://img.shields.io/npm/l/vue-scroll-up.svg)](https://github.com/runkids/Vue-Scroll-Up/blob/master/LICENSE)

> Scroll up component for Vue 3.

<img src="https://i.imgur.com/OOlKiny.gif"/>

## Installation 
Get from npm / yarn:
```js
npm i vue-scroll-up@next
```
```js
yarn add vue-scroll-up@next
```
[👉  Vue 2 version check here](https://github.com/runkids/vue-scroll-up/tree/master/VUE2_README.md)

## Usage
Use inside your app:
``` js
import VueScrollUp from 'vue-scroll-up'

export default {
  components: {
    VueScrollUp,
  }
}
```
Or

``` js
import VueScrollUp from 'vue-scroll-up'

const app = createApp({});

app.component(VueScrollUp.name, VueScrollUp);
```
##### HTML
```html
<vue-scroll-up 
  tag="div"
  custom-class="vue-scroll-up"
  :scroll-duration="1000"
  :scroll-y="250"
  :always-show="false"
/>
```

##### Use Slot
```html
<vue-scroll-up
  v-slot="{ isTop }"
  :always-show="true"
>
  {{ isTop ? '👇' : '👆' }}
</vue-scroll-up>

<vue-scroll-up
  v-slot="{ pointer }"
  :always-show="true"
>
  {{ pointer }}
</vue-scroll-up>
```
##### Design your scroll button [👉  See example here](https://github.com/runkids/vue-scroll-up/tree/master/example/app.vue)
<img src="https://imgur.com/K0eFAYX.gif"/>

1. Add your custom class name
  ```html
  <vue-scroll-up custom-class="my-scroll-up" />
  ```
2. Add CSS
```css
.my-scroll-up {
  align-items: center;
  background-color: rgba(0, 0, 0, 0.658);
  border: rgba(0, 0, 0, 0.658);
  border-radius: 100px;
  bottom: 100px;
  color: white;
  cursor: pointer;
  display: flex;
  height: 55px;
  justify-content: center;
  position: fixed;
  right: 10px;
  width: 55px;
  z-index: 99;
}

.my-scroll-up::after {
  border: 2px solid white;
  border-radius: 10px;
  content: '';
  display: block;
  height: 25px;
  margin: 0 auto;
  width: 10px;
}

.my-scroll-up::before {
  animation: 2s top infinite;
  border: 1px solid white;
  border-radius: 10px;
  content: '';
  display: block;
  height: 10px;
  left: 49%;
  position: absolute;
  width: 0;
}

@keyframes top {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@media screen and (max-width: 450px) {
  .vue-scroll-up {
    bottom: 10px;
    transform: translateX(5px) scale(0.7);
  }
}
```
## Attributes

| Parameter  |  Type | Defaults |  Description |
| ------------ | ------------ | ------------ | ------------ |
| tag  |  `string`  |  `span`  | Default render element.|
| custom-class  |  `string`  |  `vue-scroll-up`    | Custom your class name.|
|scroll-duration  |  `number`  |  `200`  | Page to top speed.|
| scroll-y  |  `number`  |  `250`    | Show button when scrollY equals a number.|
| always-show  |  `boolean`  |  `false`    | Always show button even scroll to top.|

## Slot

| Name  |  Description |
| ------------ | ------------ |
| isTop  |  Scroll button is top.|
| pointer | Value of scroll y.|