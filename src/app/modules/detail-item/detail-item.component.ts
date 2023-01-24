import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api/api.service';
import { ShowItem } from 'src/app/shared/models/show.model';
import { first } from 'rxjs';
import { ShowsService } from 'src/app/core/services/shows/shows.service';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.css']
})
export class DetailItemComponent implements OnInit {
  show!: ShowItem;
  loading: boolean = true;
  showId: number = 0;
  parsedGenres: string = ''

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private showsService: ShowsService
    ) { }

  /**
  * On init function
  */
  ngOnInit(): void {
    this.showId = this.activatedRoute.snapshot.params['id'];
    this.searchFilmsById(this.showId);
  }

  /**
  * Function to get a film searched by id
  */
  searchFilmsById(id: number): void {
    this.apiService.searchTvShowByid(id)
      .pipe(
        first(),
      )
      .subscribe({
        next: (response: ShowItem) => {
          this.show = response;
          this.parseDescription();
          this.parseGenres();
          this.loading = false;
        },
        error: (err: HttpErrorResponse) => {
          this.loading = false;
        }
      });
  }

  /**
  * Function to return show rating if it exists, else it returns -1
  */
  getRating(): number {
    return this.show.rating.average || -1;
  }

  /**
  * Function to parse description string
  */
  parseDescription(): void {
    this.show.summary = this.showsService.getParsedDescrition(this.show);
  }

  /**
  * Function to parse genres array
  */
  parseGenres(): void {
    if (this.show.genres) {
      this.parsedGenres = this.showsService.getParsedGenres(this.show);
    }
  }

  /**
  * Function to get back
  */
  back(): void {
    this.router.navigate(['']).then();
  }
}
