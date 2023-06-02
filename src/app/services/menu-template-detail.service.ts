import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuTemplateDetailService {
  constructor(
    private http: HttpClient
  ) { }

  public getTable1(): Observable<any> {
    return this.http.get("https://excel2json.io/api/share/345e74e0-d7d3-4f5b-4a5d-08db39d60f55");
  }
}
