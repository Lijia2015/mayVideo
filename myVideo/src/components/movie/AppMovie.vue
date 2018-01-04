<template>
	<div class="app-movie app-box">
		<div class="film-nav">
			<div class="now-nav" @click="changeNav('now-playing')" :class="[type=='now-playing'?'nav-action':'']">
				正在上映
			</div>
			<div class="coming-nav" @click="changeNav('coming-soon')" :class="[type=='coming-soon'?'nav-action':'']">
				即将上映
			</div>
		</div>
		<div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
			
			<div :data='film.id' class="film-item" v-for="film in films" @click="jumpDetail(film)">
				<img v-lazy="film.poster.thumbnail">
				<!--<img :src="film.poster.thumbnail"/>-->
				<div class="film-desc">
					<div class="film-name">
						{{film.name}}
						<span>
							<span v-if="type=='now-playing'">{{film.grade}}</span>
							<i class="fa fa-angle-right" aria-hidden="true"></i>
						</span>
					</div>
					<div class="film-intro">
						{{film.intro}}
					</div>
					<div class="film-count" v-if="type=='now-playing'">
						<span><i>{{film.cinemaCount}}</i>影院上映</span>
						<span><i>{{film.watchCount}}</i>人购票</span>
					</div>
					
					<div class="film-date" v-if="type=='coming-soon'">
						<span>{{film.premiereAt | formatDate}}上映</span>
						<span>{{film.premiereAt | formatDay}}</span>
					</div>
					
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	
	//数据请求
	import axios from 'axios';
	
	import {mapActions} from 'vuex'
	
	//加载提示
	import { Indicator } from 'mint-ui'
	
	//加载结果提示
	import { Toast } from 'mint-ui'
	
	export default{
		name:'app-movie',
		data(){
			
			return {
				isOver:false,
				loading:false,
				type:'now-playing',
				count:8,
				page:1,
				films:[],
			};
		},
		methods:{
			
			...mapActions(['addCar']),
			
			getData(){
				let that = this;
				axios.defaults.withCredentials = true;//传输cookie
				
				Indicator.open({
				  text: '客官请稍等...',
				  spinnerType: 'triple-bounce'
				});
				
				axios.get('http://localhost:8080/mz/v4/api/film/'+this.type,{
					
					params:{
						__t:Date.now(),
						page:that.page,
						count:that.count
					}
					
				}).then(function(response){
					
					Indicator.close();
					console.log(response.data)
					
					that.films = that.films.concat(response.data.data.films);
					that.loading = false;
					
					if(that.page == response.data.data.page.total || response.data.data.page.total==0){
						
						that.isOver = true
						Toast({
						  message: '没有更多数据',
						  position:'bottom'
						});
						
						return false;
					}
					
					that.page++
					
				}).catch(function(error){
					
					console.log(error);
				});
				
			},
			changeNav(name){
				
				this.type = name;
				this.page = 1;
				this.films = [];
				this.isLoading = false;
				this.isOver = false;
				
				this.getData();
				
			},
			loadMore(){
				if(this.isOver){
	        	  return false;
	        	}else{
	        		this.loading = true;
					this.getData();
	        	}
				
			},
			jumpDetail(params){
				
				this.$router.push({name:'detail',params:{id:params.id}})
			}
			
		},
	}
	
</script>

<style lang="scss" scoped>
	
	.app-movie{
		height: 100%;
		padding-left: 0.15rem;
		padding-right: 0.15rem;
		background-color: #f9f9f9;
		
		.film-nav{
			height: 0.46rem;
			margin: 0 auto;
			border-bottom: solid #fe6e00 1px;
			display:flex;
			div{
				height: 100%;
				width: 50%;
				line-height: 0.46rem;
				text-align: center;
				font-size: 0.16rem;
				color: #6a6a6a;
    			cursor: pointer;
			}
			.nav-action{
				color: #fe6e00;
    			border-bottom: solid;
			}
		}
		.film-item{
			padding: 0.2rem 0;
			display: flex;
			align-items: center;
			border-bottom: dashed 1px #c9c9c9;
			img{
				width: 0.6rem;
			}
			.film-desc{
				flex: 1;
				height: 0.8rem;
				padding:0 0.15rem;
				display: flex;
				flex-direction: column;
				justify-content:space-between;
				
				div{
					color: #8e8e8e;
					font-size: 0.12rem;
				}
				.film-name{
					color: #000;
					font-size: 0.16rem;
					>span{
						float: right;
						color: #fc7103;
						i{
							padding-left: 0.05rem;
							color: #8e8e8e;
							font-size: 0.18rem;
						}
					}
				}
				.film-count{
					span:first-child{
						padding-right: 0.3rem;
					}
					span{
						i{
							font-style: normal;
							color: #8aa2bf;
						}
					}
				}
				.film-date{
					
					span:first-child{
						padding-right: 0.3rem;
					}
					span{
						color: #ffb375;
					}
				}
			}
			
		}
	}
	
</style>