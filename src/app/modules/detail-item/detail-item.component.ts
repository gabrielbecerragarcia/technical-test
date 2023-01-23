import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api/api.service';
import { ShowItem } from 'src/app/shared/models/show.model';
import { first } from 'rxjs';

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
    private activatedRoute: ActivatedRoute
    ) { }

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
          console.log(response)
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
  * Function to parse to float average string
  */
  getRating(): number {
    if (this.show.rating.average) {
      return this.show.rating.average;
    } else {
      return -1;
    }
  }

  /**
  * Function to parse description string
  */
  parseDescription(): void {
    this.show.summary = this.show.summary.replace( /(<([^>]+)>)/ig, '');
  }

  /**
  * Function to parse genres array
  */
  parseGenres(): void {
    if (this.show.genres) {
      this.parsedGenres = this.show.genres.join("   •   ");
    }
  }

  /**
  * Function to get back
  */
  back(): void {
    window.history.back();
  }
}
