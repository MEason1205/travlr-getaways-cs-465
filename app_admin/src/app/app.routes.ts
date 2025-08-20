import { Routes } from '@angular/router';
import { TripListComponent } from './trip-list/trip-list.component';
import { TripEditComponent } from './trip-edit/trip-edit.component';
import { LoginComponent } from './login/login';

export const routes: Routes = [
  { path: '', component: TripListComponent },
  { path: 'trip/new', component: TripEditComponent },
  { path: 'trip/:code/edit', component: TripEditComponent },
  { path: '**', redirectTo: '' },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
