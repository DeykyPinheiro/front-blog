import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Observable, of } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { environment } from 'src/environments/environment.prod';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(
		private http: HttpClient) { }

	entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
		return this.http.post<UsuarioLogin>("http://localhost:8080/usuario/logar", usuarioLogin);
	}

	cadastrar(usuario: Usuario): Observable<Usuario> {
		return this.http.post<Usuario>("http://localhost:8080/usuario/cadastrar", usuario);
	}

	logado() {
		let ok: boolean = false;

		if (environment.token != "") {
			ok = true;
		}
		return ok;
	}
}
