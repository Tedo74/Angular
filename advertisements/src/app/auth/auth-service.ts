import { Injectable } from '@angular/core';
import { auth } from 'firebase';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {
	authChange = new Subject<boolean>();
	private token = '';
	constructor() {}

	register(email: string, pass: string) {
		// firebase
		auth()
			.createUserWithEmailAndPassword(email, pass)
			.then((data) => {
				console.log(data);
				auth().currentUser.getIdToken().then((t) => {
					this.token = t;
					this.authChange.next(this.isAuth());
				});
			})
			.catch((err) => {
				console.log(err);
				this.authChange.next(this.isAuth());
			});
	}
	login(email: string, pass: string) {
		auth()
			.signInWithEmailAndPassword(email, pass)
			.then((data) => {
				console.log(data);
				auth().currentUser.getIdToken().then((t) => {
					this.token = t;
					this.authChange.next(this.isAuth());
				});
			})
			.catch((err) => {
				console.log(err);
				this.authChange.next(this.isAuth());
			});
	}

	isAuth() {
		if (this.token != '') {
			return true;
		}
		return false;
	}
}
