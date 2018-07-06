<template>
	<div>
		<xgoodslistHead/>
		<xgoodslistMain/>
		<!--<xload/>-->
	</div>
</template>

<script>
	import xgoodslistHead from '../base-components/xheader/xgoodslist-head';
	import xgoodslistMain from '../base-components/xmain/xgoodslist-main';

	export default {
		components : {
			xgoodslistHead,
			xgoodslistMain
		}
	}
</script>

<style>

</style>