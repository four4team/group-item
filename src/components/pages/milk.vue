<template>
	<div>
		<xgoodslistHead/>
		<xgoodslistMain/>
		<xload/>
	</div>
</template>

<script>
	import xgoodslistHead from '../base-components/xheader/xgoodslist-head';
	import xgoodslistMain from '../base-components/xmain/xgoodslist-main';
	import xload from '../base-components/for-user/xload';
	
	export default {
		components : {
			xgoodslistHead,
			xgoodslistMain,
			xload
		}
	}
</script>

<style>
</style>