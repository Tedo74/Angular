import { Injectable } from '@angular/core';
import { auth } from 'firebase';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
	authChange = new Subject<boolean>();
	nikChange = new Subject<string>();
	private userId = '';
	private token = '';
	private userEmail = '';
	public userNik = '';
	constructor(private router: Router) {}

	register(email: string, pass: string) {
		// firebase
		auth()
			.createUserWithEmailAndPassword(email, pass)
			.then((data) => {
				console.log(data);
				auth().currentUser.getIdToken().then((t) => {
					this.token = t;
					this.authChange.next(this.isAuth());
					this.router.navigate([ '/home' ]);
				});
				this.setUserId();
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
				// console.log(data);
				auth().currentUser.getIdToken().then((t) => {
					this.token = t;
					this.authChange.next(this.isAuth());
					this.router.navigate([ '/home' ]);
				});
				this.setUserId();
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

	logout() {
		this.token = '';
		this.authChange.next(this.isAuth());
	}

	getToken() {
		return this.token;
	}

	setUserId() {
		auth().onAuthStateChanged((user) => {
			if (user) {
				this.userEmail = user.email;
				this.setUserNik(user.email);
				this.userId = user.uid;
				this.setUserNik(user.email);
				this.nikChange.next(this.getUserNik());
			}
		});
	}

	getUserId() {
		return this.userId;
	}

	private setUserNik(mail: string): void {
		let u = mail.split('@')[0];
		this.userNik = u.trim();
	}
	getUserNik() {
		return this.userNik;
	}
	advUserId() {
		return this.userNik + this.userId.substring(0, 6);
	}
}
