<template>
	<div class="carousel">
		<transition-group tag='ul' class="clearfix slide" name='image'>
			<li v-for='(image,index) in img' :key='index' v-show='index===mark'>
				<a><img :src="image"></a>
			</li>
		</transition-group>z
		<div class="bullet">
			<span v-for='(item,index) in img.length' :class="{'active':index===mark}" @click='change(index)'></span>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				mark: 0,
				timer: null,
				img: ['//img10.360buyimg.com/img/s620x300_jfs/t23371/1/252655341/162894/b0b99da2/5b2a2beeN8ea6623c.jpg',
					'//img14.360buyimg.com/img/s620x300_jfs/t20434/359/1470349172/160949/1c44260e/5b2a3215N1a6905cd.jpg'
					
				]
			}
		},
		created() {
			this.play()
		},
		methods: {
			change(i) {
				this.mark = i
			},
			autoPlay() {
				this.mark++
					if(this.mark === this.img.length) {
						this.mark = 0
						return
					}
			},
			play() {
				setInterval(this.autoPlay, 3000)
			}
		}
	}
</script>

<style scoped>
	.clearfix {
		content: '';
		clear: both;
		display: block;
	}
	
	.carousel {
		width: 100%;
		height: 181px;
		margin: 0 auto;
		overflow: hidden;
		position: relative;
	}
	
	.slide {
		width: 100%;
		height: 181px;
	}
	
	li {
		position: absolute
	}
	
	img {
		width: 100%;
		height: 181px;
	}
	
	.bullet {
		width: 100%;
		position: absolute;
		bottom: 10px;
		margin: 0 auto;
		text-align: center;
		z-index: 10;
	}
	
	span {
		width: 20px;
		height: 5px;
		background: #fff;
		opacity: 0.7;
		display: inline-block;
	}
	
	.active {
		background: #BF8AFB;
	}
	
	.image-enter-active {
		transform: translateX(0);
		transition: all 1s ease;
	}
	
	.image-leave-active {
		transform: translateX(-100%);
		transition: all 1s ease;
	}
	
	.image-enter {
		transform: translateX(100%)
	}
	
	.image-leave {
		transform: translateX(0)
	}
</style>,