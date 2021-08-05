import itemCount from './itemCounter';
import apiCall from './apiCalls';

test('the array has 37 ', () => apiCall.asyncRequest().then((data) => {
  expect(data.meals.lenght).toBe(37);
}));