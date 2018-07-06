<template>
	<div id="PROMO_ONELINE_id">
		<a>
			<img :src="imgurl">
		</a>
	</div>
</template>

<script>
	export default{
		props: ['imgurl']
	}
</script>

<style lang="scss" scoped>
	#PROMO_ONELINE_id{width: 100%;
		img{width:100%;}
	}
</style>