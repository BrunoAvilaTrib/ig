import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '@app/config/api.service';
import { AuthService } from '@app/auth/auth.service';
import { SharedService } from '@app/config/shared.service';
import { SharedVariable } from '@app/config/shared';
import { User } from '@app/model/user.class';
import { Observable } from 'rxjs';

@Component({
  selector: 'dashboard-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  protected name: string;
  protected arename: Array<string>;
  private role: any;
  private navs: Array<Object>;
  navs2=[];
  protected isLogged: boolean;
  private ownName: string;
  private ownRole: string;
  private ownSex: string;

  constructor(
    private authService: AuthService,
    private apiService: ApiService,
    private sharedService: SharedService,
  ) { 
    this.isLogged = this.authService.isLoggedIn;
    console.log("HeaderComponent: " + this.isLogged);
    this.loadData();
  }

  loadData(){
    if(this.isLogged){
      const user: User = this.sharedService.get(SharedVariable.USER);
      this.name = user.getName();
      this.role = user.getRole();
      this.arename = user.getArea() ;
      this.loadNavigations(this.name);
      this.loadDataEmploy();
    }
  }

  ngOnInit() {
    this.authService.subscribe((isLogged : boolean) => { 
      this.isLogged = isLogged;
      this.loadData();
    } );
  }

  logout() {
    this.registerTrace(this.name);
    this.sharedService.set(SharedVariable.USER, undefined);
    this.authService.logout();
  }

  loadNavigations(name: string) {

    if (this.navs == null) {
      this.apiService.post('/header/v1/loadHeader', {
        login: name
      }, (result: any) => {
        const navigations = result.data;
        this.navs = navigations;
        result.data.forEach(element => {
          this.navs2.push({
            ...element,
            mouseOverActived :false
          })
        });
      });
    }
  }

  registerTrace(username: string) {
    this.apiService.post('/employTraze/v1/addEmployTraze', {
      operation: 'finalizó sesión'
    }, (result: any) => {
      console.log('Traza de acceso: "Usuario: ' + username + ' ha cerrado sesión"');
    });
  }

  loadDataEmploy(){
    this.apiService.post('/employ/v1/loadRoleEmploy', {
    }, (result: any) => {
      let ownData = result.data;
      this.ownName = ownData.name+' ,'+ownData.apePat+' '+ownData.apeMat;
      this.ownSex = ownData.sex;
      switch(ownData.roleFk){
        case 1 : this.ownRole = "Admin" ;break;
        case 2 : this.ownRole = "Supervisor";break;
        case 3 : this.ownRole = "Operador" ;break;
      }
    });
  }

  mouseOverConfig(navSelected:any){
    this.navs2.forEach(element =>{
      if(element.path == navSelected.path) element.mouseOverActived = true;
    })
  }
  
  mouseLeaveConfig(navSelected:any){
    this.navs2.forEach(element =>{
      if(element.path == navSelected.path) element.mouseOverActived = false;
    })
  }
}