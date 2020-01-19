import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth-service';
import { map } from 'rxjs/operators';
import { BuySell } from './buy-sell.model';

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
					for (const id in resp) {
						if (resp.hasOwnProperty(id)) {
							data.push({ ...resp[id], id });
						}
					}
					return data;
				})
			);
		}
	}

	post(data: BuySell) {
		let token = this.authServ.getToken();
		let userId = this.authServ.advUserId();
		return this.http.post(baseUrl + '.json?auth=' + token, { ...data, userId });
	}

	getById(id: string) {
		let token = this.authServ.getToken();
		return this.http.get(baseUrl + id + '/.json?auth=' + token).pipe(
			map((resp) => {
				return { id: id, ...resp };
			})
		);
	}

	editItem(data: BuySell) {
		let token = this.authServ.getToken();
		let id: string = data.id;
		let name: string = data.name;
		let image: string = data.image;
		let details: string = data.details;
		let phone: number = data.phone;
		let userId: string = data.userId;
		let username: string = data.username;
		let price: number = data.price;
		let dataNew = { name, image, details, phone, userId, username, price };
		let body = { [id]: dataNew };
		console.log(id);
		console.log(body);

		return this.http.patch(baseUrl + '.json?auth=' + token, body);
	}

	deleteItem(id: string) {
		let token = this.authServ.getToken();
		return this.http.delete(baseUrl + id + '/.json?auth=' + token);
	}
}
