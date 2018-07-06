<template>
	<div id="container" :data-title:="baseHeader">
		<div class="group_page-home1">
			<div class="tab_content">
				<div class="tab_vertical">
					<div data-tpa="GROUPON_H5_INDEX_CATEGORY" class="tab_list">
						<a @click="dataFn('l_hotSale')" href="#" class="tab J_ping">热卖团购</a>
						<a @click="dataFn('l_food')" href="#" class="tab J_ping ">食品饮料</a>
						<a @click="dataFn('l_clean')" href="#" class="tab J_ping ">清洁纸品</a>
						<a @click="dataFn('l_mobile')" href="#" class="tab J_ping ">大牌手机</a>
						<a @click="dataFn('l_facial')" href="#" class="tab J_ping ">美妆个护</a>
						<a @click="dataFn('l_wines')" href="#" class="tab J_ping ">中外名酒</a>
						<a @click="dataFn('l_infant')" href="#" class="tab J_ping ">母婴儿童</a>
						<a @click="dataFn('l_fresh')" href="#" class="tab J_ping ">生鲜果蔬</a>
						<a @click="dataFn('l_furniture')" href="#" class="tab J_ping ">家居生活</a>
						<a @click="dataFn('l_electric')" href="#" class="tab J_ping ">家用电器</a>
						<a @click="dataFn('l_computer')" href="#" class="tab J_ping ">电脑数码</a>
						<a @click="dataFn('l_costume')" href="#" class="tab J_ping ">服饰内衣</a>
						<a @click="dataFn('l_shoeBag')" href="#" class="tab J_ping ">鞋包运动</a>
						<a @click="dataFn('l_medicine')" href="#" class="tab J_ping ">医药保健</a>
					</div>
					<div @click="classes" class="arrow" :class="{rotate:clas}">
						<div class="icon icon-down_arrow"></div>
					</div>
				</div>
				<div class="tab_horizontal" style="height: 523px;display:block;" v-show="showList">
					<div data-tpa="GROUPON_H5_INDEX_FOLD_CATEGORY" class="tab_list">
						<a @click="dataFn('l_hotSale')" href="#" class="tab ">热卖团购</a>
						<a @click="dataFn('l_food')" href="#" class="tab ">食品饮料</a>
						<a @click="dataFn('l_clean')" href="#" class="tab ">清洁纸品</a>
						<a @click="dataFn('l_mobile')" href="#" class="tab ">大牌手机</a>
						<a @click="dataFn('l_facial')" href="#" class="tab ">美妆个护</a>
						<a @click="dataFn('l_wines')" href="#" class="tab ">中外名酒</a>
						<a @click="dataFn('l_infant')" href="#" class="tab">母婴儿童</a>
						<a @click="dataFn('l_fresh')" href="#" class="tab ">生鲜果蔬</a>
						<a @click="dataFn('l_furniture')" href="#" class="tab ">家居生活</a>
						<a @click="dataFn('l_electric')" href="#" class="tab ">家用电器</a>
						<a @click="dataFn('l_computer')" href="#" class="tab ">电脑数码</a>
						<a @click="dataFn('l_costume')" href="#" class="tab ">服饰内衣</a>
						<a @click="dataFn('l_shoeBag')" href="#" class="tab ">鞋包运动</a>
						<a @click="dataFn('l_medicine')" href="#" class="tab ">医药保健</a>
					</div>
				</div>
			</div>
			<div class="hot_sale">
				<h2 class="recommend_title"><span>热卖推荐</span></h2>
				<div id="tuangouListBody" class="group_com-listProduct J_ping">
					<ul id="tuan_list_div">
						<li v-for="(item,index) in arr">
							<a @click="toDetail(index)" href="#/detail" class="item normal">
								<div class="pic_box">
									<div class="status"></div> <img :src="item.imgurl"></div>
								<div class="title_box" v-text="item.content"></div>
								<div class="price_box"><span class="new_price"><small>¥</small><i v-text="item.now_price"></i></span> <span class="reference_price">参考价</span> <del v-text="item.old_price"></del> <span class="cart_icon iconfont icon-shop_cart"></span></div>
								<div class="sum_box" style="display: none;"><span class="buy_num">热卖中</span> <span class="soon_text"><i class="icon-history"></i>即将开始</span></div>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery';
	import bus from '../../../store/bus';

	export default {
		computed: {
			//改变头部公共头部的标题
			baseHeader() {
				bus.$emit('setTitle', {
					title: '1号团'
				})
			}
		},
		data() {
			return {
				arr: [],
				title: '1号团',
				clas: false,
				showList: false
			}
		},
		//页面初始化获取"热卖团购"的数据
		mounted() {
			var self = this;
			$.ajax({
				type: 'get',
				url: 'http://119.23.55.48/liupan?kind=l_hotSale',
				success: function(data) {
					data.forEach((item) => {
						item.old_price = '￥' + item.old_price;
						item.now_price = item.now_price.match(/[0-9\.]+/)[0];
					})
					self.arr = data;
				}
			})
		},
		//点击传入参数,读取对应页面数据
		methods: {
			dataFn(attrVal) {
				var self = this;
				$.ajax({
					type: 'get',
					url: 'http://119.23.55.48/liupan?kind=' + attrVal,
					success: function(data) {
						data.forEach((item) => {
							item.now_price = item.now_price.match(/[0-9\.]+/)[0];
							self.arr = data;
						})
					}
				});
				this.clas = false;
				this.showList = false;
			},
			//点击字体图标显示或隐藏商品列表
			classes() {
				this.clas = !this.clas;
				this.showList = !this.showList;
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