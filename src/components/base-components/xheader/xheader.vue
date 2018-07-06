<template>
    <div class="touchweb-com_header header_flex" id="globalHeader">
        <a id="topIconBack" class="left icon-back" href="#/home"></a>
        <h1 :data-title="headerTitle" v-text="title"></h1>
        <div class="rightBox">
        <a class="right" href="javascript:;" id="globalMore" "="">
        <span class="right_text icon-more btn_more"></span>
        </a>
        <div class="more_list hide" id="globalMoreList">
        <a href="//cart.m.yhd.com/cart/showCart.do" id="moreIconCart" class="moreA"><span class="icon icon-cart"></span>购物车</a>
        <a href="//search.m.yhd.com/search/index" id="moreIconSearch" class="moreA"><span class="icon icon-search"></span>搜索</a>
        <a href="//m.yhd.com/newcategory" id="moreIconCategory" class="moreA"><span class="icon icon-sort"></span>类目</a>
        <a href="//m.yhd.com" id="moreIconHome" class="moreA"><span class="icon icon-home"></span>首页</a>
        <a href="//home.m.yhd.com/h5index/index.do" id="moreIconMyYhd" class="moreA"><span class="icon icon-my"></span>我的1号店</a>
    </div>
    </div></div>
</template>

<script>
	import bus from '../../../store/bus';

    export default {
    	data () {
    		return {
    			title : ''
    		}
    	},
        computed : {
        	headerTitle () {
        		var self = this;
        		bus.$on ('setTitle', (data) => {
        			self.title = data.title;
        		})
        	}
        }
    }
</script>

<style scoped>
</style>