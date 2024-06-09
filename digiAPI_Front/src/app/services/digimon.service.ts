import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DigimonService {

  private apiUrl = 'https://digimon-api.vercel.app/api/digimon'; // URL da API

  constructor(private http: HttpClient) {}

  // requisição de digimon especifico: apiURL/name/_nome do digimon_
  getDigimonByName(name: string): Observable<any> {
    const url = `${this.apiUrl}/name/${name}`;
    return this.http.get<any>(url);
  }
}
