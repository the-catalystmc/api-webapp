import _ from 'lodash';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import apiCall from './apiCalls'

class MealsData{
  constructor(meals){
    this.meals = meals
  }
  get mealList() {
    return this.meals
  }

  set mealList(newMeals) {
    this.meals = newMeals
  }

}

const mealArray = new MealsData([])
// console.log(mealArray.mealList)
// mealArray.mealList = [1,2]
// console.log(mealArray.mealList)

apiCall.asyncRequest()
console.log(mealArray.mealList)


// fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=beef')
//   .then(response => response.json())
//   .then(json => console.log(json));

export { mealArray as default } 