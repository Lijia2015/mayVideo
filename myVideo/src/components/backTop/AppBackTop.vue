<template>
	<transition enter-active-class='animated fadeInUp' leave-active-class='animated fadeOutDown'>
		<div v-if="show" class="back-top" @click="backTop">
			<i class="fa fa-arrow-circle-o-up"></i>
		</div>
	</transition>
</template>

<script>
	export default{
		name:'back-top',
		data(){
			return {
				show:false,
			};
		},
		methods:{
			backTop(){
				document.documentElement.scrollTop = 0;
			},
		},
		mounted(){
			
			var that = this;
			
			window.addEventListener('scroll',()=>{
				
				if(window.scrollY > 200){
					
					that.show = true;
					
				}else{
					that.show = false;
				}
				
			})
		}
	}
</script>

<style lang="scss" scoped>
	
	.back-top{
		
		height:0.45rem;
		width: 0.45rem;
		background: rgba(0,0,0,0.6);
		border-radius: 50%;
		font-size: 0.32rem;
		line-height: 0.45rem;
		text-align: center;
		color: white;
		cursor: pointer;
		overflow: hidden;
		position: fixed;
		z-index: 666;
		bottom: 0.2rem;
		right: 0.2rem;
	}
	
</style>