import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.css' ]
})
export class RegisterComponent implements OnInit {
	constructor(private authServ: AuthService) {}

	ngOnInit() {}

	onReg(f: NgForm) {
		let email = f.value.email;
		let pass = f.value.password;
		this.authServ.register(email, pass);
	}
}
