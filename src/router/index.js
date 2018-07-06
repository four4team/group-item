import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/pages/home'
import massgroup from '@/components/pages/mass-group'
import kitchen from '@/components/pages/kitchen'
import car from '@/components/pages/car'
import Global from '@/components/pages/global'
import Detail from '@/components/pages/Detail'
import Ticket from '@/components/pages/ticket'
//一号团主页
import yiHaoTuan from '@/components/pages/yiHaoTuan';
//饮食宝箱主页
import diet from '@/components/pages/diet';
//饮食主页下的饮料页面
import drinks from '@/components/pages/drinks';
//饮食主页下的牛奶页面
import milk from '@/components/pages/milk';
//饮食主页下的冲饮页面
import brew from '@/components/pages/brew';
//饮食主页下的酒页面
import liquor from '@/components/pages/liquor';
Vue.use(Router)

export default new Router({
  routes: [{
    	path: '/home',
    	name: 'home',
    	component: home
    },{
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
    },{
      path: '/global',
      name: 'Global',
      component: Global
    },{
      path: '/detail',
      name: 'Detail',
      component: Detail
    },{
      path: '/ticket',
      name: 'Ticket',
      component: Ticket
    },{
      path : '/yiHaoTuan',
      name : 'yiHaoTuan',
      component : yiHaoTuan
    },{
    	path : '/diet',
    	name : 'diet',
    	component :diet
    },{
    	path : '/drinks',
    	name : 'drinks',
    	component : drinks
    },{
    	path : '/milk',
    	name : 'milk',
    	component : milk
    },{
    	path : '/brew',
    	name : 'brew',
    	component : brew
    },{
    	path : '/liquor',
    	name : 'liquor',
    	component : liquor
    }]
})
