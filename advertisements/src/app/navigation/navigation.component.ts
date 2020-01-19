import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth-service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: [ './navigation.component.css' ]
})
export class NavigationComponent implements OnInit, OnDestroy {
	isAuth = false;
	authSubscription: Subscription;
	constructor(private authServ: AuthService) {}

	ngOnInit() {
		this.authSubscription = this.authServ.authChange.subscribe((authStatus) => {
			this.isAuth = authStatus;
		});
	}

	ngOnDestroy() {
		this.authSubscription.unsubscribe();
	}

	logout() {
		this.authServ.logout();
	}
}
