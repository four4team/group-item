<template>
	<div style="height:100%;width=100%">
	<gheader changeTitle="全球进口"/>
	<gbanner/>
	<ghandpick/>
	<gcountry/>
	<gbrand/>
	<gBuyMore/>
	<grecommend/>
	</div>
	
</template>

<script>
	import gheader from "../globalComponents/gheader"
	import gbanner from "../globalComponents/gbanner"
	import ghandpick from "../globalComponents/ghandpick"
	import gcountry from "../globalComponents/gcountry"
	import gbrand from "../globalComponents/gbrand"
	import gBuyMore from "../globalComponents/gBuyMore"
	import grecommend from "../globalComponents/grecommend"
	export default{
		components:{
			gheader,
			gbanner,
			ghandpick,
			gcountry,
			gbrand,
			gBuyMore,
			grecommend
		}
		
	}

</script>

<style>
</style>