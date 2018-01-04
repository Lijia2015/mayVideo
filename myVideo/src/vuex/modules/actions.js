const actions = {
	initCar({commit}){//初始化购物车
		
		let result = JSON.parse(localStorage.cars || '[]');
		commit('initCar',result);
	},
	
	addCar({commit},params){//加入购物车
		
		commit('addCar',params);//这里的addCar为mutations里的方法名
	},
	reduceCar({commit},params){//减少购物车数量
		
		commit('reduceCar',params);//这里的reduceCar为mutations里的方法名
	},
	removeCar({commit},params){//删除购物车中信息
		
		commit('removeCar',params)
		
	},
	selectGood({commit},val){
		commit('selectGood',val)
	},
	
	
}

export default actions