import { createSlice } from '@reduxjs/toolkit';
import { USERS_FEATURE_NAME } from './actions';
import { getUsersReducer, usersAdapter, UsersState } from './reducers';

const initialState: UsersState = usersAdapter.getInitialState();

const { reducer } = createSlice({
    name: USERS_FEATURE_NAME,
    initialState,
    reducers: {},
    extraReducers(builder) {
        getUsersReducer(builder);
    }
});

export default reducer;
