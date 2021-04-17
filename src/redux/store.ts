import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import {persistReducer,persistStore} from 'redux-persist';
import  storage  from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { rootReducer } from "./rootReducer"


const persistConfig = {
    key: 'root',
    storage,
  }
  
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  
  export let store = createStore(persistedReducer,applyMiddleware(
    thunk,
    logger,
  ))
  export let persistor = persistStore(store)