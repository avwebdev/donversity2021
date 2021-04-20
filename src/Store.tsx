// React Imports
import React, { FC } from "react";

// Redux Imports
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
import { Provider, useDispatch } from "react-redux";

// Firebase Imports
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";
import firebaseConfig from "./misc/firebaseConfig";
import {
  getFirebase,
  actionTypes as rrfActionTypes,
  firebaseReducer,
  ReactReduxFirebaseProvider,
  FirebaseReducer,
  FirestoreReducer,
} from "react-redux-firebase";
import {
  getFirestore,
  constants as rfConstants,
  createFirestoreInstance,
  firestoreReducer,
} from "redux-firestore";

// Redux Persist Imports
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import storage from "redux-persist/lib/storage";

// Reducer Imports
export interface StoreSchema {}

interface State {
  firebase: FirebaseReducer.Reducer<{}, StoreSchema>;
  firestore: FirestoreReducer.Reducer;
}

const rootPersistConfig = {
  version: 1,
  storage,
};

const reducers = combineReducers<State>({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

const persistedReducer = persistReducer<State>(
  { ...rootPersistConfig, key: "root" },
  reducers
);

const extraArgument = {
  getFirebase,
  getFirestore,
};

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER,
        ...Object.keys(rfConstants.actionTypes).map(
          (type) => `${rfConstants.actionsPrefix}/${type}`
        ),
        ...Object.keys(rrfActionTypes).map(
          (type) => `@@reactReduxFirebase/${type}`
        ),
      ],
      ignoredPaths: ["firebase", "firestore"],
    },
    thunk: {
      extraArgument,
    },
  }),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type AppThunk = ThunkAction<
  void,
  RootState,
  typeof extraArgument,
  Action<string>
>;

export const getState = store.getState;

const persistor = persistStore(store);

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export let analytics: firebase.analytics.Analytics | null = null;

firebase.analytics.isSupported().then((isSupported) => {
  if (isSupported) analytics = firebase.analytics();
});

const ReduxStore: FC = ({ children }) => {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider
        dispatch={store.dispatch}
        firebase={firebase}
        config={{
          logErrors: true,
        }}
        createFirestoreInstance={createFirestoreInstance}
      >
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
          {children}
        </PersistGate>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
};

export default ReduxStore;
