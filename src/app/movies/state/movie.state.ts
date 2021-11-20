import { Movie } from "../models/movie.model";

export interface MovieState {
  movies: Movie[];
}

export const initialState: MovieState = {
  movies: [
    {id: '1', title: 'First movie', description: 'Desc. of first movie'},
    {id: '2', title: 'Second movie', description: 'Desc. of second movie'}
  ]
};
