import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { MovieApiServiceService } from '../../service/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchResult:any;
  constructor(private movieService:MovieApiServiceService){}

  searchForm = new FormGroup({
    'movieName': new FormControl(null)
  });

  SubmitForm(){
    this.movieService.searchMovie(this.searchForm.value).subscribe((result)=>{
      console.log(result);
      this.searchResult =result.results;
    })
  }


}
