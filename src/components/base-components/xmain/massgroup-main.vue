<template>
	<div>
		<!--<div v-for="(myimg) in oneImgs">
			<oneImg :imgurl="myimg"></oneImg>
			<goodslist :kind="value"></goodslist>
		</div>-->
		<oneImg :imgurl="oneImgs[1]"></oneImg>
		<goodslist :kind="kinds[0]"></goodslist>
		<oneImg :imgurl="oneImgs[2]"></oneImg>
		<goodslist :kind="kinds[1]"></goodslist>
		<oneImg :imgurl="oneImgs[3]"></oneImg>
		<goodslist kind="kinds[2]"></goodslist>
		<oneImg :imgurl="oneImgs[4]"></oneImg>
		<goodslist :kind="kinds[3]"></goodslist>
		<oneImg :imgurl="oneImgs[5]"></oneImg>
		<goodslist :kind="kinds[4]"></goodslist>
		<oneImg :imgurl="oneImgs[6]"></oneImg>
		<goodslist :kind="kinds[5]"></goodslist>
		<oneImg :imgurl="oneImgs[7]"></oneImg>
		<goodslist :kind="kinds[6]"></goodslist>
		<oneImg :imgurl="oneImgs[8]"></oneImg>
		<goodslist :kind="kinds[7]"></goodslist>
		<oneImg :imgurl="oneImgs[9]"></oneImg>
		<goodslist :kind="kinds[8]"></goodslist>
		<oneImg :imgurl="oneImgs[10]"></oneImg>
		<goodslist :kind="kinds[9]"></goodslist>
		<oneImg :imgurl="oneImgs[11]"></oneImg>
	</div>
</template>

<script>
	import $ from 'jquery'
	import oneImg from '../one-img-show/one-img'
	import goodslist from '../xlist/three-col-list'
	export default{
		components: {oneImg,goodslist},
		props: ['oneImgs'],
		data() {
			return {
				need: {
					col: 3,
					borderColor: '#f5df6f'
				},
				kinds: ['worth_tun','rice_oil','xiuxian_temp','imported_food','milk_water','famous_wine','mass_fresh','clean_product','mother_baby','home_pet']
			}
		}
	}
</script>

<style>
</style>