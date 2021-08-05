import apiCalls from './apiCalls';
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
      apiCalls.mealPopulate(url);
      const info = await comments.getComments(dish);
      document.querySelector('.modalholder').id = id;
      comments.appendComment(info);
      const count = await counter.commentCounter(info);
      comments.appendCount(count);
    });
  }
}

const modal = new Modal();
export { modal as default };