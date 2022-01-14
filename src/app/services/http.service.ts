import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { APIResponse } from '../models';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient) { }

  getPhotoList(): Observable<APIResponse<any>> {
    return this.http.get<APIResponse<any>>(`${env.NASA_API_URL}${env.NASA_API_KEY}`);
  }
}
