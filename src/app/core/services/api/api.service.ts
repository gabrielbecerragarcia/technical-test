import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shows } from 'src/app/shared/models/cord.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  /**
   * Function to search through all shows in the tvmaze database by the given show name
   */
  searchTvShowsByName(showName: string): Observable<Shows[]> {
    return this.http.get<Shows[]>(`${environment.apiURL}?q=${showName}`);
  }
}
