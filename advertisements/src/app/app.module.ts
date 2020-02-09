import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdsBuySellComponent } from './ads/ads-buy-sell/ads-buy-sell.component';
import { PostAdvertisementComponent } from './ads/post-advertisement/post-advertisement.component';
import { SingleItemAdvComponent } from './ads/single-item-adv/single-item-adv.component';
import { MyItemsComponent } from './ads/my-items/my-items.component';
import { EditAdvertisementComponent } from './ads/edit-advertisement/edit-advertisement.component';
import { SingleItemDetailsComponent } from './ads/single-item-details/single-item-details.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
	declarations: [
		AppComponent,
		NavigationComponent,
		HomeComponent,
		LandingPageComponent,
		AdsBuySellComponent,
		PostAdvertisementComponent,
		SingleItemAdvComponent,
		MyItemsComponent,
		EditAdvertisementComponent,
		SingleItemDetailsComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		AuthModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
