<template>
	
	<div id="home">
		<xheader />
		<xbanner />
		<div id="nav_icon_original" class="touchweb_components-headerMenu" style="display: flex;flex-wrap: wrap;">
			<a class="item J_ping" v-for="(value,key) in kind_top" :data-index="key" style="flex: 20%;" :href="value.router">
				<div class="icon_box">
					<div class="pic" style="background-image: none;">
						<img :alt="value.title" class="tupian" :src="value.imgurl">
					</div>
				</div>
				<span class="title" style="color:#757575" v-text="value.title"></span>
			</a>
		</div>
		<robList :list="buy_rob" :len="buy_rob.length"></robList>
		<oneImg imgurl="https://img30.360buyimg.com/img/jfs/t21850/328/1772199511/185579/40ea5283/5b35068cN5b09168f.jpg"></oneImg>
		<xmain></xmain>
		<backtop></backtop>
	</div>
</template>

<script>
	import $ from 'jquery'
	import xheader from '../base-components/xheader/xheader-home'
	import xbanner from '../base-components/xbanner/xbanner-index'
	import robList from '../base-components/xbanner/goods-banner'
	import oneImg from '../base-components/one-img-show/one-img'
	import xmain from '../base-components/xmain/xmain-home'
	import backtop from '../base-components/for-user/back-top'
	export default {
		components: {
			xheader,
			xbanner,
			robList,
			oneImg,
			xmain,
			backtop
		},
		data(){
			return {
				kind_top: [{
					imgurl: 'https://img20.360buyimg.com/img/jfs/t16420/274/631248429/7657/80b128e6/5a38d7dfN90f674dc.png',
					title: '1号团',
					router: '#/yiHaoTuan'
				}, {
					imgurl: 'https://img30.360buyimg.com/img/jfs/t15505/354/642029247/8206/12023bdd/5a38d322N9c3d0987.png',
					title: '饮食宝箱',
					router: '#/diet'
				}, {
					imgurl: 'https://img20.360buyimg.com/img/jfs/t15613/227/656860313/8652/854bc1d4/5a38d862Nc1600652.png',
					title: '1号榜单'
				}, {
					imgurl: 'https://img13.360buyimg.com/img/jfs/t14806/241/769879949/8653/80848d97/5a38d3b4Nf3a15e1a.png',
					title: '1号生鲜'
				}, {
					imgurl: 'https://img30.360buyimg.com/img/jfs/t16324/101/575926154/7859/1660b0bb/5a38d895Nc96d57c9.png',
					title: '全球进口',
					router:'#/global'
				}, {
					imgurl: 'https://img14.360buyimg.com/img/jfs/t14197/332/762915772/8714/57b00bf1/5a38d8c2N49652758.png',
					title: '1号闪购'
				}, {
					imgurl: 'https://img11.360buyimg.com/img/jfs/t14686/87/2244691386/5822/54a5dc17/5a7ac675N9d339fb0.png',
					title: '充值中心'
				}, {
					imgurl: 'https://img30.360buyimg.com/img/jfs/t14443/352/809655512/6855/e29f4459/5a38d4cdNa99ac4fc.png',
					title: '领券中心',
					router:'#/ticket'
				}, {
					imgurl: 'https://img20.360buyimg.com/img/jfs/t12691/339/2290211649/10390/b0c5fd84/5a38d509N9ca10fc9.png',
					title: '领金币'
				}, {
					imgurl: 'https://img13.360buyimg.com/img/jfs/t17926/357/648044158/6641/9a7a897/5a9d5b61N7c992a44.png',
					title: '个人中心'
				}],
				buy_rob: []
			}
		},
		mounted(){
			var self = this;
			$.ajax({
				url: 'http://119.23.55.48/cxd',
				data: {
					one_kind: 'rush_buy',
					two_kind: 'in_rush'
				},
				success(msg){
					msg = msg.slice(2,14);
					self.buy_rob = msg;
				}
			})
		},
		mounted(){
			
		}
	}
</script>
<style scoped>
	#home{overflow-x:hidden;}
	.J_ping{padding:5px 0;display: flex;flex-direction: column;align-items: center;}
	.tupian{width:43px;height:43px;}
	.title{padding-top:6px;}
</style>