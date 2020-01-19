import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth-service';
import { map } from 'rxjs/operators';

const baseUrl = 'https://buy-and-sell-7485e.firebaseio.com/ads/';

@Injectable({
	providedIn: 'root'
})
export class BuySellService {
	constructor(private http: HttpClient, private authServ: AuthService) {}

	getAllAds() {
		let token = this.authServ.getToken();
		if (token) {
			return this.http.get(baseUrl + '.json?auth=' + token).pipe(
				map((resp) => {
					const data = [];
					for (const key in resp) {
						if (resp.hasOwnProperty(key)) {
							data.push({ ...resp[key], key });
						}
					}
					return data;
				})
			);
		}
	}
}
