import { MovieModel } from './movie';

export interface UserModel {
    id: string;
    firstName: string;
    lastName: string;
    movies: MovieModel[];
}
