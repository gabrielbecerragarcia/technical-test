import { HomeModule } from './../../modules/home/home.module';
import { Routes } from '@angular/router';
import { DetailGuard } from 'src/app/core/guards/detail.guard';

export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'prefix',
        loadChildren: () => import('../../modules/home/home.module').then(m => m.HomeModule),
        data: { title: 'Home tvmaze'}
    },
    {
        path: 'detail/:id',
        pathMatch: 'prefix',
        loadChildren: () => import('../../modules/detail-item/detail-item.module').then(m => m.DetailItemModule),
        canActivate: [DetailGuard],
        data: { title: 'Detail item' }
    }
];
