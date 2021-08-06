import { NormalizedUserModel } from '@models/user';
import { createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@store';
import { getUsersAsync, SLICE_USER_NAME } from './actions';

const adapter = createEntityAdapter<NormalizedUserModel>();
const initialState = adapter.getInitialState({
    loading: false
});

export const { reducer: userReducer } = createSlice({
    name: SLICE_USER_NAME,
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getUsersAsync.fulfilled, (state, action) => {
            adapter.upsertMany(state, action.payload.users);

            // eslint-disable-next-line no-param-reassign
            state.loading = false;
        });

        builder.addCase(getUsersAsync.pending, (state) => ({
            ...state,
            loading: true
        }));
    }
});

export const {
    selectById: selectUserById,
    selectAll: selectUsers,
    selectTotal: selectTotalUsers
} = adapter.getSelectors();

export const selectUserLoading = createSelector<RootState, typeof initialState, boolean>(
    (state) => state.users,
    (x) => x.loading
);
