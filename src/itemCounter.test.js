/**
 * @jest-environment jsdom
 */
import itemCount from './itemCounter.js';

test('the array has 4 ', () => {
  // Arrange
  const data = [
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
  ];

  // Act
  const mealLength = data;
  const itemCountTest = itemCount.countMeals(mealLength);
  // Assert
  expect(itemCountTest).toBe(4);
});
