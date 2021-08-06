import { configureStore } from '@reduxjs/toolkit';
import comments from '@slices/comment';
import movies from '@slices/movie';
import users from '@slices/user';
import { useDispatch } from 'react-redux';

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
