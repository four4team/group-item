<template>
	<div class="country">
		<div class="globalTitle">
			国家地区馆
		</div>
		<div class="map">
			<img src="//d9.yihaodianimg.com/N10/M08/75/16/ChEi2lmC8jWAIDZYAAEsvy8ZIoc46200.png" alt="" />
		
		</div>
		<div class="countryBox">欧洲馆</div>
		<div class="countryBox box1">日本馆</div>
		<div class="countryBox box2">澳新馆</div>
		<div class="countryBox box3 blueBox">韩国馆</div>
		<div class="countryBox box4 blueBox">港澳台馆</div>
		<div class="countryBox box5 blueBox">东南亚馆</div>
		<div class="countryBox box6 blueBox">美国馆</div>
		
	</div>
</template>

<script>
</script>

<style scoped>
	.country{
		width:100%;
		margin-top:10px;
		background-color: #EFD7FF;
		font-size:12px;
		color:#fff;
		position:relative;	
	}
	.globalTitle{	
		height: 40px;
		padding: 8px 10px;
		line-height: 24px;
		color: #9D48FF;
		font-size: 16px;
	}
	.map{
		font-size: 0;
		
	}
	.map>img{
		width:100%;
		height:205px;
	}
	.countryBox{
		height:28px;
		width:86px;
		background-color:#F9472F;
		text-align: center;
		line-height: 28px;
		border-radius:14px;
		position:absolute;
		top:50px;
		left:20px;
		
	}
	.blueBox{
		background-color:#8043F0;
	}
	.box1{
		top:98px;
		left:190px;
	}
	.box2{
		top:170px;
		left:130px;
	}
	.box3{
		top:35px;
		left:157px;
	}
	.box4{
		top:91px;
		left:92px;
	}
	.box5{
		top:135px;
		left:60px;
	}
	.box6{
		top:140px;
		left:280px;
	}
</style>