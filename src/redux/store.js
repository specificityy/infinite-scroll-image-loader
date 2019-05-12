import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import fetchMessageEpic from './epics/fetchMessage';

const rootEpic = combineEpics(fetchMessageEpic);
const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

export default store;
