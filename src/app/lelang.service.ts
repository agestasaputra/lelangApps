import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ILelang } from './lelang'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LelangService {

  constructor(private http: HttpClient) { }

  getLelang = () : Observable<ILelang[]> => {
    return this.http.get<ILelang[]>('http://localhost:3000/api/lelang')
  }

  getLelangById = (id: string) => {
    console.log('cek id: ', id)
    return this.http.get<ILelang[]>(`http://localhost:3000/api/lelang/${id}`)
  }
}
