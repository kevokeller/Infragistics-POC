import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuTemplatesService {
  constructor(
    private http: HttpClient
  ) { }

  public getTable1(): Observable<any> {
    return this.http.get("https://excel2json.io/api/share/bd459cbb-7d1d-4a98-4a5c-08db39d60f55");
  }
}
