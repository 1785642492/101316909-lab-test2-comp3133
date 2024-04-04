import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';
import { MissionlistComponent } from './missionlist/missionlist.component';

const routes: Routes = [
  { path: '', redirectTo: '/missions', pathMatch: 'full' },
  { path: 'missions', component: MissionlistComponent },
  { path: 'details/:id', component: MissiondetailsComponent },
  // ... other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
