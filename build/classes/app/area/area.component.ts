import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { AreaService } from '@app/service/area.service';
import { LayermsgService } from '@app/config/layermsg.service';
import { Router } from '@angular/router';
import { EnumStatus } from '@app/enumeration/enum-status.enum';
import Swal from 'sweetalert2';

@Component({
  selector: 'ig-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})

export class AreaComponent implements OnInit {

  displayedColumns: string[] = ['nameArea', 'countAssigned', 'support', 'date','nameBusiness', 'edite','delete'];
  dataSource;
  areaData;
  lengthData;
  
  constructor(
    private layerMsgService : LayermsgService, 
    private areaService: AreaService,
    private router : Router
  ) {}

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {

    this.readDataArea();
  }

  applyFilter(filterValue: string) {

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  readDataArea() {

    this.areaService.loadAllAreas((result: any) => {

      this.areaData = result.data;
      this.dataSource = new MatTableDataSource(this.areaData);
      this.dataSource.sort = this.sort;
      console.log(this.dataSource)
      this.dataSource.paginator = this.paginator;
      this.lengthData=this.areaData.length;
    })
  }

  delete(e, areaPk: number){

    e.preventDefault();

    Swal.fire({
      imageUrl: '../../assets/img/alert.png',
      title: '¿Desea eliminar este registro?',
      // buttonsStyling: false,
      showCancelButton: true,
      confirmButtonText: ' <div style="margin: 0;padding: 0; display: flex; justify-content: center; align-items: center;"><span>Aceptar</span></div>',
      confirmButtonColor :"#2e4558" ,
      cancelButtonText: '<div style="margin: 0;color:#2e4558; padding: 0; display: flex; justify-content: center; align-items: center;"><span>Cancelar</span></div>',
      cancelButtonColor :"#fff"
    }).then((result) => {
      if (result.value) {
    
        this.areaService.deleteArea(areaPk, (result: any) => {

          for(let i = 0; i < this.areaData.length ; i++){
    
            if(this.areaData[i].areaPk == areaPk){
  
              this.areaData.splice(i, 1);
              this.dataSource = new MatTableDataSource(this.areaData);
              this.dataSource.sort = this.sort;
              this.dataSource.paginator = this.paginator;
              break;
            }
          }
          this.layerMsgService.showMessageOk(EnumStatus.DELETE_OK.code, () => {});
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    })
  }
  OrderTo(itemSelected){
    let itemToFilter =itemSelected.options[itemSelected.selectedIndex].value;
    this.dataSource.data=this.dataSource.data.sort(function(c1:any,c2:any){
      if(c1[itemToFilter]>c2[itemToFilter]) return 1;
      else if(c1[itemToFilter]===c2[itemToFilter]) return 0;
      else return -1;
    });
  }
}