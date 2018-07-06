<template>
	<div id="#car" style="height:100%;display: flex;flex-direction: column;">
		<xheader title="购物车"></xheader>
		<p>满86元包邮 ( 重量不超过20公斤 )</p>
		<!-- xlist里加入v-if判断ajax异步回来的数据是否有,有则显示,解决了异步props的问题 -->
		<div class="goods" style="">
			<xlist :list="goods" v-if="goods[0]!=null" ></xlist>
		</div>
		<xbottom style="height:55px"></xbottom>
	</div>
</template>

<script>
	import $ from 'jquery'
	import xheader from '../base-components/xtitle/goodslist-title'
	import xlist from '../base-components/xlist/one-col-list'
	import xbottom from '../base-components/xbottom/xbottom-account'
	export default {
		components: {xheader, xlist, xbottom},
		data(){
			return {
				goods: []
			}
		},
		created(){
			var self=this;
			$.ajax({
				url: 'http://119.23.55.48/user?option=find',
				success(msg){
					//console.log(msg);
					self.goods = msg;
				}
			})
		}
	}
</script>

<style lang="scss" scoped>
	html,body{height:100%;}
	#car{
		display: flex;flex-direction: column;height:100%;
		
	}
	.goods{display: flex;flex-direction: column;overflow-x:hidden;flex:1;}
	p{
			height:36px;padding:10px;box-sizing:border-box;
			background: #fff1d9;color:#f39800;
		}
	
</style>