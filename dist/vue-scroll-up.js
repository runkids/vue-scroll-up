(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
  typeof define === 'function' && define.amd ? define(['vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.VueScrollUp = factory(global.Vue));
}(this, (function (vue) { 'use strict';

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".vue-scroll-up{align-items:center;background-color:rgba(0,0,0,.658);border:rgba(0,0,0,.658);border-radius:100px;bottom:100px;color:#fff;cursor:pointer;display:flex;height:55px;justify-content:center;position:fixed;right:10px;width:55px;z-index:99}.vue-scroll-up:after{border:2px solid #fff;border-radius:10px;content:\"\";display:block;height:25px;margin:0 auto;width:10px}.vue-scroll-up:before{-webkit-animation:top 2s infinite;animation:top 2s infinite;border:1px solid #fff;border-radius:10px;content:\"\";display:block;height:10px;left:49%;position:absolute;width:0}@-webkit-keyframes top{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@keyframes top{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@media screen and (max-width:450px){.vue-scroll-up{bottom:10px;transform:translateX(5px) scale(.7)}}";
  styleInject(css_248z);

  var index = vue.defineComponent({
      name: 'VueScrollUp',
      props: {
          tag: {
              type: String,
              default: 'span',
          },
          scrollDuration: {
              type: Number,
              default: 200,
          },
          scrollY: {
              type: Number,
              default: 250,
          },
      },
      setup(props) {
          const pointer = vue.ref(0);
          const isTop = vue.computed(() => pointer.value < props.scrollY);
          function checkPoint() {
              pointer.value = window.scrollY;
          }
          function scrollToTop() {
              const cosParameter = window.scrollY / 2;
              let scrollCount = 0;
              let oldTimestamp = performance.now();
              function step(newTimestamp) {
                  scrollCount += Math.PI / (props.scrollDuration / (newTimestamp - oldTimestamp));
                  if (scrollCount >= Math.PI) {
                      window.scrollTo(0, 0);
                      return;
                  }
                  if (window.scrollY === 0)
                      return;
                  window.scrollTo(0, Math.round(cosParameter + (cosParameter * Math.cos(scrollCount))));
                  oldTimestamp = newTimestamp;
                  window.requestAnimationFrame(step);
              }
              window.requestAnimationFrame(step);
          }
          vue.onMounted(() => {
              window.addEventListener('scroll', checkPoint);
              checkPoint();
          });
          vue.onBeforeUnmount(() => {
              window.removeEventListener('scroll', checkPoint);
          });
          return {
              isTop,
              scrollToTop,
          };
      },
      render() {
          return this.isTop
              ? undefined
              : vue.h(this.tag, {
                  class: 'vue-scroll-up',
                  onClick: this.scrollToTop,
              }, this.$slots.default ? this.$slots.default() : undefined);
      },
  });

  return index;

})));
