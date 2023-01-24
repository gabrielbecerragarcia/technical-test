import { ShowItem } from './../../../shared/models/show.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {
  private validId: boolean = false;

  public get isValidId(): boolean {
    return this.validId;
  }
  public set isValidId(value: boolean) {
    this.validId = value;
  }

  /**
  * Function to parse description string
  */
  getParsedDescrition(show: string): string {
    return show.replace(/(<([^>]+)>)/ig, '');
  }

  /**
  * Function to parse description string
  */
  getParsedGenres(show: ShowItem): string {
    return show.genres? show.genres.join("   •   ") : '';
  }

}
