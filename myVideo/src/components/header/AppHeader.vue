<template>
	<div class="app-header">
		<div @click="showSide" class="nav square">
			<i class="fa fa-bars"></i>
		</div>
		<div class="info-box">
			<div class="title">卖座电影</div>
			<div class="info">
				<div @click="changeRouter(routerName)" class="city">
					<span>北京</span>
					<i class="fa fa-caret-down"></i>
				</div>
				<div class="user square">
					<i class="fa fa-user-circle"></i>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
	export default {
		name:'app-header',
		props:['showSide'],
		data(){
			return {
				routerName:'city',
			}
		},
		methods:{
			changeRouter(name){
				
				console.log(this.$router);
				
				this.$router.push(name);
			}
		},
	}
	
</script>

<style lang="scss">
	
	.square{
		height: 0.5rem;
		width: 0.5rem;
		text-align: center;
	}
	
	.app-header{
		
		border-bottom: solid 1px rgba(0,0,0,0.2);
		display: flex;
		width: 100%;
		color: rgb(200,200,200);
		font-size: 0.15rem;
		height: 0.5rem;
		background: #282828;
		line-height: 0.5rem;
		overflow: hidden;
		position: fixed;
		z-index: 500;
		top: 0;
		left: 0;
		
		.info-box{
			flex: 1;
			display: flex;
			justify-content: space-between;
			align-content:center;
			padding-left: 0.1rem;
			.info{
				display: flex;
			}
		}
		
		.nav{
			border-right: solid 1px rgb(85,85,85);
		}
		
	}
	
</style>