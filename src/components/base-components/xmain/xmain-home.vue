<template>
	<div>
		<twoEqual :info="cheepInfo" :tit="cheepHead"></twoEqual>
		<twoEqual :info="quanInfo.slice(0,4)" :tit="quanHead"></twoEqual>
		<threeEqual :info="quanInfo.slice(4,7)" :tit="threeInfo"></threeEqual>
		<oneImg imgurl="https://img30.360buyimg.com/img/jfs/t21505/327/1683744457/138342/2e814a52/5b3200f7N7aa2c29d.jpg"></oneImg>
		<headTit :tit="centerHead"></headTit>
		<div id="center_t">
			<a v-for="value in centerInfo.slice(0,2)">
				<div class="pic">
					<div class="head-conn">
						<h3 class="main-title" v-text="value.content"></h3>
						<div class="sub-title">
							<span v-text="value.title"></span>
						</div>
					</div>
				</div>
				<div class="pic-wrap">
					<img :src="value.imgurl">
				</div>
			</a>
		</div>
		<threeEqual :info="centerInfo.slice(2,centerInfo.length)" :tit="centerHead"></threeEqual>
		<headTit :tit="wantHead"></headTit>
		<xload v-if="showLoad"></xload>
		
		<div id="want">
				<div class="waterful" v-for="(value,index) in wantInfo">
					<img :src="value.imgurl" />
					<div class="content" v-text="value.content"></div>
					<span class="discount" v-if="value.discount?true:false" v-text="value.discount" :style="{padding:'0px 3px',borderRadius:'4px',color:'#fff',background:value.discount=='满折'?'#ce93d8':'#4dd0e1'}"></span>
					<div class="price">
						<span style="float: left;color:#ff3c25;font-weight: bold;">
							￥<span v-text="value.now_price" style="font-size:18px;"></span>
						</span>
						<i class="iconfont icon-gouwuche" style="color:red;float: right;"></i>
					</div>
				</div>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery'
	import twoEqual from '../xlist/two-equal-list'
	import threeEqual from '../xlist/three-equal-list'
	import oneImg from '../one-img-show/one-img'
	import headTit from '../xtitle/head-title'
	import xload from '../for-user/xloading'
	export default {
		components: {
			twoEqual,
			threeEqual,
			oneImg,
			headTit,
			xload
		},
		data() {
			return {
				times: 0,
				showLoad: false,
				cheepInfo: [],
				cheepHead: {
					title: '购·实惠',
					icon: 'iconfont icon-jinqian',
					iconColor: '#1E90FF',
					border: '#eee'
				},
				quanInfo: [],
				quanHead: {
					title: '购·品质',
					icon: 'iconfont icon-dengpao',
					iconColor: '#9370DB',
					border: '#fff',
					background: '#ebf0f4'
				},
				centerInfo: [],
				centerHead: {
					title: '品类中心',
					icon: 'iconfont icon-baobao',
					iconColor: '#CD5C5C',
					background: '#ebf0f4',
					smallColor: '#a0a0a0',
					size: '1.5rem'
				},
				threeInfo: {
					fomat: 'block',
					border: '#fff',
					size: '1.7rem',
					background: '#ebf0f4',
					smallColor: '#e09e0f',
					smallColor_border: '#e09e0f'
				},
				wantInfo: [],
				wantHead: {
					title: '懂你想要',
					icon: 'iconfont icon-weibiaoti-',
					iconColor: 'skyblue',
					border: '#fff'
				}
			}
		},
		mounted() {
			var self = this;
			$.ajax({
				url: '../../../static/data/home.json',
				success(data) {
					self.cheepInfo = data.cheep_info;
					self.quanInfo = data.quanlity_info;
					self.centerInfo = data.center_info;
				}
			})
			//监听滚动条的位置
			document.addEventListener('scroll', function() {
				if(scrollY > 1300 && self.times < 1) {
					self.showLoad = true;
					self.times++;
						$.ajax({
							url: 'http://119.23.55.48/cxd?one_kind=know_want',
							success(data) {
								self.wantInfo = data;
								self.showLoad = false;
							}
						})
				} else {
					self.showLoad = false;
					}
							
			})
		}

	}
	
</script>

<style lang="scss" scoped>
	* {
		box-sizing: border-box;
	}
	
	#center_t {
		display: flex;
		a {
			background-color: #f1f2f7;
			display: inline-block;
			height: 125px;
		}
		a:first-child {
			flex: 2;
			position: relative;
			display: flex;
			border-bottom: 1px solid #fff;
			border-right: 1px solid #fff;
			.pic {
				text-align: center;
				display: flex;
				flex-direction: column;
				justify-content: center;
				.head-conn {
					.main-title {
						width: 112px;
					}
					.sub-title {
						span {
							background: -webkit-linear-gradient(90deg, #b664de, #f58af4);
						}
					}
				}
			}
			img {
				width: 189px;
				height: 125px;
				position: absolute;
				right: 0;
				top: 0;
			}
		}
		a:last-child {
			flex: 1;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			padding-top: 10px;
			.main_title {
				text-align: center;
				width: 100%;
			}
			.sub-title {
				span {
					background: -webkit-linear-gradient(90deg, #00b7ee, #2dcfff);
				}
			}
			img {
				width: 100%;
				height: 75px;
			}
		}
		.main-title {
			font-size: 1.5rem;
			font-weight: normal;
			color: #212121;
			align-items: center;
			overflow: hidden;
			text-align: center;
		}
		.sub-title {
			span {
				border-radius: 8px;
				color: #fff;
				font-size: 1.2rem;
				padding: 1px 6px;
			}
			height: 16px;
			padding: 0 5px;
			line-height: 16px;
			text-align: center;
		}
	}
	
	#want {
		display: flex;flex-direction: row;flex-wrap: wrap;
		.waterful {
			width: 50%;
			padding: 10px;
			border: 2px solid #ccc;
			img {
				width: 160px;
				height: 160px;
			}
			.content {
				flex-direction: row;
				margin-top: 10px;
				color: #212121;
				font-weight: normal;
				font-size: 14px;
				max-height: 80px;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 4;
				overflow: hidden;
			}
		}
		.waterful:nth-child(2n+1) {
			border-left: 0 none;
			float: left;
		}
		.waterful:nth-child(2n) {
			border-right: 0 none;
		}
	}
</style>