import { SearchOptions } from './../../../shared/enums';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShowElement } from 'src/app/shared/models/cord.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  /**
   * Function to search through all shows in the tvmaze database by the given show name
   */
  searchTvShowsByName(showName: string): Observable<ShowElement[]> {
    return this.http.get<ShowElement[]>(`${environment.apiURL}${SearchOptions.searchByNameUrl}?q=${showName}`);
  }

  /**
   * Function to search a show in the tvmaze database by the given id
   */
  searchTvShowByid(showId: number): Observable<ShowElement> {
    return this.http.get<ShowElement>(`${environment.apiURL}${SearchOptions.searchByIdUrl}/${showId}`);
  }
}
