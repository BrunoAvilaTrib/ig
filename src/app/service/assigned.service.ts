import { Injectable } from '@angular/core';
import { ApiService } from '@app/config/api.service';

@Injectable({
  providedIn: 'root'
})
export class AssignedService {

  constructor(
    private apiService: ApiService
  ) { }

  loadAllChatsReassigned(employPk : number, onSuccess: (result: any) => void) {
    return this.apiService.post('/assigned/v1/loadAllReassignedChats', {
      employPk: employPk
    }, onSuccess);
  }

  loadChatsReassignedEmploy(employPK : number, onSuccess: (result: any) => void) {
    return this.apiService.post('/assigned/v1/loadChatsReassignedEmploy', {
      employPK: employPK
    }, onSuccess);
  }

}
