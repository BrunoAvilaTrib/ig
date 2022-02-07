import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { SharedService } from '@app/config/shared.service';
import { SharedVariable } from '@app/config/shared';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	isLoggedIn: boolean;
	isLoggedObserver: Subject<boolean>;
	redirectUrl = '';

	constructor(
		private service: SharedService,
		private router: Router
	) {
		this.isLoggedIn = !!this.service.get(SharedVariable.USER);
		this.isLoggedObserver = new Subject<boolean>();
		this.isLoggedObserver.next(this.isLoggedIn);
	}

	login(): Observable<boolean> {
		return of(true).pipe(
			delay(1000),
			tap(val => {
				this.isLoggedIn = true;
				this.isLoggedObserver.next(this.isLoggedIn);
			})
		);
	}

	logout(): void {
		this.service.remove(SharedVariable.USER);
		this.isLoggedIn = false;
		this.isLoggedObserver.next(this.isLoggedIn);
		this.router.navigate(['login']);
	}

	subscribe(callback: (isLogged: boolean) => void): void {
		this.isLoggedObserver.subscribe(callback);
	}

}
