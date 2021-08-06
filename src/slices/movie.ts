import { NormalizedMovieModel } from '@models/movie';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getUsersAsync } from './user';

const adapter = createEntityAdapter<NormalizedMovieModel>();
const initialState = adapter.getInitialState({
    loading: false
});

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getUsersAsync.fulfilled, (state, action) => {
            adapter.upsertMany(state, action.payload.movies);
        });
    }
});

export default movieSlice.reducer;
