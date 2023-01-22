import { SearchNames } from './../../shared/enums';
import { Shows } from './../../shared/models/cord.model';
import { ApiService } from './../../core/services/api/api.service';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  shows: Shows[] = [];
  loading: boolean = true;

  private searchUrl: string = SearchNames.defaultSearchName;

  constructor(private apiService: ApiService) { }

  /**
  * On init function
  */
  ngOnInit(): void {
    this.searchFilmsByName(this.searchUrl);
  }

  /**
  * Function to get films searched by name
  */
  searchFilmsByName(search: string): void {
    this.apiService.searchTvShowsByName(search)
      .pipe(
        first(),
      )
      .subscribe({
        next: (response: Shows[]) => {
          this.shows = response;
          this.loading = false;
        },
        error: (err: HttpErrorResponse) => {
          this.loading = false;
        }
      });
  }
}
