
const mutations = {
	
	initCar(state,cars){//初始化购物车
		
		state.cars = cars;
	},
	addCar(state,params){//添加到购物车
		
		let isHas = state.cars.some((item)=>{//判断购物车中是否含有当前的商品
			
			if(item.id == params.id){
				
				item.num ++;
				
				return true;
				
			}else{
				
				return false;
			}
			
		});
		
		if(!isHas){
			
			params.num = 1;
			
			state.cars.push(params)
		}
		
		//与数据库数据同步一下
		localStorage.cars = JSON.stringify(state.cars);
	},
	reduceCar(state,params){//减少购物车数量
		
		let len = state.cars.length;
		
		for(var i = 0; i < len; i++){
			
			if(state.cars[i].id == params.id){
				
				state.cars[i].num --;
				
				if(state.cars[i].num == 0){
					
					state.cars.splice(i,1);
				}
				
				break;
			}
			
		}
		localStorage.cars = JSON.stringify(state.cars);
	
	},
	removeCar(state,params){//删除购物车信息
		
		let len = state.cars.length;
		
		for(var i = 0; i < len; i++){
			
			if(state.cars[i].id == params.id){
				state.cars.splice(i,1);
				break;
			}
		}
		localStorage.cars = JSON.stringify(state.cars);
	},
	selectGood(state,val){//购物车信息选择
		
		state.cars.forEach(item=>item.isSelected = val)
	},
	
}

export default mutations
