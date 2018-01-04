<template>
	<div class="app-action" @click="toAction(action)">
		<span>{{action.name}}</span>
	</div>
</template>

<script>
	export default{
		name:'app-action',
		props:['action'],
		methods:{
			toAction(action){
				
				this.$router.push({name:'movie',params:{id:action.style}})
			}
		},
	}
</script>

<style lang="scss">
	.app-action{
		text-align: center;
		
		span{
			display: inline-block;
			font-size: 0.12rem;
			color: #616161;
			cursor: pointer;
			border: 1px solid #aaa;
			width: 1.6rem;
			height: 0.3rem;
			line-height: 0.3rem;
			border-radius: 0.15rem;
		}
	}
	
</style>