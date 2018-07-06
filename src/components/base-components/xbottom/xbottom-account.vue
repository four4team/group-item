<template>
	<div class="box">
			<div class="kuang">
				<input type="checkbox" @click="allFind" :class="{select:isDraw}">
				<span>全选</span>
			</div>
			<div class="content">
				<span class="box">
					<span v-text="total" class="price"></span>
					<i>商品(不含运费)</i>
				</span>
				
			</div>
			<div class="last">
				结算(<span class="qty" v-text="allnum">
				</span>)
			</div>
	</div>
</template>

<script>
	import $ from'jquery'
	export default {
		
		computed: {
			total(){
				return this.$store.state.allPrice;
			},
			isDraw(){
				//判断全选勾是否勾上
				if(this.$store.state.isAllSelect.indexOf(false)<0){
					//判断数组是否为空，即购物车ajax有无请求回来
					//因为ajax请求回来才有数据, vuex中的isAllSelect才为由false组成的数组
					if(this.$store.state.isAllSelect[0]==null){
						return false;
					}else{
						return true;
					}
					
				}else{
					return false;
				}
			},
			allnum(){
				return this.$store.state.allNum
			}
		},
		methods: {
			allFind(){
				//判断是否所有商品都勾上
				if(this.$store.state.isAllSelect.indexOf(false)<0){
					//如果商品都勾上，则让判断商品状态的数组元素全为false,即全不选
					this.$store.state.isAllSelect=this.$store.state.isAllSelect.map((item,i)=>{
						return false;
					})
				}else{
					//如果商品未全部勾上，则让判断商品状态的数组元素全为true,即全选
					this.$store.state.isAllSelect=this.$store.state.isAllSelect.map((item,i)=>{
						return true;
					})
				}
					
			}
		},
		mounted(){
			//console.log($('input').length)
		}
	}
</script>

<style lang='scss' scoped>
	*{box-sizing: border-box;}
	.box{
		display: flex;height:100%;width: 100%;
		.kuang{
			padding:5px 10px;display: flex;flex-direction: column;
			
			input{
				border:1px solid #bdbdbd;position: relative;
				border-radius:4px;width:20px;height:20px;display: inline-block;
				opacity: 0.8;
				-webkit-appearance: none;
			}
			input:after{
				content: '';
			    position: absolute;
			    left: 3px;
			    top: 4px;
			    width: 11px;
			    height: 5px;
			    border-left: 2px solid #fff;
			    border-bottom: 2px solid #fff;
			    transform: rotate(310deg);
			}
			span{
				display: block;height:24px;line-height: 24px;
			}
			.select{
				background:#ff9800;color:#fff;border:0 none;
				text-align: center;padding-top:15px;
			}
		}
		.content{
			width:250px;height:100%;
			.box{
				text-align: center;display: flex;flex-direction: column;
				width:80px;padding-top:6px;
				span{line-height:20px;color:#ff3c25;}
				}
			}
		.last{
			width:81px;height:55px;line-height: 55px;text-align: center;
			background: #ff3c25;font-size: 1.6rem;color:#fff;
		}
	}
	
	
</style>