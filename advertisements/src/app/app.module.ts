import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthModule } from './auth/auth.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdsModule } from './ads/ads.module';
import { UserModule } from './user/user.module';

@NgModule({
	declarations: [
		AppComponent,
		NavigationComponent,
		HomeComponent,
		LandingPageComponent,
		NotFoundComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		AuthModule,
		AdsModule,
		UserModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
