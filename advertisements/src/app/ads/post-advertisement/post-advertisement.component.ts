import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BuySellService } from '../buy-sell.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-post-advertisement',
	templateUrl: './post-advertisement.component.html',
	styleUrls: [ './post-advertisement.component.css' ]
})
export class PostAdvertisementComponent implements OnInit {
	errorSubscription: Subscription;
	errMsg = '';
	category = 'sell';
	constructor(private buySellServ: BuySellService, private router: Router) {}

	ngOnInit() {
		this.errorSubscription = this.buySellServ.errorMessageChange.subscribe((err) => {
			this.errMsg = err;
		});
	}

	onPost(f: NgForm) {
		this.buySellServ.post(f.value);
	}
}
