import type { DispatchType, RootState } from '@store';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

export const useDispatchTyped: () => DispatchType = useDispatch;
export const useSelectorTyped: TypedUseSelectorHook<RootState> = useSelector;
