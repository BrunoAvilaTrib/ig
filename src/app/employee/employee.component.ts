
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { ApiService } from '@app/config/api.service';
import { EmployService } from '@app/service/employ.service';
import { LayermsgService } from '@app/config/layermsg.service';
import { Router } from '@angular/router';
import { EnumStatus } from '@app/enumeration/enum-status.enum';
import { EnumRole } from '@app/enumeration/enum-role.enum';
import Swal from 'sweetalert2';
import { SharedService } from '@app/config/shared.service';
import { User } from '@app/model/user.class';
import { SharedVariable } from '@app/config/shared';

import { Employee } from '@app/model/employee'; 
import * as $ from 'jquery';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  displayedColumns: string[];
  dataSource;
  userData;
  lengthData;
  role;
  datos;
  emp;
  titleHeader: String = "";

  constructor(
    private sharedService: SharedService,
    private layerMsgService: LayermsgService,
    private employService: EmployService,
    private router: Router
  ) {
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {

    this.showTitle();
    this.displayedColumns = this.role == 4 ? ['name', 'email', 'role', 'date', 'edit']: ['name', 'email', 'role', 'area', 'date', 'edit','delete'];
    this.readDataUser();
  }

  showTitle(){

    let value = localStorage.getItem(SharedVariable.USER);
    let userSession = JSON.parse(value);

    this.role = userSession.role ? userSession.role.rolePk : undefined;

    switch (this.role) {
      case EnumRole.ADMINISTRATOR.toRole().value:
        this.titleHeader ="Mantenimiento de Supervisores y Funcionarios";
        break;
      case EnumRole.SUPERVISOR.toRole().value:
        this.titleHeader ="Supervisor";
        break;
      case EnumRole.GLOBAL.toRole().value:
        this.titleHeader ="Mantenimiento de Administrador Empresarial";
        break;
      default:
        this.titleHeader ="XX";
        break;
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  
  delete(e , employPk: number, nameRole : string){

    e.preventDefault();

    if(EnumRole.SUPERVISOR.toRole().viewValue ==  nameRole){
        
      const datos = this.dataSource.data.filter(function (dataSource: {
          nameEmploy : string
          nameRole : string
      }) : boolean {
        return dataSource.nameRole == 'SUPERVISOR'
      })
   
        var options = {};
        $.map(datos,
            function(o) {
                options[o.employPk] = o.nameEnploy;
            }); 
        
      Swal.fire({
        title: 'Desactivar Supervisor' ,
        text: 'Seleccione un nuevo supervisor a quien se le aginaran los empleados del desactivado',
        input: 'select',
      inputOptions: options,
        inputPlaceholder: 'Selecccione nuevo Supervisor',
        showCancelButton: true,
        confirmButtonText: ' <div style="margin: 0;padding: 0; display: flex; justify-content: center; align-items: center;"><span>Aceptar</span></div>',
        confirmButtonColor :"#2e4558" ,
        cancelButtonText: '<div style="margin: 0;color:#2e4558; padding: 0; display: flex; justify-content: center; align-items: center;"><span>Cancelar</span></div>',
        cancelButtonColor :"#fff"

  }).then((result) => {

      
      if (result.value == employPk) {
       Swal.fire(`El supervisor a asignar no puede ser el mismo`)
      } 

      else{
       const emp = {
        employPK : employPk,
        superEmployPK:  result.value 
      }

        this.employService.deleteSupervisorEmploy( emp,(result: any) => {

          for(let i = 0; i < this.userData.length ; i++){
    
            if(this.userData[i].employPk == employPk){
  
              this.userData.splice(i, 1);
              this.dataSource = new MatTableDataSource(this.userData);
              this.dataSource.sort = this.sort;
              this.dataSource.paginator = this.paginator;
              break;
            }
          }
          this.layerMsgService.showMessageOk(EnumStatus.DELETE_OK.code, () => {});
        }); 
      }
    })


    }else {
      console.log(nameRole);
      // alert y elimina funcionario
    Swal.fire({
    imageUrl: '../../assets/img/alert.png',
    title: '¿Desea desactivar este registro?',
    
    showCancelButton: true,
    confirmButtonText: ' <div style="margin: 0;padding: 0; display: flex; justify-content: center; align-items: center;"><span>Aceptar</span></div>',
    confirmButtonColor :"#2e4558" ,
    cancelButtonText: '<div style="margin: 0;color:#2e4558; padding: 0; display: flex; justify-content: center; align-items: center;"><span>Cancelar</span></div>',
    cancelButtonColor :"#fff"
  }).then((result) => {

      if (result.value) {
    
        this.employService.deleteOfficerEmploy(employPk, (result: any) => {

          for(let i = 0; i < this.userData.length ; i++){
    
            if(this.userData[i].employPk == employPk){
  
              this.userData.splice(i, 1);
              this.dataSource = new MatTableDataSource(this.userData);
              this.dataSource.sort = this.sort;
              this.dataSource.paginator = this.paginator;
              break;
            }
          }
          this.layerMsgService.showMessageOk(EnumStatus.DELETE_OK.code, () => {});
        });
      }
    })    
    }
  }

  

  readDataUser() {

    this.employService.loadAllEmploy((result: any) => {

      this.userData = result.data;
      this.dataSource = new MatTableDataSource(this.userData);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.lengthData=this.userData.length;
    })
  }

  OrderTo(itemSelected){
    let itemToFilter =itemSelected.options[itemSelected.selectedIndex].value;
    this.dataSource.data=this.dataSource.data.sort(function(c1:any,c2:any){
      if(c1[itemToFilter].toLowerCase()>c2[itemToFilter].toLowerCase()) return 1;
      else if(c1[itemToFilter].toLowerCase()===c2[itemToFilter].toLowerCase()) return 0;
      else return -1;
    });
  }
}
