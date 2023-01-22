import { DetailItemComponent } from './detail-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailItemRoutingModule } from './detail-item-routing.module';
import { SpinnerModule } from 'src/app/shared/components/spinner/spinner.module';



@NgModule({
  declarations: [
    DetailItemComponent
  ],
  imports: [
    CommonModule,
    DetailItemRoutingModule,
    SpinnerModule
  ]
})
export class DetailItemModule { }
