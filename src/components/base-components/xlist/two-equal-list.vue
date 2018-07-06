<template>
	<div id="wrap">
		<headTit :tit='tit'></headTit>
		<div id="box">
			<div class="pic" v-for="(value,index) in info" :key="index" :style="{display: 'flex',flexDirection:value.direction,borderColor:tit.border,background:tit.background}" >
				<div class="content">
					<router-link :to="value.toPage?value.toPage:''">
						<h3 class="main-title" v-text="value.content" style="font-size: 1.7rem;font-weight: normal;color:#212121;align-items: center;width:112px;overflow:hidden;"></h3>
					</router-link>
					<div class="sub-title" style="color:#b1483f;border-color:#b1483f;" v-text="value.title"></div>
				</div>
				<div class="img-wrap">
					<img :src="value.imgurl" :style="{float:info.fomat=='right'?'right':'none',display:value.fomat=='block'?'block':'inlineBlock'}">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import headTit from '../xtitle/head-title'
	export default{
		components: {headTit},
		props: ['tit','info']
	}
</script>

<style lang="scss" scoped>
	*{box-sizing: border-box;}
	#wrap{
		#box{
			display: flex;flex-wrap: wrap;align-items: center;
			.pic{
				width:50%;border-bottom: 1px solid;border-right: 1px solid;
				.content{
					padding-left:15px;width:52%;
					display: flex;flex-direction: column;justify-content: center;
					}
			}
			.pic:nth-child(2n){border-right:0 none;}
			img{width:90px;height:90px;}
		}
	}
	
</style>