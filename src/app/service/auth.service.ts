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
		return this.http.post<UsuarioLogin>("https://blog-pessoal-deploy-heroku.herokuapp.com/usuario/logar", usuarioLogin);
	}

	cadastrar(usuario: Usuario): Observable<Usuario> {
		return this.http.post<Usuario>("https://blog-pessoal-deploy-heroku.herokuapp.com/usuario/cadastrar", usuario);
	}

	getByIdUser(id: number): Observable<Usuario> {
		return this.http.get<Usuario>(`https://blog-pessoal-deploy-heroku.herokuapp.com/usuario/${id}`)
	  }

	logado() {
		let ok: boolean = false;

		if (environment.token != "") {
			ok = true;
		}
		return ok;
	}
}
