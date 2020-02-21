import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BuySell } from '../buy-sell.model';
import { BuySellService } from '../buy-sell.service';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-edit-advertisement',
	templateUrl: './edit-advertisement.component.html',
	styleUrls: [ './edit-advertisement.component.css' ]
})
export class EditAdvertisementComponent implements OnInit {
	errMsg = '';
	id: string;
	itemAdv: BuySell;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private buySellServ: BuySellService
	) {}

	ngOnInit() {
		this.id = this.route.snapshot.params['id'];
		// console.log(this.id);
		this.buySellServ.getById(this.id).subscribe(
			(data: BuySell) => {
				this.itemAdv = data;
				// console.log(data);
			},
			(error: object) => {
				this.errMsg = 'ERROR';
			}
		);
	}

	onEdit(f: NgForm) {
		let id = this.itemAdv.id;
		let userId = this.itemAdv.userId;
		let comments = this.itemAdv.comments;
		let data = { ...f.value, comments, id, userId };
		this.buySellServ.editItem(data).subscribe(
			(resp) => {
				// console.log(f.value);
				this.router.navigate([ '/home' ]);
			},
			(error: object) => {
				this.errMsg = 'ERROR';
			}
		);
	}
}
