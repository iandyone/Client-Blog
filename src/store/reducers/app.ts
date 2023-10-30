import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAppState {
  burger: boolean;
}

const initialState: IAppState = {
  burger: false,
};

const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    toggleBuger(state, { payload }: PayloadAction<boolean>) {
      state.burger = payload ? payload : !state.burger;
    },
  },
});

export default appSlice.reducer;
export const { toggleBuger } = appSlice.actions;
