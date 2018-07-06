<template>
	<div id="wrap">
		<div id="box">
			<div class="pic" v-for="(value,index) in info" :key="index" :style="{display: 'flex',borderColor:tit.border?tit.border:'#fff',background:tit.background}" >
				<div class="content">
					<h3 class="main-title" v-text="value.content" :style="{fontSize: tit.size}"></h3>
					<div class="sub-title">
						<span :style="{color:tit.smallColor,border:tit.smallColor_border?'1px solid '+tit.smallColor_border:'0 none'}" v-text="value.title"></span>
					</div>
				</div>
				<div class="imgwrap">
					<img :src="value.imgurl" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props: ['info','tit']
	}
</script>

<style lang="scss" scoped>
	*{box-sizing: border-box;}
	#wrap{
		#box{
			display: flex;flex-wrap: wrap;align-items: center;justify-content: center;
			.pic{
				width:33.3%;border-bottom: 1px solid;border-right: 1px solid;
				display: flex;flex-direction: column;
				.content{
					width:100%;text-align: center;padding-top:8px;
					.main-title{
						font-weight: normal;
						color:#212121;align-items: center;
						width:100%;overflow:hidden;
					}
					.sub-title{
						span{padding:1px 2px;}
					}
				}
				.imgwrap{padding-top:3px;}
			}
			.pic:nth-child(3n){border-right:0 none;}
			img{width:100%;height:75px;}
		}
	}
	
</style>