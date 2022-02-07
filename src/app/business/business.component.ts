import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '@app/config/api.service';
import { LayermsgService } from '@app/config/layermsg.service';
import { Router } from '@angular/router';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { SharedService } from '@app/config/shared.service';
import { BusinessService } from '@app/service/business.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {

  displayedColumns: string[] = ['name', 'countAssigned', 'state', 'date','email', 'edite', 'delete'];
  dataSource;
  businessData: any[];
  lengthData;

  constructor(
    private layerMsgService: LayermsgService,
    private businessService: BusinessService,
    private router: Router,
    private sharedService: SharedService,
  ) {
  }
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.readDataBusiness();
  }

  readDataBusiness() {
    this.businessService.loadAllBusiness((result: any) => {
      this.businessData = result.data;
      this.dataSource = new MatTableDataSource(this.businessData);
      this.dataSource.sort = this.sort;
      console.log(this.dataSource);
      this.dataSource.paginator = this.paginator;
      this.lengthData = this.businessData.length;
    })
  }
  applyFilter(filterValue: string) {

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  OrderTo(itemSelected) {
    let itemToFilter = itemSelected.options[itemSelected.selectedIndex].value;
    this.dataSource.data = this.dataSource.data.sort(function (c1: any, c2: any) {
      if (c1[itemToFilter] > c2[itemToFilter]) return 1;
      else if (c1[itemToFilter] === c2[itemToFilter]) return 0;
      else return -1;
    });
  }
}
