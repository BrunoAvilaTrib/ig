import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource, MatDialogRef, MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import Swal from 'sweetalert2';

import { ApiService } from '@app/config/api.service';
import { AssignOptionDialogComponent } from '@app/reassign-chats/assign-option-dialog/assign-option-dialog.component';
import { AssignedService } from '@app/service/assigned.service';
import { EnumStatus } from '@app/enumeration/enum-status.enum';
import { LayermsgService } from '@app/config/layermsg.service';
import { DefuseChangeAssigned } from '@app/model/defuse-change-assigned';

export interface customerChatElement {
  chatPK: number,
  position: number,
  chatMobile: string,
  state: string,
  area: string,
  operator: string
}

@Component({
  selector: 'app-assign-chats-modal',
  templateUrl: './assign-chats-modal.component.html',
  styleUrls: ['./assign-chats-modal.component.scss']
})
export class AssignChatsModalComponent implements OnInit {

  displayedColumns: string[] = ['select', 'chatmobile', 'state', 'area', 'operator'];
  dataSource;
  customerChatData;
  lengthData;
  selection = new SelectionModel<customerChatElement>(true, []);
  employReassignPK: number;
  listDefuseChangeAssigned : Array<DefuseChangeAssigned> = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService,
    private assignedService: AssignedService,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<AssignChatsModalComponent>,
    private layerMsgService: LayermsgService
  ) { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.employReassignPK = this.data.employPK;
    this.loadAllchatsReassignedEmploy(this.employReassignPK);
  }

  applyFilter(filterValue: string) {

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadAllchatsReassignedEmploy(employPK: number) {
    this.assignedService.loadChatsReassignedEmploy(employPK , (result: any) => {
      this.customerChatData = result.data;
      this.dataSource = new MatTableDataSource(this.customerChatData);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.lengthData = this.customerChatData.length;
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: customerChatElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  openDialogAssign() {
    if(!this.selection.isEmpty()) {
      let dialogRef = this.dialog.open(AssignOptionDialogComponent, {
        data: this.selection.selected,
        width: '412px',
        height: '330px'
      });

      dialogRef.afterClosed().subscribe(result => {
        if (!result) {
          this.selection.clear();
          this.loadAllchatsReassignedEmploy(this.employReassignPK);
        }
      });
    }
    else {
      this.showEmptyErrorDialog();
    }
  }

  removeAssign() {
    if(!this.selection.isEmpty()) {
      this.prepareListChatsToReassign();
      this.apiService.post('/assigned/v1/listDefuseChangeAssignedChat', {
        listDefuseChangeAssignedChatRequest: this.listDefuseChangeAssigned
      }, (result: any) => {
          this.selection.clear();
          this.loadAllchatsReassignedEmploy(this.employReassignPK);
          this.layerMsgService.showMessageOk(EnumStatus.UPDATE_OK.code, () => { });
      });
    }
    else {
      this.showEmptyErrorDialog();
    }
  }

  prepareListChatsToReassign()  {
    let defuseChatsSelected = this.selection.selected;
    defuseChatsSelected.forEach(element => {
      let defuseChangeAssigned = new DefuseChangeAssigned(element.chatPK);
      this.listDefuseChangeAssigned.push(defuseChangeAssigned);
    });
  }

  showEmptyErrorDialog() {
    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: 'No ha seleccionado elementos',
      confirmButtonText: ' <div style="margin: 0;padding: 0; display: flex; justify-content: center; align-items: center;"><span>OK</span></div>',
      confirmButtonColor: "#2e4558"
    });
  }

}
