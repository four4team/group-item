<template>
	<div id="gheader" class="header">
		<a href="#" class="a_left"></a>
		<h1 v-text="changeTitle" @click="toF()">全球进口</h1>
		<a href="#" class="a_right" @click="showList"></a>
		<div class="show_list" v-show="show_list===true">
			<a href="#">购物车</a>
			<a href="#">搜索</a>
			<a href="#">类目</a>
			<a href="#">首页</a>
			<a href="#" class="last">我的1号店</a>
		</div>
		<div class="saoJiaoBox" v-show="show_list===true"></div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				show_list: false
			}
		},
		methods: {
			showList() {
				this.show_list = !this.show_list
			},
			toF(){
				console.log(5678)
				this.$emit('sendData','hello')
			}
		},
		props:['changeTitle']
	}
</script>

<style scoped>
	.header {
		height: 45px;
		display: flex;
		justify-content: space-between;
		text-align: center;
		line-height: 45px;
		border-bottom: 1px solid #ccc;
	}
	
	.header h1 {
		height: 44px;
		font-size: 16px;
	}
	
	.header>a {
		display: block;
		height: 44px;
		width: 30px;
	}
	
	.header .a_left {
		background: url('../../assets/gh1.png') no-repeat center center;
	}
	
	.header .a_right {
		background: url('../../assets/gh2.png') no-repeat center center;
		position: relative;
	}
	
	.header .show_list {
		position: absolute;
		right: 9px;
		top: 50px;
		width: 135px;
		background-color: #000;
		opacity: 0.7;
		text-align: center;
		border-radius:3%;
		z-index:1;
	}
	
	.header .show_list>a {
		display: block;
		height: 44px;
		line-height: 44px;
		color: #fff;
		font-size: 14px;
		padding: 0 10px;
		border-bottom: 1px solid #111;
	}
	.header .show_list .last{
		border-bottom: 0 none;
	}
	.saoJiaoBox{
		width: 0;
		height: 0;
		border: 6px solid transparent;
		border-left-width: 6px;
		border-right-width: 6px;
		border-bottom-color: #000;
		opacity: 0.6;
		position:absolute;
		top:38px;
		right: 19px;
		z-index:1;
	}
</style>