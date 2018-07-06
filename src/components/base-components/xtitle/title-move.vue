<template>
	<swipe :right="lists" style="background:#F5DF6F;">
		  <p name="fenfa" style="width:100%;">
		  	<a name="fenfa" title="分发的内容" :style="{color:'white'}" v-for="value in list.slice(0,4)" v-text="value"></a>
		  </p>
  	</swipe>
</template>
<script>
	import $ from'jquery'
	import Vue from 'vue'
	import {CellSwipe} from 'mint-ui'
	Vue.component('swipe',CellSwipe);
	export default {
		props: ['list'],
		computed: {
			lists(){
				var arr=[];
				this.list.forEach((item,i)=>{
					var obj = {};
					obj.content = item;
					obj.name="ja";
					obj.style = {color:'white',lineHeight:'50px',fontSize:'16px'};
					arr.push(obj);
				})
				console.log(arr);
				return arr.slice(4,arr.length);
				
			}
		}
	};
</script>
<style lang="scss" scoped>
	.mint-cell-title{width:0;height:0;}
	.mint-cell-wrapper{padding:0;}
	.mint-cell-swipe-buttongroup .mint-cell-swipe-button{color:white!important;}
	p{height:50px;overflow:hidden;padding:0 17px;line-height: 50px;
		a{
			display: inline-block;position: relative;
	    	height: 100%;line-height: 50px;
	    	padding-right: 12px;padding-left: 20px;
	    	font-size: 16px;font-family: PingFang SC;
	    	box-sizing: border-box;-webkit-box-sizing: border-box;
	    	opacity: 1;color:white;
	    }
	    a:first-child{font-weight: bold;padding-left:0;}
	    a:last-child{padding-right:0;}
	}
	
    
</style>