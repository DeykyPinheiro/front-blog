
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Injectable } from '@angular/core';
import { Tema } from '../model/Tema';
import { Observable, observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class TemaService {

	constructor(
		private http: HttpClient
	) { }

	token = {
		headers: new HttpHeaders().set("Authorization", environment.token)
	}

	getAllTema(): Observable<Tema[]> {
		return this.http.get<Tema[]>("http://localhost:8080/tema", this.token);
	}

	postTema(tema: Tema): Observable<Tema>{
		return this.http.post<Tema>("http://localhost:8080/tema", tema, this.token);
	}
}
