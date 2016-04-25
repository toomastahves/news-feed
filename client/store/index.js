import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers/';
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas/';

const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = createStoreWithMiddleware(reducers);

sagaMiddleware.run(sagas);

export default store;
