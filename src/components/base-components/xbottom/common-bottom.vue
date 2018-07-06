<template>
	<div class="bot">
		<a v-for="(value,index) in field" :style="{color:index==0?'#fe4f64': '#fff'}">
			<i :class="`iconfont ${value.icon}`"></i>
			<span v-text="value.title"></span>
		</a>
	</div>
</template>

<script>
	export default {
		props: ['field']
	}
</script>

<style lang="scss" scoped>
	.bot{
		display: flex;justify-content: space-around;padding:4px 0;max-height:60px;
		a{
			display: flex;flex-direction: column;justify-content: space-between;
			align-items: center;
		}
	}
</style>