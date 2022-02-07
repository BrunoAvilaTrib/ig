import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { MatTableModule } from '@angular/material/table'
import { MatSortModule } from '@angular/material/sort';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule, MatFormFieldModule } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    FormsModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatExpansionModule,
  ],
  exports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    FormsModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatExpansionModule,
  ],
})
export class MaterialModule { }
