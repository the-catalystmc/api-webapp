/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import apiCall from './apiCalls';
import comments from './comments';
import counter from './counter';
import itemCount from './itemCounter';

const removeError = () => {
  if (document.querySelector('.my-color') !== null) {
    document.querySelector('.my-color').parentNode.removeChild(document.querySelector('.my-color'));
  }
};

const comment = document.querySelector('.comment-button');

window.addEventListener('load', () => {
  apiCall.asyncPopulate();
  itemCount.countMeals();
  comment.addEventListener('click', async (e) => {
    e.preventDefault();
    const modalId = document.querySelector('.modalholder').id;
    const user = document.querySelector('.name').value;
    const text = document.querySelector('.comment').value;
    if (text === '' || user === '') {
      removeError();
      const contain = await document.querySelector('.comment');
      const error = document.createElement('p');
      error.classList.add('my-color');
      contain.parentNode.insertBefore(error, contain.nextSibling);
      error.innerText = 'Please enter a valid name & comment.';
    } else {
      comments.sendComment(modalId, user, text);
      document.querySelector('.comments-cont').innerHTML = '';
      setTimeout(async () => {
        const info = await comments.updateComments();
        comments.appendComment(info);
        const count = await counter.commentCounter(info);
        comments.appendCount(count);
      }, 2000);
      document.querySelector('.name').value = '';
      document.querySelector('.comment').value = '';
      removeError();
    }
  });

  document.querySelector('.close--button').addEventListener('click', () => {
    removeError();
  });
});