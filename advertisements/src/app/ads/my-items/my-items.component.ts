import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { BuySell } from '../buy-sell.model';
import { AuthService } from 'src/app/auth/auth-service';
import { Router } from '@angular/router';
import { BuySellService } from '../buy-sell.service';

@Component({
	selector: 'app-my-items',
	templateUrl: './my-items.component.html',
	styleUrls: [ './my-items.component.css' ]
})
export class MyItemsComponent implements OnInit {
	@Input() items: BuySell[];
	@Output() showHideOut: EventEmitter<string> = new EventEmitter();
	myItems: BuySell[];

	constructor(
		private authServ: AuthService,
		private buySellServ: BuySellService,
		private router: Router
	) {}

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

	delete(item: BuySell) {
		let id = item.id;
		if (item.userId !== this.authServ.advUserId()) {
			this.router.navigate([ '/login' ]);
			return;
		}
		this.buySellServ.deleteItem(id).subscribe((d) => {
			console.log('successful deleted ', d);
		});
		this.showHideOut.emit(id);
		this.myItems = this.myItems.filter((i) => {
			return i.id !== id;
		});
	}
}
