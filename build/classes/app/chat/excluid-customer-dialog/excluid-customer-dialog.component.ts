import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-excluid-customer-dialog',
  templateUrl: './excluid-customer-dialog.component.html',
  styleUrls: ['./excluid-customer-dialog.component.scss']
})
export class ExcluidCustomerDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ExcluidCustomerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
