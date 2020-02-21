import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { BuySell } from '../buy-sell.model';
import { AuthService } from 'src/app/auth/auth-service';
import { Router } from '@angular/router';
import { BuySellService } from '../buy-sell.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-my-items',
	templateUrl: './my-items.component.html',
	styleUrls: [ './my-items.component.css' ]
})
export class MyItemsComponent implements OnInit, OnDestroy {
	// @Input() items: BuySell[];
	// @Output() showHideOut: EventEmitter<string> = new EventEmitter();
	errorSubscription: Subscription;
	errMsg = '';
	myItems: BuySell[];

	constructor(
		private authServ: AuthService,
		private buySellServ: BuySellService,
		private router: Router
	) {}

	ngOnInit() {
		this.errorSubscription = this.buySellServ.errorMessageChange.subscribe((err) => {
			this.errMsg = err;
		});

		let user = this.authServ.advUserId();
		this.myItems = this.buySellServ.allAds.filter((i: BuySell) => {
			if (i.userId === user) {
				return true;
			}
			return false;
		});
	}

	ngOnDestroy() {
		this.errorSubscription.unsubscribe();
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
		this.buySellServ.deleteItem(id);
		this.myItems = this.myItems.filter((i) => {
			return i.id !== id;
		});
	}
}
