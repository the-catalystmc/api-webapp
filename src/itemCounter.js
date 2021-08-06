import apiCall from './apiCalls';

class CountItem {
    getBeefBtn = document.getElementById('beefBtn');

    getArray = async () => {
      const arr = await apiCall.asyncRequest()
      const total = arr.meals
      return total
    }
    // const count = await data.meals
    // const total = await itemCount.countMeals(count)
    // console.log(count)


    countMeals (data) {
        const counter = data.length
        return counter 
      };
    
    populateCounter (total) {

      this.getBeefBtn.innerText = `Beef ${total}`;
    }
    populateItemCounter = async () =>{
      const total = await itemCount.getArray();
      const number = await itemCount.countMeals(total);
      itemCount.populateCounter(number)
    }
    
    }




const itemCount = new CountItem();

export { itemCount as default };