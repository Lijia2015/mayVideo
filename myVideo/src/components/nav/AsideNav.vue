<template>
	<div class="aside-nav app-box">
		<ul>
			<router-link tag='li' @click.native='changeRouter(nav.name)' :to='{name:nav.name}' :key='nav.id' v-for="nav in navs">
				<span>{{nav.content}}</span>
				<i class="fa fa-angle-right"></i>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default{
		
		name:'aside-nav',
		props:['showSide'],
		data(){
			return {
				navs:[
					{id:1,content:'首页',name:'main'},
					{id:2,content:'影片',name:'movie'},
					{id:3,content:'影院',name:'theater'},
					{id:4,content:'我的',name:'mine'},
					{id:5,content:'购物车',name:'shopCar'},
				],
			};
		},
		methods:{
			changeRouter(name){
				
				this.showSide();
			}
		},
		
	}
</script>

<style lang="scss">
	
	.aside-nav{
		animation-duration: 0.5s;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 499;
		height: 100%;
		width: 2.5rem;
		background: #282828;
		color: rgb(200,200,200);
		
		li{
			height: 0.5rem;
			line-height: 0.5rem;
			padding: 0 0.15rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: dotted 1px #333;
		}
	}
	
	
</style>