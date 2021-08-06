import apiCall from './apiCalls.js';

class CountItem {
  counter = null;

    getBeefBtn = document.getElementById('beefBtn');

    getArray = async () => {
      const arr = await apiCall.asyncRequest();
      const total = arr.meals;
      return total;
    }
    // const count = await data.meals
    // const total = await itemCount.countMeals(count)
    // console.log(count)

    countMeals(data) {
      this.counter = data.length;
      return this.counter;
    }

    populateCounter(total) {
      this.getBeefBtn.innerText = `Beef ${total}`;
    }

    populateItemCounter = async () => {
      const total = await this.getArray();
      const number = await this.countMeals(total);
      this.populateCounter(number);
    }
}

const itemCount = new CountItem();

export { itemCount as default };