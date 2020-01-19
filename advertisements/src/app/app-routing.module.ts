import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
	{ path: '', component: LandingPageComponent },
	{ path: 'home', component: HomeComponent, canActivate: [ AuthGuard ] },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ],
	providers: [ AuthGuard ]
})
export class AppRoutingModule {
	constructor() {}
}
