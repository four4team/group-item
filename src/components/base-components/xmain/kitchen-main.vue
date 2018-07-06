<template>
	<div style="background: #FCFCFC;">
		<xtitle :tit='tit'></xtitle>
		<xlist :kinds="kinds[0]"></xlist>
		<xtitle :tit='haotit'></xtitle>
		<xbanner :kind="kinds[1]" style="overflow:hidden;height:151px;"></xbanner>
		<oneImg imgurl="https://img10.360buyimg.com/img/s750x300_jfs/t21424/209/464819574/100977/9d22fc3/5b0e4887N2803a08f.png"></oneImg>
		<xlist :kinds="kinds[2]" style="margin-top:15px;"></xlist>
		<oneImg imgurl="https://img12.360buyimg.com/img/s750x300_jfs/t19294/263/2530620591/154626/96c62e8d/5afb90e1Ne7f64b6e.jpg"></oneImg>
		<xlist :kinds="kinds[3]" style="margin-top:15px;"></xlist>
		<oneImg imgurl="https://img12.360buyimg.com/img/s750x300_jfs/t17011/201/1541004088/177421/8b7fee2c/5acefe31N8556e067.jpg"></oneImg>
		<xlist :kinds="kinds[4]" style="margin-top:15px;"></xlist>
	</div>
	
</template>

<script>
	import xtitle from '../xtitle/simple-title'
	import xlist from '../xlist/slide-ul'
	import xbanner from '../xbanner/special-banner'
	import oneImg from '../one-img-show/one-img'
	export default {
		components: {xtitle, xlist, xbanner, oneImg},
		data() {
			return {
				tit: {
					title: "<span style='font-size:1.8rem;'>/</span> 当季精品 <span style='font-size:1.6rem;'>/<span>",
					color: '#fe6651',
					content: '买手推荐 品质精选',
					paddingTop: '5px'
				},
				haotit:{
					title: "<span style='font-size:1.8rem;'>/</span> 好货清单 <span style='font-size:1.6rem;'>/<span>",
					color: '#fe6651',
					content: '让生活变得有质感',
					contColor: '#000'
				},
				kinds: [{
					one_kind: 'quality_kitchen',
					two_kind: 'fine_season'
				},{
					one_kind: 'quality_kitchen',
					two_kind: 'hao_list'
				},{
					one_kind: 'quality_kitchen',
					two_kind: 'hao_list',
					three_kind: 'summer_ice'
				},{
					one_kind: 'quality_kitchen',
					two_kind: 'hao_list',
					three_kind: 'consortium'
				},{
					one_kind: 'quality_kitchen',
					two_kind: 'hao_list',
					three_kind: 'barbecue'
				}]
			}
		}
	}
</script>

<style>
</style