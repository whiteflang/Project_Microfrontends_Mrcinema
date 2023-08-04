import { Observable, from } from 'rxjs';

// Definimos la interfaz para representar la estructura de cada película
 export interface Movie {
  
  id:number;
  title: string;
  vote_average: number;
  popularity:number;
  vote_count: number;
  release_date:string;
  adult:boolean;
  poster_path: string;

}

export default function MoviesListService(): Observable<Movie[]> {
  const apiUrl = 'http://api.test.mrcinema.yuju/cinema/v1/movie/CO/2023/7.5';

  const request: Promise<Movie[]> = fetch(apiUrl)
    .then((response: Response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      return [] as Movie[]; // Devolvemos un array vacío en caso de error
    });

  return from(request);
}
