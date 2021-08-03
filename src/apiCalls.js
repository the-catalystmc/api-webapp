import mealArray from './index.js'

class APIUpdate{
    asyncRequest = async () => {
        // const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=beef')
        // const mealInfo = await response.json();
        // return mealInfo
        await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=beef')
        // const meals = await response.json()
        // return meals
            .then(response => response.json())
            .then(json => {
                mealArray.mealList = json.meals
            }
            //     {
            //     json.meals.forEach(element => {
            //         mealArray.mealList = element
            //     });
            // }
            );
    }

}

const apiCall = new APIUpdate()


export { apiCall as default }