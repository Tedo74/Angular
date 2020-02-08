import { Component, OnInit, Input } from '@angular/core';
import { BuySell } from '../buy-sell.model';
import { BuySellService } from '../buy-sell.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-single-item-adv',
	templateUrl: './single-item-adv.component.html',
	styleUrls: [ './single-item-adv.component.css' ]
})
export class SingleItemAdvComponent implements OnInit {
	@Input() singleItem: BuySell;
	constructor(private adv: BuySellService, private router: Router) {}

	ngOnInit() {}

	getDetails() {
		this.adv.selectedItem = this.singleItem;
		this.router.navigate([ '/details' ]);
	}
}
