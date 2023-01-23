import { DetailItemComponent } from './detail-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailItemRoutingModule } from './detail-item-routing.module';
import { SpinnerModule } from 'src/app/shared/components/spinner/spinner.module';
import { StarScoreModule } from 'src/app/shared/components/star-score/star-score.module';



@NgModule({
  declarations: [
    DetailItemComponent
  ],
  imports: [
    CommonModule,
    DetailItemRoutingModule,
    SpinnerModule,
    StarScoreModule
  ]
})
export class DetailItemModule { }
