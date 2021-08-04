import modal from './modal'

class APIUpdate {
    getBeefBtn = document.getElementById('beefBtn');
    getTemplate = document.querySelector('.mealTemplate');
    container = document.querySelector('.cont');

    asyncRequest = async () => {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=beef')
        const mealInfo = await response.json();
        return mealInfo
    }

    mealRequest = async (url) => {
        const returned = await fetch(url);
        const meals = await returned.json();
        return meals
    }

    asyncPopulate = async () => {
        this.getBeefBtn.addEventListener('click', () => {
            this.asyncRequest().then((data) => {
                data.meals.forEach(element => {
                    const dish = this.getTemplate.content.firstElementChild.cloneNode(true);
                    dish.querySelector('.card-img-top').src = element.strMealThumb;
                    dish.querySelector('.card-title').innerText = element.strMeal;
                    dish.querySelector('.load-comment').id = element.idMeal;
                    this.container.appendChild(dish);
                    modal.openModal(dish);
                    modal.dishURL(dish);
                    // let url = await modal.dishURL(dish);
                    // this.mealRequest(url)
                });
            })
        })
    }

    mealPopulate = async (url) => {
        const modalWindow = document.querySelector('.modalholder');
        let info = this.mealRequest(url).then((data) => {
            data.meals.forEach(element => {
                modalWindow.querySelector('.container__profilepic').src = element.strMealThumb;
                modalWindow.querySelector('.item-name').innerText = element.strMeal;
                modalWindow.querySelector('.area').innerText = `Area: ${element.strArea}`;
                modalWindow.querySelector('.cat').innerText = `Category ${element.strCategory}`;
                modalWindow.querySelector('.demonstration').src = element.strYoutube;
                modalWindow.querySelector('.ingre').innerText = `Main Ingredient: ${element.strIngredient1}`;
                console.log(element)
            })

        });
        // let meal = await info.meals;
        // modalWindow.querySelector('.container__profilepic').src = meal.strMealThumb
        // console.log(meal)
    }
}

const apiCall = new APIUpdate()
export { apiCall as default }