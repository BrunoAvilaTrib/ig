import { DataSource } from '@angular/cdk/table';
import { Injectable } from '@angular/core';
import { ApiService } from '@app/config/api.service';
import { ReqAdministrador } from '@app/request/req-administrardor';
import { ReqDeleteSupervisor } from '@app/request/req-delete-supervisor';

@Injectable({
  providedIn: 'root'
})
export class EmployService {

  constructor(
    private apiService: ApiService
  ) { }
  
  loadAllEmploy(onSuccess: (result: any) => void){
    return this.apiService.post('/employ/v1/loadAllEmploy', {}, onSuccess);
  }

  deleteOfficerEmploy(employPk: number, onSuccess: (result: any) => void){
    return this.apiService.post('/employ/v1/defuseOfficerEmploy', {
      employPk: employPk
      
    }, onSuccess);
  }

  deleteSupervisorEmploy(toDeleteSupervisor :  ReqDeleteSupervisor ,onSuccess: (result: any) => void){
    return this.apiService.post('/employ/v1/defuseSupervisorEmploy', toDeleteSupervisor , onSuccess);
  }

  updateAdminPassword(password: string, onSuccess: (result: any) => void){
    return this.apiService.post('/employ/v1/updateAdminPassword', {
      "password": password
    }, onSuccess);
  }

  loadEmploy(employPk: number, onSuccess: (result: any) => void){
    return this.apiService.post('/employ/v1/loadEmploy', {
      "employPk": employPk
    }, onSuccess);
  }

  loadEmployByToken(onSuccess: (result: any) => void) {
    return this.apiService.post('/employ/v1/loadRoleEmploy', {}, onSuccess);
  }
}
