import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LayermsgService } from '@app/config/layermsg.service';
import { Router } from '@angular/router';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { FormControl } from '@angular/forms';
import { ApiService } from '@app/config/api.service';
import Swal from 'sweetalert2';
import { EnumStatus } from '@app/enumeration/enum-status.enum';
registerLocaleData(localEs, 'es');

@Component({
  selector: 'app-excluid-employee',
  templateUrl: './excluid-employee.component.html',
  styleUrls: ['./excluid-employee.component.scss']
})
export class ExcluidEmployeeComponent implements OnInit {
  displayedColumns: string[] = ['nameArea', 'countAssigned', 'support', 'date', 'edite', 'delete'];
  dataSource;
  lengthData;
  selectEmployee;
  excluidEmployees
  date = new FormControl(new Date());

  constructor(
    private layerMsgService: LayermsgService,
    // private areaService: AreaService,
    private apiService: ApiService,
    private router: Router
  ) { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.loadAllExcluidEmployees();
  }

  applyFilter(filterValue: string) {

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  loadAllExcluidEmployees() {
    this.apiService.post('/excluidEmploy/v1/loadAllExcluidEmploy', {}, (result: any) => {
      this.excluidEmployees = result.data;
      this.dataSource = new MatTableDataSource(this.excluidEmployees);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.lengthData = this.excluidEmployees.length;
      console.log(this.excluidEmployees);
    }, (error) => {
      console.log(error);
    });
  }

  OrderTo(selectEmployee) {
    console.log(selectEmployee);
  }

  delete(e, excluidEmployPK: number){
    e.preventDefault();
    Swal.fire({
    imageUrl: '../../assets/img/alert.png',
    title: '¿Desea eliminar este registro?',
    showCancelButton: true,
    confirmButtonText: ' <div style="margin: 0;padding: 0; display: flex; justify-content: center; align-items: center;"><span>Aceptar</span></div>',
    confirmButtonColor :"#2e4558" ,
    cancelButtonText: '<div style="margin: 0;color:#2e4558; padding: 0; display: flex; justify-content: center; align-items: center;"><span>Cancelar</span></div>',
    cancelButtonColor :"#fff"
  }).then((result) => {
      if (result.value) {
    
        e.preventDefault();
        this.apiService.post('/excluidEmploy/v1/defuseExcluidEmploy', {
          excluidEmployPk : excluidEmployPK
        }, (result: any) => {

          this.loadAllExcluidEmployees();
          this.layerMsgService.showMessageOk(EnumStatus.DELETE_OK.code, () => {});          
        });

      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    })
  }
}
