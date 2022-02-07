import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { ApiService } from './config/api.service';
import { AuthService } from './auth/auth.service';
import { ChatComponent } from './chat/chat.component';
import { ConfigService } from './config/config.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { ItemComponent } from './chat/item/item.component';
import { MessageComponent } from './chat/message/message.component';
import { SafeHTMLPipe } from './safe-html.pipe';
import { SearchComponent } from './chat/search/search.component';
import { SettingsComponent } from './settings/settings.component';
import { TraceComponent } from './trace/trace.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/assets/material/material.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AreaComponent } from './area/area.component';
import { AreaAddComponent } from './area/area-add/area-add.component';
import { AreaUpdateComponent } from './area/area-update/area-update.component';
import { LayermsgComponent } from './dashboard/layermsg/layermsg.component';
import { MatRadioModule } from '@angular/material/radio';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatPaginatorModule,
  MatPaginatorIntl,
  MatDatepickerModule,
  MatNativeDateModule,
  MAT_DATE_LOCALE,
  NativeDateModule,
  MAT_DATE_FORMATS,
  DateAdapter,
  _MatDatepickerContentMixinBase
} from '@angular/material';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import { EmployeeAddModalComponent } from './employee/employee-add-modal/employee-add-modal.component';
import { EmployeeUpdateComponent } from './employee/employee-update/employee-update.component';
import { AdminUpdateComponent } from './employee/admin-update/admin-update.component';
import { PaginatorSpanish } from './utils/paginator-spanish';
import { CapitalizarPipe } from './pipes/capitalizar.pipe';
import { BusinessComponent } from './business/business.component';
import { BusinessAddComponent } from './business/business-add/business-add.component';
import { BusinessUpdateComponent } from './business/business-update/business-update.component';
import { ExcluidEmployeeComponent } from './excluid-employee/excluid-employee.component';
import { ExcluidCustomerComponent } from './excluid-customer/excluid-customer.component';
import { formatDate } from '@angular/common';
import { isDataSource } from '@angular/cdk/collections';
import { ExcluidEmployeeAddComponent } from './excluid-employee/excluid-employee-add/excluid-employee-add.component';
import { ExcluidEmployeeUpdateComponent } from './excluid-employee/excluid-employee-update/excluid-employee-update.component';
import { DefuseSupervisorDialogComponent } from './employee/defuse-supervisor-dialog/defuse-supervisor-dialog.component';
import { ExcluidCustomerDialogComponent } from './chat/excluid-customer-dialog/excluid-customer-dialog.component';
import { IncidenceCustomerDialogComponent } from './chat/incidence-customer-dialog/incidence-customer-dialog.component';
import { ReassignChatsComponent } from './reassign-chats/reassign-chats.component';
import { AssignChatsModalComponent } from './reassign-chats/assign-chats-modal/assign-chats-modal.component';
import { AssignOptionDialogComponent } from './reassign-chats/assign-option-dialog/assign-option-dialog.component';
import { RecoverPasswordComponent } from './login/recover-password/recover-password.component';
import { SupervisorAddComponent } from './employee/supervisor-add/supervisor-add.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    LayermsgComponent,
    ChatComponent,
    ItemComponent,
    MessageComponent,
    HeaderComponent,
    SafeHTMLPipe,
    SearchComponent,
    SettingsComponent,
    TraceComponent,
    AreaComponent,
    AreaAddComponent,
    AreaUpdateComponent,
    EmployeeComponent,
    EmployeeAddComponent,
    SupervisorAddComponent,
    EmployeeAddModalComponent,
    EmployeeUpdateComponent,
    AdminUpdateComponent,
    CapitalizarPipe,
    BusinessComponent,
    BusinessAddComponent,
    BusinessUpdateComponent,
    ExcluidEmployeeComponent,
    ExcluidCustomerComponent,
    ExcluidEmployeeAddComponent,
    ExcluidEmployeeUpdateComponent,
    DefuseSupervisorDialogComponent,
    ExcluidCustomerDialogComponent,
    IncidenceCustomerDialogComponent,
    ReassignChatsComponent,
    AssignChatsModalComponent,
    AssignOptionDialogComponent,
    RecoverPasswordComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDialogModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    NativeDateModule,
    FormsModule
  ],
  entryComponents: [
    EmployeeAddModalComponent,
    EmployeeAddComponent,
    ExcluidCustomerDialogComponent,
    IncidenceCustomerDialogComponent,
    AssignChatsModalComponent,
    AssignOptionDialogComponent
  ],
  providers: [
    ApiService,
    ConfigService,
    AuthService,
    {
      provide: MatPaginatorIntl,
      useClass: PaginatorSpanish
    },
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'es'
    },
    // {provide: DateAdapter, useClass: Date},
    // {
    //   provide: MAT_DATE_FORMATS,
    //   useValue: {
    //     parse: {
    //       dateInput: 'LL',
    //     },
    //     display: {
    //       dateInput: 'LL',
    //       monthYearLabel: 'MMM YYYY',
    //       dateA11yLabel: 'LL',
    //       monthYearA11yLabel: 'MMMM YYYY',
    //     }
    //   },
    // }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
