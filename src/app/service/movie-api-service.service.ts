import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

    
  constructor(private http:HttpClient) { }
  baseUrl =process.env.baseUrl;
  api_key=process.env.api_key;

  bannerapi = `${this.baseUrl}/trending/all/week?api_key=${this.api_key}`

  bannerApiData():Observable<any>{
    return this.http.get(`${this.baseUrl}/trending/all/week?api_key=${this.api_key}`);
  }


  trendingMoviesApiData():Observable<any>{
    return this.http.get(`${this.baseUrl}/trending/movie/day?api_key=${this.api_key}`)
  }


  searchMovie(data:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/search/movie?api_key=${this.api_key}&query=${data.movieName}`)
  }

  fetchSingleMove(data:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/movie/${data}?api_key=${this.api_key}`)
  }

  getMovieVideo(data:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/movie/${data}/videos?api_key=${this.api_key}`)
  }

  getMovieCast(data:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/movie/${data}/credits?api_key=${this.api_key}`)
  }
}
