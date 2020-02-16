import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.css' ]
})
export class RegisterComponent implements OnInit {
	passCheck = false;
	constructor(private authServ: AuthService) {}

	ngOnInit() {}

	onReg(f: NgForm) {
		this.check(f.value.password, f.value.passConfirm);
		if (!this.passCheck) {
			// console.log(f.value.password, f.value.passConfirm, 'not mach');
			return;
		} else {
			let email = f.value.email;
			let pass = f.value.password;
			this.authServ.register(email, pass);
		}
	}

	check(pass: string, passConfirm: string) {
		if (pass === passConfirm) {
			this.passCheck = true;
		} else {
			this.passCheck = false;
		}
		// console.log(pass, passConfirm, this.passCheck);
	}
}
