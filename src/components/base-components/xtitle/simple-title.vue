<template>
	<div class="module-head">
		<h3 class="head-tit" :style="{color:tit.color}" v-html="tit.title">
			{{tit.title}}
		</h3>
		<div v-text="tit.content" v-if="tit.content?true:false" :style="{color:tit.contColor?tit.contColor: '#bdbdbd',paddingTop:tit.paddingTop?tit.paddingTop: 0}"></div>
	</div>
</template>

<script>
	export default {
		props: ['tit']
	}
</script>

<style lang="scss" scoped>
	*{box-sizing: border-box;}
	.module-head{
		padding: 9px 0;
	    color: #212121;
	    text-align: center;
	    h3{
	    	height: 21px;padding:4px 0;font-size: 1.4rem;
	    	background-size: contain;font-weight: normal;
	    }
	    
	    div{font-size:14px;}
	}
</style>