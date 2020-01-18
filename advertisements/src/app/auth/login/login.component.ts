import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
	constructor(private authServ: AuthService) {}

	ngOnInit() {}

	onLogin(f: NgForm) {
		let email = f.value.email;
		let pass = f.value.password;
		this.authServ.login(email, pass);
	}
}
