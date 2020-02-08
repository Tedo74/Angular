import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BuySellService } from '../buy-sell.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-post-advertisement',
	templateUrl: './post-advertisement.component.html',
	styleUrls: [ './post-advertisement.component.css' ]
})
export class PostAdvertisementComponent implements OnInit {
	constructor(private buySellServ: BuySellService, private router: Router) {}

	ngOnInit() {}

	onPost(f: NgForm) {
		this.buySellServ.post(f.value);
		this.router.navigate([ '/home' ]);
	}
}
