import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthGuard } from './auth/auth.guard';
import { PostAdvertisementComponent } from './ads/post-advertisement/post-advertisement.component';
import { EditAdvertisementComponent } from './ads/edit-advertisement/edit-advertisement.component';
import { SingleItemDetailsComponent } from './ads/single-item-details/single-item-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FilteredComponent } from './ads/filtered/filtered.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', component: LandingPageComponent },
	{ path: 'home', component: HomeComponent, canActivate: [ AuthGuard ] },
	{ path: 'post', component: PostAdvertisementComponent, canActivate: [ AuthGuard ] },
	{
		path: 'details',
		component: SingleItemDetailsComponent,
		canActivate: [ AuthGuard ]
	},
	{
		path: 'edit/:id',
		component: EditAdvertisementComponent,
		canActivate: [ AuthGuard ]
	},
	{ path: 'filtered', component: FilteredComponent, canActivate: [ AuthGuard ] },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: '**', component: NotFoundComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ],
	providers: [ AuthGuard ]
})
export class AppRoutingModule {
	constructor() {}
}
