import { configureStore } from '@reduxjs/toolkit';
import statusReducer from './slices/statusShiftStore'
import locationReducer from './slices/locationStore'
import languageReducer from './slices/languageSlice'

export const store = configureStore({
  reducer: {
    status: statusReducer,
    locationStore: locationReducer,
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
