import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dayphoto } from '../interfaces/dayphoto.interface';
const URL = 'https://api.nasa.gov/planetary/apod?api_key=MbGy6NODBY7KZlQ0pX7kGbcFmNAbg41WKcdejuel';

@Injectable({
  providedIn: 'root'
})
export class DayphotoService {

  constructor(private http : HttpClient) { }
  getDayphoto(): Observable<Dayphoto> { 
    return this.http.get<Dayphoto>(URL)
  }

}
