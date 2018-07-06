<template>
	<div class="buyMore">
		<div class="globalTitle">
			逛更多
		</div>
		<div class="imgBox">
				<img v-for="(d,index) in data" :src="d.imgurl"/>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				data: [{
					"imgurl": "//img13.360buyimg.com/img/s370x170_jfs/t21481/150/1038826893/85136/e8c23802/5b1f42efNeabad754.jpg"
				}, {
					"imgurl": "//img11.360buyimg.com/img/s370x170_jfs/t21223/302/622739200/69421/77f6fc60/5b14b685N2a80ef9a.jpg"
				}, {
					"imgurl": "//img20.360buyimg.com/img/s370x170_jfs/t21175/243/686683172/72276/75958df4/5b1506a5N89e4fcba.jpg"
				}, {
					"imgurl": "//img13.360buyimg.com/img/s370x170_jfs/t21412/47/694378433/69163/56c2e085/5b150d80N5fdb8edf.jpg"
				}, {
					"imgurl": "//img11.360buyimg.com/img/s370x170_jfs/t15544/305/926325305/78544/266ab21d/5a421f49N64a35762.jpg"
				}, {
					"imgurl": "//img12.360buyimg.com/img/s370x170_jfs/t21910/295/692835627/68710/4ffcf472/5b151305N40f1e332.jpg"
				}, {
					"imgurl": "//img30.360buyimg.com/img/s370x170_jfs/t22189/105/672909212/51621/462493b9/5b15186dN65570128.jpg"
				}, {
					"imgurl": "//img30.360buyimg.com/img/s370x170_jfs/t21871/170/682102134/47969/6020a28d/5b151a0dN68ef428d.jpg"
				}, {
					"imgurl": "//img30.360buyimg.com/img/s370x170_jfs/t21874/241/681750305/62808/7e13dcd0/5b151caaN8e0ed846.jpg"
				}, {
					"imgurl": "//img10.360buyimg.com/img/s370x170_jfs/t21853/56/678036123/69115/1c2cd7ed/5b151d1cNe7bd63e7.jpg"
				}]
			}
		}
	}
</script>

<style scoped>
	.globalTitle {
		height: 40px;
		padding: 8px 0 8px 10px;
		line-height: 24px;
		font-size: 16px;
	}
	.imgBox{
		font-size:0;
	}
	.imgBox>img{
		width:187px;
		height:84px;
		display:inline-block;
	}
</style>