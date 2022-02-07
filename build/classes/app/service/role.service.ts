import { Injectable } from '@angular/core';
import { Role } from '@app/model/role';
import { Subject, Observable, Subscriber, Subscription } from 'rxjs';
import { EnumRole } from '@app/enumeration/enum-role.enum';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private _subject : Subject<Array<Role>> = new Subject<Array<Role>>();
  private roles : Array<Role>;

  constructor() { 
    this.roles = new Array<Role>(EnumRole.SUPERVISOR.toRole(), EnumRole.OFFICER.toRole());
  }

  subscribe(callback : (data : Array<Role>) => void) : Subscription {
    let listener = this._subject.subscribe(callback);
    return listener;
  }

  loadRoles(){
    this._subject.next(this.roles);
  }

  findRoleById(code: number) : Role{
    for(let rol of this.roles){
      if(rol.value == code){
        return rol;
      }
    }
  }

}
