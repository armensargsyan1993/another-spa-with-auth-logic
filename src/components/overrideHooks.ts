import { TypedUseSelectorHook, useSelector as useTypedSelector } from 'react-redux';
import { RootState } from '../globalTypes';


export const useSelector:TypedUseSelectorHook<RootState> = useTypedSelector