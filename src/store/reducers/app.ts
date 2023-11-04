import { Language } from '@appTypes/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAppState {
  burger: boolean;
  lang: Language;
}

const initialState: IAppState = {
  burger: false,
  lang: 'en',
};

const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    toggleBuger(state, { payload }: PayloadAction<boolean>) {
      state.burger = payload ? payload : !state.burger;
    },
    setLanguage(state, { payload }: PayloadAction<Language>) {
      state.lang = payload;
    },
  },
});

export default appSlice.reducer;
export const { toggleBuger, setLanguage } = appSlice.actions;
