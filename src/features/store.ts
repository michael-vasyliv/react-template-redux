import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import comments from './comments/slice';
import movies from './movies/slice';
import users from './users/slice';

export const store = configureStore({
    reducer: {
        comments,
        movies,
        users
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
