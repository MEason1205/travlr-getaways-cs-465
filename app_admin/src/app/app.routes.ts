import { Routes } from '@angular/router';
import { TripListComponent } from './trip-list/trip-list.component';
import { TripEditComponent } from './trip-edit/trip-edit.component';

export const routes: Routes = [
  { path: '', component: TripListComponent },
  { path: 'trip/new', component: TripEditComponent },
  { path: 'trip/:code/edit', component: TripEditComponent },
  { path: '**', redirectTo: '' }
];
