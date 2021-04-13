import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Action, AnyAction, applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
//add localStorage
import { persistReducer, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import thunk, { ThunkAction } from 'redux-thunk';
import App from './App';
import './index.scss';
import { rootReducer } from './redux/rootReducer';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer,applyMiddleware(
  thunk,
  logger,
))
let persistor = persistStore(store)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter
      // basename="/index.html/"
      >
        <App />
      </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


export type RootState = ReturnType<typeof rootReducer>

export type ThunkType<T extends Action> = ThunkAction<
Promise<void> | void,
RootState,
unknown,
T>

type PropertiesTypes<T> = T extends {[key:string]: infer U} ? U : never
export type GetActionsTypes<T extends {[key:string]: (...args:any[])=>any}> = ReturnType<PropertiesTypes<T>> 

// export type TestThunkType = ThunkAction<
// Promise<void> | void,
// RootState,
// unknown,
// Action<string>>