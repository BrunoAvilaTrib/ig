import { Injectable, EventEmitter } from '@angular/core';

import { State } from '@app/model/state.class';
import { GlobalVariable } from './global';
import { User } from '@app/model/user.class';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private onChange: EventEmitter<State> = new EventEmitter();
  private state: State = new State();

  constructor() {}

  set(key: string, value: any) {

    if(GlobalVariable.PERSIST_SESSION){

      localStorage.setItem(key, JSON.stringify(value));
    }
    
    this.state[key] = value;
    this.onChange.emit(this.state);
  }

  get(key: string) {

    var value: any = localStorage.getItem(key);

    if(this.state[key]){

      value = this.state[key];
    }else if(GlobalVariable.PERSIST_SESSION && value){

      var user = JSON.parse(value);
      value = new User(user.name, user.sessionId, user.roles , user.area);
    }

    return value;
  }

  remove(key: string){

    localStorage.removeItem(key);
  }

  subscribe(component: any, callback: (component: any, data: any) => void) {

    return this.onChange.subscribe((data: any) => {
      callback(component, data);
    });
  }

}
