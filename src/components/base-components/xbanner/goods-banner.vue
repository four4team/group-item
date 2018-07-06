<template>
<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide">slider1</div>
    <div class="swiper-slide">slider2</div>
    <div class="swiper-slide">slider3</div>
    <div class="swiper-slide">slider1</div>
    <div class="swiper-slide">slider2</div>
    <div class="swiper-slide">slider3</div>
  </div>
</div>
 <!--<swiper-slide style="width:50%;display: flex;">
 	<a v-for="value in list.slice(2,list.length)" style="width:26%;margin-right:6px;">
 		<img :src="value.imgurl" style="width:100px;height:100px;"/>
 		<p v-text="value.content"></p>
		<div class="price">
			<span v-text="value.now_price"></span>
			<i v-text="value.old_price"></i>
		</div>
 	</a>
 	
 </swiper-slide>-->
</template>
<script>
	import Vue from 'vue'
	import VueAwesomeSwiper from 'vue-awesome-swiper'
	import { CellSwipe } from 'mint-ui'
	Vue.use(VueAwesomeSwiper)
	
	import { Swiper, swiperSlide } from 'vue-awesome-swiper'
	
	var mySwiper = new Swiper('.swiper-container',{
		slidesPerView : 8,
		spaceBetween : 20,
		coverflow: true,
		slideToClickedSlide: true,
		loop: true,
		centeredSlides: true
		//spaceBetween : '10%',按container的百分比
	})
	export default {
		props: ['list', 'len']
	}
</script>
<style lang="scss" scoped>
	swiper-container{width:100%;overflow: hidden;}
	.swiper-wrapper{display: flex;width:200%;}
	.swiper-slide{background: red;color:white;flex:100px;height:80px;}
	a{
		display: flex;flex-direction: column;
		p{height:34px;overflow:hidden;}
		.price{
			display: flex;justify-content: space-between;font-size:1.6rem;
			span{color:#ff3c25;font-weight: bold;}
			i{color:#bbb;}
		}
	}
	
</style>