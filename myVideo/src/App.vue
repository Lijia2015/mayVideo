<template>
  <div id="app">
  	
  	<app-header :showSide='showSide'></app-header>
  	<transition enter-active-class='animated slideInLeft' leave-active-class='animated slideOutLeft'>
  		<aside-nav :showSide='showSide' v-if="isSideShow"></aside-nav>
  	</transition>
  	
  	<transition enter-active-class='animated fadeIn' leave-active-class='animated fadeOut'>
  		<div v-if="isSideShow" @click="showSide" class="mask app-box"></div>
  	</transition>
  	
  	<keep-alive include='app-main,app-city'>
  		<router-view></router-view>
  	</keep-alive>
  	
  	
  	
    
  </div>
</template>

<script>
	
	import AppHeader from './components/header/AppHeader.vue';
	import AsideNav from './components/nav/AsideNav.vue';
	
	export default {
	  name: 'app',
	  data(){
	  	return {
	  		isSideShow:false,
	  	};
	  },
	  components:{AppHeader,AsideNav},
	  methods:{
	  	
	  	showSide(){
	  		this.isSideShow = !this.isSideShow;
	  	},
	  }
	}
</script>

<style lang="scss">
	@import './styles/app.scss';
	.mask{
		animation-duration: 0.5s;
		height: 100%;
		width: 100%;
		background: rgba(0,0,0,0.2);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 498;
	}
	
	
</style>
