import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsBuySellComponent } from './ads-buy-sell/ads-buy-sell.component';
import { EditAdvertisementComponent } from './edit-advertisement/edit-advertisement.component';
import { MyItemsComponent } from './my-items/my-items.component';
import { PostAdvertisementComponent } from './post-advertisement/post-advertisement.component';
import { SingleItemAdvComponent } from './single-item-adv/single-item-adv.component';
import { SingleItemDetailsComponent } from './single-item-details/single-item-details.component';

import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import { FilteredComponent } from './filtered/filtered.component';

@NgModule({
	declarations: [
		AdsBuySellComponent,
		EditAdvertisementComponent,
		MyItemsComponent,
		PostAdvertisementComponent,
		SingleItemAdvComponent,
		SingleItemDetailsComponent,
		SearchComponent,
		FilteredComponent
	],
	imports: [ CommonModule, FormsModule, BrowserAnimationsModule ],
	exports: [
		AdsBuySellComponent,
		EditAdvertisementComponent,
		MyItemsComponent,
		PostAdvertisementComponent,
		SingleItemAdvComponent,
		SingleItemDetailsComponent,
		SearchComponent,
		FilteredComponent
	]
})
export class AdsModule {}
