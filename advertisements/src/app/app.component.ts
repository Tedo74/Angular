import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
// import { initializeApp } from 'firebase/app';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
	title = 'advertisements';

	ngOnInit() {
		firebase.initializeApp({
			apiKey: 'AIzaSyBU5GIx764tFNt1LnpEY-H8xh90F3-WpsU',
			authDomain: 'buy-and-sell-7485e'
		});
	}
}
