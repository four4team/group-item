<template>
	<div class="back" v-show="showBack" @click="backTop" :data-sc="scroll">
		<i class="iconfont icon-huidingbu" style="font-size:23px;color:red;"></i>
	</div>
</template>

<script>
	export default{
		computed: {
			showBack(){
				return this.$store.state.showback;
			},
			scroll(){
				return window.scrollHeight;
			}
			
		},
		methods: {
			backTop(){
				window.scrollTo(0,0);
				
			}
		},
		mounted(){
			var self = this;
			document.addEventListener('scroll',function(){
				if(scrollY>800){
					self.$store.state.showback = true;
				}else{
					self.$store.state.showback = false;
				}
				
				})
		}
	}
</script>

<style>
	.back{position: fixed;right: 15px;text-align: center;
		width: 37px;height: 37px;line-height: 37px;bottom:40px;
		background:#fff;z-index: 100;border-radius: 50%;
    	}
</style>