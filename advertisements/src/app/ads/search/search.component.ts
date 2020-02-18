import { Component, OnInit, Input } from '@angular/core';
import { BuySell } from '../buy-sell.model';
import { BuySellService } from '../buy-sell.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: [ './search.component.css' ]
})
export class SearchComponent implements OnInit {
	@Input() tobeFiltered: BuySell[] = [];
	filtered = [];

	constructor(private buySell: BuySellService, private router: Router) {}

	ngOnInit() {}

	onSearch(searchWord: string) {
		this.filtered = this.tobeFiltered.filter((product) =>
			product.name.toLowerCase().includes(searchWord.toLowerCase())
		);
		if (this.filtered) {
			this.buySell.filteredAds = this.filtered;
			this.router.navigate([ '/filtered' ]);
		}
	}
}
