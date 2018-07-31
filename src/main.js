import VueScrollTop from './VueScrollTop.vue';
export default VueScrollTop;
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('scroll-up', VueScrollTop);
}