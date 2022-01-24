import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { campsites } from '../shared/campsites';
import { comments } from '../shared/comments';
import { promotions } from '../shared/promotions';
import { partners } from '../shared/partners';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      campsites,
      comments,
      promotions,
      partners,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
