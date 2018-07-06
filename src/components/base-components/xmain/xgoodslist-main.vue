<template>
	<div id="container">
		<input type="hidden" id="carId" style="display: none;">
		<input type="hidden" id="globalId" style="display: none;">
		<div class="touchweb_com-switchNav">
			<ul>
				<li class="cur"><i class="icon-sort_3"></i>列表视图</li>
				<li class="big"><i class="icon-sort_big_pic_2"></i>图片视图</li>
			</ul>
		</div>
		<div class="touchweb-com_searchListNavigation" :class="{selected_fixed:clas}">
			<div class="condition_list">
				<div class="item_box">
					<div class="item_box_list">
						<input type="hidden" id="brandIds" value="">
						<a @click="sort" class="sort J_ping" id="lazyLoadCates" :class="{cur:clas}"><span :style="{color:showSort?'#EB4E36':'#000'}">分类</span><i style="transform:rotateX(30deg)" :style="{transform:showSort?'rotateX(180deg)':'rotateX(0deg)',borderTopColor:showSort?'#EB4E36':'#000'}"></i></a>
						<a @click="brand" class="sort J_ping" id="lazyLoadBrand" :class="{cur:clas}"><span :style="{color:showBrand?'#EB4E36':'#000'}">品牌</span><i style="transform:rotateX(30deg)" :style="{transform:showBrand?'rotateX(180deg)':'rotateX(0deg)',borderTopColor:showBrand?'#EB4E36':'#000'}"></i></a>
						<a @click="rank" class="sort J_ping" id="lazyLoadSort" :class="{cur:clas}"><span :style="{color:showRank ?'#EB4E36':'#000'}">综合排序<i style="transform:rotateX(30deg)" :style="{transform:showRank?'rotateX(180deg)':'rotateX(0deg)',borderTopColor:showRank?'#EB4E36':'#000'}"></i></span></a>
						<span class="item J_ping">
							<input checked="" type="checkbox" id="own_sale" class="checkbox">
							<label for="own_sale" class="selected">自营</label>
						</span>
					</div>
					<ul class="filter_box sort nav-box">
						<li class="icon_filter screening icon-filter_2"></li>
					</ul>
				</div>
				<div class="item_box" style="position:relative">
					<div style="position:absolute;left:3.5%;top:30%;width:5%;padding-top:5%;">
						<img style="position: absolute;top: 0;width: 100%;left: 0;" src="https://img.yihaodianimg.com/search/images/double_11/H5/sreach_uncheck.png">
					</div>
					<img style="height:100%;width:100%" src="https://img30.360buyimg.com/pop/jfs/t20809/142/1195298010/118416/e11e5dcf/5b2236c4N6b9b49ab.png">
				</div>
				<div class="item_pop">
					<div class="select2" style="display:block" v-show="showSort">
						<div class="list">
							<a @click="sortData(item.urls)" class="" v-for="item in sorts">
								<span v-text="item.names" :ids="item.ids"></span><i class="icon-ok"></i>
							</a>
						</div>
					</div>
					<div class="select2" style="display: block;" v-show="showBrand">
						<div class="list">
							<a @click="getParam(item.urls)" v-for="item in brands" :id="item.ids" v-text="item.names">
								<i class="close_icon"></i>
							</a>
						</div>
						<div class="guide_btn bdr-t">
							<a @click="brand" id="reset" class="J_ping" href="#" v-show="showBrand">取消</a>
							<a @click="brandData" id="btn_ok" class="btn_ok J_ping" url="/search/c15052-0/k%E9%A5%AE%E6%96%99/mbname-b-pr-a-d1-f0b6-color-size?virtualflag=&amp;req.needMispellKw=0&amp;viewType=0&amp;req.sortType=1">确定</a>
						</div>
					</div>
					<div class="select" style="display: block;" v-show="showRank">
						<div class="list">
							<a href="#" class="selected"><span>综合排序</span><i class="icon-ok"></i></a>
							<a @click="brankData(item.urls)" v-for="item in ranks"><span v-text="item.names"></span><i class="icon-ok"></i></a>
						</div>
					</div>
				</div>
			</div>
			<div class="mask" style="display:block;" v-show="clas">
			</div>
		</div>
		<div class="touchweb-com_searchListBox">
			<ul>
				<li class="productItem" v-for="(item,index) in arr">
					<a @click="toDetail(index)" href="#/detail" class="item">
						<div class="pic_box">
							<img :src="item.imgurl">
						</div>
						<div class="middle">
							<div class="title_box">
								<div class="item_tag self_sell">
									<span class="small_word">自营</span>
								</div>
								维他 柠檬茶250ml*24盒 维他奶整箱 柠檬味茶饮料
							</div>
							<div class="active_box" style="height: auto">
								<div class="coupon-icon">
								</div>
							</div>
							<div class="comment_box">
								<span class="comment" v-text="item.comment_num"><i class="icon-dialog"></i></span>
								<span class="percentage" v-text="item.percentage"><i class="icon-good"></i>99%</span>
							</div>
						</div>
						<div class="price_box">
							<span class="new_price">
								<small>¥</small><i v-text="item.now_price"></i>
							</span>
							<span class="bug_car">
								<i class="icon-shop_cart"></i>
							</span>
						</div>
					</a>
					<div class="recommend-box" style="display: none;">
					</div>
				</li>
			</ul>
		</div>
		<div v-show="attrVal"></div>
	</div>
