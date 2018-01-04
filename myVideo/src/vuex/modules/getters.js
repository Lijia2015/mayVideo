const getters = {
	money(state){
		
		let money = 0;
		
		state.cars.forEach((item)=>{
			
			if(item.isSelected){
				money += (item.price*item.num)
			}
		});
		
		return money;
	}
}

export default getters
