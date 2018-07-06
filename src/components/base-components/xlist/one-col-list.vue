<template>
	<ul :data-get="getData" :data-total="totalNum">
		<li v-for="(value,index) in list" data-get="getData">
			<div class="kuang">
				<input type="checkbox" :class="{'select':checked[index]}" v-model="checked[index]">
			</div>
			<div class="imgwrap">
				<img :src="value.imgurl" />
			</div>
			<div class="content">
				<p v-text="value.content"></p>
				<p v-text="value.title" v-if="value.title?
												value.content==value.title?
																false:true
												:false"></p>
				<div class="price">￥{{value.now_price}}{{arr}}</div>
			</div>
			<div class="last">
				<div>
					<select name='' v-on:change="changeQty($event,value._id)">
						<option v-for="idx in 99" :selected = "idx==value.qty?'selected':''">{{idx}}</option>
					</select>
				</div>
				<i class="iconfont icon-rubish" @click="remove(value._id,index)"></i>
			</div>
		</li>
	</ul>
</template>

<script>
	import $ from 'jquery'
	export default {
		data(){
			return {
				list: [],
				beforeCheck: false,
				num: 0,
				judge: 0,
				checkArr: [],
				selected: 'a'
			}
			
		},
		computed: {
			//用于判断表单是否全选
			checked(){
				return this.$store.state.isAllSelect;
			},
			getData(){
				var self = this;
				$.ajax({
					url: 'http://119.23.55.48/user?option=find',
					success(msg){
						//console.log(msg);
						self.list = msg;
						//每生成一次页面清空一下状态数组,不然数组会一直拼接上去
						if(self.$store.state.isAllSelect.length>0){
							self.$store.state.isAllSelect=[];
						}
						msg.forEach((item,i)=>{
							self.$store.state.isAllSelect.push(false);
						})
						
					}
				})
				
				return --self.num;
				
			},
			arr(){
				return this.$store.state.isAllSelect;
			},
			totalNum(){
				//观察状态数组有多少个是勾选的
				var qty = 0,price=0.00;
				var self = this;
				this.$store.state.isAllSelect.forEach((item,i)=>{
					//根据索引取对应的qty
					if(item){
						qty+=Number(self.list[i].qty);
						//正则匹配出价格的数字部分，因为有些商品的价格有￥字符
						
						price+=parseFloat(self.list[i].now_price.match(/[0-9\.]+/))*(self.list[i].qty*1);
					    
					}
				})
				this.$store.state.allNum = qty;
				this.$store.state.allPrice = '￥'+price.toFixed(2);
			}
			
		},
		methods: {
			remove(id,index){
				var self = this;
				$.ajax({
					url: 'http://119.23.55.48/user',
					data: {
						option: 'remove',
						id: id,
						success(){
							//让data中的num++,触发getData中的ajax请求
							self.num++
							//删除isAllSelect数组中对应索引的状态值
							self.$store.state.isAllSelect.splice(index,1);
						}
					}
				})
			},
			changeQty(event,_id){
				//获取选中的值
				var qty = event.target.value;
				var self = this;
				$.ajax({
					url: 'http://119.23.55.48/user',
					data: {
						option: 'update',
						id: _id,
						qty: qty
					},
					success(){
						//让data中的num++,触发getData中的ajax请求
						self.num++
					}
				})
				
			}
				
		}
	}
</script>

<style lang="scss" scoped>
	ul{
		/*display: flex;flex-direction: column;overflow-x:hidden;flex:1;*/
		li{
			display: flex;padding:10px;border-bottom: 1px solid #ccc;
			.kuang{
				padding-top:15px;
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
				.select{
					background:#ff9800;color:#fff;border: 0 none;
					text-align: center;padding-top:15px;-webkit-appearance: none;
				}
			}
			
			.imgwrap{
				padding-left: 6px;
				img{
					width:65px;height:65px;
				}
				
			}
			.content{
				display: flex;flex-direction: column;
				justify-content: space-between;padding:0 10px;
				p:first-child{width:216px;height:34px;overflow: hidden;}
				.price{color: #ff3c3c;}
			}
			.last{
				display: flex;flex-direction: column;
				justify-content: space-between;position: relative;
				span{font-size:14px;border:1px solid #ccc;text-align:center;line-height:26px;width:26px;height:26px;display: inline-block;}
				i{font-size: 20px;color:#757575;}
				select{
					width:32px;height:24px;-webkit-appearance: none;
					padding-left:8px;
				}
			}
		}
	}
	input{
	}
</style>