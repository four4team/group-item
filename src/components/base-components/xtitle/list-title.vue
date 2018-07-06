<template>
	<ul>
		<li v-for="(value,index) in list" v-text="value"></li>
	</ul>
</template>

<script>
	export default{
		props: ['list']
	}
</script>

<style scoped>
	ul{background-color:#F5DF6F;height:50px;overflow:hidden;}
	li{
		display: inline-block;position: relative;
    	height: 100%;line-height: 50px;
    	padding-right: 10px;padding-left: 20px;
    	font-size: 16px;font-family: PingFang SC;
    	box-sizing: border-box;-webkit-box-sizing: border-box;
    	opacity: 1;color:white;
    }
    li:first-child{font-weight: bold;}
    /*li:first-child:before{content:'';}*/
</style>