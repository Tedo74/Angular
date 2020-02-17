import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../auth-service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit, OnDestroy {
	@ViewChild('btn', { static: true })
	btn: ElementRef;
	pass: string;
	loginErrorMessge: string;
	errorSubscription: Subscription;
	constructor(private authServ: AuthService) {}

	ngOnInit() {
		this.errorSubscription = this.authServ.errorMessageChange.subscribe((err) => {
			this.loginErrorMessge = err;
		});
		this.btn.nativeElement.disabled = true;
	}

	ngOnDestroy() {
		this.errorSubscription.unsubscribe();
	}

	onLogin(f: NgForm) {
		let email = f.value.email;
		let password = f.value.password;
		this.authServ.login(email, password);
	}
}
