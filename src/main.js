// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Vuex from 'vuex'

//import MuseUI from 'muse-ui'
//import 'muse-ui/dist/muse-ui.css'
//引入mini-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'weui';

//Vue.use(MuseUI);
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(MintUI)

/* eslint-disable no-new */
const store = new Vuex.Store({
	state: {
		showback: false,
		fixnav: false,
		toId: '',
		choose: false,
		showAlert: false,
		allPrice: '￥0.00',
		allNum: 0,
		isAllSelect: [],
		good: {},
		attrVal: '',
		sort: ''
	}
})

new Vue({
  el: '#app',
  router,
  store,
  template: `<router-view></router-view>`
})
