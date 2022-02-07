import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {  MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { ApiService } from '@app/config/api.service';
import { EnumStatus } from '@app/enumeration/enum-status.enum';
import { LayermsgService } from '@app/config/layermsg.service';
import { ChangeAssigned } from '@app/model/change-assigned';

@Component({
  selector: 'app-assign-option-dialog',
  templateUrl: './assign-option-dialog.component.html',
  styleUrls: ['./assign-option-dialog.component.scss']
})
export class AssignOptionDialogComponent implements OnInit {

  formAssignChats: FormGroup;
  supervisor: any;
  employees: any;
  listChatsReassign: Array<ChangeAssigned> = [];
  ChatsSelected: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private layerMsgService: LayermsgService,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private dialogRef: MatDialogRef<AssignOptionDialogComponent>
  ) { }

  ngOnInit() {
    this.ChatsSelected = this.data;
    this.loadSupervisorData();
    this.formAssignChats = this.formBuilder.group({
      employFk:['', Validators.required]
    });
  }

  confirmReassignChats() {
    this.prepareListChatsToReassign();
    this.apiService.post('/assigned/v1/listChangeAssignedChat', {
      changeAssignedChatRequest: this.listChatsReassign
    }, (result: any) => {
      this.cancelChatsAssign();
      this.layerMsgService.showMessageOk(EnumStatus.UPDATE_OK.code, () => { });
    });
  }

  loadSupervisorData(){
    this.apiService.post('/employ/v1/loadRoleEmploy', {
    }, (result: any) => {
      this.supervisor = result.data;
      this.loadAllEmployBySupervisor();
    });
  }

  loadAllEmployBySupervisor(){
    console.log(this.supervisor.employPk);
    this.apiService.post('/employ/v1/loadAllOfficerBySupervisor', {
      employPk : this.supervisor.employPk
    }, (result: any) => {
      this.employees = result.data;
    });
  }

  get formGroup() {
    return this.formAssignChats.controls
  }

  onFormSubmit() {
    if (this.formAssignChats.invalid) {
      return;
    } else {
      this.confirmReassignChats();
    }
  }

  cancelChatsAssign(): void {
    this.dialogRef.close();
  }

  prepareListChatsToReassign()  {
    let chatAssignForm = this.formAssignChats.value;
    this.ChatsSelected.forEach(element => {
      let objChangeAssigned = new ChangeAssigned
      (
        element.chatPK,
        chatAssignForm.employFk
      );
      this.listChatsReassign.push(objChangeAssigned);
    }); 
  }

}