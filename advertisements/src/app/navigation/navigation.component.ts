import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth-service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: [ './navigation.component.css' ]
})
export class NavigationComponent implements OnInit, OnDestroy {
	isAuth = false;
	nikname = '';
	authSubscription: Subscription;
	nikSubscription: Subscription;
	constructor(private authServ: AuthService, private router: Router) {}

	ngOnInit() {
		this.authSubscription = this.authServ.authChange.subscribe((authStatus) => {
			this.isAuth = authStatus;
		});
		this.nikSubscription = this.authServ.nikChange.subscribe((nik) => {
			this.nikname = nik;
		});
	}

	ngOnDestroy() {
		this.authSubscription.unsubscribe();
		this.nikSubscription.unsubscribe();
	}

	logout() {
		this.authServ.logout();
		this.isAuth = false;
		this.nikname = '';
		this.router.navigate([ '/' ]);
	}
}
