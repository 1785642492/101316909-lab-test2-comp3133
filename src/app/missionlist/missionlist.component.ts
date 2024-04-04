import { Component, OnInit } from '@angular/core';
import { SpacexapiService } from '../spacexapi.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  launches: any[] = [];

  constructor(private spacexApi: SpacexapiService) { }

  ngOnInit() {
    this.spacexApi.getLaunches().subscribe((data: any) => {
      this.launches = data;
    });
  }
}
