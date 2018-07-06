<template>
	<div class="globalHandpick">
		<div class="globalTitle">
			全球精选<span class="globalTitle2">每日更新超高性价比商品</span>
		</div>

		<div class="product_list" :data-use="ajax">
			<div class="product_box">
				<div class="product_item" v-for="(d,index) in data">
					<a href="#/detail" class="imgBox" @click="toDetail(index)"><img :src="d.imgurl"></a>
					<h3 v-text="d.title"></h3>
					<div class="price_box">
						<p v-text="d.now_price"></p>
						<div class="price_btn">
							<a>立即抢购</a>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>
<script>
	
	export default {
		data() {
			return {
				data: []
			}
		},
		computed: {
			ajax() {
				var self = this;
				$.ajax({
					url: "http://119.23.55.48/zhipeng?kind=global_goods1",
					success(data) {
						var arr = []
						for(let i = 0; i <= 19; i++) {
							arr.push(data[i])
						}
						self.data = arr
					}
				})
			}
		},
		methods: {
			toDetail(index) {
								//点击传参到详情页		
							 localStorage.setItem('idx' ,JSON.stringify(this.data[index]))
			}
		}

	}
</script>

<style scoped>
	.globalHandpick {
		width: 100%;
		margin-top: 10px;
		background-color: #F5F5F5;
	}
	
	.globalHandpick .globalTitle {
		background-color: #9D48FF;
		height: 40px;
		padding: 8px 10px;
		line-height: 24px;
		color: #fff;
		font-size: 16px;
		box-shadow: 0 50px 0 30px #9D48FF;
	}
	
	.globalHandpick .globalTitle .globalTitle2 {
		font-size: 12px;
		display: inline-block;
		padding-left: 6px;
	}
	
	.product_list {
		height: 191px;
		position: relative;
		overflow: hidden;
		overflow-x: auto;
	}
	
	.product_list .product_box {
		width: 2300px;
		height: 191px;
		padding-bottom: 10px;
		position: absolute;
		top: 0px;
		left: 0;
		display: flex;
	}
	
	.product_list .product_item {
		margin-left: 10px;
		width: 105px;
		float: left;
		font-size: 12px;
	}
	
	.product_list .product_item .imgBox {
		display: block;
		height: 105px;
		width: 105px;
	}
	
	.product_list .product_item .imgBox>img {
		height: 105px;
		width: 105px;
	}
	
	.product_list .product_item h3 {
		margin-top: 10px;
		white-space: normal;
		overflow: hidden;
		height: 28px;
		line-height: 14px;
		font-size: 10px;
		font-weight: normal;
	}
	
	.product_list .product_item .price_box p {
		height: 18px;
		color: #9a4cfb;
	}
	
	.product_list .product_item .price_box .price_btn {}
	
	.product_list .product_item .price_box .price_btn>a {
		display: block;
		height: 19px;
		border-radius: 18px;
		color: #fff;
		background-color: #9a4cfb;
		color: #fff;
		font-size: 12px;
		line-height: 19px;
		text-align: center;
	}
</style>