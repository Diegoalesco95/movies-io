import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MoviesResponse } from 'src/app/models/movies.models';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private uri = '/discover/movie';
  private popularsPage = 0;

  constructor(private httpClient: HttpClient) {}

  private executeQuery<T>(params: {
    [key: string]: string | number;
  }): Observable<T> {
    return this.httpClient.get<T>(`${API_URL}${this.uri}`, {
      params: {
        ...params,
        api_key: API_KEY,
      },
    });
  }

  getMoviesInTheatres() {
    const today = new Date();
    const lastDay = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0
    ).getDate();
    const month = today.getMonth() + 1;

    let monthString: string = month.toString();

    if (month < 10) {
      monthString = `0${month}`;
    }

    const initialDate = `${today.getFullYear()}-${monthString}-01`;
    const finalDate = `${today.getFullYear()}-${monthString}-${lastDay}`;

    return this.executeQuery<MoviesResponse>({
      'primary_release_date.gte': initialDate,
      'primary_release_date.lte': finalDate,
    }).pipe(
      map(({ results }) => {
        return results;
      })
    );
  }

  getPopularMovies() {
    this.popularsPage++;

    return this.executeQuery<MoviesResponse>({
      sort_by: 'popularity.desc',
      page: this.popularsPage,
    }).pipe(
      map(({ results }) => {
        return results;
      })
    );
  }
}
