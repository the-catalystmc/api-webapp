import _ from 'lodash';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import apiCall from './apiCalls'
import modal from './modal'
import comments from './comments'


const comment = document.querySelector('.comment-button');

window.addEventListener('load', () => {
  apiCall.asyncPopulate();

  comment.addEventListener('click', async (e) => {
    e.preventDefault();
    const commentBtn = await document.querySelectorAll('.load-comment');
    const modalId = document.querySelector('.modalholder').id
    const user = document.querySelector('.name').value;
    const text = document.querySelector('.comment').value;
    console.log(modalId)
    
  comments.sendComment(modalId, user, text);
  document.querySelector('.name').value = '';
  document.querySelector('.comment').value = ''
  })
})


