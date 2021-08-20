import { createSlice } from '@reduxjs/toolkit';
import { getUsersMoviesReducer, moviesAdapter, MoviesState } from './reducer';

const initialState: MoviesState = moviesAdapter.getInitialState();

const { reducer } = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers(builder) {
        getUsersMoviesReducer(builder);
    }
});

export default reducer;
