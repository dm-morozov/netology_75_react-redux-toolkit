// src/types/movie.types.ts

export interface MovieSearchResult {
  imdbID: string
  Title: string
  Year: string
  Type: 'movie' | 'series' | 'episode'
  Poster: string
}

export interface MovieDetails extends MovieSearchResult {
  // поля, которые есть только в деталях
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Ratings: Array<{ Source: string; Value: string }>
  Metascore: string
  imdbRating: string
  imdbVotes: string
  DVD?: string
  BoxOffice?: string
  Production?: string
  Website?: string
  Response: 'True' | 'False'
  Error?: string
}

export interface SearchResponse {
  Search?: MovieSearchResult[] // может отсутствовать при ошибке
  totalResults?: string
  Response: 'True' | 'False'
  Error?: string
}
