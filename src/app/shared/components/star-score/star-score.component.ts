import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star-score',
  templateUrl: './star-score.component.html',
  styleUrls: ['./star-score.component.css']
})
export class StarScoreComponent implements OnChanges {
  @Input() rating!: number;
  parsedRating!: number;
  hideStars : boolean = false;

  /**
   * OnChanges function
   */
  ngOnChanges(): void {
    this.parseRating();
  }

  /**
   * Function to convert rating of 10 into stars of 5
   */
  parseRating(): void {
    if (this.rating >= 0) {
      const roundedRating = Math.round(this.rating * 2) / 2;

      this.parsedRating = (roundedRating / 2) * 100;
    } else {
      this.hideStars = true;
    }
  }
}
