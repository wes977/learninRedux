import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

import reducers from './reducers/index';

import {addToCart} from './actions/cartActions';
import {postBooks, deleteBook, updateBook} from './actions/booksActions';
// Step 1 create the store
const middleware = applyMiddleware (logger);
const store = createStore(reducers,middleware);

//store.subscribe(function() {
//  console.log('current state is: ', store.getState());
//})


// Step 2 create and dispatch actiojns

store.dispatch(postBooks([{
  id: 1,
  title: 'this is the book title',
  description: 'this is the book descrip'
},{
  id: 2,
  title: 'this is another book title',
  description: 'this is another book descrip'
}]))

store.dispatch(deleteBook({id: 1}))

store.dispatch(updateBook({
  id: 2,
  title: 'LEARNING TIME',
  description: 'this is the book descrip'
}))


// CART ACTIONS
store.dispatch(addToCart([{id: 1}]))
