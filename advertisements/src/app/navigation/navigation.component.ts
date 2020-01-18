import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth-service';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: [ './navigation.component.css' ]
})
export class NavigationComponent implements OnInit {
	isAuth = false;
	constructor(private authServ: AuthService) {}

	ngOnInit() {
		this.authServ.authChange.subscribe((authStatus) => {
			this.isAuth = authStatus;
		});
	}
}
