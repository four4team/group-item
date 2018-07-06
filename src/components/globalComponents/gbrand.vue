<template>
	<div class="brand">
		<div class="globalTitle">
			全球精选
		</div>
		<div class="produt_box" >
			<a href="#" class="product_bgc">
				<img class="product_img" src="//img11.360buyimg.com/img/s750x360_jfs/t19606/88/2666722993/189219/4bce8a6c/5b077f7aN13afa5b4.jpg" alt="" />
			</a>
			<div class="brand_proList" :data-use="ajax">
				<div class="product_item" v-for="(d,index) in data">
					<a href="#/detail" @click="toDetail0(index)" class="product_detail" >
						<img :src="d.imgurl" alt="" />
						<h3 v-text="d.title"></h3>
						<p v-text="d.now_price"></p>
					</a>
				</div>
			</div>
		</div>
		<!---->
			<div class="produt_box" >
			<a href="#" class="product_bgc">
				<img class="product_img" src="//img10.360buyimg.com/img/s750x360_jfs/t18697/158/2654371861/198729/e82c7901/5b078752Nb3986646.jpg" alt="" />
			</a>
			<div class="brand_proList">
				<div class="product_item" v-for="(d1,index) in data1">
					<a href="#/detail" @click="toDetail1(index)" class="product_detail" >
						<img :src="d1.imgurl" alt="" />
						<h3 v-text="d1.title"></h3>
						<p v-text="d1.now_price"></p>
					</a>
				</div>
			</div>
		</div>
		<!---->
		<div class="produt_box" v-show="bool">
			<a href="#" class="product_bgc">
				<img class="product_img" src="//img30.360buyimg.com/img/s750x360_jfs/t21388/343/262229273/57791/4013bcb7/5b07892fN6193e060.jpg" alt="" />
			</a>
			<div class="brand_proList" >
				<div class="product_item" v-for="(d2,index) in data2">
					<a href="#/detail" @click="toDetail2(index)" class="product_detail" >
						<img :src="d2.imgurl" alt="" />
						<h3 v-text="d2.title"></h3>
						<p v-text="d2.now_price"></p>
					</a>
				</div>
			</div>
		</div>
		<!---->
		<div class="produt_box" v-show="bool">
			<a href="#" class="product_bgc">
				<img class="product_img" src="//img10.360buyimg.com/img/s750x360_jfs/t16999/111/465338055/112570/4a7aedfc/5a7a6060N1016068c.jpg" alt="" />
			</a>
			<div class="brand_proList" >
				<div class="product_item" v-for="(d3,index) in data3">
					<a href="#/detail" @click="toDetail3(index)" class="product_detail" >
						<img :src="d3.imgurl" alt="" />
						<h3 v-text="d3.title"></h3>
						<p v-text="d3.now_price"></p>
					</a>
				</div>
			</div>
		</div>
		<!---->
		<div class="loadMore" @click="showMore()" v-show="!bool">
		点击加载更多优选品牌
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				data:[],
				data1:[],
				data2:[],
				data3:[],
				bool:false
			}
		},
		computed:{
			ajax(){
				var self = this;
				$.ajax({
					url:"http://119.23.55.48/zhipeng?kind=global_goods1",
					success(data){					
						
						let arr = []
						for(let i =16;i<=18;i++){
							arr.push(data[i])
							self.data = arr
						}
						
						let arr1 = []
						for(let i =26;i<=28;i++){
							arr1.push(data[i])
							self.data1 = arr1
						}
						
						let arr2 = []
						for(let i =27;i<=29;i++){
							arr2.push(data[i])
							self.data2 = arr2
						}
						
						let arr3 = []
						for(let i =30;i<=31;i++){
							arr3.push(data[i])
							self.data3 = arr3
						}
					}
				})
			}
		},
		methods:{
			showMore(){
				this.bool = !this.bool
			},
			toDetail0(index) {
//				//点击传参到详情页
				this.$store.state.good = this.data[index];
			},
			toDetail1(index) {
//				//点击传参到详情页
				this.$store.state.good = this.data1[index];
			},
			toDetail2(index) {
//				//点击传参到详情页
				this.$store.state.good = this.data2[index];
			},
			toDetail3(index) {
//				//点击传参到详情页
				this.$store.state.good = this.data3[index];
			}
		
		}
	}
</script>

<style scoped>
	.brand{
		width:100%;
	}
	.globalTitle{
		height: 40px;
		padding: 8px 10px;
		line-height: 24px;
		color: #000;
		font-size: 16px;
	}
	.produt_box{
		
	}
	.product_bgc{
		display:block;
		height:100px;
		position:relative;
	}
	.product_img{
		height:180px;
		width:100%;
		position:absolute;
		top:0;
		left:0;
		z-index: -1;
	}
	.brand_proList{
		padding:0 6px;
		margin:0 auto 10px;
	}
	.product_item{
		width:108px;
		margin-right:8px;
		display:inline-block;
		border: 1px solid #EFD7FF;
		box-shadow: 0 0 8px #EFD7FF;
	}
	.product_item:nth-child(3n){
		margin-right:0;
	}
	.product_detail{
		display:block;
		width:108px;
		padding:10px;
		color:#000;
		font-size:10px;
		background-color: #fff;
	}
	.product_detail>img{
		width:100%;
		height:88px;
	}
	.product_detail>h3{
		margin-top:5px;
		height:14px;
		line-height: 14px;
		overflow: hidden;
		white-space:nowrap;
		text-overflow:ellipsis;
		font-weight:normal;
	}
	.product_detail>p{
		margin-top:3px;
		height:25px;
		line-height: 25px;
		text-align:center;
		
	}
	.loadMore{
		height:38px;
		width:230px;
		border:1px solid #bdbdbd;
		border-radius:18px;
		color:#757575;
		font-size:10px;
		text-align: center;
		line-height: 36px;
		margin:20px auto 0;
	}
</style>