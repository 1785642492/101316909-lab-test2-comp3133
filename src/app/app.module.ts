import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module'; // Make sure this file exists and is set up correctly
import { AppComponent } from './app.component';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';

@NgModule({
  declarations: [
    AppComponent,
    MissionlistComponent,
    MissiondetailsComponent
    // any other components that you have
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Include AppRoutingModule in the imports array
    HttpClientModule
    // any other modules that you need, for example, Angular Material Modules
  ],
  providers: [],
  bootstrap: [AppComponent] // This should bootstrap your root component, typically AppComponent
})
export class AppModule { }
