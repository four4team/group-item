import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/pages/home'
import massgroup from '@/components/pages/mass-group'
import kitchen from '@/components/pages/kitchen'
import car from '@/components/pages/car'
Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/home',
    	name: 'home',
    	component: home
    },
    {
    	path: '/massgroup',
    	name: 'massgroup',
    	component: massgroup
    },{
    	path: '/kitchen',
    	name: '/kitchen',
    	component: kitchen
    },{
    	path: '/car',
    	name: '/car',
    	component: car
    }
  ]
})
