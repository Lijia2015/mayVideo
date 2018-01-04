<template>
	<div class="app-city app-box">
		<!--当前城市-->
		<div class="clearfix">
			<div class="code clearfix">
				<span class="city-code">GPS定位你所在城市</span>
				<!--城市列表-->
				<ul class="city-group clearfix">
					<li class="city-item current-item" :key='currentCity.id' >
						{{currentCity.name}}
					</li>
				</ul>
			</div>
		</div>
		
		<!--热门城市-->
		<div class="clearfix">
			<div class="code clearfix">
				<span class="city-code">热门城市</span>
				<!--城市列表-->
				<ul class="city-group clearfix">
					<li class="city-item" :key='city.id' v-for="city in hotCities">
						{{city.name}}
					</li>
				</ul>
			</div>
		</div>
		
		<!--字母列表-->
		<div class="clearfix">
			<div class="code clearfix">
				<span class="city-code">按字母排序</span>
				<!--字母列表-->
				<ul class="city-group clearfix">
					<li class="city-item" :key='city.code' v-for="city in cities" @click="toTation(city.code)">
						{{city.code}}
					</li>
				</ul>
			</div>
		</div>
		
		<!--字母分区及分区城市列表-->
		<div class="clearfix" :id="city.code" :key='city.code' v-for="city in cities">
			<div class="city-firstCode clearfix">
				<!--分区-->
				<span class="city-code">{{city.code}}</span>
				<!--城市列表-->
				<ul class="city-group clearfix">
					<li class="city-item" :key='cCity.id' v-for="cCity in city.citys">
						{{cCity.name}}
					</li>
				</ul>
				
			</div>
		</div>
	</div>
	
</template>

<script>
	
	//数据请求
	import axios from 'axios';
	
	export default{
		name:'app-city',
		data(){
			
			return {
				cities:[],
				cods:[],
				hotCities:[
					{id:12,name:'北京',pinyin:'BeiJing'},
					{id:11,name:'上海',pinyin:'ShangHai'},
					{id:13,name:'广州',pinyin:'GuangZhou'},
					{id:10,name:'深圳',pinyin:'ShenZhen'},
				],
				currentCity:{id:12,name:'北京',pinyin:'BeiJing'},
			};
		},
		methods:{
			getData(){
				
				let that = this;
				axios.defaults.withCredentials = true;//传输cookie
				axios.get('http://localhost:8080/mz/v4/api/city',{
					params:{
						__t:Date.now(),
					}
					
				}).then(function(response){
					
					var cAry = response.data.data.cities;
					
					response.data.data.cities.forEach(function(item,i){
			
						
						if(that.cods.indexOf(item.pinyin.slice(0,1)) == -1){
							
							that.cods.push(item.pinyin.slice(0,1));
						}
						
					})
					
					that.$nextTick(function(){
						
						that.cods.sort();
						
						for(var i = 0; i< that.cods.length; i++){
							
							var cKey = that.cods[i]+'';
							var ary = [];
							var obj = {};
							
							for(var j = 0; j< cAry.length;j++){
								
								if(cAry[j].pinyin.slice(0,1) == cKey){
									
									ary.push(cAry[j])
								}
							}
							
							obj.code = cKey;
							obj.citys = ary;
							
							that.cities.push(obj);
						}
						
						
					})
					
				}).catch(function(error){
					
					console.log(error);
				});
				
			},
			toTation(id){
				
				//用锚点定位时，会改变当前url的地址，重新刷新页面时会就hello world了，所以可以用采用下面的方法来避免这个bug
				document.getElementById(id).scrollIntoView();
			}
		},
		created(){
			this.getData();
		},
		mounted(){
		},
		updated(){
			console.log(this.cities)
		}
		
	}
	
</script>

<style lang="scss">
	
	.city-code{
		padding-left:0.15rem;
		font-size: 0.16rem;
		display: inline-block;
		height: 0.4rem;
		line-height: 0.4rem;
		width: 100%;
		background: #ebebeb;
	}
	
	.city-group{
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: flex-start;
		.city-item{
			width: 25%;
			height: 0.5rem;
			line-height: 0.5rem;
			text-align: center;
			font-size: 0.16rem;
			color: #838383;
			border-bottom: solid 1px #ebebeb;
		}
		.current-item{
			color: #e2941a;
		}
	}
	
</style>