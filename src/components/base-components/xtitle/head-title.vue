<template>
	<div class="module-head" :style="{borderBottom:`1px solid ${tit.border}`}">
		<h3 class="head-tit" style="font-size: 1.4rem;" :style="{background:tit.bg}">
		<i :class="tit.icon" :style="{color:tit.iconColor}" v-if="tit.iconColor?true:false"></i>
			{{tit.title}}
		</h3>
	</div>
</template>

<script>
	export default{
		props: ['tit']
	}
</script>

<style lang="scss" scoped>
	.module-head{
		padding: 9px 0;
	    color: #212121;
	    font-size: 1.4rem;
	    text-align: center;
	    .head-tit{
	    	height: 16px;line-height: 16px;vertical-align: middle;
	    	i{display: inline-block;width:18px;height:18px;vertical-align: middle;}
	    }
	}
</style>
