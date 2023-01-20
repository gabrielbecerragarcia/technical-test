import { HomeModule } from './../../modules/home/home.module';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'prefix',
        loadChildren: () => import('../../modules/home/home.module').then(m => m.HomeModule),
        data: { title: 'Home tvmaze'}
    },
    {
        path: 'detail',
        pathMatch: 'prefix',
        loadChildren: () => import('../../modules/detail-item/detail-item.module').then(m => m.DetailItemModule),
        data: { title: 'detail item' }
    }
];
