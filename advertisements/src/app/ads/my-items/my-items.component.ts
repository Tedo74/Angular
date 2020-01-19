import { Component, OnInit, Input } from '@angular/core';
import { BuySell } from '../buy-sell.model';
import { AuthService } from 'src/app/auth/auth-service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-my-items',
	templateUrl: './my-items.component.html',
	styleUrls: [ './my-items.component.css' ]
})
export class MyItemsComponent implements OnInit {
	@Input() items: BuySell[];
	myItems: BuySell[];

	constructor(private authServ: AuthService, private router: Router) {}

	ngOnInit() {
		let user = this.authServ.advUserId();
		this.myItems = this.items.filter((i: BuySell) => {
			if (i.userId === user) {
				return true;
			}
			return false;
		});
	}

	redirect(item: BuySell) {
		this.router.navigate([ '/edit', item.id ]);
	}
}
