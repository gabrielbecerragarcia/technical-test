import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api/api.service';
import { ShowElement } from 'src/app/shared/models/cord.model';
import { first } from 'rxjs';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.css']
})
export class DetailItemComponent implements OnInit {
  show: ShowElement | undefined;
  loading: boolean = true;
  showId: number = 0;

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
        next: (response: ShowElement) => {
          this.show = response;
          this.loading = false;
        },
        error: (err: HttpErrorResponse) => {
          this.loading = false;
        }
      });
  }

}
