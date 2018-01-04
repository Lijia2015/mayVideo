<template>
	<div class="app-nowPlaying clearfix">
		<div :key='film.id' v-for="film in films" class="movie-item clearfix" @click="goToDetail(routerName,film)">
			<img width="100%" :src="film.cover.origin"/>
			<div class="movie-info">
				<div class="info clearfix">
					<span class="title">{{film.name}}</span>
					<span class="playing-info">{{film.cinemaCount}} 家影院上映{{film.scheduleCount}}人购票</span>
				</div>
				<span class="grade">{{film.grade}}</span>
			</div>
		</div>
		<app-action :action='action'></app-action>
	</div>
</template>

<script>
	
	//数据请求
	import axios from 'axios';
	
	//更多事件
	import AppAction from '../action/AppAction.vue';
	
	export default{
		name:'app-nowPlaying',
		data(){
			
			return {
				films:[],
				action:'更多热映电影',
				routerName:'detail'
			};
		},
		methods:{
			getData(){
				
				let that = this;
				
				axios.defaults.withCredentials = true;//传输cookie
				axios.get('http://localhost:8080/mz/v4/api/film/now-playing',{
					params:{
						__t:Date.now(),
						page:1,
						count:5
					}
					
				}).then(function(response){
				
					that.films = response.data.data.films;
					
				}).catch(function(error){
					
					console.log(error);
				});
				
			},
			goToDetail(name,params){
		
				this.$router.push({name,params:{id:params.id}})
			},
		},
		components:{AppAction},
		mounted(){
			this.getData();
		},
	}
</script>

<style lang="scss">
	.app-nowPlaying{
		
		background: #eee;
		display: flex;
		padding: 0.17rem;
		justify-content: center;
		flex-flow: column;
		
		.movie-item{
			
			display: flex;
			flex-flow: column;
			margin-bottom: 0.17rem;
			width: 3.41rem;
			background: white;
			
			.movie-info{
				padding: 0 0.1rem;
				display: flex;
				justify-content: space-between;
				align-items: center;
				align-content: center;
				
				.info{
					padding: 0.075rem 0;
					display: flex;
					flex-flow: column;
					
					font-size: 0.12rem;
					.title{
						color: #333;
					}
					.playing-info{
						color: #9a9a9a;
					}
				}
				
				.grade{
					color: #f78360;
					font-size: 0.18rem;
				}
			}
		}
		
	}
</style>