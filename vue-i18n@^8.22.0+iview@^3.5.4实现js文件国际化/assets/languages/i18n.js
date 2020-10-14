import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from './langZh.js'
import en from './langEn.js'
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh',
  fallbackLocale: 'zh',
  messages: {
    zh, en
  }
})
console.log("i18n => ", i18n)
export default i18n
