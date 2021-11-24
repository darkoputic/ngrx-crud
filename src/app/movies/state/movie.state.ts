import { Movie } from "../models/movie.model";

export interface MovieState {
  movies: Movie[];
}

export const initialState: MovieState = {
  movies: []
};
