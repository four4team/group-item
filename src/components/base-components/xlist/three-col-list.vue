<template>
	<ul>
		<li v-for="(value,index) in list" :style="{marginTop:index>2?'7px':'0px'}" @click="todatails(value._id)">
			<div class="imgwrap">
				<img :src="value.imgurl" style="width:100px;height:100px"/>
			</div>
			<div class="content" v-text="value.content"></div>
			<div class="price">
				<span v-text="value.now_price"></span>
				<del v-text="value.old_price"></del>
			</div>
		</li>
	</ul>
</template>

<script>
	import $ from 'jquery'
	export default{
		props: ['kind','need'],
		data(){
			return {
				list: []
			}
			
		},
		mounted(){
			var self = this;
			//根据父组件挂载的kind属性拿取当前页面数据
			$.ajax({
				url: 'http://119.23.55.48/cxd',
				data: {
					one_kind: 'cheep_buy',
					two_kind: 'mass_group',
					three_kind: self.kind
				},
				success(msg) {
					self.list = msg;
				}
			})
		},
		methods: {
			todetails(id){
				this.$store.state.id = id;
			}
		}
		
	}
	
	//					msg.forEach(function(item,i){
//						if(item.three_kind=='must_tun'){
//							
//						}else {
//							self.kindgoods[item.three_kind]=[];
//						}
//					})
//					
//					//不能第一次直接push对象的属性，因为对象的属性没加任何东西不是一个数组
//					msg.forEach(function(item,i){
//						if(item.three_kind=='must_tun'){
//						}else {
//							self.kindgoods[item.three_kind].push(item);
//						}
//					})
</script>

<style scoped>
	ul{
		display: flex;flex-wrap: wrap;justify-content: space-between;
		background: #F5DF6F;
		
	}
	li{
		padding:4px;background: #fff;
		width:30%;
		}
	img{width:112px;height:112px;}
	.content{display: -webkit-box;overflow: hidden;
	    			text-overflow: ellipsis;-webkit-line-clamp: 2;
	    			-webkit-box-orient: vertical;word-break: break-all;
	    			font-size: 14px;color: #000;text-align: center;
	    			padding: 0 3%;height: 40px;
					}	
	.price{
		display: flex;justify-content: space-around;
	}
	.price span{color:#F02B2B;}
	.price del{color:#999;}
</style>