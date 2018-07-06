<template>
	<div>
		<xheader title="超值量贩"></xheader>
		<oneImg imgurl="https://m.360buyimg.com/babel/jfs/t15520/45/2252910128/158646/97603567/5a9ce74dN78b72282.jpg!q70.dpg"></oneImg>
		<xtitle :list="list" :style="styles"></xtitle>
		<oneImg :imgurl="oneImgs[0]"></oneImg>
		<div class="today">
			<div class="imgWrap">
				<img :src="today.imgurl" />
			</div>
			<div class="product">
				<p v-text="today.content" style="line-height:17px;height:35px;"></p>
				<div>
					<span class="now_price" v-text="today.now_price"></span>&nbsp;
					<del class="old_price" v-text="today.old_price"></del>
					<span class="add" @click="addCar(today._id,1)">加入购物车</span>
				</div>
			</div>
			
		</div>
		<xmain :oneImgs="oneImgs"></xmain>
		<backtop></backtop>
	</div>
</template>

<script>
	import $ from 'jquery'
	import xheader from '../base-components/xtitle/goodslist-title'
	import oneImg from '../base-components/one-img-show/one-img'
	import xtitle from '../base-components/xtitle/title-move'
	import xmain from '../base-components/xmain/massgroup-main'
	import backtop from '../base-components/for-user/back-top'
	
	export default{
		components: {xheader,oneImg,xtitle,xmain,backtop},
		data(){
			return {
				list: ['今日必囤', '值得囤', '米面粮油', '休闲零食', '进口食品', '牛奶水饮', '中外名酒', '时令生鲜', '洗护清洁', '母婴用品', '家居生活'],
				today: {},
				oneImgs: ['https://m.360buyimg.com/babel/jfs/t19432/37/668642652/11908/1194d8dd/5a9ce768Na0cd442e.jpg!q70.dpg',
						'https://m.360buyimg.com/babel/jfs/t18244/312/604628039/10731/de44d410/5a9ce78dNee6faa49.jpg!q70.dpg',
						'https://m.360buyimg.com/babel/jfs/t14419/232/2428364512/13305/febc39b6/5a9ce7c6N6fcea70a.jpg!q70.dpg',
						'https://m.360buyimg.com/babel/jfs/t18892/82/651998202/13168/fb1bf91f/5a9ce7dbN66d40b5f.jpg!q70.dpg',
						'https://m.360buyimg.com/babel/jfs/t18448/208/654791676/12463/44b051c1/5a9ce7e7Naa4c27d5.jpg!q70.dpg',
						'https://m.360buyimg.com/babel/jfs/t15850/286/2233423581/12670/6ea48bfa/5a9ce7f4Nc64e3164.jpg!q70.dpg',
						'https://m.360buyimg.com/babel/jfs/t15535/292/2253426054/12347/b5799f70/5a9ce80aNc537da48.jpg!q70.dpg',
						'https://m.360buyimg.com/babel/jfs/t17308/230/660756682/12946/b5d4e921/5a9ce824N6706de4a.jpg!q70.dpg',
						'https://m.360buyimg.com/babel/jfs/t16525/311/2219654596/13199/b49ace24/5a9ce857N54698665.jpg!q70.dpg',
						'https://m.360buyimg.com/babel/jfs/t18187/185/628732912/13032/f47fc2cf/5a9ce867Nb40e2fb6.jpg!q70.dpg',
						'https://m.360buyimg.com/babel/jfs/t7624/343/3246608855/13733/2c7d640a/5a9ce881N9ed1b353.jpg!q70.dpg',
						'https://m.360buyimg.com/babel/jfs/t14593/302/1313140853/31678/72349228/5a4ca157N01cf4e80.jpg!q70.dpg'
				],
				styles: {}
			}
		},
		methods: {
			addCar(id,qty){
				qty=Number(qty);
				$.ajax({
					url: 'http://119.23.55.48/user',
					data: {
						option: 'insert',
						id : id,
						qty: qty
					}
				})
				
			}
			
		},
		mounted(){
			var self = this;
			//拿取当前页面数据
			$.ajax({
				url: 'http://119.23.55.48/cxd',
				data: {
					one_kind: 'cheep_buy',
					two_kind: 'mass_group',
					three_kind: 'must_tun'
				},
				success(msg) {
					self.today = msg[0];
				}
			})
			
			document.addEventListener('scroll',function(){
				if(scrollY>300){
					self.$store.state.fixnav = true;
					self.styles={
						position:'fixed',
						top: 0,
						left: 0,
						right: 0
					};
				}else{
					self.$store.state.fixnav = false;
					self.styles={
						position:'relative',
						top: 0,
						left: 0,
						right: 0
					};
				}
				
				})
			
		}
	}
</script>

<style lang="scss" scoped>
	.today{
		padding-bottom:10px;width:100%;overflow: hidden;
		.imgWrap{
			display: inline-block;vertical-align: top;
			img{float: left;width:130px;height:130px;}
		}
		.product{
			width: 59.67%;display: inline-block;
			padding:15px 10px 20px 5px;vertical-align: top;
			p{height: 35px;line-height: 17px;
    		font-size: 15px;overflow: hidden;color:#000;
    		text-overflow: ellipsis;-webkit-line-clamp: 2;
    		-webkit-box-orient: vertical;word-break: break-all;
    		}
    		div{
    			margin-top:37px;
    			.now_price{
	    			color:#ff0000;font-size: 18px;
	    		}
	    		.old_price{color:#999;}	
	    		.add{width: 80px;height: 27px;float: right;
	    			line-height: 27px;border-radius: 2px;
	    			padding: 0 8px;box-sizing: border-box;
	    			-webkit-box-sizing: border-box;background:#f02b2b;
	    			color:#fff;
	    			font-size: 12px;text-align: center;
	    			}	
    			}
    		
		}
	}
</style>