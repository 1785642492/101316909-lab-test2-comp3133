import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexapiService } from '../spacexapi.service';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  mission: any;

  constructor(
    private spacexApi: SpacexapiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.spacexApi.getMissionDetails(id).subscribe((data: any) => {
        this.mission = data;
      });
    } else {
      // Handle the case where id is null
      // For example, you might want to redirect the user or show an error message
    }
  }
  
}
