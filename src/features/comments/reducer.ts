import { getUsersAsync } from '@features/users/actions';
import { CommentModel } from '@models/comment';
import { ActionReducerMapBuilder, createEntityAdapter, EntityState } from '@reduxjs/toolkit';

export interface CommentsState extends EntityState<CommentModel> { }

export const commentsAdapter = createEntityAdapter<CommentModel>();

export function getUsersCommentsReducer(builder: ActionReducerMapBuilder<CommentsState>) {
    builder.addCase(getUsersAsync.fulfilled, (state, action) => {
        commentsAdapter.upsertMany(state, action.payload.comments);
    });
}
