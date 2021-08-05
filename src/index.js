import _ from 'lodash';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import apiCall from './apiCalls';
import itemCount from './itemCounter';

window.addEventListener(('load'), () => {
  apiCall.asyncPopulate();
  itemCount.countMeals();
});
