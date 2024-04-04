import { Routes } from '@angular/router';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';
import { MissionlistComponent } from './missionlist/missionlist.component';

export const routes: Routes = [
  { path: '', redirectTo: '/missions', pathMatch: 'full' },
  { path: 'missions', component: MissionlistComponent },
  { path: 'details/:id', component: MissiondetailsComponent },
  // more routes can be added here
];
