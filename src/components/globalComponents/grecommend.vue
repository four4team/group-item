<template>
	<div class="recommend">
		<div class="globalTitle">
			为你推荐
		</div>
		<div class="rec_content">
			<div class="rec_list">
				<ul class="list_box">
					<li v-for="(t,index) in titleList" class="list_li" @click="changeColor(index)" :index="index" :class="{changeCol:index===idx}"><span v-text="t"></span></li>
				</ul>
			</div>
			<div class="product_list" :data-useful="ajax" v-show="num===idx" :num="num">
				<div class="product_item" v-for="(s,index) in data">
					<a  class="product_detail" >
						<a href="#/detail" @click="toDetail0(index)" style="height:103px;width:103px"><img :src="s.imgurl" alt="" /></a>
						<h3 v-text="s.title"></h3>
						<p v-text="s.now_price"></p>
						<div class="addBtn" @click="addCar()">
							<div class="yuan">
							<div class="heng"></div>
							<div class="shu"></div>	
							</div>							
						</div>						
					</a>
					<div class="tips" v-show="showTips">成功加入购物车</div>
				</div>
			</div>
			<!---->
			<div class="product_list" :data-useful="ajax1" v-show="num1===idx" :num1="num1">
				<div class="product_item" v-for="(y,index) in data1">
					<a class="product_detail" >
						<a href="#/detail" @click="toDetail1(index)" style="height:103px;width:103px"><img :src="y.imgurl" alt="" /></a>
						<h3 v-text="y.title"></h3>
						<p v-text="y.now_price"></p>
						<div class="addBtn" @click="addCar()">
							<div class="yuan">
							<div class="heng"></div>
							<div class="shu"></div>	
							</div>							
						</div>						
					</a>
					<div class="tips" v-show="showTips">成功加入购物车</div>
				</div>
			</div>				
			<!---->
			<div class="product_list" :data-useful="ajax2" v-show="num2===idx" :num2="num2">
				<div class="product_item" v-for="(u,index) in data2">
					<a class="product_detail" >
						<a href="#/detail" @click="toDetail2(index)" style="height:103px;width:103px"><img :src="u.imgurl" alt="" /></a>
						<h3 v-text="u.title"></h3>
						<p v-text="u.now_price"></p>
						<div class="addBtn" @click="addCar()">
							<div class="yuan">
							<div class="heng"></div>
							<div class="shu"></div>	
							</div>							
						</div>						
					</a>
					<div class="tips" v-show="showTips">成功加入购物车</div>
				</div>
			</div>
			<!---->
			<div class="product_list" :data-useful="ajax3" v-show="num3===idx" :num3="num3">
				<div class="product_item" v-for="(i,index) in data3">
					<a class="product_detail" >
						<a href="#/detail" @click="toDetail3(index)" style="height:103px;width:103px"><img :src="i.imgurl" alt="" /></a>
						<h3 v-text="i.title"></h3>
						<p v-text="i.now_price"></p>
						<div class="addBtn" @click="addCar()">
							<div class="yuan">
							<div class="heng"></div>
							<div class="shu"></div>	
							</div>							
						</div>						
					</a>
					<div class="tips" v-show="showTips">成功加入购物车</div>
				</div>
			</div>
				
			<!---->
			<div class="product_list" :data-useful="ajax4" v-show="num4===idx" :num4="num4">
				<div class="product_item" v-for="(o,index) in data4">
					<a class="product_detail" >
						<a href="#/detail" @click="toDetail4(index)" style="height:103px;width:103px"><img :src="o.imgurl" alt="" /></a>
						<h3 v-text="o.title"></h3>
						<p v-text="o.now_price"></p>
						<div class="addBtn" @click="addCar()">
							<div class="yuan">
							<div class="heng"></div>
							<div class="shu"></div>	
							</div>							
						</div>						
					</a>
					<div class="tips" v-show="showTips">成功加入购物车</div>
				</div>
			</div>
				
			<!---->
				<div class="product_list" :data-useful="ajax5" v-show="num5===idx" :num5="num5">
				<div class="product_item" v-for="(p,index) in data5">
					<a class="product_detail" >
						<a href="#/detail" @click="toDetail5(index)" style="height:103px;width:103px"><img :src="p.imgurl" alt="" /></a>
						<h3 v-text="p.title"></h3>
						<p v-text="p.now_price"></p>
						<div class="addBtn" @click="addCar()">
							<div class="yuan">
							<div class="heng"></div>
							<div class="shu"></div>	
							</div>							
						</div>						
					</a>
					<div class="tips" v-show="showTips">成功加入购物车</div>
				</div>
			</div>
				
			<!---->
				<div class="product_list" :data-useful="ajax6" v-show="num6===idx" :num6="num6">
				<div class="product_item" v-for="(q,index) in data6">
					<a class="product_detail" >
						<a href="#/detail" @click="toDetail6(index)" style="height:103px;width:103px"><img :src="q.imgurl" alt="" /></a>
						<h3 v-text="q.title"></h3>
						<p v-text="q.now_price"></p>
						<div class="addBtn" @click="addCar()">
							<div class="yuan">
							<div class="heng"></div>
							<div class="shu"></div>	
							</div>							
						</div>						
					</a>
					<div class="tips" v-show="showTips">成功加入购物车</div>
				</div>
			</div>
				
			<!---->
				<div class="product_list" :data-useful="ajax7" v-show="num7===idx" :num7="num7">
				<div class="product_item" v-for="(w,index) in data7">
					<a class="product_detail" >
						<a href="#/detail" @click="toDetail7(index)" style="height:103px;width:103px"><img :src="w.imgurl" alt="" /></a>
						<h3 v-text="w.title"></h3>
						<p v-text="w.now_price"></p>
						<div class="addBtn" @click="addCar()">
							<div class="yuan">
							<div class="heng"></div>
							<div class="shu"></div>	
							</div>							
						</div>						
					</a>
					<div class="tips" v-show="showTips">成功加入购物车</div>
				</div>
			</div>
			<!---->
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				titleList:['世界杯','精选牛奶','进口水饮','冰爽嗨喝','冰淇淋','每日鲜果','夏日防晒','精选面膜'],
				idx:0,
				data:[],
				data1:[],
				data2:[],
				data3:[],
				data4:[],
				data5:[],
				data6:[],
				data7:[],
				num:0,
				num1:1,
				num2:2,
				num3:3,
				num4:4,
				num5:5,
				num6:6,
				num7:7,
				showTips:false
				
				
			}
		},
		computed: {
			ajax() {
				var self = this;
				$.ajax({
					url: "http://119.23.55.48/zhipeng?kind=global_goods1",
					success(data) {
						
						var arr =[]
						for(let i = 2;i<=15;i++){
							arr.push(data[i])
						}						
						self.data = arr												
					}
				})
			},
			ajax1() {
				var self = this;
				$.ajax({
					url: "http://119.23.55.48/zhipeng?kind=global_goods2",
					success(data) {
											
						self.data1 = data												
					}
				})
			},
			ajax2() {
				var self = this;
				$.ajax({
					url: "http://119.23.55.48/zhipeng?kind=global_goods3",
					success(data) {
										
						self.data2 = data												
					}
				})
			},
			ajax3() {
				var self = this;
				$.ajax({
					url: "http://119.23.55.48/zhipeng?kind=global_goods4",
					success(data) {
										
						self.data3 = data												
					}
				})
			},
			ajax4() {
				var self = this;
				$.ajax({
					url: "http://119.23.55.48/zhipeng?kind=global_goods5",
					success(data) {
										
						self.data4 = data												
					}
				})
			},
			ajax5() {
				var self = this;
				$.ajax({
					url: "http://119.23.55.48/zhipeng?kind=global_goods6",
					success(data) {								
						self.data5 = data												
					}
				})
			},
			ajax6() {
				var self = this;
				$.ajax({
					url: "http://119.23.55.48/zhipeng?kind=global_goods7",
					success(data) {
										
						self.data6 = data												
					}
				})
			},
			ajax7() {
				var self = this;
				$.ajax({
					url: "http://119.23.55.48/zhipeng?kind=global_goods8",
					success(data) {
										
						self.data7 = data												
					}
				})
			}
			
		},
		
		methods:{
			addCar(){
				console.log(5670)
				this.showTips = true;
				setTimeout(()=>{
					this.showTips = false;
				},1000)
			},
			changeColor(index){
				this.idx = index
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
			},
			toDetail4(index) {
//				//点击传参到详情页
				this.$store.state.good = this.data4[index];
			},
			toDetail5(index) {
//				//点击传参到详情页
				this.$store.state.good = this.data5[index];
			},
			toDetail6(index) {
//				//点击传参到详情页
				this.$store.state.good = this.data6[index];
			},
			toDetail7(index) {
//				//点击传参到详情页
				this.$store.state.good = this.data7[index];
			}
		}
		
	}
	

