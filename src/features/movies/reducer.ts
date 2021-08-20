import { getUsersAsync } from '@features/users/actions';
import { NormalizedMovieModel } from '@models/movie';
import { ActionReducerMapBuilder, createEntityAdapter, EntityState } from '@reduxjs/toolkit';

export interface MoviesState extends EntityState<NormalizedMovieModel> { }

export const moviesAdapter = createEntityAdapter<NormalizedMovieModel>();

export function getUsersMoviesReducer(builder: ActionReducerMapBuilder<MoviesState>) {
    builder.addCase(getUsersAsync.fulfilled, (state, action) => {
        moviesAdapter.upsertMany(state, action.payload.movies);
    });
}
