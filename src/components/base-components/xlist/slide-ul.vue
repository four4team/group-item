<template>
	<div style="overflow-y: hidden;">
		<ul>
			<li v-for="(value,index) in goods">
				<img :src="value.imgurl" />
				<p v-text="value.content"></p>
				<div class="price">
					<span>
						￥
						<em v-text="value.now_price"></em>
					</span>
					<i class="iconfont icon-jiahao" @click="addCar(value._id)"></i>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import $ from 'jquery'
	export default {
		props: ['kinds'],
		data(){
			return {
				goods: [],
				title: '标题'
			}
		},
		created(){
			var self = this;
			//根据父组件挂载的kinds属性拿取当前页面数据
			$.ajax({
				url: 'http://119.23.55.48/cxd',
				data: self.kinds,
				success(msg) {
					self.goods = msg;
				}
			})
		},
		methods: {
			addCar(id){
				this.$store.state.showAlert = true;
				var self = this;
				$.ajax({
					url: 'http://119.23.55.48/user',
					data: {
						option: 'insert',
						id : id,
						qty: 1
					},
					success(){
						setTimeout(function(){
							self.$store.state.showAlert = false;
						},100)
					}
				})
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	ul{
		display: flex;
		li{
			padding:0 15px;display: flex;flex-direction: column;
			img{width:112px;height:112px;}
			p{
				height: 40px;line-height: 20px;
    			font-size: 1.4rem;font-weight: normal;
    			color: #212121;overflow: hidden;
    			white-space: normal;
			}
			.price{
				display: flex;justify-content: space-between;color:#fe4f64;
				span{
					em{font-size:1.8rem;}
				}
				i{font-size:2.2rem;}
			}
			
		}
	
	}
	
</style>