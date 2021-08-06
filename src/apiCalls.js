import modal from './modal';
import likeCall from './likeCalls';

class APIUpdate {
    getTemplate = document.querySelector('.mealTemplate');

    container = document.querySelector('.cont');

    asyncRequest = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=beef');
      const mealInfo = await response.json();
      return mealInfo;
    }

    asyncPopulate = async () => {
      this.asyncRequest().then( async (data) => {
        data.meals.forEach((element) => {
          const dish = this.getTemplate.content.firstElementChild.cloneNode(true);
          dish.querySelector('.card-img-top').src = element.strMealThumb;
          dish.querySelector('.card-title').innerText = element.strMeal;
          dish.querySelector('.likeBtn').id = element.idMeal;
          dish.querySelector('.load-comment').id = element.idMeal;
          this.container.appendChild(dish);
          modal.openModal(dish);
          modal.commentActions(dish);
        });
        likeCall.likePostGet();
      });
    }
}

const apiCall = new APIUpdate();

export { apiCall as default };