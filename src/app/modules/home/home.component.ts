import { SearchOptions } from './../../shared/enums';
import { ShowElement } from '../../shared/models/shows.model';
import { ApiService } from './../../core/services/api/api.service';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ShowsService } from 'src/app/core/services/shows/shows.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  shows: ShowElement[] = [];
  loading: boolean = true;

  private searchUrl: string = SearchOptions.defaultSearchName;
  private itemsToDisplay: number = SearchOptions.defaultItemsToDisplay;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private showsService: ShowsService
    ) {
    }

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
        next: (response: ShowElement[]) => {
          this.shows = response.length >= this.itemsToDisplay ? response.slice(0, this.itemsToDisplay): response.slice(0);
          this.loading = false;
        },
        error: (err: HttpErrorResponse) => {
          this.loading = false;
        }
      });
  }

  /**
  * Function to get films searched by name
  */
  showDetails(id: number): void {
    if (id) {
      this.showsService.isValidId = true;
      this.router.navigate([`detail/${id}`]).then();
    }
  }
}
