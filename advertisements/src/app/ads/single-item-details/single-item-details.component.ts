import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { BuySellService } from '../buy-sell.service';
import { BuySell } from '../buy-sell.model';
import { AuthService } from 'src/app/auth/auth-service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-single-item-details',
	templateUrl: './single-item-details.component.html',
	styleUrls: [ './single-item-details.component.css' ]
})
export class SingleItemDetailsComponent implements OnInit, OnDestroy {
	errorSubscription: Subscription;
	errMsg = '';
	//selectedItem: BuySell;
	id = '';
	selectedItem: BuySell;
	nikSubscription: Subscription;
	nikname = '';
	userMatch = false;
	comments: string[] = [];
	@ViewChild('commentInput', { static: false })
	commentInput: ElementRef;

	// public get selectedItem(): BuySell {
	// return this.adv.selectedItem;
	// }

	constructor(
		private adv: BuySellService,
		private authServ: AuthService,
		private router: Router,
		private route: ActivatedRoute
	) {}

	ngOnInit() {
		this.errorSubscription = this.adv.errorMessageChange.subscribe((err) => {
			this.errMsg = err;
		});

		this.id = this.route.snapshot.params['id'];
		this.adv.getById(this.id).subscribe((data: BuySell) => {
			this.selectedItem = data;
			if (data.comments) {
				this.comments = data.comments;
			}
			let user = this.authServ.advUserId();
			//get logged user
			if (user === this.selectedItem.userId) {
				//if user is creator show edit and delete buttons in tmplate
				this.userMatch = true;
			} else {
				this.userMatch = false;
			}
			this.nikname = this.authServ.getUserNik();
		});

		this.nikSubscription = this.authServ.nikChange.subscribe((nik) => {
			this.nikname = nik;
		});
	}

	ngOnDestroy() {
		this.nikSubscription.unsubscribe();
		this.errorSubscription.unsubscribe();
	}

	pushComment(comment: string) {
		// console.log(comment);
		if (comment) {
			comment = this.nikname + ': ' + comment;
			this.comments.push(comment);
			this.commentInput.nativeElement.value = '';
			let id = this.selectedItem.id;
			let userId = this.selectedItem.userId;
			this.selectedItem.comments = this.comments;
			let data = { ...this.selectedItem, id, userId };
			this.adv.editItem(data).subscribe((resp) => {
				// console.log(resp);
			});
		}
	}

	redirect() {
		this.router.navigate([ '/edit', this.selectedItem.id ]);
	}

	delete() {
		let id = this.selectedItem.id;
		let user = this.authServ.advUserId();
		if (user !== this.authServ.advUserId()) {
			this.router.navigate([ '/login' ]);
			return;
		}
		this.adv.deleteItem(id);
		// this.adv.getAllAds();

		// return;
	}
}
