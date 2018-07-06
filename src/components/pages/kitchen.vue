<template>
	<div>
		<xheader title="品质厨房"></xheader>
		<xbanner style="height:159px;" :kind="banner_imgs"></xbanner>
		<kitmain></kitmain>
		<xbottom :field="bottom" style="background:#3c3d52"></xbottom>
		<xback></xback>
		<xalert v-show="showalert"></xalert>
	</div>

</template>

<script>
	import xheader from '../base-components/xtitle/goodslist-title'
	import xbanner from '../base-components/xbanner/common-banner'
	import kitmain from '../base-components/xmain/kitchen-main'
	import xbottom from '../base-components/xbottom/common-bottom'
	import xback from '../base-components/for-user/back-top'
	import xalert from '../base-components/for-user/xalert'
	export default {
		components: {
			xheader,
			xbanner,
			kitmain,
			xbottom,
			xback,
			xalert
		},
		data(){
			return {
				banner_imgs: {
					one_kind: 'quality_kitchen',
					two_kind: 'banner'
				},
				bottom: [{
					icon: 'icon-chufang',	
					title: '品质厨房'
				},{
					icon: 'icon-juzi',
					title: '1号生鲜'
				},{
					icon: 'icon-pingzi',
					title: '精选好物'
				}]
			}
		},
		computed: {
			showalert(){
				return this.$store.state.showAlert
			}
		}
	}
</script>

<style>

</style>