import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth/auth-service';

@NgModule({
	declarations: [
		AppComponent,
		NavigationComponent,
		HomeComponent,
		RegisterComponent,
		LoginComponent
	],
	imports: [ BrowserModule, AppRoutingModule, FormsModule, HttpClientModule ],
	providers: [ AuthService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
