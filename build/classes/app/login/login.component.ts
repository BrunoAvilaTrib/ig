import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LayermsgService } from '@app/config/layermsg.service';
import { EnumStatus } from '@app/enumeration/enum-status.enum';
import { ApiService } from '@app/config/api.service';
import { AuthService } from '@app/auth/auth.service';
import { User } from '@app/model/user.class';
import { SharedService } from '@app/config/shared.service';
import { SharedVariable } from '@app/config/shared';
import { Parametries } from '@app/config/parametries';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

	fgroup: FormGroup;
	submitted = false;
	user;
	errors = [];
	hide = true;

	constructor(
		private layerMsgService: LayermsgService,
		private apiService: ApiService,
		private authService: AuthService,
		private router: Router,
		private formBuilder: FormBuilder,
		private sharedService: SharedService) {
		this.authService.logout();
	}

	ngOnInit() {
		this.fgroup = this.formBuilder.group({

			user: ['', [
				Validators.required]
			],
			pass: ['', [
				Validators.required]
			]
		});
	}

	login(user: any, pass: any) {

		const $this: any = this;
		this.apiService.post('/auth/v1/login', {

			email: user,
			password: btoa(pass),
			appVersion: '0.0'
		}, (response: any) => {

			$this.sharedService.set(SharedVariable.USER, new User(user, response.data.sessionId, response.data.role , response.data.roles ));
			this.registerTrace(user);
			console.log(response.data.roles) ;
			console.log("entro al login")

			$this.authService.login().subscribe(() => $this.router.navigate(['/dashboard']));
		}, (error) => {

			this.errors['service'.toString()] = true;
			let msg = 'Ocurrio un error inesperado.';

			if (error.error && error.error.status) {

				const code = error.error.status.code;

				if ('0001' === code || '0052' == code) {

					msg = "Intento fallido de login.";
				} else if('0002' === code){

					msg = "Usuario no existe.";
				} else if ('0003' === code) {

					msg = "Usuario ha supera el limite de intentos.";
				}else if('0004' === code){

					msg = "El usuario se encuentra bloqueado.";
				}
			}

			this.errors['message'.toString()] = msg;
			console.log(error);
		});
	}

	onFormSubmit() {

		this.errors['service'.toString()] = false;
		this.submitted = true;

		if (this.fgroup.invalid) {

			return;
		} else {

			this.login(this.fgroup.value.user, this.fgroup.value.pass);
		}
	}

	registerTrace(username: string) {

		this.apiService.post('/employTraze/v1/addEmployTraze', {
			operation: 'inició sesión'
		}, (result: any) => {

			console.log('Traza de acceso: "Usuario: ' + username + ' ha iniciado sesion"');
			console.log(result);
		});
	}

	showPassword(event) { 

		event.preventDefault();
		this.hide = !this.hide
	}

	get formGroup() {

		return this.fgroup.controls;
	}
}