</template>

<script>
import $ from 'jquery';
import bus from '../../../store/bus';
import router from '../../../router';

export default {
	data() {
		return {
			//分类的html数据
			sorts: [{
				names: '全部分类',
				urls: 'l_hotSale'
			}, {
				ids: 'cate_1602',
				names: '饮料',
				urls: 'l_food'
			}, {
				ids: 'cate_13601',
				names: '冷藏饮料',
				urls: 'l_clean'
			}, {
				ids: 'cate_5023',
				names: '冲调品',
				urls: 'l_mobile'
			}, {
				ids: 'cate_13604',
				names: '低温奶',
				urls: 'l_facial'
			}],
			//品牌的html数据
			brands: [{
				ids: 'brand_200854',
				names: '爱美可（Amecke）',
				urls: 'l_wines'
			}, {
				ids: 'brand_37837',
				names: '百事可乐',
				urls: 'l_infant'
			}, {
				ids: 'brand_139073',
				names: '啵乐乐（Pororo）',
				urls: 'l_fresh'
			}, {
				ids: 'brand_229571',
				names: 'big bang',
				urls: 'l_furniture'
			}, {
				ids: 'brand_329038',
				names: '冰祖',
				urls: 'l_electric'
			}, {
				ids: 'brand_154496',
				names: 'COWA',
				urls: 'l_computer'
			}, {
				ids: 'brand_221879',
				names: '顶好',
				urls: 'l_costume'
			}, {
				ids: 'brand_232652',
				names: '德記開喜',
				urls: 'l_shoeBag'
			}, {
				ids: 'brand_6715',
				names: '芳塔娜',
				urls: 'l_medicine'
			}, {
				ids: 'brand_8319',
				names: '红牛',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_7726',
				names: '哈哒',
				urls: 'l_food'
			}, {
				ids: 'brand_214808',
				names: '灰姑娘',
				urls: 'l_clean'
			}, {
				ids: 'brand_306153',
				names: '海品猫',
				urls: 'l_mobile'
			}, {
				ids: 'brand_21999',
				names: '佳乐（kara）',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_9768',
				names: '九日（jiur）',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_10504',
				names: '可口可乐（Coca-Cola）',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_39028',
				names: '酷椰屿（Koh coconut）',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_190910',
				names: '绿力',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_154576',
				names: '乐天 （Lotte）',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_67998',
				names: '乐卡斯（Luxway）',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_224385',
				names: '良珍（LEUNG CHUN）',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_158746',
				names: '玛丽（MALEE）',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_53043',
				names: '玛丽（Malee）',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_133291',
				names: '美恩',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_46731',
				names: 'OKF',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_29005',
				names: '帕玛拉特圣涛（Parmalat）',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_51087',
				names: '普瑞达',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_270812',
				names: 'Paradise',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_14600',
				names: '趣味',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_198149',
				names: '俏果（CHAOKOH）',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_163421',
				names: '瑞欧（R）',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_14972',
				names: '塞浦丽娜',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_193458',
				names: '地中海松林（SIRMA）',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_301573',
				names: '萨法瑞',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_181901',
				names: 'S&amp;W',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_162005',
				names: '三佳丽',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_141991',
				names: '刷我的卡',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_65332',
				names: "特丽娜（D'Reena）",
				urls: 'l_hotSale'
			}, {
				ids: 'brand_16657',
				names: '泰山',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_297680',
				names: '恭喜',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_340703',
				names: '托伯斯',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_39027',
				names: 'UFC',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_87628',
				names: '唯他可可（Vita Coco）',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_190335',
				names: '哇米诺',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_26819',
				names: '鲜芬（Fresh premium）',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_216279',
				names: '小猪佩奇',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_39499',
				names: '杨协成',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_20190',
				names: '悠诗诗（UCC）',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_19447',
				names: '依云（evian）',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_29139',
				names: '伊娃（EVA）',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_226234',
				names: '椰泰郎',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_20547',
				names: '悦氏',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_148155',
				names: 'YOU.C1000',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_27637',
				names: '一本',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_56834',
				names: '意乐果园',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_190709',
				names: '赞美诗',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_188123',
				names: 'Zico',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_19447',
				names: '依云（evian）',
				urls: 'l_hotSale'
			}, {
				ids: 'brand_249103',
				names: 'JUJU JUJU',
				urls: 'l_electric'
			}],
			//综合排序的html数据
			ranks: [{
				names: '销量从高到低',
				urls: 'l_computer'
			}, {
				names: '价格从低到高',
				urls: 'l_costume'
			}, {
				names: 'l_shoeBag',
				urls: 'l_hotSale'
			}, {
				names: '评论数从高到低',
				urls: 'l_medicine'
			}],
			arr: [],
			clas: false,
			showSort: false,
			showBrand: false,
			brandParam: '',
			showRank: false,
		}
	},
	computed: {
		//接收父页面通过url传过来的参数,并且请求页面数据
		attrVal() {
			$.ajax({
				type: 'get',
				url: 'http://119.23.55.48/liupan?kind=' + this.$route.query.attrVal,
				success: (data) => {
					data.forEach((item) => {
						//把人民币符号过滤掉
						item.now_price = item.now_price.match(/[0-9\.]+/)[0];
					})
					this.arr = data;
				}
			})
		}
	},
	methods: {
		//点击商品分类，添加类名及遮罩层，显示分类列表，改变字体图标的X轴
		sort() {
			this.showBrand = false;
			this.showRank = false;
			this.clas = !this.clas;
			this.showSort = !this.showSort;
		},
		//品牌部分的一些操作，添加类名及遮罩层，显示分类列表，改变字体图标的X轴
		brand() {
			this.showSort = false;
			this.showRank = false;
			this.clas = !this.clas;
			this.showBrand = !this.showBrand;
		},
		//综合排序部分的一些操作，添加类名及遮罩层，显示分类列表，改变字体图标的X轴
		rank() {
			this.showSort = false;
			this.showBrand = false;
			this.clas = !this.clas;
			this.showRank = !this.showRank;
		},
		//点击商品分类，请求后端数据
		sortData(attrVal) {
			//跳转到当前路由,把参数放在url上
			this.$router.push({name: 'drinks', query: {attrVal: attrVal}});
			this.showSort = false;
			this.clas = false;
		},
		//点击品牌类，把参数放在data数据模型内
		getParam(attrVal) {
			this.brandParam = attrVal;
		},
		//点击确认键请求数据，并且隐藏品牌列表
		brandData() {
			//跳转到当前路由,把参数放在url上
			this.$router.push({name: 'drinks', query: {attrVal: this.brandParam}});
			this.clas = false;
			this.showBrand = false;
		},
		//点击综合排序类，请求后端数据
		brankData(attrVal) {
			//跳转到当前路由,把参数放在url上
			this.$router.push({name: 'drinks', query: {attrVal: attrVal}});
			this.clas = false;
			this.showRank = false;
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