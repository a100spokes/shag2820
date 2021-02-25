import '@static/scss/app.scss';
import React from 'react';
import { render } from 'react-dom';

import reduces from "@redux/reduces/index";
import {createStore} from "redux";
import {Provider} from "react-redux";
const store = createStore(reduces); 

import Core from '@comp/Core';
/*
* ^^^without Redux^^^
render(<Core />, document.getElementById('app'), () => {
  console.log('render');
}); 
* ^^^without Redux^^^
*/

render(<Provider store={store}><Core /></Provider>, document.getElementById('app'), () => {
  console.log('render in app');
});
