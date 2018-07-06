<template>
	<div class="wrap">
		<div class="title">
	    	<a class="iconfont icon-arrow-left" @click="back"></a>
	    	<span style="font-family: Arial, 'Microsoft YaHei',color:'#000'" v-text="title"></span>
			<i class="iconfont icon-icon-more" @click="change"></i>
		</div>
		<transition name="fade">
			<div class="car" v-show="showOptions">
				<a href="#/car">
					<i class="iconfont icon-gouwuche"></i>
					购物车
				</a>
				<a href="#/car">
					<i class="iconfont icon-sousuo"></i>
					搜索
				</a>
				<a href="#/car">
					<i class="iconfont icon-leimu"></i>
					类目
				</a>
				<a href="#/home">
					<i class="iconfont icon-shouye"></i>
					首页
				</a>
				<a href="#/center">
					<i class="iconfont icon-20150825tubiaolianxizhuanhuan03"></i>
					我的1号店
				</a>
			</div>
		</transition>
		
	</div>
	
</template>

<script>
	import $ from 'jquery'
	export default{
		props: ['title'],
		data(){
			return {
				showOptions: false
			}
		},
		methods: {
			change(){
				this.showOptions=!this.showOptions;
				$('.car').slideDown('slow');
			},
			back(){
				if(window.history.length<=1){
					this.$router.push({path:'/'})
                	return false
				}else{
					this.$router.go(-1);
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap{
		position: relative;
		.title{
			display: flex;justify-content: space-between;padding:0 6px;
			height:44px;align-items: center;
			a{font-size:2.3rem;color:#ff3c3c;}
			span{color:#000;font-size:1.7rem;font-weight: normal;}
			i{color:#ff3c3c;font-size:2.3rem;}
		}
		.car{
			position: absolute;background:rgba(51,51,51,0.8);color:#fff;
			width:135px;z-index: 10;right:5px;top:50px;padding:4px 10px;
			display: flex;flex-direction: column;border-radius: 5px 5px 0 0;
			
			a{
				height:44px;line-height: 44px;color:#fff;
				border-bottom: 1px solid #fff;font-size:1.4rem;
				i{
					display: inline-block;font-size: 2.0rem;margin-right:15px;color:#fff;
					width:20px;height:44px;line-height: 44px;vertical-align: top;
				}
			}
			a:last-child{border-bottom: 0 none;
			}
			
		}
		.car:before{
				content: '';opacity: 0.8;
				position: absolute;right:9px;top:-15px;
				border:8px solid transparent;width:0;height:0;
				border-bottom:8px solid;border-bottom-color: rgba(51,51,51,0.8);
			}
	}
	
	/*.fade-enter-active{animation: fade-in .5s;}
	.fade-leave-active{animation: fade-out .5s;}
	@keyframes fade-in{
        from{
            height: 0;
        }
        to{
            height: 100%;
        }
    }

    @keyframes fade-out{
        from{height: 100%;}
        to{height: 0;}
    }*/
</style>