import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from '../../service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private movieService:MovieApiServiceService){}
  
  bannerResults:any =[];
  trendingMovieResult:any =[];


  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
  }

  bannerData(){
    this.movieService.bannerApiData().subscribe((result)=>{
      this.bannerResults=result.results;
      console.log(this.bannerResults);
    })
  }

  trendingData(){
    this.movieService.trendingMoviesApiData().subscribe((result)=>{
      console.log(result,'TrendingMovies');
      this.trendingMovieResult =result.results
    }) 
  }

}
