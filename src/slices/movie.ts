import { MovieModel } from '@models/movie';
import { createSlice } from '@reduxjs/toolkit';

export interface MovieState {
    entities: Record<number, MovieModel>;
    ids: number[];
}

const initialState: MovieState = {
    entities: {},
    ids: []
};

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {}
});

export default movieSlice.reducer;
