import apiCall from './apiCalls';

class CountItem {
    getBeefBtn = document.getElementById('beefBtn');

    countMeals = async () => {
      apiCall.asyncRequest().then((data) => {
        this.getBeefBtn.innerText = `Beef ${data.meals.length}`;
          return data.meals.length;
      });
    }
}

const itemCount = new CountItem();

export { itemCount as default };