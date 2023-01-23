import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarScoreComponent } from './star-score.component';



@NgModule({
  declarations: [
    StarScoreComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [StarScoreComponent]
})
export class StarScoreModule { }
