import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from '../../service/movie-api-service.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {

  resultMovie:any;
  resultMovieVideo:any;
  resultMovieCast:any;

  constructor(private movieService:MovieApiServiceService,private router:ActivatedRoute){}

  ngOnInit(): void {      
    let getParamId =this.router.snapshot.paramMap.get('id');
    this.getMovie(getParamId);
    this.getMovieVideo(getParamId);
    this.getMovieCast(getParamId);
  }


  getMovie(id:any){
    this.movieService.fetchSingleMove(id).subscribe((result)=>{
      console.log(result);
      this.resultMovie =result;
    })
  }

  getMovieCast(id:any){
    this.movieService.getMovieCast(id).subscribe((result)=>{
      console.log(result);
      this.resultMovieCast =result.cast;
    })
  }

  getMovieVideo(id:any){
    this.movieService.getMovieVideo(id).subscribe((result)=>{
      
      this.resultMovieVideo =result
    })
  }
  
}
