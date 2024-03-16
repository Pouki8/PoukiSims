import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Monde } from '../models/monde';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MondeService {

  constructor(private http: HttpClient) { }

  getMonde(): Observable<Monde[]> {
    return this.http.get<Monde[]>("http://localhost:3000/monde");
  }


}
