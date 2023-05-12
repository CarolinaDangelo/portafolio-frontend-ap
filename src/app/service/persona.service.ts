import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../model/persona.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments.prod';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  //URL = 'http://localhost:8080/personas/'
  URL: string = environment.apiURL + '/personas/';

  constructor(private httpClient: HttpClient) {}

  public getPersona(): Observable<Persona> {
    return this.httpClient.get<Persona>(this.URL + 'traer/perfil');
  }

  public lista(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.URL + 'lista');
  }
  
  public detail(id: number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.URL + `detail/${id}`);
  }
}
