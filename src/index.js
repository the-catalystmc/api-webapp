import _ from 'lodash';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import apiCall from './apiCalls'

window.addEventListener(('load'), () => {
  apiCall.asyncPopulate();
})




// getLikeBtn.forEach(elem => {
//     elem.addEventListener('click', ()=>{
//         console.log('hi')
//     })
//   })
