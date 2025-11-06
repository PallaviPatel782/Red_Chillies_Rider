import { configureStore } from '@reduxjs/toolkit';
import statusReducer from './slices/statusShiftStore'
import locationReducer from './slices/locationStore'

export const store = configureStore({
  reducer: {
    status: statusReducer,
    locationStore: locationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
