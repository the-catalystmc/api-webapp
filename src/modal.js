import apiCalls from "./apiCalls";
import comments from "./comments";
import counter from "./counter";

class Modal {
    openModal = async (dish) => {
        const closeBtn = await document.querySelector('.close--button');
        const commentBtn = await dish.querySelector('.load-comment');
        const modalWindow = document.querySelector('.modalholder');
        commentBtn.addEventListener('click', () => {
            modalWindow.style.display = 'block';
        })
        closeBtn.addEventListener('click', () => {
            modalWindow.style.display = 'none';
        })
    }
    
    getDishID = async (dish) => {
        let myID = await dish.querySelector('.load-comment').id;
        return myID;
    }

    commentActions = async (dish) => {
        let commentBtn = await dish.querySelector('.load-comment');
        let id = await dish.querySelector('.load-comment').id;
        const url = await `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

        commentBtn.addEventListener('click', async () => {
            document.querySelector('.comments-cont').innerHTML = '';
            apiCalls.mealPopulate(url);
            let info = await comments.getComments(dish);
            document.querySelector('.modalholder').id = id;
            comments.appendComment(info);
            let count = await counter.commentCounter(info);
            comments.appendCount(count);
        })
    }
}

const modal = new Modal()
export { modal as default }