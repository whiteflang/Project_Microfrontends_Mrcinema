export interface Movie {
  id: number;
  originalTitle: string;
  originalLanguage: OriginalLanguage;
  localTitle: string;
  overview: string;
  nowPlaying: boolean;
  releaseDate: string;
  apiId: number;
  hasVideo: boolean;
  popularity: number;
  voteAverage: number;
  voteCount: number;
  forAdults: boolean;
}

export enum OriginalLanguage {
  EN = "EN",
  ES = "ES",
  FR = "FR"
}
