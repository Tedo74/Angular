import { Component, Input } from '@angular/core';
import { BuySell } from '../buy-sell.model';
import { BuySellService } from '../buy-sell.service';
import { Router } from '@angular/router';
//animations:
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
	selector: 'app-single-item-adv',
	templateUrl: './single-item-adv.component.html',
	styleUrls: [ './single-item-adv.component.css' ],
	animations: [
		trigger('anime', [
			state(
				'over',
				style({
					//transform: 'translateY(100px)'
					opacity: 1,
					transform: 'scale(1.06)',
					backgroundColor: 'rgb(72, 73, 80)'
				})
			),
			state(
				'normal',
				style({
					// transform: 'translateY(0)'
					opacity: 0.95,
					transform: 'scale(1)'
					// backgroundColor: 'green'
				})
			),
			transition('normal <=> over', animate(150))
		])
	]
})
export class SingleItemAdvComponent {
	//animation:
	state = 'normal';

	@Input() singleItem: BuySell;
	constructor(private adv: BuySellService, private router: Router) {}

	getDetails() {
		this.adv.selectedItem = this.singleItem;
		this.router.navigate([ '/details' ]);
	}
}
