import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/pages/home'
import massgroup from '@/components/pages/mass-group'
import kitchen from '@/components/pages/kitchen'
import car from '@/components/pages/car'
import Global from '@/components/pages/global'
import Detail from '@/components/pages/Detail'
import Ticket from '@/components/pages/ticket'
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
    },
    {
      path: '/global',
      name: 'Global',
      component: Global
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/ticket',
      name: 'Ticket',
      component: Ticket
    }
  ]
})
