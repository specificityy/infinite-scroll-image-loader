import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import epics from './epics';

const rootEpic = combineEpics(...Object.values(epics));
const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

export default store;
