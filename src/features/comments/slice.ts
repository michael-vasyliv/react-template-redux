import { createSlice } from '@reduxjs/toolkit';
import { commentsAdapter, CommentsState, getUsersCommentsReducer } from './reducer';

const initialState: CommentsState = commentsAdapter.getInitialState({});

const { reducer } = createSlice({
    name: 'comment',
    initialState,
    reducers: {},
    extraReducers(builder) {
        getUsersCommentsReducer(builder);
    }
});

export default reducer;
