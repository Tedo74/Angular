import { Component, OnInit, Input } from '@angular/core';
import { BuySell } from '../buy-sell.model';
import { AuthService } from 'src/app/auth/auth-service';

@Component({
	selector: 'app-my-items',
	templateUrl: './my-items.component.html',
	styleUrls: [ './my-items.component.css' ]
})
export class MyItemsComponent implements OnInit {
	@Input() items: BuySell[];
	myItems: BuySell[];

	constructor(private authServ: AuthService) {}

	ngOnInit() {
		let user = this.authServ.getUserId();
		this.myItems = this.items.filter((i: BuySell) => {
			console.log('user fromauth' + user);
			console.log('user from ads' + i.userId + '  ' + i.name);
			if (i.userId === user) {
				return true;
			}
			return false;
		});
	}
}
