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
	allAds: BuySell[];
	selectedItem: BuySell;

	constructor(private http: HttpClient, private authServ: AuthService) {}

	getAllAds() {
		let token = this.authServ.getToken();
		if (token) {
			this.http
				.get<BuySell[]>(baseUrl + '.json?auth=' + token)
				.pipe(
					map((resp) => {
						const data = [];
						for (const id in resp) {
							if (resp.hasOwnProperty(id)) {
								data.push({ ...resp[id], id });
							}
						}
						return data;
					})
				)
				.subscribe((data) => (this.allAds = data));
		}
	}

	post(data: BuySell) {
		let token = this.authServ.getToken();
		let userId = this.authServ.advUserId();
		this.http
			.post(baseUrl + '.json?auth=' + token, { ...data, userId })
			.subscribe((d) => {
				this.getAllAds();
			});
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
		let category: string = data.category;
		let dataNew = { name, image, details, phone, userId, username, price, category };
		let body = { [id]: dataNew };

		return this.http.patch(baseUrl + '.json?auth=' + token, body);
	}

	deleteItem(id: string) {
		let token = this.authServ.getToken();
		this.http.delete(baseUrl + id + '/.json?auth=' + token).subscribe((d) => {
			console.log('successful deleted ', d);
		});
		this.refreshAfterDeleteItem(id);
	}

	refreshAfterDeleteItem(id: string) {
		this.allAds = this.allAds.filter((i) => {
			return i.id !== id;
		});
	}
}
