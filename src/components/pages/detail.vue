<template>
	<div style="height:100%;">
		<gheader changeTitle="商品详情"/>
		<dgoodsBox/>
	</div>	
</template>

<script>
	import gheader from "../globalComponents/gheader"
	import dgoodsBox from "../detailComponents/dgoodsBox"
	export default{
		components:{
			gheader,
			dgoodsBox
		}
		//子组件向父组件通信：先在子组件定义一个函数
//		data(){
//			return{
//				data:''
//			}
//		},
//		methods:{
//			takeD(aa){
//				console.log(123)
//				this.data = aa
//			}
//		}
	}

</script>

<style>
</style>