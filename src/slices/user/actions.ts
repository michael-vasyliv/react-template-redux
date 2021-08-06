import { CommentModel } from '@models/comment';
import { NormalizedMovieModel } from '@models/movie';
import { NormalizedUserModel } from '@models/user';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { normalize, schema } from 'normalizr';

interface NormalizedUserResponse {
    users: Record<string, NormalizedUserModel>;
    movies: Record<string, NormalizedMovieModel>;
    comments: Record<string, CommentModel>;
}

export const SLICE_USER_NAME = 'users';

const comments = [new schema.Entity('comments')];
const movies = [new schema.Entity('movies', { comments })];
const users = [new schema.Entity('users', { movies })];

export const getUsersAsync = createAsyncThunk(
    `${SLICE_USER_NAME}/getUsersAsync`,
    async () => {
        const response = await fetch('/users.json');

        return normalize<unknown, NormalizedUserResponse>(await response.json(), users).entities;
    }
);
