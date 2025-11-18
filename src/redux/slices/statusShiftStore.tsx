import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StatusState {
  status: 'Online' | 'Offline' | 'On break';
}

const initialState: StatusState = {
  status: 'Offline',
};

const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<StatusState['status']>) => {
      state.status = action.payload;
    },
  },
});

export const { setStatus } = statusSlice.actions;
export default statusSlice.reducer;
