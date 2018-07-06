<template>
	<div class="loadmore">
		<i class="iconfont icon-jiazai"></i>
		<span class="weui-loadmore__tips">正在加载</span>
	</div>
</template>

<script>
	export default {}
</script>

<style scoped>
	.loadmore{text-align: center;}
    i{
    	width: 20px;
	    height: 20px;
	    color:#1296db;
	    display: inline-block;
	    vertical-align: middle;
    	animation:rotating .5s linear infinite
    }
    @keyframes rotating{
		from{transform:rotate(0)}
		to{transform:rotate(360deg)}
		}
	
</style>