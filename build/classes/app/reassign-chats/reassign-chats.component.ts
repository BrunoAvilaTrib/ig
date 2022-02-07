import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

import { AssignedService } from '@app/service/assigned.service';
import { EmployService } from '@app/service/employ.service';
import { AssignChatsModalComponent } from '@app/reassign-chats/assign-chats-modal/assign-chats-modal.component';

@Component({
  selector: 'app-reassign-chats',
  templateUrl: './reassign-chats.component.html',
  styleUrls: ['./reassign-chats.component.scss']
})
export class ReassignChatsComponent implements OnInit {

  displayedColumns: string[] = ['operator', 'chats', 'assignChat', 'date','area'];
  dataSource;
  employLoginData;
  employChatData;
  lengthData;

  constructor(
    private assignedService: AssignedService,
    private employService: EmployService,
    private dialog: MatDialog
  ) { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.loadEmployLoginData();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadEmployLoginData(){
    this.employService.loadEmployByToken((result: any) => {
      this.employLoginData =  result.data;
      this.readDataReassingChat(this.employLoginData.employPk);
    });
  }

  readDataReassingChat(employPk: number) {
    this.assignedService.loadAllChatsReassigned(employPk, (result: any) => {
      this.employChatData = result.data;
      this.dataSource = new MatTableDataSource(this.employChatData);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.lengthData=this.employChatData.length;
    });
  }

  openAssignChatsModal(employPK: number) {
    let dialogRef = this.dialog.open(AssignChatsModalComponent, {
      data: { employPK: employPK },
      height: '100%',
      position: {top: '0', right: '0'},
      width: '60%'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.readDataReassingChat(this.employLoginData.employPk);
    });
  }

}
