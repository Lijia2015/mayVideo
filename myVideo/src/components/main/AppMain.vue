<template>
	<div class="app-main app-box clearfix">
		<AppBanner/>
		<AppNowPlaying/>
		<div class="more-action clearfix">
			<div class="seg-line"></div>
			<div class="world">
				<span>即将上映</span>
			</div>
		</div>
		<AppToPlaying/>
	</div>
	
</template>

<script>
	
	import AppBanner from './AppBanner.vue';
	import AppNowPlaying from './nowPlaying/AppNowPlaying.vue';
	import AppToPlaying from './toPlaying/AppToPlaying.vue'
	
	export default {
		name:'app-main',
		components:{
			AppBanner,
			AppNowPlaying,
			AppToPlaying
		}
	}
</script>

<style lang="scss">	
	.app-main{
		.more-action{
			background: #eee;
			text-align:center;
			position:relative;
			.seg-line{
				width: 100%;
				height: 1px;
				background: #a7a7a7;
				position: absolute;
				z-index: 0;
				top: 0.1rem;
				left: 0;
			}
			.world{
				position: relative;
				span{
					display: inline-block;
					height: 0.2rem;
					width: 0.75rem;
					font-size: 0.12rem;
					background: #a7a7a7;
					color: #eee;
					border-radius: 0.1rem;
					z-index: 12;
				}
			}
			
			
		}
	}
</style>