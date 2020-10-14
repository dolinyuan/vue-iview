// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import iView from 'iview'
import router from './router'
//import './assets/languages/index.js'
 import i18n from './assets/languages/i18n.js'
// import VueI18n from 'vue-i18n'
// 引入i18n国际化插件
// import zh from './assets/languages/langZh.js'
// import en from './assets/languages/langEn.js'

Vue.use(iView)
// Vue.use(VueI18n)
/* const i18n = new VueI18n({
  locale: 'zh',
  fallbackLocale: 'zh',
  messages: {
    zh, en
  }
}) */
console.log("i18n => ", i18n)
Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})
