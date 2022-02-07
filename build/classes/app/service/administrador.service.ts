import { Injectable } from '@angular/core';
import { ApiService } from '@app/config/api.service';
import { ReqAdministrador } from '@app/request/req-administrardor';


@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor(
    private apiService: ApiService
  ) { }

  addAdministrador(employ: ReqAdministrador, onSuccess: (result: any) => void){
    return this.apiService.post('/employ/v1/addAdminEmploy', employ, onSuccess);
  }

  updateAdmin(employ: ReqAdministrador , onSuccess: (result : any) => void){
    return this.apiService.post('/employ/v1/updateAdminBusinessEmploy' , employ , onSuccess);


  }

  findAdminById(employPk: number, onSuccess: (result: any) => void){
    return this.apiService.post('/employ/v1/loadEmploy', {
      employPk: employPk
    }, onSuccess);
  }

}