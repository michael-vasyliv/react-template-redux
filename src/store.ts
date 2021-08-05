import { configureStore } from '@reduxjs/toolkit';
import comment from '@slices/comment';
import movie from '@slices/movie';
import user from '@slices/user';

export const store = configureStore({
    reducer: {
        comment,
        movie,
        user
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
