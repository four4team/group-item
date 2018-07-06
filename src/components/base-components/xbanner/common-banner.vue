<template>
	<mt-swipe :auto="4000">
	  <mt-swipe-item v-for="value in imgs">
	  	<img :src="value.imgurl" style="width:100%;height:154px;"/>
	  </mt-swipe-item>
	</mt-swipe>
</template>

<script>
	import $ from 'jquery'
	import Vue from 'vue'
	import { Swipe, SwipeItem } from 'mint-ui';
	Vue.component('mt-swipe', Swipe);
	Vue.component('mt-swipe-item', SwipeItem);
	export default{
		props: ['kind'],
		data(){
			return {
				imgs: []
			}
		},
		mounted(){
			var self = this;
			//根据父组件挂载的kind属性拿取当前页面数据
			$.ajax({
				url: 'http://119.23.55.48/cxd',
				data: self.kind,
				success(msg) {
					self.imgs = msg;
				}
			})
		}
	}
</script>

<style scoped>
</style>