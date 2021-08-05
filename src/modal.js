import comments from './comments';
import counter from './counter';

class Modal {
  openModal = async (dish) => {
    const closeBtn = await document.querySelector('.close--button');
    const commentBtn = await dish.querySelector('.load-comment');
    const modalWindow = document.querySelector('.modalholder');
    commentBtn.addEventListener('click', () => {
      modalWindow.style.display = 'block';
    });
    closeBtn.addEventListener('click', () => {
      modalWindow.style.display = 'none';
    });
  }

  getDishID = async (dish) => {
    const myID = await dish.querySelector('.load-comment').id;
    return myID;
  }

  commentActions = async (dish) => {
    const commentBtn = await dish.querySelector('.load-comment');
    const id = await dish.querySelector('.load-comment').id;
    const url = await `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

    commentBtn.addEventListener('click', async () => {
      document.querySelector('.comments-cont').innerHTML = '';
      this.mealPopulate(url);
      const info = await comments.getComments(dish);
      document.querySelector('.modalholder').id = id;
      comments.appendComment(info);
      const count = await counter.commentCounter(info);
      comments.appendCount(count);
    });
  }

  mealRequest = async (url) => {
    const returned = await fetch(url);
    const meals = await returned.json();
    return meals;
  }

  mealPopulate = async (url) => {
    const modalWindow = document.querySelector('.modalholder');
    this.mealRequest(url).then((data) => {
      data.meals.forEach((element) => {
        modalWindow.querySelector('.container__profilepic').src = element.strMealThumb;
        modalWindow.querySelector('.item-name').innerText = element.strMeal;
        modalWindow.querySelector('.area').innerText = `Area: ${element.strArea}`;
        modalWindow.querySelector('.cat').innerText = `Category: ${element.strCategory}`;
        modalWindow.querySelector('.demonstration').src = element.strYoutube;
        modalWindow.querySelector('.ingre').innerText = `Main Ingredient: ${element.strIngredient1}`;
      });
    });
  }
}

const modal = new Modal();
export { modal as default };