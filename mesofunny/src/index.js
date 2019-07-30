import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
<<<<<<< HEAD
import { BrowserRouter as Router } from "react-router-dom";


ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root'));
  
=======
import { reducer } from './store/reducers'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'



const store = createStore(
    reducer, applyMiddleware(thunk, logger)
  );

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));

>>>>>>> 1da9fa2feeb157ec3e25b12898eb096a3e4098f5
