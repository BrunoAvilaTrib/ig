import { Injectable } from '@angular/core';
import { ApiService } from '@app/config/api.service';
import { ReqOfficer } from '@app/request/req-officer';
import { ReqUpdateOfficer } from '@app/request/req-update-officer';
import { ReqExcluid } from '@app/request/req-excluid';
import { Subject } from 'rxjs';
import { ReqAddOfficer } from '@app/request/req-add-officer';

@Injectable({
  providedIn: 'root'
})
export class OfficerService {
  
	excluids = new Subject<ReqExcluid[]>();
	excluidsStatic: ReqExcluid[] = [];

  constructor(
    private apiService: ApiService
  ) { }

  addOfficer(officer: ReqAddOfficer, onSuccess: (result: any) => void){
    return this.apiService.post('/employ/v1/addOfficerEmploy', officer, onSuccess);
  }

  updateOfficer(officer: ReqUpdateOfficer, onSuccess: (result: any) => void){
    return this.apiService.post('/employ/v1/updateOfficerEmploy', officer, onSuccess);
  }

  findOfficerById(employPk: number, onSuccess: (result: any) => void){
    return this.apiService.post('/employ/v1/loadEmploy', {
      employPk: employPk
    }, onSuccess);
  }
}
