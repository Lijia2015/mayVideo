<template>
	<div class="app-movieDetail app-box clearfix">
		<img width="100%" :src="imgUrl"/>
		<div class="film-word">
			<span>影片简介</span>
		</div>
		<div class="film-intro clearfix">
			<div class="film-director clearfix">
				导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：{{director}}
			</div>
			<div class="film-director clearfix">
				主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：{{actorStr}}
			</div>
			<div class="film-director clearfix">
				地区语言：{{nation+'('+language+')'}}
			</div>
			<div class="film-director clearfix">
				类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：{{sources.category}}
			</div>
			<div class="film-director">
				上映日期：{{premiereAt | formatDate}}上映
			</div>
			<div class="film-director clearfix">
				{{synopsis}}
			</div>
			<div class="film-director action-el clearfix">
				<button>立即抢票</button>
			</div>
		</div>
	</div>
</template>

<script>
	
	//数据请求
	import axios from 'axios';
	export default{
		name:'app-movieDetail',
		data(){
			return {
				imgUrl:'',
				director:'',
				nation:'',
				language:'',
				category:'',
				premiereAt:0,
				synopsis:'',
				actors:[],
				sources:{},
				filmID:0,
			};
		},
		methods:{
			getData(id){
				let that = this;
				axios.defaults.withCredentials = true;//传输cookie
				axios.get('http://localhost:8080/mz/v4/api/film/'+id,{
					
					params:{
						__t:Date.now(),
					}
					
				}).then(function(response){
					
					that.director = response.data.data.film.director
					that.imgUrl = response.data.data.film.cover.origin
					that.actors = response.data.data.film.actors
					that.nation = response.data.data.film.nation
					that.language = response.data.data.film.language
					that.category = response.data.data.film.category
					that.premiereAt = response.data.data.film.premiereAt
					that.synopsis = response.data.data.film.synopsis
					console.log(response.data.data.film)
					
				}).catch(function(error){
					
					console.log(error);
				});
			},
		},
		computed:{
			
			actorStr(){
				
				let str = '';
				
				this.actors.forEach((item)=>{
					str += (item.name+' '+'|'+' ')
				})
				
				return str;
			},
			
		},
		created(){
			
			console.log(this.$route.params.id,1354645)
			
			this.getData(this.$route.params.id)
		}
		
	}
</script>

<style lang="scss">
	.app-movieDetail{
		height: 100%;
		background: #ebebeb;
		overflow-y: scroll;
		.film-word{
			margin: 0.16rem auto;
			border-left: 0.16rem solid RGB(228, 200, 156);
			span{
				padding-left: 0.05rem;
				font-size: 0.16rem;
			}
		}
		.film-intro{
			padding-left: 0.16rem;
			font-size: 0.12rem;
			.film-director{
				padding-bottom: 0.1rem;
			}
			.action-el{
				height: 0.36rem;
				text-align: center;
				padding-top: 0.2rem;
				button{
					outline: none;
					height: 0.36rem;
					width: 1.56rem;
					border: 0 none;
					background-color: #fe8233;
					color: white;
					border-radius: 0.18rem;
				}
			}
		}
	}

</style>