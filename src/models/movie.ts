import { CommentModel } from './comment';

export interface MovieModel {
    id: string;
    title: string;
    description: string;
    comments: CommentModel[];
}

export interface NormalizedMovieModel extends Omit<MovieModel, 'comments'> {
    commments: string[];
}
