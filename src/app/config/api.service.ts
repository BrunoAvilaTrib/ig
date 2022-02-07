import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

import { SharedService } from '@app/config/shared.service';
import { User } from '@app/model/user.class';
import { GlobalVariable } from '@app/config/global';
import { SharedVariable } from '@app/config/shared';
import { LayermsgService } from './layermsg.service';
import { EnumStatusError } from '@app/enumeration/enum-status-error.enum';
import { AuthService } from '@app/auth/auth.service';
import { HandlerErrorService } from '@app/handler/handler-error.service';
import { ReqExcluid } from '@app/request/req-excluid';


@Injectable()
// tslint:disable: indent
export class ApiService {

	excluids = new Subject<ReqExcluid>();
	excluidsStatic: ReqExcluid[] = [];

	constructor(private http: HttpClient,
				private sharedService: SharedService,
				private layerMsgService: LayermsgService,
				private handlerError: HandlerErrorService) { }		

	endpoint(endpoint: any) {
		return GlobalVariable.BASE_API_URL + endpoint;
	}

	post(endpoint: any, data: any
		, onSuccess: (result: any) => void
		, onError: (error: any) => void = (error: any) => {
			this.layerMsgService.showMessageError(error);
		} ) {

		var headers = {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		}
		const user: User = this.sharedService.get(SharedVariable.USER);
		const sessionId = user ? user.getSessionId() : undefined;
		if (user) {
			headers['Authorization'] = sessionId;
		}

		const requestOptions = { headers: new HttpHeaders(headers)};
		return this.http.post(this.endpoint(endpoint), JSON.stringify(data), requestOptions).subscribe(onSuccess, (error: any) => {
			console.log(error);
			this.handlerError.handler(error, () => {
				onError(error);
			});
		});
	}

	get(endpoint: any, data: any) {
		var headers = {
			'Access-Control-Allow-Origin': '*'
		}
		const user: User = this.sharedService.get(SharedVariable.USER);
		const sessionId = user ? user.getSessionId() : undefined;
		if (user) {
			headers['Authorization'] = sessionId;
		}

		const requestOptions = { headers: new HttpHeaders(headers), params: data};
		return this.http.get(this.endpoint(endpoint), requestOptions);
	}

	urlGet(endpoint: string) {
		const user: User = this.sharedService.get(SharedVariable.USER);
		return this.endpoint(endpoint) + '?Authorization=' + user.getSessionId();
	}

	msgWithToken(msg: string) {
		const user: User = this.sharedService.get(SharedVariable.USER);
		return msg.replace(/\[TOKEN\]/g, 'Authorization=' + user.getSessionId());
	}
}
