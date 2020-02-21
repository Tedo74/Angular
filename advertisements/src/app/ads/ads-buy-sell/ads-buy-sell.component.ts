import { Component, OnInit } from '@angular/core';
import { BuySellService } from '../buy-sell.service';
import { BuySell } from '../buy-sell.model';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-ads-buy-sell',
	templateUrl: './ads-buy-sell.component.html',
	styleUrls: [ './ads-buy-sell.component.css' ]
})
export class AdsBuySellComponent implements OnInit {
	errorSubscription: Subscription;
	errMsg = '';
	// adsFromFirebase: BuySell[];
	get adsFromFirebase() {
		return this.buySellServ.allAds;
	}

	set adsFromFirebase(v: BuySell[]) {
		this.adsFromFirebase = v;
	}

	showMyItems = false;
	constructor(private buySellServ: BuySellService) {}

	ngOnInit() {
		this.errorSubscription = this.buySellServ.errorMessageChange.subscribe((err) => {
			this.errMsg = err;
		});
		this.buySellServ.getAllAds();
	}

	toggleMyItems() {
		this.showMyItems = !this.showMyItems;
	}
}
