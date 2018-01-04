<template>
	<div class="app-shopCar app-box">
		<div v-if="!cars.length" class="goods-content">
			<p>空空如也，快去选择您要看的影片吧</p>
		</div>
		
		<div v-else class="goods-content clearfix">
			<div class="car-item" v-for="film in cars">
				<div class="car-info">
					<input v-model="film.isSelected" type="checkbox">
					<div class="car-car-info">
						<div>{{film.name}}</div>
						<span>￥{{film.price}}</span>
					</div>
				</div>
				<div class="car-control">
					<p>
						<button @click="reduceCar(film)">-</button>
						<span>{{film.num}}</span>
						<button @click="addCar(film)">+</button>
					</p>
					<p class="removeP" @click="removeCar(film)">移除影片</p>
				</div>
			</div>
		</div>
		
		<div class="bottom-el">
			<span>
				<input v-model="isAllSelected" type="checkbox">
				总计：<i>{{money}}</i>
			</span>
			<button>去结算</button>
		</div>
	</div>
</template>

<script>
	
	import {mapState,mapGetters,mapActions} from 'vuex'
	
	export default{
		name:'app-box',
		computed:{
			
			...mapState(['cars']),
			...mapGetters(['money','isAllSelected']),
			
			isAllSelected:{
				get(){
		
					return this.$store.state.cars.every((item)=>{
						if(item.isSelected){
							return true;
						}else{
							return false;
						}
					});
				},
				set(newVal){
					
					this.selectGood(newVal);
				}
			},
			
		},
		
		methods:{
			
			...mapActions(['initCar','addCar','reduceCar','removeCar','selectGood']),
			
			checkState(){
				console.log(this.cars)
			},
		},
		created(){
			//初始化
			this.initCar();
		}
	}
</script>

<style lang="scss">
	
	.app-shopCar{
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.goods-content{
			flex: 1;
			.car-item{
				box-sizing: border-box;
				padding: 0 0.15rem;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border: solid 1px #ebebeb;
				.car-info{
					display: flex;
					align-items: center;
					.car-car-info{
						padding-left: 0.15rem;
						div{
							padding-bottom: 0.05rem;
						}
					}
				}
				.car-control{
					.removeP{
						
						cursor: pointer;
						padding: 0.05rem;
						background: #ebebeb;
					}
				}
			}
		}
		
		.bottom-el{
			box-sizing: border-box;
			height: 0.5rem;
			border: solid 1px #ebebeb;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-left: 0.15rem;
			span{
				font-size: 0.16rem;
				i{
					font-size: 0.18rem;
					font-style: normal;
					color: orangered;
				}
			}
			button{
				height: 100%;
				width: 1rem;
				border: 0 none;
				background: coral;
				color: white;
				font-size: 0.18rem;
			}
		}
		
	}
	
</style>