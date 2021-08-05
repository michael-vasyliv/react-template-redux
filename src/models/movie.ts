import { CommentModel } from './comment';

export interface MovieModel {
    id: string;
    title: string;
    description: string;
    comments: CommentModel[];
}
