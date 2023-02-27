// combine all reducer here
import { combineReducers } from "redux";
import { productReducer,selectedProductReducer  } from "./productReduces";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { configureStore } from '@reduxjs/toolkit'


const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  allProduct: productReducer,
  product:selectedProductReducer,
});


const persistedReducer = persistReducer(persistConfig,  rootReducer)




export const ReducerStore= configureStore({
  reducer:persistedReducer     //pass  persistedReducer  in configureStore
})

export const persistor = persistStore(ReducerStore)   // pass ReducerStore as parameter

export default rootReducer;
