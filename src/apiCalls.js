import modal from './modal'

class APIUpdate{
    getBeefBtn = document.getElementById('beefBtn');
    getTemplate = document.querySelector('.mealTemplate');
    container = document.querySelector('.cont');

    asyncRequest = async () => {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=beef')
        const mealInfo = await response.json();
        return mealInfo
    }

    asyncPopulate = async () => {
        this.getBeefBtn.addEventListener('click',()=>{
            this.asyncRequest().then((data) => {
                data.meals.forEach(element => {
                    const dish = this.getTemplate.content.firstElementChild.cloneNode(true);
                    dish.querySelector('.card-img-top').src = element.strMealThumb;
                    dish.querySelector('.card-title').innerText = element.strMeal;
                    this.container.appendChild(dish);
                    modal.openModal(dish);
                });
            })
        })
    }
}

const apiCall = new APIUpdate()


export { apiCall as default }