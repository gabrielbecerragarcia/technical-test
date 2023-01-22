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

  constructor() { }
}
