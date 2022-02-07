import { Component, OnInit, ViewChild } from '@angular/core';
import { LayermsgService } from '@app/config/layermsg.service';
import { Router } from '@angular/router';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { ExcluidCustomerService } from '@app/service/excluid-customer.service';
import Swal from 'sweetalert2';
import { EnumStatus } from '@app/enumeration/enum-status.enum';

@Component({
  selector: 'app-excluid-customer',
  templateUrl: './excluid-customer.component.html',
  styleUrls: ['./excluid-customer.component.scss']
})
export class ExcluidCustomerComponent implements OnInit {

  displayedColumns: string[] = ['nameOper', 'phoneCust', 'reason', 'date', 'nameArea', 'defuse'];
  dataSource;
  excluidCustData;
  lengthData;

  constructor(
    private layerMsgService: LayermsgService,
    private excluidCustomerService: ExcluidCustomerService,
    private router: Router
  ) { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {

    this.loadAllExluidCust();
  }
  loadAllExluidCust() {
    this.excluidCustomerService.loadAllExluidCustomer((result: any) => {

      this.excluidCustData = result.data;
      this.dataSource = new MatTableDataSource(this.excluidCustData);
      this.dataSource.sort = this.sort;
      console.log(this.dataSource)
      this.dataSource.paginator = this.paginator;
      this.lengthData = this.excluidCustData.length;
    })
  }

  delete(e, excluidCustPk: number) {

    e.preventDefault();

    Swal.fire({
      imageUrl: '../../assets/img/alert.png',
      title: '¿Desea eliminar este registro?',
      // buttonsStyling: false,
      showCancelButton: true,
      confirmButtonText: ' <div style="margin: 0;padding: 0; display: flex; justify-content: center; align-items: center;"><span>Aceptar</span></div>',
      confirmButtonColor: "#2e4558",
      cancelButtonText: '<div style="margin: 0;color:#2e4558; padding: 0; display: flex; justify-content: center; align-items: center;"><span>Cancelar</span></div>',
      cancelButtonColor: "#fff"
    }).then((result) => {
      if (result.value) {

        this.excluidCustomerService.defuseExcluidCustomer(excluidCustPk, (result: any) => {

          for (let i = 0; i < this.excluidCustData.length; i++) {

            if (this.excluidCustData[i].excluidCustPK == excluidCustPk) {

              this.excluidCustData.splice(i, 1);
              this.dataSource = new MatTableDataSource(this.excluidCustData);
              this.dataSource.sort = this.sort;
              this.dataSource.paginator = this.paginator;
              break;
            }
          }
          this.layerMsgService.showMessageOk(EnumStatus.DELETE_OK.code, () => { });
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    })
  }
  applyFilter(filterValue: string) {

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
