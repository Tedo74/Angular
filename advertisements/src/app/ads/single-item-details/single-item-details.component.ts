import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BuySellService } from '../buy-sell.service';
import { BuySell } from '../buy-sell.model';

@Component({
	selector: 'app-single-item-details',
	templateUrl: './single-item-details.component.html',
	styleUrls: [ './single-item-details.component.css' ]
})
export class SingleItemDetailsComponent implements OnInit {
	//selectedItem: BuySell;
	comments: string[] = [];
	@ViewChild('commentInput', { static: false })
	commentInput: ElementRef;

	public get selectedItem(): BuySell {
		return this.adv.selectedItem;
	}

	constructor(private adv: BuySellService) {}

	ngOnInit() {
		if (this.selectedItem.comments) {
			this.comments = this.selectedItem.comments;
		}
		// this.comments.push('test2');
		// this.selectedItem = this.adv.selectedItem;
	}

	pushComment(comment: string) {
		// console.log(comment);
		if (comment) {
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
}
