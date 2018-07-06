<template>
	<div class="ticket">
		<theader style="position:fixed;top:0;left:0"/>
		<div class="tit_cont clearfix" style="position:fixed;top:100px;left:0">
			<div class="fixbox">
				<div class="fixbox_cont" :class="{change:num===idx}" :num0="num" @click="changeMore(num)">
					精选
				</div>
			</div>
			<div class="fixul clearfix">
				<ul>
					<li v-for="(f,index) in title" @click="changeColor1(index)" :index="index"><span v-text="f" :class="{change:index===idx}"></span></li>
				</ul>
			</div>
		</div>
		<div class="ticketCont" style="margin-top:136px">

			<div class="ticket1">
				<ul>
					<li>
						<div  class="imgbox"><img src="../../assets/tic0.png" alt="" style="height:86px;width:100%;" /></div>
						<div  class="imgbox"><img src="../../assets/tic1.png" alt="" style="height:86px;width:100%;" /></div>	
						<div  class="imgbox"><img src="../../assets/tic2.png" alt="" style="height:86px;width:100%;" /></div>
						<div  class="imgbox"><img src="../../assets/tic3.png" alt="" style="height:86px;width:100%;" /></div>
						<div  class="imgbox"><img src="../../assets/tic2.png" alt="" style="height:86px;width:100%;" /></div>
						<div  class="imgbox"><img src="../../assets/tic3.png" alt="" style="height:86px;width:100%;" /></div>
						<div  class="imgbox"><img src="../../assets/tic1.png" alt="" style="height:86px;width:100%;" /></div>
						<div  class="imgbox"><img src="../../assets/tic0.png" alt="" style="height:86px;width:100%;" /></div>
						<div  class="imgbox"><img src="../../assets/tic0.png" alt="" style="height:86px;width:100%;" /></div>
						<div  class="imgbox"><img src="../../assets/tic1.png" alt="" style="height:86px;width:100%;" /></div>
						<div  class="imgbox"><img src="../../assets/tic0.png" alt="" style="height:86px;width:100%;" /></div>
						<div  class="imgbox"><img src="../../assets/tic3.png" alt="" style="height:86px;width:100%;" /></div>
						<div  class="imgbox"><img src="../../assets/tic2.png" alt="" style="height:86px;width:100%;" /></div>
						<div  class="imgbox"><img src="../../assets/tic0.png" alt="" style="height:86px;width:100%;" /></div>
						<div  class="imgbox"><img src="../../assets/tic1.png" alt="" style="height:86px;width:100%;" /></div>
						<div  class="imgbox"><img src="../../assets/tic3.png" alt="" style="height:86px;width:100%;" /></div>
						<div  class="imgbox"><img src="../../assets/tic0.png" alt="" style="height:86px;width:100%;" /></div>
						<div  class="imgbox"><img src="../../assets/tic0.png" alt="" style="height:86px;width:100%;" /></div>
						<div  class="imgbox"><img src="../../assets/tic3.png" alt="" style="height:86px;width:100%;" /></div>
						<div  class="imgbox"><img src="../../assets/tic0.png" alt="" style="height:86px;width:100%;" /></div>
						<div  class="imgbox"><img src="../../assets/tic2.png" alt="" style="height:86px;width:100%;" /></div>
						<div  class="imgbox"><img src="../../assets/tic0.png" alt="" style="height:86px;width:100%;" /></div>
						<div  class="imgbox"><img src="../../assets/tic1.png" alt="" style="height:86px;width:100%;" /></div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import theader from "../ticketComponents/theader"
	export default {
		data() {
			return {
				title: ['食品饮料', '美妆个护', '服饰内衣', '母婴玩具', '手机数码', '家用电器', '电脑办公', '鞋靴箱包', '运动户外', '家居家纺', '活色生鲜', , '医药保健', '钟表首饰', '汽车用品', '宠物园艺', '图书音像'],
				idx: -1,
				num: -1,
				imgurl: ['../../assets/tic0.png',
					'/static/img/tic0.79e691d.png',
					'/static/img/tic0.79e691d.png',
					'/static/img/tic0.79e691d.png',
					'/static/img/tic0.79e691d.png',
					'/static/img/tic0.79e691d.png',
					'/static/img/tic0.79e691d.png',
					'/static/img/tic0.79e691d.png',
					'/static/img/tic0.79e691d.png',
					'/static/img/tic0.79e691d.png',
					'/static/img/tic0.79e691d.png',
					'/static/img/tic0.79e691d.png',
					'/static/img/tic0.79e691d.png',
					'/static/img/tic0.79e691d.png',
					'/static/img/tic0.79e691d.png',
					'/static/img/tic0.79e691d.png',
					'/static/img/tic0.79e691d.png',
					'/static/img/tic0.79e691d.png',
					'/static/img/tic0.79e691d.png',
					'/static/img/tic0.79e691d.png',
					'/static/img/tic0.79e691d.png',
					'/static/img/tic0.79e691d.png',
					'/static/img/tic0.79e691d.png'

				]
			}
		},
		components: {
			theader
		},
		methods: {
			changeColor1(index) {
				this.idx = index
			},
			changeMore(num) {
				this.idx = num
			}
		
		}
	}
</script>

<style scoped>
	.ticket {
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	
	.tit_cont {
		border-bottom: 1px solid #D8D8D8;
		position: relative;
		font-size: 14px;
		height:36px;
	}
	
	.fixbox {
		height: 40px;
		width: 80px;
		border: 1px solid #D8D8D8;
		position: absolute;
		top: -4px;
		left: 0;
		background-color: #fff;
		z-index: 2;
		text-align: center;
		line-height: 40px;
	}
	
	.fixul {
		height: 36px;
		position: relative;
		overflow: hidden;
		overflow-x: auto;
		width: 375px;
		z-index: 1;
		background-color: #fff;
	}
	
	.fixul>ul {
		width: 1000px;
		height: 36px;
		position: absolute;
		left: 0px;
		top: 0;
		margin-left: 80px;
	}
	ul>li{

	}
	ul>li>span {
		padding: 0 5px;
		line-height: 36px;
		float: left;
		height: 36px;
	}
	
	.change {
		color: #ff6769;
		border-bottom: 3px solid #ff6769;
	}
	
	.ticketCont {
		background-color: #f5f5f5;
		flex: 1;
		overflow-x: hidden;
	}
	
	.imgbox {
		padding: 0 20px;
		margin-bottom: 20px;
	}
	
	.ticket1>ul>li {
		padding-top: 20px;
	}
</style>