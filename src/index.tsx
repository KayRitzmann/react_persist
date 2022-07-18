import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider, connect } from "react-redux";
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { PersistGate } from 'redux-persist/integration/react';
import {
  createStateSyncMiddleware,
  initMessageListener,
} from "redux-state-sync";
import storage  from "redux-persist/lib/storage";
import hardset from "redux-persist/lib/stateReconciler/hardSet";

import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";

interface redState {
  name: string,
  home: { plz: string }
}
const Form = ({ name, plz,street, handleChangename,handleChangeplz,handleChangestreet }: any) => {
  return (
    <>
          <input value={name} onChange={handleChangename} />
          <input value={plz} onChange={handleChangeplz} />
          <input value={street} onChange={handleChangestreet} />
    </>
  );
};


const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist:["init2"] ,
  hardset
}

const reducer1 = (state: redState|undefined, action: any) => {
  if (!state) {
    state = { name: '', home: { plz: '' } };
  }
  switch (action.type) {
    case "CHANGENAME":
      return { ...state, name: action.payload };
    case "CHANGEPLZ":
      return { ...state, home: { ...state.home, plz: action.payload } };
    default:
      return state;
  }
};
const reducer2 = (state: any, action: any) => {
  if (!state) {
    state = { street: ''  };
  }
  switch (action.type) {
    case "CHANGESTREET":
      return { ...state, street: action.payload  };
    default:
      return state;
  }
};
const combireducer = combineReducers({
  init1: reducer1,
  init2: reducer2
})
const persistedReducer = persistReducer(persistConfig, combireducer)
const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (mid) => mid({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }}).prepend(createStateSyncMiddleware({ blacklist: ["persist/PERSIST"]}))
});

initMessageListener(store);
const persistor = persistStore(store);
const mapStateToProps = (state: any) => {
  return {
    name: state.init1.name,
    plz: state.init1.home.plz,
    street: state.init2.street
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    handleChangename: (e: any) => dispatch({ type: "CHANGENAME", payload: e.target.value }),
    handleChangestreet: (e: any) => dispatch({ type: "CHANGESTREET", payload: e.target.value }),
    handleChangeplz: (e: any) => dispatch({ type: "CHANGEPLZ", payload: e.target.value }),
  };
};

const App = connect(mapStateToProps, mapDispatchToProps)(Form);

createRoot(
  (document.getElementById("root")) as Element
).render(<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <App />
  </PersistGate>
</Provider>,
);