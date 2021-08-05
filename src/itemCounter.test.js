/**
 * @jest-environment jsdom
 */

import itemCount from './itemCounter';

test('the array has 4 ', async () => {
  const data = {
    meals: [
      {
        strMeal: 'Beef and Mustard Pie',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg',
        idMeal: '52874',
      },
      {
        strMeal: 'Beef and Oyster pie',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg',
        idMeal: '52878',
      },
      {
        strMeal: 'Beef Banh Mi Bowls with Sriracha Mayo, Carrot & Pickled Cucumber',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg',
        idMeal: '52997',
      },
      {
        strMeal: 'Beef Bourguignon',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/vtqxtu1511784197.jpg',
        idMeal: '52904',
      },
    ],
  };
  const mealLenght = data.meals.lenght;
  const itemCountTest = await itemCount.countMeals();

  expect(itemCountTest).toBe(mealLenght);
});

test('if the array is empty will return 0 ', async () => {
  const data = {
    meals: [

    ],
  };
  const mealLenght = data.meals.lenght;
  const itemCountTest = await itemCount.countMeals();

  expect(itemCountTest).toBe(mealLenght);
});

test('the array has elements it cant return 0 ', async () => {
  const itemCountTest = await itemCount.countMeals();
  expect(itemCountTest).not.toBe(0);
});
