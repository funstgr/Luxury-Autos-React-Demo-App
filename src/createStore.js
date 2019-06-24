/*  Creates the redux store using the root reducer
*   - current store has redux logger
*   - commented out section is for production
*   - commented out line 18 must be uncommented to use redux extension in chrome
*   - commented out line 18 must be commented to use cypress
*/
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import RootReducer from './reducers';

export const middlewares = [ReduxThunk];

export const store = createStore(
  RootReducer,
  compose(
    applyMiddleware(ReduxThunk, createLogger()),
    /* eslint-disable-next-line */
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ),
);

/* used for cypress tesing */
export const cypressStore = createStore(
  RootReducer,
  compose(applyMiddleware(...middlewares)),
);
