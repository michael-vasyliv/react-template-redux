import { NormalizedUserModel } from '@models/user';
import { ActionReducerMapBuilder, createEntityAdapter, EntityState } from '@reduxjs/toolkit';
import { getUsersAsync } from './actions';

export interface UsersState extends EntityState<NormalizedUserModel> {
    loading?: boolean;
}

export const usersAdapter = createEntityAdapter<NormalizedUserModel>();

export function getUsersReducer(builder: ActionReducerMapBuilder<UsersState>) {
    builder.addCase(getUsersAsync.fulfilled, (state, action) => {
        usersAdapter.upsertMany(state, action.payload.users);

        state.loading = false;
    });

    builder.addCase(getUsersAsync.pending, (state) => ({
        ...state,
        loading: true
    }));
}
