import { Injectable } from '@angular/core';
import { ApiService } from '@app/config/api.service';
import { ReqSupervisor } from '@app/request/req-supervisor';
import { ReqUpdateSupervisor } from '@app/request/req-update-supervisor';

@Injectable({
  providedIn: 'root'
})
export class SupervisorService {

  constructor(
    private apiService: ApiService
  ) { }

  loadAllSupervisor(onSuccess: (result: any) => void){
    return this.apiService.post('/employ/v1/loadlAllSupervisorEmploy', {
    }, onSuccess);
  }

  addSupervisor(employ: ReqSupervisor, onSuccess: (result: any) => void){
    return this.apiService.post('/employ/v1/addSupervisorEmploy', employ, onSuccess);
  }

  updateSupervisor(employ: ReqUpdateSupervisor, onSuccess: (result: any) => void){
    return this.apiService.post('/employ/v1/updateSupervisorEmploy', employ, onSuccess);
  }

  findSupervisorById(employPk: number, onSuccess: (result: any) => void){
    return this.apiService.post('/employ/v1/loadEmploy', {
      employPk: +employPk
    }, onSuccess);
  }

}
