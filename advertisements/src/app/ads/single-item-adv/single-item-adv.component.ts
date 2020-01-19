import { Component, OnInit, Input } from '@angular/core';
import { BuySell } from '../buy-sell.model';

@Component({
	selector: 'app-single-item-adv',
	templateUrl: './single-item-adv.component.html',
	styleUrls: [ './single-item-adv.component.css' ]
})
export class SingleItemAdvComponent implements OnInit {
	@Input() singleItem: BuySell;
	constructor() {}

	ngOnInit() {}
}