</script>

<style scoped>
	.globalTitle {
		height: 40px;
		padding: 8px 0 8px 10px;
		line-height: 24px;
		font-size: 16px;
	}
	.rec_list{
		height:44px;
		border-top:1px solid #BDBDBD;
		border-bottom:1px solid #BDBDBD;
		position:relative;
		overflow: hidden;
		overflow-x:auto;
	}
	.list_box{
		position:absolute;
		left:0;
		top:0;
		font-size:14px;
		width:600px;
	}
	.list_box>li{
		float:left;
	}
	.list_box>li>span{
		display:inline-block;
		padding: 0 10px;
		height:42px;
		line-height: 42px;
	}
	.changeCol{
		color:#8043F0;
	}
	.product_item{
		width:124px;
		padding:10px 0;
		border-right:1px solid #eee;
		border-bottom:1px solid #eee;
		display:inline-block;
	}
	.product_item:nth-child(3n){
		border-right:0 none;
	}
	.product_detail{
		width:103px;
		color:#000;
		font-size:10px;
		position:relative;
	}
	.product_detail img{
		width:103px;
		height:103px;
	}
	.product_detail>h3{
		height:28px;
		margin-top:8px;
		overflow: hidden;
		white-space:normal;
		font-weight:normal;
		line-height: 14px;
	}
	.product_detail>p{
		height:18px;
		margin-top:3px;
		color:#a648ff;
	}
	.addBtn{
		height:32px;
		width:32px;
		position:absolute;
		bottom:-9px;
		right:-112px;
		z-index: 3;
	}
	.yuan{
		height:20px;
		width:20px;
		border-radius:50%;
		border:1px solid #8043F0;
		position:absolute;
		top:50%;
		left:50%;
		transform:translate(-50%,-50%);
	}
	.heng{
		width:12px;
		height:1px;
		background-color: #8043F0;
		position:absolute;
		top:50%;
		left:50%;
		transform:translate(-50%,-50%);
	}
	.shu{
		width:1px;
		height:12px;
		background-color: #8043F0;
		position:absolute;
		top:50%;
		left:50%;
		transform:translate(-50%,-50%);
	}
	.tips{
		font-size: 14px;
		color:#fff;
		height:35px;
		line-height:35px ;
		width:220px;
		text-align:center;
		border-radius:4px;
		background-color:#222;
		opacity:0.5;
		position:fixed;
		top:50%;
		left:50%;
		transform:translate(-50%,-50%);
	}
</style>