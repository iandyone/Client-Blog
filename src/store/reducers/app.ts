import { Language } from '@appTypes/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAppState {
  burger: boolean;
  popup: boolean;
  lang: Language;
}

const initialState: IAppState = {
  burger: false,
  popup: false,
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
    setPopup(state, { payload }: PayloadAction<boolean>) {
      state.popup = payload;
    },
  },
});

export default appSlice.reducer;
export const { toggleBuger, setLanguage, setPopup } = appSlice.actions;
