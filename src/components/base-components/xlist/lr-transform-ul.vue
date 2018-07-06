<template>
	<div style="width:100%;overflow:hidden;padding:8px 0" :data-slide="slide">
		<ul>
			<li v-for="(value,key) in list">
				<a class="product-box" :title="value.content">
					<div class="pic-wrap">
						<div class="pic">
							<img class="lazyload" :src="value.imgurl" alt="value.content"></div>
					</div>
					<div class="item-tit" v-text="value.content"></div>
					<div class="price-box">
						<h3 class="now-price" v-text="value.now_price"></h3>
						<div class="reference">
							<span class="jieshao"></span>
							<span class="old-price" v-text="value.old_price"></span></div>
					</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	import $ from "jquery"
	export default{
		props: ['list'],
		computed: {
			slide() {
//				$("body").on("touchstart", function(e) {
//					e.preventDefault();
//					startX = e.originalEvent.changedTouches[0].pageX,
//						startY = e.originalEvent.changedTouches[0].pageY;
//				}).on("touchmove", function(e) {
//					e.preventDefault();
//					moveEndX = e.originalEvent.changedTouches[0].pageX,
//					moveEndY = e.originalEvent.changedTouches[0].pageY,
//					X = moveEndX - startX;
//					Y = moveEndY - startY;
//
//					if(Math.abs(X) > Math.abs(Y) && X > 0) {
//						alert("left 2 right");
//					} else if(Math.abs(X) > Math.abs(Y) && X < 0) {
//						alert("right 2 left");
//					} else if(Math.abs(Y) > Math.abs(X) && Y > 0) {
//						alert("top 2 bottom");
//					} else if(Math.abs(Y) > Math.abs(X) && Y < 0) {
//						alert("bottom 2 top");
//					} else {
//						alert("just touch");
//					}
//				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	ul {
		display: flex;
		li {
			width: 106px;
			height: 177px;
			margin-left: 10px;
			.item-tit {
				margin: 5px 0;
				height: 36px;
				line-height: 18px;
				color: #212121;
				font-weight: normal;
				font-size: 1.4rem;
				white-space: normal;
				text-align: left;
				overflow: hidden;
			}
			.price-box {
				display: flex;
				.now-price {
					-ms-flex: 1;
					flex: 1;
					height: 16px;
					padding-top: 7.8125%;
					line-height: 16px;
					color: #ff3c25;
					font-size: 1.6rem;
					text-align: left;
					overflow: hidden;
				}
				.reference {
					.jieshao {
						display: block;
						height: 8px;
					}
					.old-price {
						height: 14px;
						line-height: 14px;
						margin-top: 3px;
						color: #bbb;
						font-size: 1.4rem;
						margin-top: 6px;
					}
				}
			}
			img {
				width: 100px;
				height: 100px;
			}
		}
	}
</style>