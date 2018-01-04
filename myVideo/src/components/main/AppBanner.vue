<template>
	<div class="app-banner swiper-container">
		<div class="swiper-wrapper">
			<div v-for="billboard in billboards" class="swiper-slide">
				<img width="100%" :src="billboard.imageUrl" :title="billboard.name">
			</div>
		</div>
		<div class="swiper-pagination"></div>
	</div>
</template>

<script>
	
	//引入轮播图插件
	import Swiper from 'swiper';
	
	//数据请求
	import axios from 'axios';
	export default{
		name:'app-banner',
		data(){
			
			return {
				billboards:[],
			};
		},
		methods:{
			getData(){
				
				let that = this;
				
				axios.defaults.withCredentials = true;//传输cookie
				axios.get('http://localhost:8080/mz/v4/api/billboard/home',{
					params:{
						__t:Date.now(),
					}
					
				}).then(function(response){
					
					that.billboards = response.data.data.billboards;
					that.$nextTick(function(){
						new Swiper('.swiper-container',{
							loop: true,
					        autoplay: {
					        	disableOnInteraction: false
					        },
					        //autoplayDisableOnInteraction: true,
					        //observer:true,//修改swiper自己或子元素时，自动初始化swiper
					        //observeParents:true//修改swiper的父元素时，自动初始化swiper
						})
					})
					
					//console.log(response.data.data.billboards);
					
				}).catch(function(error){
					
					console.log(error);
				});
				
			}
		},
		mounted(){
			this.getData();
		},
		
	}
</script>

<style lang="scss">
	.swiper-slide{
		height: 1.84rem;
		
	}
</style>