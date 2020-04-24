import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from '../models/member';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BnkService {

  constructor(private http: HttpClient) { }

  list():Observable<Member[]> {
    return this.http.get<Member[]>(`${environment.api_url}/bnk/members`);
  }

  admin(id: string):Observable<Member> {
    return this.http.get<Member>(`${environment.api_url}/bnk/members/${id}`);
  }

  update(data: Member):Observable<Member> {
    return this.http.patch<Member>(`${environment.api_url}/bnk/members/${data._id}`, data);
  }
}
