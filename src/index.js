import _ from 'lodash';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import apiCall from './apiCalls'
import modal from './modal'

window.addEventListener(('load'), () => {
  apiCall.asyncPopulate()
})

