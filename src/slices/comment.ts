import { CommentModel } from '@models/comment';
import { createSlice } from '@reduxjs/toolkit';

export interface CommentState {
    entities: Record<number, CommentModel>;
    ids: number[];
}

const initialState: CommentState = {
    entities: {},
    ids: []
};

export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {}
});

export default commentSlice.reducer;
