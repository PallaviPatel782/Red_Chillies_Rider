import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ShiftState {
  status: 'Online' | 'Offline' | 'On break';
  shift: string | null;
}

const initialState: ShiftState = {
  status: 'Offline',
  shift: null,
};

const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    setStatus: (state: ShiftState, action: PayloadAction<ShiftState['status']>) => {
      state.status = action.payload;
    },
    setShift: (state: ShiftState, action: PayloadAction<string | null>) => {
      state.shift = action.payload;
    },
  },
});

export const { setStatus, setShift } = statusSlice.actions;
export default statusSlice.reducer;
