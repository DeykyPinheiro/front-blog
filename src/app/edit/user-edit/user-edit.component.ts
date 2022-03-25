
import { environment } from './../../../environments/environment.prod';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';

@Component({
	selector: 'app-user-edit',
	templateUrl: './user-edit.component.html',
	styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

	user: Usuario = new Usuario();
	idUser: number;
	confirmarSenha: string;
	tipoUsuario: string;

	constructor(
		private authService: AuthService,
		private route: ActivatedRoute,
		private router: Router,
	) { }

	ngOnInit() {
		window.scroll(0, 0);

		if (environment.token == '') {
			this.router.navigate(['/entrar']);
		}

		this.idUser = this.route.snapshot.params['id']
		this.findByIdUser(this.idUser)
	}

	confirmSenha(event: any) {
		this.confirmarSenha = event.target.value
	}

	tipoUser(event: any) {
		this.tipoUsuario = event.target.value
	}

	atualizar() {
		this.user.tipo = this.tipoUsuario

		if (this.user.senha != this.confirmarSenha) {
			// this.alertas.showAlertDanger('A senhas estão incorretas.')
		} else {
			this.authService.cadastrar(this.user).subscribe((resp: Usuario) => {
				this.user = resp
				this.router.navigate(['/inicio'])
				// this.alertas.showAlertSuccess('Usuário atualizado com sucesso, faça o login novamente.')
				environment.token = ''
				environment.nome = ''
				environment.foto = ''
				environment.id = 0

				this.router.navigate(['/entrar'])
			})
		}
	}

	findByIdUser(id: number) {
		this.authService.getByIdUser(id).subscribe((resp: Usuario) => {
			this.user = resp
		})
	}

}
