import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import AppMain from '../components/main/AppMain.vue'
import AppMovie from '../components/movie/AppMovie.vue'
import AppTheater from '../components/theater/AppTheater.vue'
import AppMine from '../components/mine/AppMine.vue'
import AppShopCar from '../components/shopCar/shopCar.vue'
import AppCity from '../components/city/AppCity.vue'
import AppMovieDetail from '../components/main/detail/AppMovieDetail.vue'

const routes = [
	{path:'',redirect:'/main'},
	{path:'/main',name:'main',component:AppMain},
	{path:'/movie',name:'movie',component:AppMovie},
	{path:'/theater',name:'theater',component:AppTheater},
	{path:'/mine',name:'mine',component:AppMine},
	{path:'/shopCar',name:'shopCar',component:AppShopCar},
	{path:'/city',name:'city',component:AppCity},
	{path:'/detail/:id',name:'detail',component:AppMovieDetail},
	{path:'**',redirect:'/main'},
]

const router = new Router({
	routes,
})

export default router
