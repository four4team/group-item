<template>
	<div class="goodsShow">
		<div class="imgBox" :data-take="takeData">
			<img :src="arr.imgurl" alt="" />
		</div>
		<div class="dataBox">
			<h2 v-text="arr.title"></h2>
			<p v-text="arr.now_price"></p>
			<a class="comment">
				25万+评论[<span>99%</span>好评]
			</a>
		</div>
		<div class="cuxiao">
			购买1-200件时享受单价{{arr.now_price}}，超出数量以结算
		</div>
		<div class="dress">
			<p style="color:#757575">送货至：&nbsp;<span style="color:#000;">广东&nbsp;广州市&nbsp;白云区</span></p>
			<p class="2p"><span>有货，</span>11:00前下单，预计今天(07月01日)送达</p>
			<p class="2p">由1号店发货，并提供售后服务</p>
			<div class="sever">
				服务保障：&nbsp;&nbsp;不支持7天无理由退货&nbsp;&nbsp;正品保障
			</div>
		</div>
		<div class="entry" >
			<span>进入店铺</span>
		</div>
		<div class="searh">
			搜索相关商品
		</div>
		<div class="addBuyCar">
			<a href="#" >加入购物车</a>
			<a href="#" class="buycar"></a>
		</div>
		<a class="toTop" href="#" @click="totop()">^</a>	
	</div>
</template>

<script>

	export default {
		data(){
			return{
				arr:''
			}
		},
		computed: {		
			takeData() {
				var self = this;
				var readId = localStorage.getItem('idx') 
				console.log(readId)
				self.arr = JSON.parse(readId)


//				bus.$on('sendData',(data)=>{
//					console.log(456)
//					console.log(data)
//				})
			}
		},
		methods:{
			totop(){
				console.log(this.arr)
			}
		}
		}
		//=========================

</script>

<style>
	.goodsShow{
		background-color: #f5f5f5;
		
		
	}
	.imgBox {
		width: 100%;
		border-bottom:1px solid #EFD7FF;
	
	}
	
	.imgBox>img {
		height: 376px;
		width: 100%;
	}
	
	.dataBox {
		padding: 0 10px;
		margin-bottom: 10px;
		border-bottom: 1px solid #d8d8d8;
		background-color: #fff;
	}
	.dataBox>h2{
		font-size:14px;
		height:48px;
		font-weight:normal;
		padding-top:8px;
		
	}
	.dataBox>p{
		height:27px;
		font-size:14px;
		color:#fe5955;
		border-bottom:1px solid #d8d8d8;
	}
	.comment{
		display:block;
		height:44px;
		line-height: 44px;
		font-size: 12px;
		color:#666;
	}
	.comment>span{
		color:red;
	}
	.cuxiao{
		height:44px;
		line-height: 44px;
		font-size:12px;
		color:#757575;
		padding:0 10px;
		border-top:1px solid #D8D8D8;
		border-bottom:1px solid #D8D8D8;
		background-color: #fff;
		margin-bottom: 10px;
	}
	.dress{
		padding:5px 10px;
		border-top:1px solid #D8D8D8;
		border-bottom:1px solid #D8D8D8;
		background-color: #fff;
		font-size:12px;
		margin-bottom: 10px;
	}
	.dress>p{
		line-height: 30px;
	}
	.dress .2p{
		height:18px;
		color:#757575;
	}
	.sever{
	height:45px;
	line-height: 45px;
	background-color: #fafafa;
	font-size:10px;
	border-top:1px solid #D8D8D8;
	}
	.entry{
		background-color: #fff;
		padding:20px;
		margin-bottom: 10px;
	}
	.entry>span{
		display:block;
		height:36px;
		line-height: 36px;
		text-align: center;
		border:1px solid #ccc;
		color:#757575;
		font-size:12px;
		border-radius:3px;
	}
	.searh{
		height:44px;
		background-color: #fff;
		line-height: 44px;
		font-size:12px;
		padding-left:28px;
		border-top:1px solid #D8D8D8;
		border-bottom:1px solid #D8D8D8;
		margin-bottom: 10px;
		color:#757575;
	}
	.addBuyCar{
		width:100%;
		padding:10px;
		background-color: #fff;
		position:fixed;
		bottom:0;
		left:0;
	}
	.addBuyCar>a{
		display:inline-block;
		height:34px;
		width:310px;
		line-height: 35px;
		font-size:14px;
		color:#fff;
		text-align:center;
		background-color: #FF3C3C;
		border-radius:3px;
	}
	.addBuyCar .buycar{
		height:28px;
		width:34px;
		background:url("../../assets/buycar.png") no-repeat;
		position:absolute;
		right:12px;
		top:15px;
	}
	.toTop{
		display:block;
		height:34px;
		width:34px;
		border-radius:50%;
		background-color: #000;
		opacity: 0.7;
		position:fixed;
		bottom:100px;
		right:20px;
		line-height: 34px;
		color:#fff;
		text-align: center;
		font-size:12px;
	}
</style>