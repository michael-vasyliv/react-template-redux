import { CommentModel } from '@models/comment';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getUsersAsync } from './user';

const adapter = createEntityAdapter<CommentModel>();
const initialState = adapter.getInitialState({
    loading: false
});

export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getUsersAsync.fulfilled, (state, action) => {
            adapter.upsertMany(state, action.payload.comments);
        });
    }
});

export default commentSlice.reducer;
