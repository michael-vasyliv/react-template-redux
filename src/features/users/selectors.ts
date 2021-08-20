import { RootState } from '@features/store';
import { createSelector } from '@reduxjs/toolkit';

const selectUsersState = (x: RootState) => x.users;

export const selectUserLoading = createSelector(
    selectUsersState,
    (x) => x.loading
);
