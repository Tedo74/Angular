import { Component, OnInit } from '@angular/core';
import { BuySellService } from '../buy-sell.service';
import { BuySell } from '../buy-sell.model';

@Component({
	selector: 'app-ads-buy-sell',
	templateUrl: './ads-buy-sell.component.html',
	styleUrls: [ './ads-buy-sell.component.css' ]
})
export class AdsBuySellComponent implements OnInit {
	// adsFromFirebase: BuySell[];
	get adsFromFirebase() {
		return this.adv.allAds;
	}

	set adsFromFirebase(v: BuySell[]) {
		this.adsFromFirebase = v;
	}

	showMyItems = false;
	constructor(private adv: BuySellService) {}

	ngOnInit() {
		this.adv.getAllAds();
	}

	toggleMyItems() {
		this.showMyItems = !this.showMyItems;
	}
}
