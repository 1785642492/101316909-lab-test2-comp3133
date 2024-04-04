import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {
  private baseUrl = 'https://api.spacexdata.com/v3';

  constructor(private http: HttpClient) { }

  getLaunches() {
    return this.http.get(`${this.baseUrl}/launches`);
  }
  
  getLaunchByYear(year: string) {
    return this.http.get(`${this.baseUrl}/launches?launch_year=${year}`);
  }
  
  getMissionDetails(id: string) {
    return this.http.get(`${this.baseUrl}/launches/${id}`);
  }
}
