import { Component, OnInit } from '@angular/core';
import { BuySellService } from '../buy-sell.service';
import { BuySell } from '../buy-sell.model';

@Component({
	selector: 'app-single-item-details',
	templateUrl: './single-item-details.component.html',
	styleUrls: [ './single-item-details.component.css' ]
})
export class SingleItemDetailsComponent implements OnInit {
	//selectedItem: BuySell;

	public get selectedItem(): BuySell {
		return this.adv.selectedItem;
	}

	constructor(private adv: BuySellService) {}

	ngOnInit() {
		// this.selectedItem = this.adv.selectedItem;
	}
}
