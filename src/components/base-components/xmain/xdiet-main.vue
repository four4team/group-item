<template>
	<div :data-title="baseHeader" id="J_babelOpt" class="bab_opt_con yhd">
		<div class="bab_opt_content">
			<div id="J_babelOptPage" class="bab_opt_page show">
				<div class="bab_opt_mod bab_opt_mod_1_0" style="background-color:#ffffff">
					<div class="promo_module promo_carousel middle">
						<div class="wrap jdui_slide">
							<ul :data-anima="animation" class="img_wrap jdui_slide_list" style="width: 1280px; transition-duration: 0ms;" :style="{transform:'translate3d('+idx+',0px,0px)'}">
								<li v-for="item in bannerSrc" class="show" style="background: none; width: 320px;">
									<a class="J_ping wrap expo" data-href="#">
										<img :src="item.src" class="fadein bannerImg">
									</a>
								</li>
							</ul>
							<ul class="point jdui_slide_dot">
								<li class="cur"></li>
								<li class=""></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="bab_opt_mod bab_opt_mod_1_1" style="background-color:#ffffff">
					<div class="promo_module inside outside four_pic " data-adslen="4" style="">
						<a v-for="item in navList" @click="param(item.href,item.eveParam,item.sort)" class="wrap J_ping expo">
							<div class="img_wrap img_wrap_puzzle " style="height: 75px; ">
								<img class="img_wrap_puzzle_bg fadein " :src="item.src" style="height: 75px;">
							</div>
						</a>
					</div>
				</div>
				<div class="bab_opt_mod bab_opt_mod_1_2 ">
					<div class="ft_module text_title main_title_middle " style="color:#000000;background-color:#f8f8ff;">
						<a class="J_ping " href="#">
							<div class="main_title_wrap ">
								<div class="main_title ">
									<span style="color:#000000;background-color:#f8f8ff;">-爆款推荐-</span>
									<div class="title_img ">
										<img src="https://m.360buyimg.com/cms/jfs/t2218/111/2490744834/43/9acceab1/56d55ce6N5a567661.gif">
									</div>
								</div>
								<div class="sub_title_wrap ">
									<div class="sub_title ">
										<span></span>
									</div>
									<div class="ft_icon "></div>
								</div>
							</div>
						</a>
					</div>
				</div>
				<div class="bab_opt_mod bab_opt_mod_1_3">
					<div class="coupon_module custom inside coupon_2x " id="m_1_3">
						<a v-for="item in listTop" class="coupon blue no_special_explain " href="#">
							<div class="preferential_price ">
								<div class="symbol ">¥<span class="price" v-text="item.price"></span></div>
							</div>
							<div class="limit_text" v-text="item.limitText"></div>
							<div class="range" v-text="item.range"></div>
						</a>
					</div>
				</div>
				<div class="bab_opt_mod bab_opt_mod_1_4">
					<div class="coupon_module custom inside coupon_2x " id="m_1_4">
						<a v-for="item in listBottom" class="coupon blue no_special_explain " href="#">
							<div class="preferential_price ">
								<div class="symbol ">¥<span class="price" v-text="item.price"></span></div>
							</div>
							<div class="limit_text" v-text="item.limitText"></div>
							<div class="range" v-text="item.range"></div>
						</a>
					</div>
				</div>
				<div class="bab_opt_mod bab_opt_mod_1_5 show ">
					<div class="tab_list ">
						<div class="pd_module big_pic pd_module_preStyle" style="background-color:F8F8FF ">
							<div class="pd_commom_wrap ">
								<a @click="toDetail(index)" v-for="(item,index) in arr " class="pd_commom jreport add_double_tip hide_op_2 op_2_hide" href="#/detail">
									<div class="pd_pic ">
										<img :src="item.imgurl ">
										<span class="pd_sold_out ">已售罄</span>
										<div class="pd_tip ">
											<div class="text_1 ">世界杯</div>
											<div class="text_2 ">限定</div>
										</div>
									</div>
									<div class="pd_info ">
										<div class="pd_title " v-text="item.content "></div>
										<div class="pd_evaluate ">
											<span class="comment_num ">3798条评价</span>
											<span class="comment_rate ">好评98%</span>
										</div>
										<div class="pd_wrap ">
											<div class="pd_price_wrap ">
												<div class="pd_now_price " v-text="item.now_price "></div>
												<div class="pd_old_price ">
													<del class="old " v-text="item.old_price "></del>
													<span class="replace_price ">满赠</span>
												</div>
											</div>
											<div class="phone_price ">比PC端省0.1元</div>
											<div class="ious_price "></div>
											<div class="pd_buy_car " style=" ">
												<span class="icon_wrap "></span>
											</div>
										</div>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery';
	import router from '../../../router';
	import bus from '../../../store/bus';
	
	export default {
		data() {
			return {
				bannerSrc: [{
					src: 'https://m.360buyimg.com/babel/s603x241_jfs/t22093/10/100463259/66255/abbbb3d7/5b2b089eN25c04b05.jpg!q70.dpg'
				}, {
					src: 'https://m.360buyimg.com/babel/s603x241_jfs/t22282/314/1484220567/70928/faa59f20/5b2b0764Na614ba48.jpg!q70.dpg'
				}, {
					src: 'https://m.360buyimg.com/babel/s603x241_jfs/t22093/10/100463259/66255/abbbb3d7/5b2b089eN25c04b05.jpg!q70.dpg'
				}, {

					src: 'https://m.360buyimg.com/babel/s603x241_jfs/t22282/314/1484220567/70928/faa59f20/5b2b0764Na614ba48.jpg!q70.dpg'
				}],
				navList: [{
					href: 'drinks',
					eveParam: 'l_drinks',
					sort: '饮料',
					src: 'https://m.360buyimg.com/babel/s149x149_jfs/t22309/12/251455868/8522/2cc11ad7/5b068b6dNe85e6069.jpg!q70.dpg'
				}, {
					href: 'milk',
					eveParam: 'l_milk',
					sort: '牛奶',
					src: 'https://m.360buyimg.com/babel/s149x149_jfs/t21511/83/238436609/10787/f3da23e2/5b068b87Na2842c0b.jpg!q70.dpg'
				}, {
					href: 'brew',
					eveParam: 'l_chongYin',
					sort: '冲调',
					src: 'https://m.360buyimg.com/babel/s149x149_jfs/t22213/108/243704521/11414/df4a0673/5b068c09N1382ecc4.jpg!q70.dpg'
				}, {
					href: 'liquor',
					eveParam: 'l_liquor',
					sort: '酒',
					src: 'https://m.360buyimg.com/babel/s149x149_jfs/t20302/364/226519070/8909/81db335b/5b068b06N145e9b14.jpg!q70.dpg'
				}],
				listTop: [{
					price: '35',
					limitText: '满196可用',
					range: '仅可购买指定自营商品'
				}, {
					price: '50',
					limitText: '满196可用',
					range: '仅可购买指定自营商品'
				}],
				listBottom: [{
					price: '10',
					limitText: '满129可用',
					range: '仅可购买水饮冲调部分商品'
				}, {
					price: '5',
					limitText: '满110可用',
					range: '仅可购买自营牛奶部分商品'
				}],
				arr: '',
				idx: '320px'
			}
		},
		//请求页面初始化的数据
		mounted() {
			var self = this;
			$.ajax({
				type: 'get',
				url: 'http://119.23.55.48/liupan?kind=l_wines',
				success: (data) => {
					data.forEach((item) => {
						//给价格添加一个人民币符号
						item.old_price = '￥' + item.old_price;
						item.now_price = '￥' + item.now_price;
						self.arr = data;
					})
				}
			})
		},
		computed: {
			//利用组件通信更改头部组件标题
			baseHeader() {
				bus.$emit('setTitle', {
					title: '酒水饮料'
				});
			},
			//轮播图部分
			animation() {
				var self = this;
				var idxArr = [-320, -640, -960];
				var index = -1;

				//每次改变图片的left值
				setInterval(function() {
					index++;
					if(index > 2) {
						index = 0;
					}
					self.idx = idxArr[index] + 'px';
				}, 3000);
			}
		},
		methods: {
			//点击利用vuex将分类名字传给头部。目的：改变头部的标题
			param(route,attrVal,sort) {
				this.$store.state.sort = sort;
				this.$router.push({name: route, query: {attrVal: attrVal}})
			},
			toDetail(index) {
				//点击传参到详情页		
				localStorage.setItem('idx' ,JSON.stringify(this.arr[index]))
			}
		}
	}
</script>

<style scoped>

</style>