/**
 * Created by sourabh on 12/7/17.
 */
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import store from "./store/index"
import {Provider} from "react-redux";

render(
<Provider store={store}>
    <App />
    </Provider>, document.getElementById('root'));

