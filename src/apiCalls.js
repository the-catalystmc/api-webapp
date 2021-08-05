import modal from './modal';

class APIUpdate {
  getBeefBtn = document.getElementById('beefBtn');

  getTemplate = document.querySelector('.mealTemplate');

  container = document.querySelector('.cont');

  asyncRequest = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=beef');
    const mealInfo = await response.json();
    return mealInfo;
  }

  asyncPopulate = async () => {
    this.getBeefBtn.addEventListener('click', () => {
      this.asyncRequest().then((data) => {
        data.meals.forEach((element) => {
          const dish = this.getTemplate.content.firstElementChild.cloneNode(true);
          dish.querySelector('.card-img-top').src = element.strMealThumb;
          dish.querySelector('.card-title').innerText = element.strMeal;
          dish.querySelector('.load-comment').id = element.idMeal;
          this.container.appendChild(dish);
          modal.openModal(dish);
          modal.commentActions(dish);
          // comments.commentHelper(element.idMeal)
          // let url = await modal.dishURL(dish);
          // this.mealRequest(url)
        });
      });
    });
  }
}

const apiCall = new APIUpdate();
export { apiCall as default };