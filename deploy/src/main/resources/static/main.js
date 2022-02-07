(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _chat_search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat/search/search.component */ "./src/app/chat/search/search.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _employee_employee_add_employee_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./employee/employee-add/employee-add.component */ "./src/app/employee/employee-add/employee-add.component.ts");
/* harmony import */ var _trace_trace_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./trace/trace.component */ "./src/app/trace/trace.component.ts");
/* harmony import */ var _area_area_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./area/area.component */ "./src/app/area/area.component.ts");
/* harmony import */ var _area_area_add_area_add_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./area/area-add/area-add.component */ "./src/app/area/area-add/area-add.component.ts");
/* harmony import */ var _area_area_update_area_update_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./area/area-update/area-update.component */ "./src/app/area/area-update/area-update.component.ts");
/* harmony import */ var _employee_employee_update_employee_update_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./employee/employee-update/employee-update.component */ "./src/app/employee/employee-update/employee-update.component.ts");
/* harmony import */ var _employee_admin_update_admin_update_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./employee/admin-update/admin-update.component */ "./src/app/employee/admin-update/admin-update.component.ts");

















var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'employee', component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_9__["EmployeeComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'employee/create', component: _employee_employee_add_employee_add_component__WEBPACK_IMPORTED_MODULE_10__["EmployeeAddComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'employee/update', component: _employee_employee_update_employee_update_component__WEBPACK_IMPORTED_MODULE_15__["EmployeeUpdateComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'admin/update', component: _employee_admin_update_admin_update_component__WEBPACK_IMPORTED_MODULE_16__["AdminUpdateComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'chat', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'search', component: _chat_search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'trace', component: _trace_trace_component__WEBPACK_IMPORTED_MODULE_11__["TraceComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'area', component: _area_area_component__WEBPACK_IMPORTED_MODULE_12__["AreaComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'area/create', component: _area_area_add_area_add_component__WEBPACK_IMPORTED_MODULE_13__["AreaAddComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'area/update', component: _area_area_update_area_update_component__WEBPACK_IMPORTED_MODULE_14__["AreaUpdateComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full', canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'scan-angular';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _config_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config/api.service */ "./src/app/config/api.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./config/config.service */ "./src/app/config/config.service.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/header/header.component */ "./src/app/dashboard/header/header.component.ts");
/* harmony import */ var _chat_item_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./chat/item/item.component */ "./src/app/chat/item/item.component.ts");
/* harmony import */ var _chat_message_message_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./chat/message/message.component */ "./src/app/chat/message/message.component.ts");
/* harmony import */ var _safe_html_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./safe-html.pipe */ "./src/app/safe-html.pipe.ts");
/* harmony import */ var _chat_search_search_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./chat/search/search.component */ "./src/app/chat/search/search.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _trace_trace_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./trace/trace.component */ "./src/app/trace/trace.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var src_assets_material_material_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/assets/material/material.module */ "./src/assets/material/material.module.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _area_area_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./area/area.component */ "./src/app/area/area.component.ts");
/* harmony import */ var _area_area_add_area_add_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./area/area-add/area-add.component */ "./src/app/area/area-add/area-add.component.ts");
/* harmony import */ var _area_area_update_area_update_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./area/area-update/area-update.component */ "./src/app/area/area-update/area-update.component.ts");
/* harmony import */ var _dashboard_layermsg_layermsg_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./dashboard/layermsg/layermsg.component */ "./src/app/dashboard/layermsg/layermsg.component.ts");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _employee_employee_add_employee_add_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./employee/employee-add/employee-add.component */ "./src/app/employee/employee-add/employee-add.component.ts");
/* harmony import */ var _employee_employee_add_modal_employee_add_modal_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./employee/employee-add-modal/employee-add-modal.component */ "./src/app/employee/employee-add-modal/employee-add-modal.component.ts");
/* harmony import */ var _employee_employee_update_employee_update_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./employee/employee-update/employee-update.component */ "./src/app/employee/employee-update/employee-update.component.ts");
/* harmony import */ var _employee_admin_update_admin_update_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./employee/admin-update/admin-update.component */ "./src/app/employee/admin-update/admin-update.component.ts");
/* harmony import */ var _utils_PaginatorEspa_ol__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./utils/PaginatorEspañol */ "./src/app/utils/PaginatorEspañol.ts");




































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                _dashboard_layermsg_layermsg_component__WEBPACK_IMPORTED_MODULE_27__["LayermsgComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_10__["ChatComponent"],
                _chat_item_item_component__WEBPACK_IMPORTED_MODULE_14__["ItemComponent"],
                _chat_message_message_component__WEBPACK_IMPORTED_MODULE_15__["MessageComponent"],
                _dashboard_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                _safe_html_pipe__WEBPACK_IMPORTED_MODULE_16__["SafeHTMLPipe"],
                _chat_search_search_component__WEBPACK_IMPORTED_MODULE_17__["SearchComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_18__["SettingsComponent"],
                _trace_trace_component__WEBPACK_IMPORTED_MODULE_19__["TraceComponent"],
                _area_area_component__WEBPACK_IMPORTED_MODULE_24__["AreaComponent"],
                _area_area_add_area_add_component__WEBPACK_IMPORTED_MODULE_25__["AreaAddComponent"],
                _area_area_update_area_update_component__WEBPACK_IMPORTED_MODULE_26__["AreaUpdateComponent"],
                _employee_employee_component__WEBPACK_IMPORTED_MODULE_30__["EmployeeComponent"],
                _employee_employee_add_employee_add_component__WEBPACK_IMPORTED_MODULE_31__["EmployeeAddComponent"],
                _employee_employee_add_modal_employee_add_modal_component__WEBPACK_IMPORTED_MODULE_32__["EmployeeAddModalComponent"],
                _employee_employee_update_employee_update_component__WEBPACK_IMPORTED_MODULE_33__["EmployeeUpdateComponent"],
                _employee_admin_update_admin_update_component__WEBPACK_IMPORTED_MODULE_34__["AdminUpdateComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"],
                src_assets_material_material_module__WEBPACK_IMPORTED_MODULE_21__["MaterialModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__["MatAutocompleteModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatSidenavModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            entryComponents: [
                _employee_employee_add_modal_employee_add_modal_component__WEBPACK_IMPORTED_MODULE_32__["EmployeeAddModalComponent"],
                _employee_employee_add_employee_add_component__WEBPACK_IMPORTED_MODULE_31__["EmployeeAddComponent"]
            ],
            providers: [
                _config_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"],
                _config_config_service__WEBPACK_IMPORTED_MODULE_11__["ConfigService"],
                _auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorIntl"],
                    useClass: _utils_PaginatorEspa_ol__WEBPACK_IMPORTED_MODULE_35__["PaginatorEspañol"]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/area/area-add/area-add.component.html":
/*!*******************************************************!*\
  !*** ./src/app/area/area-add/area-add.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dashboard-header class=\"dashboard\"></dashboard-header>\n<dashboard-layermsg></dashboard-layermsg>\n<div class=\"ig-dashboard-title-wrapper\">\n  <h1 class=\"ig-dashboard-title\">Crear Área</h1>\n</div>\n<div class=\"ig-dashboard-container\">\n  <form [formGroup]=\"formAreaAdd\" (ngSubmit)=\"onFormSubmit()\">\n    <section class=\"section-main\">\n      <h2 class=\"ig-create-user-subtitle\">Datos</h2>\n      <div class=\"ig-form-column\">\n        <mat-form-field class=\"ig-input-wrapper\">\n          <input matInput placeholder=\"Área\" class=\"ig-input\" formControlName=\"name\"/>\n          <div class=\"ig-error-wrapper\"\n            *ngIf=\"formGroup.name.invalid && (formGroup.name.dirty || formGroup.name.touched)\">\n            <label class=\"ig-error\" *ngIf=\"formGroup.name.errors.required\">\n              Campo es requerido.\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.name.errors.minlength\">\n              Mínimo 3 caracteres.<br>\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.name.errors.maxlength\">\n              Máximo 100 caracteres.<br>\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.name.errors.pattern\">\n              Solo letras y números.\n            </label>\n          </div>\n        </mat-form-field>\n        <mat-form-field class=\"ig-input-wrapper\">\n          <input \n          matInput \n          placeholder=\"CDR\" \n          class=\"ig-input\" \n          formControlName=\"anexo\"/> \n          <div class=\"ig-error-wrapper\"\n            *ngIf=\"formGroup.anexo.invalid && (formGroup.anexo.dirty || formGroup.anexo.touched)\">\n            <label class=\"ig-error\" *ngIf=\"formGroup.anexo.errors.required\">\n              Campo es requerido.\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.anexo.errors.pattern\">\n              Campo debe tener solo números y letras.\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.anexo.errors.minlength\">\n              Mínimo 3 caracteres.<br>\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.anexo.errors.maxlength\">\n              Máximo 20 caracteres.<br>\n            </label>\n          </div>\n        </mat-form-field>\n        <mat-form-field class=\"ig-input-wrapper\">\n          <input\n          matInput \n          placeholder=\"Teléfono Fijo\" \n          class=\"ig-input\" \n          formControlName=\"mobile\"/>\n          <div class=\"ig-error-wrapper\"\n            *ngIf=\"formGroup.mobile.invalid && (formGroup.mobile.dirty || formGroup.mobile.touched)\">\n            <label class=\"ig-error\" *ngIf=\"formGroup.mobile.errors.required\">\n              Campo es requerido. \n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.mobile.errors.minlength\">\n              Campo debe tener mínimo 7 dígitos.<br>\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.mobile.errors.maxlength\">\n              Campo no debe tener más de 12 dígitos.<br>\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.mobile.errors.pattern\">\n              Campo debe tener solo números y letras.\n            </label>\n          </div>\n        </mat-form-field>\n      </div>\n    </section>\n    <div class=\"ig-button-wrapper\">\n      <button \n      mat-raised-button \n      class=\"ig-button ig-button-save\"\n      type=\"submit\">\n        Guardar \n        <img src=\"assets/icons/save.svg\">\n      </button>\n      <a mat-raised-button class=\"ig-button ig-button-cancel\" routerLink=\"/area\">\n        Cancelar \n        <img src=\"assets/icons/x-circle.svg\">\n      </a>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/area/area-add/area-add.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/area/area-add/area-add.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-main {\n  padding: 24px;\n  background: #fff;\n  border-radius: 4px;\n  border: 1px solid #e2e8ee;\n  box-shadow: 0 1px 2px 0 #e2e8ee; }\n\n.ig-input-wrapper {\n  margin-right: 50px;\n  width: 22%; }\n\n.ig-button-save,\n.ig-button-excluded {\n  margin-right: 20px;\n  border-radius: 5px;\n  box-shadow: none; }\n\n.ig-button-cancel {\n  border-radius: 5px;\n  border: 2px solid #e2e8ee;\n  color: #333;\n  background-color: #fff;\n  box-shadow: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N5bm9wc2lzL0VzY3JpdG9yaW8vUHJ1ZWJhIEZpbmFsL2lnLXdlYi1hcHAvc3JjL2FwcC9hcmVhL2FyZWEtYWRkL2FyZWEtYWRkLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvc3lub3BzaXMvRXNjcml0b3Jpby9QcnVlYmEgRmluYWwvaWctd2ViLWFwcC9zcmMvc2Fzcy92YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5QkNGb0I7RURHcEIsK0JDSG9CLEVBQUE7O0FETXRCO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFHWjs7RUFFRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdsQjtFQUVFLGtCQUFrQjtFQUNsQix5QkNyQm9CO0VEc0JwQixXQ3JCZTtFRHNCZixzQkFBc0I7RUFDdEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcmVhL2FyZWEtYWRkL2FyZWEtYWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi8uLi8uLi8uLi9zYXNzL3ZhcnMuc2Nzcyc7XG5cbi5zZWN0aW9uLW1haW4ge1xuICBwYWRkaW5nOiAyNHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1ib3JkZXI7IFxuICBib3gtc2hhZG93OiAwIDFweCAycHggMCAkY29sb3ItYm9yZGVyXG59XG5cbi5pZy1pbnB1dC13cmFwcGVyIHtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICB3aWR0aDogMjIlO1xufVxuXG4uaWctYnV0dG9uLXNhdmUsXG4uaWctYnV0dG9uLWV4Y2x1ZGVkIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5pZy1idXR0b24tY2FuY2VsXG57XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAycHggc29saWQgJGNvbG9yLWJvcmRlcjsgIFxuICBjb2xvcjogJGNvbG9yLWZvbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59IiwiJGJvZHktY29sb3I6ICNmYWZiZmQ7XG5cbiRpZy1jb2xvci1wcmltYXJ5OiAjRUYyQTI0O1xuXG4kY29sb3ItYm9yZGVyOiAjZTJlOGVlO1xuJGNvbG9yLWZvbnQ6ICMzMzM7XG4kbGluZS1pbnB1dDogIzg5ODk4OTtcblxuJGlnLWNvbG9yLWVycm9yOiAjRUYyQTI0O1xuJGlnLWNvbG9yLXN1Y2Nlc3M6ICM0ODk3NjA7Il19 */"

/***/ }),

/***/ "./src/app/area/area-add/area-add.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/area/area-add/area-add.component.ts ***!
  \*****************************************************/
/*! exports provided: AreaAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaAddComponent", function() { return AreaAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_config_layermsg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/config/layermsg.service */ "./src/app/config/layermsg.service.ts");
/* harmony import */ var _app_enumeration_enum_status_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/enumeration/enum-status.enum */ "./src/app/enumeration/enum-status.enum.ts");
/* harmony import */ var _app_model_area__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/model/area */ "./src/app/model/area.ts");
/* harmony import */ var _app_service_area_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/service/area.service */ "./src/app/service/area.service.ts");
/* harmony import */ var _app_config_parametries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/config/parametries */ "./src/app/config/parametries.ts");









var AreaAddComponent = /** @class */ (function () {
    function AreaAddComponent(layerMsgService, areaService, router, formBuilder) {
        this.layerMsgService = layerMsgService;
        this.areaService = areaService;
        this.router = router;
        this.formBuilder = formBuilder;
    }
    AreaAddComponent.prototype.ngOnInit = function () {
        this.formAreaAdd = this.formBuilder.group({
            name: [
                '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_8__["Parametries"].AREA_NAME_MIN_LENGTH),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_8__["Parametries"].AREA_NAME_MAX_LENGTH),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_app_config_parametries__WEBPACK_IMPORTED_MODULE_8__["Parametries"].AREA_ONLY_NUMBER_AND_CADENA)
                ]
            ],
            anexo: [
                '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_8__["Parametries"].AREA_ANEXO_MIN_LENGTH),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_8__["Parametries"].AREA_ANEXO_MAX_LENGTH),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_app_config_parametries__WEBPACK_IMPORTED_MODULE_8__["Parametries"].AREA_ONLY_NUMBER_AND_CADENA)
                ]
            ],
            mobile: [
                '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_8__["Parametries"].AREA_PHONE_MIN_LENGTH),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_8__["Parametries"].AREA_PHONE_MAX_LENGTH),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_app_config_parametries__WEBPACK_IMPORTED_MODULE_8__["Parametries"].EMPLOYEE_ONLY_NUMBER_AND_CADENA)
                ]
            ],
        });
    };
    AreaAddComponent.prototype.addArea = function () {
        var _this = this;
        var area = new _app_model_area__WEBPACK_IMPORTED_MODULE_6__["Area"]();
        area.fromFormAreaAdd(this.formAreaAdd);
        this.areaService.addArea(area.toAreaAdd(), function (result) {
            _this.layerMsgService.showMessageOk(_app_enumeration_enum_status_enum__WEBPACK_IMPORTED_MODULE_5__["EnumStatus"].SAVE_OK.code, function () {
                _this.router.navigate(['area']);
            });
        });
    };
    AreaAddComponent.prototype.onFormSubmit = function () {
        if (this.formAreaAdd.invalid) {
            return;
        }
        else {
            this.addArea();
        }
    };
    Object.defineProperty(AreaAddComponent.prototype, "formGroup", {
        get: function () {
            return this.formAreaAdd.controls;
        },
        enumerable: true,
        configurable: true
    });
    AreaAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ig-area-add',
            template: __webpack_require__(/*! ./area-add.component.html */ "./src/app/area/area-add/area-add.component.html"),
            styles: [__webpack_require__(/*! ./area-add.component.scss */ "./src/app/area/area-add/area-add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_config_layermsg_service__WEBPACK_IMPORTED_MODULE_4__["LayermsgService"],
            _app_service_area_service__WEBPACK_IMPORTED_MODULE_7__["AreaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], AreaAddComponent);
    return AreaAddComponent;
}());



/***/ }),

/***/ "./src/app/area/area-update/area-update.component.html":
/*!*************************************************************!*\
  !*** ./src/app/area/area-update/area-update.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dashboard-header class=\"dashboard\"></dashboard-header>\n<dashboard-layermsg></dashboard-layermsg>\n<div class=\"ig-dashboard-title-wrapper\">\n  <h1 class=\"ig-dashboard-title\">Modificar Área</h1>\n</div>\n<div class=\"ig-dashboard-container\">\n  <form [formGroup]=\"formAreaUpdate\" (ngSubmit)=\"onFormSubmit()\">\n    <section class=\"section-main\">\n      <h2 class=\"ig-create-user-subtitle\">Datos</h2>\n      <div class=\"ig-form-column\">\n        <mat-form-field class=\"ig-input-wrapper\">\n          <input \n          matInput \n          placeholder=\"Área\" \n          class=\"ig-input\"\n          formControlName=\"name\"/>\n          <div class=\"ig-error-wrapper\"\n            *ngIf=\"formGroup.name.invalid && (formGroup.name.dirty || formGroup.name.touched)\">\n            <label class=\"ig-error\" *ngIf=\"formGroup.name.errors.required\">\n              Campo es requerido.\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.name.errors.minlength\">\n              Mínimo 3 caracteres.<br>\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.name.errors.maxlength\">\n              Máximo 100 caracteres.<br>\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.name.errors.pattern\">\n              Solo letras.<br>\n            </label>\n          </div>\n        </mat-form-field >\n        <mat-form-field class=\"ig-input-wrapper\">\n          <input \n          matInput \n          placeholder=\"CDR\" \n          class=\"ig-input\" \n          formControlName=\"anexo\"/> \n          <div class=\"ig-error-wrapper\"\n            *ngIf=\"formGroup.anexo.invalid && (formGroup.anexo.dirty || formGroup.anexo.touched)\">\n            <label class=\"ig-error\" *ngIf=\"formGroup.anexo.errors.required\">\n              Campo es requerido.\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.anexo.errors.pattern\">\n              Campo debe tener solo números y letras.\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.anexo.errors.minlength\">\n              Mínimo 3 caracteres.<br>\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.anexo.errors.maxlength\">\n              Máximo 20 caracteres.<br>\n            </label>\n          </div>\n        </mat-form-field>\n        <mat-form-field class=\"ig-input-wrapper\">\n          <input\n          matInput \n          placeholder=\"Teléfono Fijo\" \n          class=\"ig-input\" \n          formControlName=\"mobile\"/>\n\n          <div class=\"ig-error-wrapper\"\n            *ngIf=\"formGroup.mobile.invalid && (formGroup.mobile.dirty || formGroup.mobile.touched)\">\n\n            <label class=\"ig-error\" *ngIf=\"formGroup.mobile.errors.required\">\n              Campo es requerido.<br>\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.mobile.errors.minlength\">\n              Campo debe tener mínimo 7 dígitos.<br>\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.mobile.errors.maxlength\">\n              Campo no debe tener más de 12 dígitos.<br>\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.mobile.errors.pattern\">\n              Campo debe tener solo números y letras.\n            </label>\n          </div>\n        </mat-form-field>\n        <mat-form-field class=\"ig-input-wrapper\" *ngIf=\"this.areaPk != 0\">\n          <mat-select formControlName=\"state\" [(value)]=\"this.formAreaUpdate.value.state\">\n            <mat-option value=\"A\">\n              ACTIVO\n            </mat-option>\n            <mat-option value=\"B\">\n              INACTIVO\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n    </section>\n    <div class=\"ig-button-wrapper\">\n      <button mat-raised-button class=\"ig-button ig-button-save\" type=\"submit\">\n        Guardar \n        <img src=\"assets/icons/save.svg\">\n      </button>\n      <a mat-raised-button class=\"ig-button ig-button-cancel\" routerLink=\"/area\">\n        Cancelar\n        <img src=\"assets/icons/x-circle.svg\">\n      </a>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/area/area-update/area-update.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/area/area-update/area-update.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-main {\n  padding: 24px;\n  background: #fff;\n  border-radius: 4px;\n  border: 1px solid #e2e8ee;\n  box-shadow: 0 1px 2px 0 #e2e8ee; }\n\n.ig-input-wrapper {\n  margin-right: 50px;\n  width: 22%; }\n\n.ig-button-save,\n.ig-button-excluded {\n  margin-right: 20px;\n  border-radius: 5px;\n  box-shadow: none; }\n\n.ig-button-cancel {\n  border-radius: 5px;\n  border: 2px solid #e2e8ee;\n  color: #333;\n  background-color: #fff;\n  box-shadow: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N5bm9wc2lzL0VzY3JpdG9yaW8vUHJ1ZWJhIEZpbmFsL2lnLXdlYi1hcHAvc3JjL2FwcC9hcmVhL2FyZWEtYWRkL2FyZWEtYWRkLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvc3lub3BzaXMvRXNjcml0b3Jpby9QcnVlYmEgRmluYWwvaWctd2ViLWFwcC9zcmMvc2Fzcy92YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5QkNGb0I7RURHcEIsK0JDSG9CLEVBQUE7O0FETXRCO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFHWjs7RUFFRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdsQjtFQUVFLGtCQUFrQjtFQUNsQix5QkNyQm9CO0VEc0JwQixXQ3JCZTtFRHNCZixzQkFBc0I7RUFDdEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcmVhL2FyZWEtdXBkYXRlL2FyZWEtdXBkYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi8uLi8uLi8uLi9zYXNzL3ZhcnMuc2Nzcyc7XG5cbi5zZWN0aW9uLW1haW4ge1xuICBwYWRkaW5nOiAyNHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1ib3JkZXI7IFxuICBib3gtc2hhZG93OiAwIDFweCAycHggMCAkY29sb3ItYm9yZGVyXG59XG5cbi5pZy1pbnB1dC13cmFwcGVyIHtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICB3aWR0aDogMjIlO1xufVxuXG4uaWctYnV0dG9uLXNhdmUsXG4uaWctYnV0dG9uLWV4Y2x1ZGVkIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5pZy1idXR0b24tY2FuY2VsXG57XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAycHggc29saWQgJGNvbG9yLWJvcmRlcjsgIFxuICBjb2xvcjogJGNvbG9yLWZvbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59IiwiJGJvZHktY29sb3I6ICNmYWZiZmQ7XG5cbiRpZy1jb2xvci1wcmltYXJ5OiAjRUYyQTI0O1xuXG4kY29sb3ItYm9yZGVyOiAjZTJlOGVlO1xuJGNvbG9yLWZvbnQ6ICMzMzM7XG4kbGluZS1pbnB1dDogIzg5ODk4OTtcblxuJGlnLWNvbG9yLWVycm9yOiAjRUYyQTI0O1xuJGlnLWNvbG9yLXN1Y2Nlc3M6ICM0ODk3NjA7Il19 */"

/***/ }),

/***/ "./src/app/area/area-update/area-update.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/area/area-update/area-update.component.ts ***!
  \***********************************************************/
/*! exports provided: AreaUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaUpdateComponent", function() { return AreaUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_config_layermsg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/config/layermsg.service */ "./src/app/config/layermsg.service.ts");
/* harmony import */ var _app_enumeration_enum_status_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/enumeration/enum-status.enum */ "./src/app/enumeration/enum-status.enum.ts");
/* harmony import */ var _app_model_area__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/model/area */ "./src/app/model/area.ts");
/* harmony import */ var _app_service_area_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/service/area.service */ "./src/app/service/area.service.ts");
/* harmony import */ var _app_config_parametries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/config/parametries */ "./src/app/config/parametries.ts");









var AreaUpdateComponent = /** @class */ (function () {
    function AreaUpdateComponent(layerMsgService, areaService, router, route, formBuilder) {
        this.layerMsgService = layerMsgService;
        this.areaService = areaService;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
    }
    AreaUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formAreaUpdate = this.formBuilder.group({
            name: [
                '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_8__["Parametries"].AREA_NAME_MIN_LENGTH),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_8__["Parametries"].AREA_NAME_MAX_LENGTH),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_app_config_parametries__WEBPACK_IMPORTED_MODULE_8__["Parametries"].AREA_ONLY_NUMBER_AND_CADENA)
                ]
            ],
            anexo: [
                '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_8__["Parametries"].AREA_ANEXO_MIN_LENGTH),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_8__["Parametries"].AREA_ANEXO_MAX_LENGTH),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_app_config_parametries__WEBPACK_IMPORTED_MODULE_8__["Parametries"].AREA_ONLY_NUMBER_AND_CADENA)
                ]
            ],
            mobile: [
                '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_8__["Parametries"].AREA_PHONE_MIN_LENGTH),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_8__["Parametries"].AREA_PHONE_MAX_LENGTH),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_app_config_parametries__WEBPACK_IMPORTED_MODULE_8__["Parametries"].AREA_ONLY_NUMBER_AND_CADENA)
                ]
            ],
            state: [
                '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]
            ]
        });
        this.route.params.subscribe(function (params) {
            _this.areaService.findAreaById(params.areaPk, function (result) {
                _this.area = result.data;
                _this.formAreaUpdate.patchValue({
                    name: _this.area.name,
                    anexo: _this.area.anexo,
                    mobile: _this.area.mobile,
                    state: _this.area.state
                });
            });
        });
    };
    AreaUpdateComponent.prototype.updateArea = function () {
        var _this = this;
        var area = new _app_model_area__WEBPACK_IMPORTED_MODULE_6__["Area"]();
        area.fromFormAreaUpdate(this.formAreaUpdate);
        this.areaService.updateArea(area.toAreaUpdate(this.area.areaPk), function (result) {
            _this.layerMsgService.showMessageOk(_app_enumeration_enum_status_enum__WEBPACK_IMPORTED_MODULE_5__["EnumStatus"].UPDATE_OK.code, function () {
                _this.router.navigate(['area']);
            });
        });
    };
    AreaUpdateComponent.prototype.onFormSubmit = function () {
        if (this.formAreaUpdate.invalid) {
            return;
        }
        else {
            this.updateArea();
        }
    };
    Object.defineProperty(AreaUpdateComponent.prototype, "formGroup", {
        get: function () {
            return this.formAreaUpdate.controls;
        },
        enumerable: true,
        configurable: true
    });
    AreaUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ig-area-update',
            template: __webpack_require__(/*! ./area-update.component.html */ "./src/app/area/area-update/area-update.component.html"),
            styles: [__webpack_require__(/*! ./area-update.component.scss */ "./src/app/area/area-update/area-update.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_config_layermsg_service__WEBPACK_IMPORTED_MODULE_4__["LayermsgService"],
            _app_service_area_service__WEBPACK_IMPORTED_MODULE_7__["AreaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], AreaUpdateComponent);
    return AreaUpdateComponent;
}());



/***/ }),

/***/ "./src/app/area/area.component.html":
/*!******************************************!*\
  !*** ./src/app/area/area.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dashboard-header class=\"dashboard\"></dashboard-header>\n<dashboard-layermsg></dashboard-layermsg>\n<div class=\"ig-dashboard-title-wrapper\">\n  <h1 class=\"ig-dashboard-title\">Mantenimiento de Áreas</h1>\n</div>\n<div class=\"ig-dashboard-container\">\n  <div class=\"ig-searcher-container\">\n    <mat-icon class=\"ig-searcher-icon\" matSuffix>search</mat-icon>\n    <input type=\"text\" placeholder=\"Buscar área\" class=\"ig-input-search\" matInput (keyup)=\"applyFilter($event.target.value)\">\n  </div>\n  <div class=\"ig-dashboard-table-wrapper mat-elevation-z8\"> \n    <table [dataSource]=\"dataSource\" matSort mat-table class=\"full-width-table\">\n      <ng-container matColumnDef=\"areaPk\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Código </th>\n        <td mat-cell *matCellDef=\"let element\"> {{ element.areaPk }} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Nombre </th>\n        <td mat-cell *matCellDef=\"let element\"> {{ element.name }} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"anexo\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> CDR </th>\n        <td mat-cell *matCellDef=\"let element\"> {{ element.anexo }} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"mobile\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Teléfono Fijo </th>\n        <td mat-cell *matCellDef=\"let element\"> {{ element.mobile }} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"state\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Estado </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <div *ngIf=\"element.state == 'A'\">\n            ACTIVO\n          </div>\n          <div *ngIf=\"element.state == 'B'\">\n            INACTIVO\n          </div>\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"action\">\n        <th mat-header-cell *matHeaderCellDef> Acción </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <a \n          class=\"\" \n          [routerLink] = \"['/area/update/', {areaPk: element.areaPk}]\">\n            <img class = \"table-icon\" src=\"assets/icons/edit.svg\">\n          </a>\n          <a \n          class = \"\" \n          href = \"#\" \n          (click) = \"delete($event, element.areaPk)\">\n            <img class = \"table-icon\" src = \"assets/icons/delete.svg\">\n          </a>\n        </td>\n      </ng-container>\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n      <tr mat-row *matRowDef=\"let element; columns: displayedColumns;\"></tr>\n    </table>\n  </div>\n  <div class=\"ig-dashboard-table-wrapper mat-elevation-z8\">\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n  </div>\n  <div class=\"ig-button-wrapper\">\n    <a routerLink=\"/area/create\" mat-raised-button class=\"ig-button\">Agregar</a>    \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/area/area.component.scss":
/*!******************************************!*\
  !*** ./src/app/area/area.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ig-searcher-container {\n  width: 700px; }\n\n.table-icon {\n  margin-bottom: 5px;\n  margin-right: 10px; }\n\n.mat-column-name {\n  width: 30% !important; }\n\n.mat-column-action {\n  width: 10% !important; }\n\n@media screen and (max-width: 765px) {\n  .ig-input-wrapper {\n    width: 300px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N5bm9wc2lzL0VzY3JpdG9yaW8vUHJ1ZWJhIEZpbmFsL2lnLXdlYi1hcHAvc3JjL2FwcC9hcmVhL2FyZWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBT3BCO0VBQ0UscUJBQXFCLEVBQUE7O0FBV3ZCO0VBQ0UscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0U7SUFDRSxZQUFZLEVBQUEsRUFDYiIsImZpbGUiOiJzcmMvYXBwL2FyZWEvYXJlYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pZy1zZWFyY2hlci1jb250YWluZXIge1xuICB3aWR0aDogNzAwcHg7XG59XG5cbi50YWJsZS1pY29uIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5tYXQtY29sdW1uLWNvZGUge1xuXG59XG5cbi5tYXQtY29sdW1uLW5hbWUge1xuICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtY29sdW1uLWFubmV4ZWQge1xuXG59XG5cbi5tYXQtY29sdW1uLW1vYmlsZSB7XG5cbn1cblxuLm1hdC1jb2x1bW4tYWN0aW9uIHtcbiAgd2lkdGg6IDEwJSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjVweCkge1xuICAuaWctaW5wdXQtd3JhcHBlciB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/area/area.component.ts":
/*!****************************************!*\
  !*** ./src/app/area/area.component.ts ***!
  \****************************************/
/*! exports provided: AreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaComponent", function() { return AreaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_service_area_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/service/area.service */ "./src/app/service/area.service.ts");
/* harmony import */ var _app_config_layermsg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/config/layermsg.service */ "./src/app/config/layermsg.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_enumeration_enum_status_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/enumeration/enum-status.enum */ "./src/app/enumeration/enum-status.enum.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);








var AreaComponent = /** @class */ (function () {
    function AreaComponent(layerMsgService, areaService, router) {
        this.layerMsgService = layerMsgService;
        this.areaService = areaService;
        this.router = router;
        this.displayedColumns = ['name', 'anexo', 'mobile', 'state', 'action'];
    }
    AreaComponent.prototype.ngOnInit = function () {
        this.readDataArea();
    };
    AreaComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    AreaComponent.prototype.readDataArea = function () {
        var _this = this;
        this.areaService.loadAllAreas(function (result) {
            _this.areaData = result.data;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.areaData);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
        });
    };
    AreaComponent.prototype.delete = function (e, areaPk) {
        var _this = this;
        e.preventDefault();
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: '¿Desea eliminar el área?',
            text: 'El área eliminado no podrá ser recuperado.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: ' <div style="margin: 0; padding: 0; display: flex; justify-content: center; align-items: center;"><span>Aceptar</span><img src="./../../../assets/icons/save.svg"></div>',
            confirmButtonColor: "#EF2A24",
            cancelButtonText: '<div style="margin: 0; padding: 0; display: flex; justify-content: center; align-items: center;"><span>Cancelar</span><img src="./../../../assets/icons/x-circle.svg"></div>'
        }).then(function (result) {
            if (result.value) {
                _this.areaService.deleteArea(areaPk, function (result) {
                    for (var i = 0; i < _this.areaData.length; i++) {
                        if (_this.areaData[i].areaPk == areaPk) {
                            _this.areaData.splice(i, 1);
                            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.areaData);
                            _this.dataSource.sort = _this.sort;
                            _this.dataSource.paginator = _this.paginator;
                            break;
                        }
                    }
                    _this.layerMsgService.showMessageOk(_app_enumeration_enum_status_enum__WEBPACK_IMPORTED_MODULE_6__["EnumStatus"].DELETE_OK.code, function () { });
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.DismissReason.cancel) {
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], AreaComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], AreaComponent.prototype, "paginator", void 0);
    AreaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ig-area',
            template: __webpack_require__(/*! ./area.component.html */ "./src/app/area/area.component.html"),
            styles: [__webpack_require__(/*! ./area.component.scss */ "./src/app/area/area.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_config_layermsg_service__WEBPACK_IMPORTED_MODULE_4__["LayermsgService"],
            _app_service_area_service__WEBPACK_IMPORTED_MODULE_3__["AreaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AreaComponent);
    return AreaComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/auth/auth.service */ "./src/app/auth/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (this.authService.isLoggedIn) {
            return true;
        }
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;
        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_config_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/config/shared.service */ "./src/app/config/shared.service.ts");
/* harmony import */ var _app_config_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/config/shared */ "./src/app/config/shared.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var AuthService = /** @class */ (function () {
    function AuthService(service, router) {
        this.service = service;
        this.router = router;
        this.redirectUrl = '';
        this.isLoggedIn = !!this.service.get(_app_config_shared__WEBPACK_IMPORTED_MODULE_5__["SharedVariable"].USER);
    }
    AuthService.prototype.login = function () {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (val) { return _this.isLoggedIn = true; }));
    };
    AuthService.prototype.logout = function () {
        this.isLoggedIn = false;
        this.service.remove(_app_config_shared__WEBPACK_IMPORTED_MODULE_5__["SharedVariable"].USER);
        this.router.navigate(['login']);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_config_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dashboard-header class=\"dashboard\"></dashboard-header>\r\n<div class=\"chat-container\">\r\n\t<div class=\"chat-list-section\">\r\n\t\t<section *ngIf=\"rolePk===1 || rolePk===2\" [ngClass]=\"{'chat-list-section-view1--active' : sectionView1}\" class=\"chat-list-section-view1\">\r\n\t\t\t<p class=\"chat-view1-text\" *ngIf=\"rolePk===1\">Filtrar por:</p>\r\n\t\t\t<mat-accordion class=\"chat-sublist-section\" *ngIf=\"rolePk===1\">\r\n\t\t\t\t<mat-expansion-panel>\r\n\t\t\t\t\t<mat-expansion-panel-header>\r\n\t\t\t\t\t\t<mat-panel-title>\r\n\t\t\t\t\t\t\t<h2 class=\"chat-sublist-title\">Área</h2>\r\n\t\t\t\t\t\t</mat-panel-title>\r\n\t\t\t\t\t</mat-expansion-panel-header>\r\n\t\t\t\t\t<mat-form-field class=\"ig-input-wrapper\">\r\n\t\t\t\t\t\t<input \r\n\t\t\t\t\t\ttype=\"text\" \r\n\t\t\t\t\t\tplaceholder=\"Buscar\" \r\n\t\t\t\t\t\tclass=\"ig-input\"\r\n\t\t\t\t\t\tmatInput\r\n\t\t\t\t\t\t(keyup)=\"filterArea($event.target.value)\">\r\n\t\t\t\t\t\t<mat-icon matSuffix>search</mat-icon>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t<mat-radio-group class=\"chat-sublist-items\">\r\n\t\t\t\t\t\t<mat-radio-button \r\n\t\t\t\t\t\tclass=\"chat-sublist-item\"\r\n\t\t\t\t\t\t*ngFor=\"let area of areas\" \r\n\t\t\t\t\t\tid =\"{{area.name}}\" \r\n\t\t\t\t\t\tvalue=\"{{area.areaPk}}\"\r\n\t\t\t\t\t\t(click)=\"loadAllSupervisorAndOfficersByAreaEmploy(area.areaPk)\">\r\n\t\t\t\t\t\t\t{{ area.name }}\r\n\t\t\t\t\t\t</mat-radio-button>\r\n\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t</mat-expansion-panel>\r\n\t\t\t</mat-accordion>\r\n\t\t\t<mat-accordion class=\"chat-sublist-section\" *ngIf=\"rolePk===1\">\r\n\t\t\t\t<mat-expansion-panel>\r\n\t\t\t\t\t<mat-expansion-panel-header>\r\n\t\t\t\t\t\t<mat-panel-title>\r\n\t\t\t\t\t\t\t<h2 class=\"chat-sublist-title\">Supervisor</h2>\r\n\t\t\t\t\t\t</mat-panel-title>\r\n\t\t\t\t\t</mat-expansion-panel-header>\r\n\t\t\t\t\t<mat-form-field class=\"ig-input-wrapper\">\r\n\t\t\t\t\t\t<input \r\n\t\t\t\t\t\ttype=\"text\" \r\n\t\t\t\t\t\tmatInput \r\n\t\t\t\t\t\tplaceholder=\"Buscar\" \r\n\t\t\t\t\t\tclass=\"ig-input\"\r\n\t\t\t\t\t\tmatInput \r\n\t\t\t\t\t\t(keyup)=\"filterSupervisor($event.target.value)\">\r\n\t\t\t\t\t\t<mat-icon matSuffix>search</mat-icon> \r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t<div *ngIf=\"supervisores.length == 0\">No hay Supervisores.</div>\r\n\t\t\t\t\t<mat-radio-group class=\"chat-sublist-items\">\r\n\t\t\t\t\t\t<mat-radio-button  \r\n\t\t\t\t\t\tclass=\"chat-sublist-item\"\r\n\t\t\t\t\t\t*ngFor=\"let supervisor of supervisores\" \r\n\t\t\t\t\t\tid =\"{{supervisor.mobile}}\"\r\n\t\t\t\t\t\tvalue=\"{{supervisor.employPk}}\"\r\n\t\t\t\t\t\t(click)=\"loadAllOfficerBySupervisorEmploy(supervisor.employPk)\">\r\n\t\t\t\t\t\t\t{{ supervisor.nameEmploy }}\r\n\t\t\t\t\t\t</mat-radio-button>\r\n\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t</mat-expansion-panel>\r\n\t\t\t</mat-accordion>\r\n\t\t\t<mat-accordion class=\"chat-sublist-section\" *ngIf=\"rolePk===1 || rolePk===2\">\r\n\t\t\t\t<mat-expansion-panel [expanded]=\"true\">\r\n\t\t\t\t\t<mat-expansion-panel-header>\r\n\t\t\t\t\t\t<mat-panel-title>\r\n\t\t\t\t\t\t\t<h2 class=\"chat-sublist-title\">Funcionarios</h2>\r\n\t\t\t\t\t\t</mat-panel-title>\r\n\t\t\t\t\t</mat-expansion-panel-header>\r\n\t\t\t\t\t<mat-form-field class=\"ig-input-wrapper officer-input-search\">\r\n\t\t\t\t\t\t<input type=\"text\" (keyup)=\"searchOfficers($event.target.value)\" matInput placeholder=\"Buscar\" class=\"ig-input\" >\r\n\t\t\t\t\t\t<mat-icon matSuffix>search</mat-icon>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t<div *ngIf=\"officers.length === 0\">No hay Funcionarios.</div>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li class=\"chat-contact-item\" (click)=\"selectOfficer($event, itemOfficer.employPk, itemOfficer.nameEmploy)\" *ngFor=\"let itemOfficer of officers\" [id]=\"itemOfficer.employPk\">\r\n\t\t\t\t\t\t\t<img *ngIf=\"itemOfficer.resourceFk\" class=\"chat-contact-image chat-contact-image--photo\" src=\"{{ this.apiService.urlGet('/resource/v1/load/' + itemOfficer.resourceFk)}}\"/>\r\n\t\t\t\t\t\t\t<img *ngIf=\"!itemOfficer.resourceFk\" class=\"chat-contact-image\" src=\"../../assets/icons/user-circle.svg\" alt=\"\">\r\n\t\t\t\t\t\t\t<div>{{ itemOfficer.nameEmploy }}</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\t\t\t\t\t\r\n\t\t\t\t</mat-expansion-panel>\r\n\t\t\t</mat-accordion>\r\n\t\t</section>\r\n\r\n\r\n\t\t<section *ngIf=\"rolePk === 1 || rolePk === 2 || rolePk === 3\" [ngClass]=\"{'chat-list-section-view2--active' : sectionView2}\" class=\"chat-list-section-view2\">\r\n\t\t\t<div class=\"chat-sublist-title-wrapper\">\r\n\t\t\t\t<button *ngIf=\"rolePk === 1 || rolePk === 2\" class=\"chat-sublist-button-back\" mat-icon-button (click)=\"goBackView($event)\">\r\n\t\t\t\t\t<mat-icon class=\"chat-sublist-back\">keyboard_arrow_left</mat-icon>\r\n\t\t\t\t</button>\t\t\r\n\t\t\t\t<h2 class=\"chat-sublist-title\">Funcionario, <span>{{ nameOfficer }}</span></h2>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"chat-list-section-view2-search\">\r\n\t\t\t\t<mat-form-field class=\"ig-input-wrapper\">\r\n\t\t\t\t\t<input type=\"text\" (input)=\"searchContact($event.target.value)\" matInput placeholder=\"Buscar\" class=\"ig-input\" >\r\n\t\t\t\t\t<mat-icon matSuffix class=\"\">search</mat-icon>\r\n\t\t\t\t</mat-form-field>\r\n\t\t\t\t<button mat-icon-button (click)=\"reloadClients($event)\">\r\n\t\t\t\t\t<mat-icon>cached</mat-icon>\r\n\t\t\t\t</button>\t\r\n\t\t\t</div>\r\n\t\t\t<div *ngIf=\"contacts.length == 0\">No hay contactos.</div>\r\n\t\t\t<ul class=\"chat-contact-items\">\r\n\t\t\t\t<li class=\"chat-contact-item\" *ngFor=\"let contact of contacts,  index as i\" [id]=\"contact.idChat\" (click)=\"loadMessages(contact, i)\">\r\n\t\t\t\t\t<img *ngIf=\"contact.resourceId\" class=\"chat-contact-image chat-contact-image--photo\" src=\"{{ this.apiService.urlGet('/resource/v1/load/' + contact.resourceId)}}\"/>\r\n\t\t\t\t\t<img *ngIf=\"!contact.resourceId\" class=\"chat-contact-image\" src=\"../../assets/icons/user-circle.svg\" alt=\"\">\r\n\t\t\t\t\t<div class=\"chat-contact-user\">\r\n\t\t\t\t\t\t<div>{{ contact.name }}</div>\r\n\t\t\t\t\t\t<div class=\"chat-contact-user-lastUpdate\">{{ contact.lastUpdate }}</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</section>\r\n\t</div>\r\n\r\n\r\n\t<div class=\"chat-conversation-section\" >\r\n\t\t<div [ngClass]=\"{'chat-conversation-message--active' : tempMessages}\" class=\"chat-conversation-message\">\r\n\t\t\t<mat-drawer-container autosize>\t\t\t\r\n\t\t\t\t<div class=\"chat-conversation-header\">\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t{{ customerSelect }}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<button mat-icon-button (click)=\"drawer.toggle()\">\r\n\t\t\t\t\t\t\t<mat-icon>search</mat-icon>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button mat-icon-button (click)=\"reloadMessages($event)\">\r\n\t\t\t\t\t\t\t<mat-icon>cached</mat-icon>\r\n\t\t\t\t\t\t</button>\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"chat-conversation-messages\" id=\"contentMsg\">\r\n\t\t\t\t<!-- <button id=\"toBottom\" class=\"btn arrow-bottom d-none\"><i class=\"fa fa-chevron-down\"></i></button> -->\r\n\t\t\t\t\t<div class=\"content\" >\r\n\t\t\t\t\t\t<div class=\"items\">\r\n\t\t\t\t\t\t\t<chat-message *ngFor=\"let message of messages\" [message]=\"message\"></chat-message>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"chat-conversation-writting\">\r\n\t\t\t\t\t<div class=\"chat-conversation-text-wrapp\">\r\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"Escribe un mensaje aquí\"  class=\"chat-conversation-text\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<mat-drawer #drawer mode=\"side\" position=\"end\" class=\"chat-search-side\">\t\t\t\t\r\n\t\t\t\t\t<div class=\"chat-conversation-header chat-search-side-header\">\r\n\t\t\t\t\t\t<button class=\"chat-search-side-button\" mat-icon-button (click)=\"drawer.toggle()\">\r\n\t\t\t\t\t\t\t<mat-icon>close</mat-icon>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\tBuscar mensajes\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"chat-search-message\">\r\n\t\t\t\t\t\t<mat-form-field class=\"ig-input-wrapper\">\r\n\t\t\t\t\t\t\t<input type=\"text\" matInput placeholder=\"Buscar\" class=\"ig-input\" (input)=\"searchMessage($event.target.value)\">\r\n\t\t\t\t\t\t\t<mat-icon matSuffix>search</mat-icon>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<chat-search *ngFor=\"let message of resultsMsg\" [message]=\"message\"></chat-search>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\t\t\t\r\n\t\t\t\t</mat-drawer>\r\n\t\t\t</mat-drawer-container>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/chat/chat.component.scss":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat-container {\n  display: -webkit-box;\n  display: flex;\n  width: 100%; }\n\n.chat-list-section {\n  background-color: #fff;\n  height: calc(100vh - 42px);\n  width: 30%;\n  overflow: auto; }\n\n.chat-list-section::-webkit-scrollbar,\n.chat-conversation-section::-webkit-scrollbar,\n.chat-conversation-messages::-webkit-scrollbar {\n  width: 8px;\n  height: 2px; }\n\n.chat-list-section::-webkit-scrollbar-thumb,\n.chat-conversation-section::-webkit-scrollbar-thumb,\n.chat-conversation-messages::-webkit-scrollbar-thumb {\n  background: #ccc; }\n\n.chat-conversation-section {\n  height: calc(100vh - 42px);\n  overflow: auto;\n  width: 70%; }\n\n.chat-view1-text {\n  font-size: 18px;\n  font-weight: 500;\n  margin-top: 24px;\n  margin-left: 24px;\n  margin-bottom: 12px; }\n\n.mat-expansion-indicator::after {\n  color: rgba(0, 0, 0, 0.9) !important;\n  border-width: 0 3px 3px 0 !important;\n  padding: 4px !important; }\n\n.chat-list-section-view1 {\n  display: none; }\n\n.chat-list-section-view1--active {\n  display: block; }\n\n.chat-list-section-view2 {\n  display: none;\n  padding: 0 18px; }\n\n.chat-list-section-view2 .ig-input-wrapper {\n  width: 250px; }\n\n.chat-list-section-view2--active {\n  display: block; }\n\n.chat-sublist-button-back {\n  width: auto;\n  height: auto;\n  margin-right: 10px; }\n\n.chat-sublist-section .mat-expansion-panel:not([class*=mat-elevation-z]) {\n  box-shadow: none;\n  border-radius: 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n\n.chat-sublist-title {\n  font-weight: 500;\n  font-size: 19px; }\n\n.chat-sublist-item {\n  font-size: 14px;\n  padding: 5px 0;\n  cursor: pointer; }\n\n.chat-sublist-items {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  max-height: 160px;\n  overflow: auto; }\n\n.chat-sublist-title-wrapper {\n  height: 64px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.chat-contact-item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row; }\n\n.chat-contact-item {\n  cursor: pointer; }\n\n.chat-list-section-view1 .chat-contact-item {\n  height: 35px; }\n\n.chat-list-section-view2 .chat-contact-item {\n  height: 62px; }\n\n.chat-list-section-view1 .chat-contact-image {\n  margin-right: 10px; }\n\n.chat-list-section-view1 .chat-contact-image--photo {\n  border-radius: 50%;\n  width: 24px;\n  height: 24px; }\n\n.chat-list-section-view2 .chat-contact-image {\n  margin-right: 5px;\n  width: 40px;\n  height: 40px; }\n\n.chat-list-section-view2 .chat-contact-image--photo {\n  border-radius: 50%; }\n\n.chat-contact-user {\n  border-bottom: 1px solid #f2f2f2;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  height: 100%;\n  font-size: 14px;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  width: 100%; }\n\n.chat-sublist-arrow-back {\n  color: #898989; }\n\n.chat-collapse-icon {\n  color: #333;\n  font-size: 20px; }\n\n.chat-conversation-header {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 40px;\n  background-color: #ededed;\n  font-size: 14px;\n  font-weight: 500;\n  padding: 0 20px; }\n\n.chat-contact-user-lastUpdate {\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.45); }\n\n.chat-conversation-message {\n  display: none; }\n\n.chat-conversation-message--active {\n  display: block; }\n\n.chat-conversation-messages {\n  height: calc(100vh - 142px);\n  overflow: auto; }\n\n.chat-conversation-writting {\n  height: 60px;\n  background-color: #f0f0f0;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px; }\n\n.chat-conversation-text-wrapp {\n  border-radius: 50px;\n  padding: 10px;\n  width: 100%;\n  background-color: #fff; }\n\n.chat-conversation-text {\n  outline: none;\n  border: none; }\n\n.chat-search-side-header {\n  -webkit-box-pack: start;\n          justify-content: flex-start; }\n\n.chat-search-side {\n  width: 300px; }\n\n.chat-search-side-button {\n  margin-right: 20px; }\n\n.chat-search-message {\n  padding: 10px 15px; }\n\n.officer-input-search {\n  width: 250px; }\n\n.chat-list-section-view2-search {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N5bm9wc2lzL0VzY3JpdG9yaW8vUHJ1ZWJhIEZpbmFsL2lnLXdlYi1hcHAvc3JjL2FwcC9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxvQkFBYTtFQUFiLGFBQWE7RUFDYixXQUFXLEVBQUE7O0FBR1o7RUFDQyxzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLFVBQVU7RUFDVixjQUFjLEVBQUE7O0FBR2Y7OztFQUdFLFVBQVU7RUFDVixXQUFXLEVBQUE7O0FBR2I7OztFQUdFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNDLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QsVUFBVSxFQUFBOztBQUdYO0VBQ0MsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBOztBQUdwQjtFQUNDLG9DQUFnQztFQUNoQyxvQ0FBb0M7RUFDcEMsdUJBQXVCLEVBQUE7O0FBR3hCO0VBQ0MsYUFBYSxFQUFBOztBQUdkO0VBQ0MsY0FBYyxFQUFBOztBQUdmO0VBQ0MsYUFBYTtFQUNiLGVBQWUsRUFBQTs7QUFHaEI7RUFDQyxZQUFZLEVBQUE7O0FBR2I7RUFDQyxjQUFjLEVBQUE7O0FBR2Y7RUFDQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUduQjtFQUNDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsMkNBQTJDLEVBQUE7O0FBRzVDO0VBQ0MsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFHaEI7RUFDQyxlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFHaEI7RUFDQyxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUdmO0VBQ0MsWUFBWTtFQUNaLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTs7QUFHcEI7RUFDQyxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7O0FBR3BCO0VBQ0MsZUFBZSxFQUFBOztBQUdoQjtFQUNDLFlBQVksRUFBQTs7QUFHYjtFQUNDLFlBQVksRUFBQTs7QUFHYjtFQUNDLGtCQUFrQixFQUFBOztBQUduQjtFQUNDLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdiO0VBQ0MsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2I7RUFDQyxrQkFBa0IsRUFBQTs7QUFHbkI7RUFDQyxnQ0FBZ0M7RUFDaEMsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix5QkFBOEI7VUFBOUIsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQVk7VUFBWixZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdaO0VBQ0MsY0FBYyxFQUFBOztBQUdmO0VBQ0MsV0FBVztFQUNYLGVBQWUsRUFBQTs7QUFHaEI7RUFDQyxXQUFXO0VBQ1gsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQThCO1VBQTlCLDhCQUE4QjtFQUM5Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7O0FBR2hCO0VBQ0MsZUFBZTtFQUNmLDBCQUFzQixFQUFBOztBQUd2QjtFQUNDLGFBQWEsRUFBQTs7QUFHZDtFQUNDLGNBQWMsRUFBQTs7QUFHZjtFQUNDLDJCQUEyQjtFQUMzQixjQUFjLEVBQUE7O0FBR2Y7RUFDQyxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGFBQWEsRUFBQTs7QUFHZDtFQUNDLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsV0FBVztFQUNYLHNCQUFzQixFQUFBOztBQUd2QjtFQUNDLGFBQWE7RUFDYixZQUFZLEVBQUE7O0FBR2I7RUFDQyx1QkFBMkI7VUFBM0IsMkJBQTJCLEVBQUE7O0FBRzVCO0VBQ0MsWUFBWSxFQUFBOztBQUdiO0VBQ0Msa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0Msa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0MsWUFBWSxFQUFBOztBQUdiO0VBQ0Msb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix5QkFBOEI7VUFBOUIsOEJBQThCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdC1jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1x0XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4uY2hhdC1saXN0LXNlY3Rpb24ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRoZWlnaHQ6IGNhbGMoMTAwdmggLSA0MnB4KTtcdFxuXHR3aWR0aDogMzAlO1xuXHRvdmVyZmxvdzogYXV0bztcbn1cblxuLmNoYXQtbGlzdC1zZWN0aW9uOjotd2Via2l0LXNjcm9sbGJhciwgXG4uY2hhdC1jb252ZXJzYXRpb24tc2VjdGlvbjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4uY2hhdC1jb252ZXJzYXRpb24tbWVzc2FnZXM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiAycHg7XG59XG5cbi5jaGF0LWxpc3Qtc2VjdGlvbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIsXG4uY2hhdC1jb252ZXJzYXRpb24tc2VjdGlvbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIsXG4uY2hhdC1jb252ZXJzYXRpb24tbWVzc2FnZXM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogI2NjYztcbn1cblxuLmNoYXQtY29udmVyc2F0aW9uLXNlY3Rpb24ge1xuXHRoZWlnaHQ6IGNhbGMoMTAwdmggLSA0MnB4KTtcdFxuXHRvdmVyZmxvdzogYXV0bztcblx0d2lkdGg6IDcwJTtcbn1cblxuLmNoYXQtdmlldzEtdGV4dCB7XG5cdGZvbnQtc2l6ZTogMThweDtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0bWFyZ2luLXRvcDogMjRweDtcblx0bWFyZ2luLWxlZnQ6IDI0cHg7XG5cdG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5tYXQtZXhwYW5zaW9uLWluZGljYXRvcjo6YWZ0ZXIge1xuXHRjb2xvcjogcmdiYSgwLDAsMCwuOSkgIWltcG9ydGFudDtcblx0Ym9yZGVyLXdpZHRoOiAwIDNweCAzcHggMCAhaW1wb3J0YW50O1xuXHRwYWRkaW5nOiA0cHggIWltcG9ydGFudDtcbn1cblxuLmNoYXQtbGlzdC1zZWN0aW9uLXZpZXcxIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuLmNoYXQtbGlzdC1zZWN0aW9uLXZpZXcxLS1hY3RpdmUge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cblxuLmNoYXQtbGlzdC1zZWN0aW9uLXZpZXcyIHtcblx0ZGlzcGxheTogbm9uZTtcblx0cGFkZGluZzogMCAxOHB4O1xufVxuXG4uY2hhdC1saXN0LXNlY3Rpb24tdmlldzIgLmlnLWlucHV0LXdyYXBwZXIge1xuXHR3aWR0aDogMjUwcHg7XG59XG5cbi5jaGF0LWxpc3Qtc2VjdGlvbi12aWV3Mi0tYWN0aXZlIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5cbi5jaGF0LXN1Ymxpc3QtYnV0dG9uLWJhY2sge1xuXHR3aWR0aDogYXV0bztcblx0aGVpZ2h0OiBhdXRvO1xuXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5jaGF0LXN1Ymxpc3Qtc2VjdGlvbiAubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG5cdGJveC1zaGFkb3c6IG5vbmU7XG5cdGJvcmRlci1yYWRpdXM6IDA7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5jaGF0LXN1Ymxpc3QtdGl0bGUge1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRmb250LXNpemU6IDE5cHg7XG59XG5cbi5jaGF0LXN1Ymxpc3QtaXRlbSB7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0cGFkZGluZzogNXB4IDA7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNoYXQtc3VibGlzdC1pdGVtcyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdG1heC1oZWlnaHQ6IDE2MHB4O1xuXHRvdmVyZmxvdzogYXV0bztcbn1cblxuLmNoYXQtc3VibGlzdC10aXRsZS13cmFwcGVyIHtcblx0aGVpZ2h0OiA2NHB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2hhdC1jb250YWN0LWl0ZW0ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uY2hhdC1jb250YWN0LWl0ZW0ge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jaGF0LWxpc3Qtc2VjdGlvbi12aWV3MSAuY2hhdC1jb250YWN0LWl0ZW0ge1xuXHRoZWlnaHQ6IDM1cHg7XG59XG5cbi5jaGF0LWxpc3Qtc2VjdGlvbi12aWV3MiAuY2hhdC1jb250YWN0LWl0ZW0ge1xuXHRoZWlnaHQ6IDYycHg7XG59XG5cbi5jaGF0LWxpc3Qtc2VjdGlvbi12aWV3MSAuY2hhdC1jb250YWN0LWltYWdlIHtcblx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uY2hhdC1saXN0LXNlY3Rpb24tdmlldzEgLmNoYXQtY29udGFjdC1pbWFnZS0tcGhvdG8ge1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdHdpZHRoOiAyNHB4O1xuXHRoZWlnaHQ6IDI0cHg7XG59XG5cbi5jaGF0LWxpc3Qtc2VjdGlvbi12aWV3MiAuY2hhdC1jb250YWN0LWltYWdlIHtcblx0bWFyZ2luLXJpZ2h0OiA1cHg7XG5cdHdpZHRoOiA0MHB4O1xuXHRoZWlnaHQ6IDQwcHg7XG59XG5cbi5jaGF0LWxpc3Qtc2VjdGlvbi12aWV3MiAuY2hhdC1jb250YWN0LWltYWdlLS1waG90byB7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNoYXQtY29udGFjdC11c2VyIHtcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMmYyZjI7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0aGVpZ2h0OiAxMDAlO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGZsZXgtZ3JvdzogMTtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi5jaGF0LXN1Ymxpc3QtYXJyb3ctYmFjayB7XG5cdGNvbG9yOiAjODk4OTg5O1xufVxuXG4uY2hhdC1jb2xsYXBzZS1pY29uIHtcblx0Y29sb3I6ICMzMzM7XG5cdGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmNoYXQtY29udmVyc2F0aW9uLWhlYWRlciB7XG5cdHdpZHRoOiAxMDAlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGhlaWdodDogNDBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRwYWRkaW5nOiAwIDIwcHg7XG59XG5cbi5jaGF0LWNvbnRhY3QtdXNlci1sYXN0VXBkYXRlIHtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRjb2xvcjogcmdiYSgwLDAsMCwuNDUpO1xufVxuXG4uY2hhdC1jb252ZXJzYXRpb24tbWVzc2FnZSB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jaGF0LWNvbnZlcnNhdGlvbi1tZXNzYWdlLS1hY3RpdmUge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cblxuLmNoYXQtY29udmVyc2F0aW9uLW1lc3NhZ2VzIHtcblx0aGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTQycHgpO1xuXHRvdmVyZmxvdzogYXV0bztcbn1cblxuLmNoYXQtY29udmVyc2F0aW9uLXdyaXR0aW5nIHtcblx0aGVpZ2h0OiA2MHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuXHR3aWR0aDogMTAwJTtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0cGFkZGluZzogMTBweDtcbn1cblxuLmNoYXQtY29udmVyc2F0aW9uLXRleHQtd3JhcHAge1xuXHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHRwYWRkaW5nOiAxMHB4O1xuXHR3aWR0aDogMTAwJTtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmNoYXQtY29udmVyc2F0aW9uLXRleHQge1xuXHRvdXRsaW5lOiBub25lO1xuXHRib3JkZXI6IG5vbmU7XG59XG5cbi5jaGF0LXNlYXJjaC1zaWRlLWhlYWRlciB7XHRcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4uY2hhdC1zZWFyY2gtc2lkZSB7XG5cdHdpZHRoOiAzMDBweDtcbn1cblxuLmNoYXQtc2VhcmNoLXNpZGUtYnV0dG9uIHtcblx0bWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uY2hhdC1zZWFyY2gtbWVzc2FnZSB7XG5cdHBhZGRpbmc6IDEwcHggMTVweDtcbn1cblxuLm9mZmljZXItaW5wdXQtc2VhcmNoIHtcblx0d2lkdGg6IDI1MHB4O1xufVxuXG4uY2hhdC1saXN0LXNlY3Rpb24tdmlldzItc2VhcmNoIHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_config_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/config/api.service */ "./src/app/config/api.service.ts");
/* harmony import */ var _app_config_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/config/shared.service */ "./src/app/config/shared.service.ts");
/* harmony import */ var _app_config_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/config/shared */ "./src/app/config/shared.ts");






var ChatComponent = /** @class */ (function () {
    function ChatComponent(apiService, router, sharedService) {
        this.apiService = apiService;
        this.router = router;
        this.sharedService = sharedService;
        this.sectionView1 = true;
        this.sectionView2 = false;
        this.officers = [];
        this.officersTemp = [];
        this.contacts = [];
        this.contactsTemp = [];
        this.tempMessages = false;
        this.customerSelect = '';
        this.resultsMsg = [];
        this.supervisores = [];
        this.dataEmploy = null;
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.loadViewRole();
    };
    ChatComponent.prototype.loadViewRole = function () {
        var _this = this;
        var user = this.sharedService.get(_app_config_shared__WEBPACK_IMPORTED_MODULE_5__["SharedVariable"].USER);
        this.roles = user.getRoles();
        this.rolePk = this.roles[0].rolePk;
        var name = JSON.parse(localStorage.getItem('user')).name;
        this.apiService.post('/employ/v1/loadDataEmploy', { "login": name }, function (result) {
            _this.dataEmploy = result.data;
            switch (_this.rolePk) {
                case 1:
                    _this.loadsupervisor();
                    _this.loadAllArea();
                    _this.isLoadMore = false;
                    break;
                case 2:
                    _this.loadAllOfficerBySupervisorEmploy(_this.dataEmploy.employPk);
                    break;
                case 3:
                    _this.toggleView();
                    _this.getContacts(_this.dataEmploy.employPk, _this.dataEmploy.nameEmploy);
                    break;
                default:
                    break;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ChatComponent.prototype.selectOfficer = function (e, idOfficer, nameOfficer) {
        this.toggleView();
        this.getContacts(idOfficer, nameOfficer);
    };
    ChatComponent.prototype.goBackView = function () {
        this.toggleView();
        this.messages = [];
        this.contacts = [];
        this.tempMessages = false;
    };
    ChatComponent.prototype.getOfficer = function () {
        var _this = this;
        this.apiService.post('/employ/v1/loadAllOfficerEmploy', {}, function (result) {
            _this.officers = result.data;
        });
    };
    ChatComponent.prototype.getContacts = function (idOfficer, nameOfficer) {
        var _this = this;
        this.officer = idOfficer;
        this.indexCustomer = null;
        this.nameOfficer = nameOfficer;
        this.apiService.post('/chat/v1/contacts', {
            "idOfficer": idOfficer
        }, function (result) {
            _this.contacts = result.data;
            _this.contactsTemp = result.data;
            _this.messages = [];
            _this.indexCustomer = null;
        }, function (error) {
            console.log(error);
        });
    };
    ChatComponent.prototype.toggleView = function () {
        this.sectionView1 = !this.sectionView1;
        this.sectionView2 = !this.sectionView2;
    };
    ChatComponent.prototype.searchContact = function (filterValue) {
        if (filterValue.length == 0)
            this.contacts = this.contactsTemp;
        this.contacts = this.contacts.filter(function (contact) {
            return contact.name.toLowerCase()
                && contact.name.toLowerCase().indexOf(filterValue.trim().toLowerCase())
                    !== -1;
        });
    };
    ChatComponent.prototype.searchOfficers = function (filterValue) {
        if (filterValue.length == 0)
            this.officers = this.officersTemp;
        this.officers = this.officers.filter(function (itemOfficer) {
            return itemOfficer.nameEmploy.toLowerCase()
                && itemOfficer.nameEmploy.toLowerCase().indexOf(filterValue.trim().toLowerCase())
                    !== -1;
        });
    };
    ChatComponent.prototype.loadMessages = function (customer, index) {
        var _this = this;
        this.customerSave = customer;
        var $this = this;
        this.indexCustomer = index;
        this.page = 0;
        this.messages = [];
        this.customerSelect = customer.name;
        this.idChat = customer.idChat;
        if (customer.pages.length > 0) {
            this.tempMessages = true;
            this.apiService.post('/chat/v1/messages', {
                "idChat": customer.idChat,
                "page": customer.pages[this.page++].date
            }, function (result) {
                _this.messages = result.data;
                if (_this.messages.length) {
                    var lastMsg = _this.messages[_this.messages.length - 1];
                    _this.scrollWithJquery();
                    _this.contacts[_this.indexCustomer].lastUpdate =
                        lastMsg.msgDate + ' ' + lastMsg.msgHour;
                }
                setTimeout(function () {
                    $this.autoload($this);
                }, 20);
            });
        }
    };
    ChatComponent.prototype.autoload = function ($this) {
        var el = $("#contentMsg")[0];
        el.scrollTop = el.scrollHeight;
        if (el.scrollHeight <= $(el).height()) {
            $this.loadMorePages(function () {
                setTimeout(function () {
                    $this.autoload($this);
                }, 20);
            });
        }
    };
    ChatComponent.prototype.loadMorePages = function (callback) {
        var _this = this;
        if (this.indexCustomer != null && this.page < this.contacts[this.indexCustomer].pages.length && !this.isLoadMore) {
            var customer = this.contacts[this.indexCustomer];
            if (customer.pages.length > 0) {
                var el_1 = $("#contentMsg")[0];
                var scHeight = el_1.scrollHeight;
                this.isLoadMore = true;
                this.apiService.post('/chat/v1/messages', {
                    "idChat": customer.idChat,
                    "page": customer.pages[this.page++].date
                }, function (result) {
                    _this.messages = result.data.concat(_this.messages);
                    setTimeout(function () {
                        el_1.scrollTop = el_1.scrollHeight - scHeight;
                    }, 20);
                    if (callback) {
                        callback();
                    }
                    _this.isLoadMore = false;
                }, function (error) {
                    console.log(error);
                    _this.isLoadMore = false;
                });
            }
        }
    };
    ChatComponent.prototype.reloadClients = function (e) {
        e.preventDefault();
        this.getContacts(this.officer, this.nameOfficer);
    };
    ChatComponent.prototype.scrollWithJquery = function () {
        var $this = this;
        var el = $("#contentMsg")[0];
        $(el).scroll(function () {
            var height = el.scrollTop;
            if (height === 0) {
                $this.loadMorePages(null);
            }
        });
    };
    ChatComponent.prototype.reloadMessages = function (e) {
        var _this = this;
        e.preventDefault();
        this.messages = [];
        var index = this.indexCustomer;
        this.indexCustomer = null;
        this.apiService.post('/chat/v1/pages', {
            "idChat": this.contacts[index].idChat
        }, function (result) {
            _this.indexCustomer = index;
            _this.contacts[index].pages = result.data;
            _this.loadMessages(_this.customerSave, _this.indexCustomer);
        }, function (error) {
            _this.indexCustomer = index;
            console.log(error);
        });
    };
    ChatComponent.prototype.searchMessage = function (filterValue) {
        this.resultsMsg = this.messages.filter(function (message) {
            if (filterValue) {
                return message.msgText && message.msgText.indexOf(filterValue) !== -1;
            }
        });
    };
    ChatComponent.prototype.loadAllArea = function () {
        var _this = this;
        this.apiService.post('/area/v1/loadAllArea', {
            "state": "A"
        }, function (result) {
            _this.allAreas = result.data;
            _this.areas = _this.allAreas;
        }, function (error) {
            console.log(error);
        });
    };
    ChatComponent.prototype.filterArea = function (filterValue) {
        this.areas = this.allAreas.filter(function (item) { return item.name.toLowerCase().indexOf(filterValue.toLowerCase()) > -1; });
    };
    ChatComponent.prototype.loadsupervisor = function () {
        var _this = this;
        this.apiService.post('/employ/v1/loadlAllSupervisorEmploy', {}, function (result) {
            _this.allSupervisores = result.data;
            _this.supervisores = _this.allSupervisores;
        });
    };
    ChatComponent.prototype.filterSupervisor = function (filterValue) {
        this.supervisores = this.allSupervisores.filter(function (item) { return item.nameEmploy.toLowerCase().indexOf(filterValue.toLowerCase()) > -1; });
    };
    ChatComponent.prototype.loadAllSupervisorAndOfficersByAreaEmploy = function (areaPk) {
        this.loadAllSupervisorByAreaEmploy(areaPk);
        this.loadAllOfficerByAreaEmploy(areaPk);
    };
    ChatComponent.prototype.loadAllSupervisorByAreaEmploy = function (areaPk) {
        var _this = this;
        this.apiService.post('/employ/v1/loadAllSupervisorByAreaEmploy', {
            "areaPk": areaPk
        }, function (result) {
            _this.allSupervisores = result.data;
            _this.supervisores = _this.allSupervisores;
        });
    };
    ChatComponent.prototype.loadAllOfficerByAreaEmploy = function (areaPk) {
        var _this = this;
        this.apiService.post('/employ/v1/loadAllOfficerByAreaEmploy', {
            "areaPk": areaPk
        }, function (result) {
            _this.officers = result.data;
        });
    };
    ChatComponent.prototype.loadAllOfficerBySupervisorEmploy = function (employPk) {
        var _this = this;
        this.apiService.post('/employ/v1/loadAllOfficerBySupervisorEmploy', {
            "employPk": employPk
        }, function (result) {
            _this.officers = result.data;
            _this.officersTemp = result.data;
        }, function (error) {
            console.log(error);
        });
    };
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/chat/chat.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_config_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _app_config_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/chat/item/item.component.html":
/*!***********************************************!*\
  !*** ./src/app/chat/item/item.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"item\">  \n  <div *ngIf=\"item.idChat || item.idOfficer\" (click)=\"loadCustByOffi(item, $event)\" style=\"cursor: pointer\"  class=\"flex flex-r flex-g\">\n    <div class=\"img-row\">\n      <img *ngIf=\"item.resourceId\" src=\"{{ this.apiService.urlGet('/resource/v1/load/' + item.resourceId)}}\"/>\n      <svg *ngIf=\"!item.resourceId\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 212 212\" width=\"212\" height=\"212\">\n        <path fill=\"#DFE5E7\" d=\"M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z\"></path><g fill=\"#FFF\"><path d=\"M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 0 0-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-1.215-5.494 36.68 36.68 0 0 0-3.648-8.298 35.923 35.923 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z\"></path></g>\n      </svg>\n    </div>\n    <div class=\"flex-c flex-g\">\n      <div class=\"chat-group flex-r\">\n        <div class=\"title\">{{ item.name }}</div>\n        <div class=\"hour\">{{ item.lastUpdate || \"\" }}</div>\n      </div>\n      <div class=\"subtitle\">{{ item.mobile }}</div> \n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/chat/item/item.component.scss":
/*!***********************************************!*\
  !*** ./src/app/chat/item/item.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  border-top: 1px solid #f2f2f2;\n  padding-top: 12.5px;\n  padding-bottom: 12.5px;\n  padding-left: 5px;\n  padding-right: 5px;\n  width: 100%;\n  overflow: hidden; }\n  .item.it-select {\n    background-color: #e9ebeb; }\n  .item .flex {\n    display: -webkit-box;\n    display: flex; }\n  .item .flex-c {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; }\n  .item .flex-r {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row; }\n  .item .flex-g {\n    -webkit-box-flex: 1;\n            flex-grow: 1; }\n  .item .img-row {\n    margin-right: 5px; }\n  .item .img-row img {\n      border-radius: 50%;\n      height: 40px;\n      width: 40px; }\n  .item .img-row svg {\n      height: 40px;\n      width: 40px; }\n  .item .chat-group {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-flex: 1;\n            flex-grow: 1; }\n  .item .chat-group .title {\n      -webkit-box-flex: 1;\n              flex-grow: 1;\n      font-size: 17px;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n  .item .chat-group .hour {\n      -webkit-box-flex: 0;\n              flex: none;\n      font-size: 12px;\n      color: rgba(0, 0, 0, 0.4);\n      margin-top: 3px;\n      margin-left: 6px; }\n  .item .row-right {\n    text-align: right;\n    margin-left: 30px;\n    margin-right: 30px;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center; }\n  .item .row-right a > i {\n      display: inline-block;\n      line-height: 46px;\n      vertical-align: middle;\n      font-size: 20px;\n      color: #C7C7CC; }\n  .item .subtitle {\n    -webkit-box-flex: 0;\n            flex: none;\n    font-size: 14px;\n    color: #C7C7CC; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N5bm9wc2lzL0VzY3JpdG9yaW8vUHJ1ZWJhIEZpbmFsL2lnLXdlYi1hcHAvc3JjL2FwcC9jaGF0L2l0ZW0vaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQixFQUFBO0VBVHBCO0lBV1EseUJBQXlCLEVBQUE7RUFYakM7SUFjUSxvQkFBYTtJQUFiLGFBQWEsRUFBQTtFQWRyQjtJQWlCUSw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQixFQUFBO0VBakI5QjtJQW9CUSw4QkFBbUI7SUFBbkIsNkJBQW1CO1lBQW5CLG1CQUFtQixFQUFBO0VBcEIzQjtJQXVCUSxtQkFBWTtZQUFaLFlBQVksRUFBQTtFQXZCcEI7SUEwQlEsaUJBQWlCLEVBQUE7RUExQnpCO01BNEJZLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osV0FBVyxFQUFBO0VBOUJ2QjtNQWlDWSxZQUFZO01BQ1osV0FBVyxFQUFBO0VBbEN2QjtJQXNDUSxvQkFBYTtJQUFiLGFBQWE7SUFDYixtQkFBWTtZQUFaLFlBQVksRUFBQTtFQXZDcEI7TUF5Q1ksbUJBQVk7Y0FBWixZQUFZO01BQ1osZUFBZTtNQUNmLG1CQUFtQjtNQUNuQixnQkFBZ0I7TUFDaEIsdUJBQXVCLEVBQUE7RUE3Q25DO01BZ0RZLG1CQUFVO2NBQVYsVUFBVTtNQUNWLGVBQWU7TUFDZix5QkFBeUI7TUFDekIsZUFBZTtNQUNmLGdCQUFnQixFQUFBO0VBcEQ1QjtJQXdEUSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CLEVBQUE7RUE1RDNCO01BOERZLHFCQUFxQjtNQUNyQixpQkFBaUI7TUFDakIsc0JBQXNCO01BQ3RCLGVBQWU7TUFDZixjQUFjLEVBQUE7RUFsRTFCO0lBc0VRLG1CQUFVO1lBQVYsVUFBVTtJQUNWLGVBQWU7SUFDZixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaGF0L2l0ZW0vaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2YyZjJmMjtcbiAgICBwYWRkaW5nLXRvcDogMTIuNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMi41cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgJi5pdC1zZWxlY3R7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWViZWI7XG4gICAgfVxuICAgIC5mbGV4e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAuZmxleC1je1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICAuZmxleC1ye1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIH1cbiAgICAuZmxleC1ne1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgfVxuICAgIC5pbWctcm93e1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIH1cbiAgICAgICAgc3Zne1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNoYXQtZ3JvdXB7ICAgXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgfVxuICAgICAgICAuaG91cntcbiAgICAgICAgICAgIGZsZXg6IG5vbmU7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAucm93LXJpZ2h0e1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYSA+IGl7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDZweDtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBjb2xvcjogI0M3QzdDQztcbiAgICAgICAgfVxuICAgIH1cbiAgICAuc3VidGl0bGV7XG4gICAgICAgIGZsZXg6IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6ICNDN0M3Q0M7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/chat/item/item.component.ts":
/*!*********************************************!*\
  !*** ./src/app/chat/item/item.component.ts ***!
  \*********************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/config/api.service */ "./src/app/config/api.service.ts");
/* harmony import */ var _app_config_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/config/shared.service */ "./src/app/config/shared.service.ts");
/* harmony import */ var _app_config_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/config/shared */ "./src/app/config/shared.ts");





var ItemComponent = /** @class */ (function () {
    function ItemComponent(apiService, sharedService) {
        this.apiService = apiService;
        this.sharedService = sharedService;
        this.clickEvt = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.user = sharedService.get(_app_config_shared__WEBPACK_IMPORTED_MODULE_4__["SharedVariable"].USER);
    }
    ItemComponent.prototype.ngOnInit = function () {
    };
    ItemComponent.prototype.loadCustByOffi = function (item, e) {
        e.preventDefault();
        this.clickEvt.emit({
            item: this.item,
            index: this.index
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ItemComponent.prototype, "clickEvt", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ItemComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ItemComponent.prototype, "index", void 0);
    ItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'chat-item',
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/chat/item/item.component.html"),
            styles: [__webpack_require__(/*! ./item.component.scss */ "./src/app/chat/item/item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_config_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _app_config_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./src/app/chat/message/message.component.html":
/*!*****************************************************!*\
  !*** ./src/app/chat/message/message.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"msg-row\">\n  <div class=\"message text-center\" [ngClass]=\"[message.modeMsg]\">\n    <div class=\"title-user\">{{ message.toUser }}</div>\n  \t<div *ngIf=\"message.image && !message.hasVideo\" class=\"text-center image\">\n  \t\t<img src=\"{{ 'data:image/png;base64,'+message.image }}\"/>\n  \t</div>\n    <div *ngIf=\"message.msgText\" class=\"text-left message-text\" [innerHTML]=\"this.apiService.msgWithToken(message.msgText) | safeHTML\"></div>\n    <div *ngIf=\"message.audio\"> \n      <audio controls src=\"{{ 'data:audio/ogg;base64,'+message.audio }}\" preload=\"auto\" type=\"audio/mp3\"></audio> \n    </div>\n    <div *ngIf=\"message.hasVideo\">\n      <video width=\"320\" height=\"240\" controls>\n        <source src=\"{{ this.apiService.urlGet('/resource/v1/video/' + message.idMessage) }}\" type=\"video/mp4\">\n        Your browser does not support the video tag.\n      </video>\n    </div>\n    <div *ngIf=\"message.fileDownload\">\n      <div class=\"item-download\">\n        <div class=\"download-icon im-icon-{{ message.fileDownload.extension }}\"></div>\n        <div class=\"download-text\" [innerHTML]=\"message.fileDownload.name\"></div>\n        <div *ngIf=\"message.fileDownload.hasDownload\" class=\"download-button\">\n          <a href=\"{{ this.apiService.urlGet('/resource/v1/download/' + message.fileDownload.key + '/' + message.fileDownload.name + '/' )  }}\"><svg id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 34 34\" width=\"34\" height=\"34\"><path fill=\"#263238\" fill-opacity=\".5\" d=\"M17 2c8.3 0 15 6.7 15 15s-6.7 15-15 15S2 25.3 2 17 8.7 2 17 2m0-1C8.2 1 1 8.2 1 17s7.2 16 16 16 16-7.2 16-16S25.8 1 17 1z\"></path><path fill=\"#263238\" fill-opacity=\".5\" d=\"M22.4 17.5h-3.2v-6.8c0-.4-.3-.7-.7-.7h-3.2c-.4 0-.7.3-.7.7v6.8h-3.2c-.6 0-.8.4-.4.8l5 5.3c.5.7 1 .5 1.5 0l5-5.3c.7-.5.5-.8-.1-.8z\"></path></svg></a>\n        </div>\n      </div>\n      <div class=\"d-block\">\n        <div *ngIf=\"message.fileDownload.extension\" class=\"date pull-left d-inline\">\n          {{ message.fileDownload.extension | uppercase }}\n          <span class=\"im-down-size\"> {{ message.fileDownload.size }} </span>\n        </div>\n        <div *ngIf=\"!message.fileDownload.extension\" class=\"date pull-left d-inline\">\n          {{ message.fileDownload.size }}\n        </div>\n        <div class=\"date pull-right d-inline\">{{ message.msgDate }} {{ message.msgHour }}</div>\n      </div>\n    </div>\n    <div *ngIf=\"!message.fileDownload\">\n      <div class=\"date text-right\">{{ message.msgDate }} {{ message.msgHour }}</div>\n    </div>\n    \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/chat/message/message.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/chat/message/message.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".msg-row {\n  padding-left: 5%;\n  padding-right: 5%;\n  margin-bottom: 12px;\n  float: right;\n  width: 100%; }\n  .msg-row::after {\n    clear: both; }\n  .msg-row .title-user {\n    text-align: left;\n    font-size: 12px; }\n  .msg-row .message {\n    max-width: 95%;\n    border-radius: 7.5px;\n    box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);\n    padding: 6px 7px 8px 9px;\n    overflow-x: hidden; }\n  .msg-row .message.in {\n      background-color: #fff;\n      float: left; }\n  .msg-row .message.out {\n      background-color: #dcf8c6;\n      float: right; }\n  .msg-row .message .date {\n      font-size: 12px;\n      color: rgba(0, 0, 0, 0.4); }\n  .msg-row .message .image {\n      width: 330px;\n      display: inline-block; }\n  .msg-row .message .image img {\n        width: 100%; }\n  .msg-row .message video {\n      height: auto; }\n  .msg-row .item-download {\n    box-sizing: border-box;\n    width: 276px;\n    cursor: pointer;\n    padding: 13px 19px;\n    background-color: #cfe9ba;\n    border-radius: 6px;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    -webkit-box-align: center;\n            align-items: center; }\n  .msg-row .item-download [class*=\" im-icon-\"] {\n      background-repeat: no-repeat;\n      background-size: contain;\n      height: 30px;\n      width: 26px;\n      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA8CAYAAADL94L/AAAByElEQVR4Ae3axdJTQRAFYFyegA3u8ALseCDcicsGhxt3x+G32BXc3X3NBnfXYTqp3sZlhuqpOlXZRL46He9ReJyJxGSTEreaPfEHZiX+1uSJvelVNu+Jvjd7Yk9zI8aSUe0eDpjCIYfNSuw5v/zF5In/6mU27478tXriLJvXjdSwPq1lCDTCmxjiCNav8GZYBVMwWKagX8kWjk9vCcMhYWhEFEw1+oV0wZjdPKY6Vn9EwmBDTYPwBoXCYPLGDQTJjkHQNQRJj0FQtmgs+C8wOHIIkh2DoDu5vD5Xfkz9hsTBWDyxhjDYUDqvLRYSY1JilSQGyyxXOt4QKJPX70NDQmI27gyxHcn9bH/5RFMNAUgoDI4afOAMHBiCdiDNj5woGAhgsCEYudSI1lBCRwoPL957slAoDDYEoPXb/ZVs3FE/y9072fDxsx4BMPVfGOpl1VY/y5++4EWM1Fm9LcCKpy8RpnchDGEIQxjCEIYwhCEMYQhDGMIQhjCEIQxhCEMYwhCGMIQhDGEIQxhYNlXiP+XHXLRDM5thQVpyzIfS2YtLceVEkRmzalsgMArPhp258bA6b/LEb8LqPM930VNdvY/fhMmCxw+Of+4BTcPInBo2AAAAAElFTkSuQmCC); }\n  .msg-row .item-download .download-icon {\n      -webkit-box-flex: 0;\n              flex: none; }\n  .msg-row .item-download .download-text {\n      -webkit-box-flex: 1;\n              flex: 1;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      padding: 0 10px;\n      text-align: left; }\n  .msg-row .item-download .download-button {\n      -webkit-box-flex: 0;\n              flex: none; }\n  .msg-row .item-download:hover {\n      color: inherit; }\n  .msg-row [class*=\" im-icon-doc\"] {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA8CAMAAAD8KXLNAAAAulBMVEUAAACPw/ePw/lgqvVfqvaUx/mQxPhfqfWjz/lfqfVfqvZgp/9cp/ZfqvZgqvaayPpTpPVfqvVjpvNgqfaQw/mjzvq42PdfqvZgqvZiq/ZwsveRxflkqe9rsPdcqPZeqPRorvfN5fzw9/5bp/Z2tvdZoOqTxvqCuvPj8P7+//+QxPmBvfl3su+Pw/lWpfWx1fuJwPlUpPWVxvnp8/7////4+/9ure3C3/uq0fvb7P1usffn8v15tfFMmOceGILeAAAAF3RSTlMAIdHm7ijJ+JH8eQeTzaw68foX1Ll9kGZdllAAAAEQSURBVHgB7dZVcsMwFIVhhTkp5krmMJcZ9r+sMl7PEczopfC/f7ZFtoUQreZuWVepJ3g73VKtoSvaKzDS6kp9abSsMtQumQ1HtYbZcCSl2TBkZRiyNU+o4m6WxYqzeUIFd/P0eO7m6fGsDUNmQ+lsypA0ll6E4XdkYSbrTTj96AlJczSJ1rOP7vrQsFt9dl/HBnX8y00Cg0YFqBtkKJuDbgdEwMSLM9Cp9GnUCWoD54AOYH7XZwRDhtQRagVNfA5azKXX9RmirpGRaowKfM6bt/NDekPZYa6rIAEGz/VwNfJvskGuy3FimAOVzzhvlA+Z//f1vyltu5p90Sw5mq2eEG1H03759e+Ua7aVO82WeASxdDP0M8Z9fAAAAABJRU5ErkJggg==) !important; }\n  .msg-row [class*=\" im-icon-xls\"] {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA8CAMAAAD8KXLNAAAAulBMVEUAAACK4K5X0otX14eI362F3aqG4q1X0Yqe5LxX0YpW0otT0YhS0YdW0otW0otX0otY0Iug5Lqg5r2e5byf3rr///9O0IVR0IdU0YlX0otV0opV0YpKz4L+//5S0YjJ8dqK4K7p+fCQ4rKI36x426KL4K5t15p12qDT9OFy2Z5Lz4JXyIdZzotb046r6MVY0oz9/v2D3qpo15e47M593KXc9uj4/fqh5r5PxYHL8dvP8t687dCd5bue5bzVEOpnAAAAFXRSTlMAwekIyxwk+JHcffGW/KzN0Ss+eo5vCipPAAABZklEQVR4Ae3WhfaqMACA8dn1T3VBd9jd+v6PZY/L2YExbtdnKz8aAQBQar43eH18ArbKW7HGbVioMKT0JvFThh6LXorZxmRQ7VXAMIgPqDHLldyGTimPuaFqfmOWq/kNXSZxQ6ckaByTQQJm6TFIyoz4thlHQmbg2p4XR5II8mdOVPkzMny0HURtu9RkpUSpdWrE6//VBqnpoUQjS87mmNbGUZIMkfYwvZ0uJxjla83aurWG0Iq35pow6F0zIJz5vagg5BpDQRjjBYTzPqYhxeCbEbm+PUDN1yUaGf0Io8uyfDcyTc8yE0wIuZo5IjQ84RtrfGsF4WIcy/ru2xROb2nPVxrfhMvAdV0DQjNwacEy/A7r4BdtU6wi1L/tbyqiqZhvVvatEMKTZ39pxTVa4rrWvvc2naYFDcbQXGeWlhNQwhiM0sN/zv/1f1N8zWs6oFnMaVptAF5ympf7pf9HqyZa671ZAhesTDDT4wdnEAAAAABJRU5ErkJggg==) !important; }\n  .msg-row .im-icon-pdf {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA8CAMAAAD8KXLNAAAAvVBMVEUAAAD3d3fxRkbyRkbyRkb3fn74g4PyRUX3lZXzRUXyRUX/RkbyQED3fn7zRUX2iYn/Rkb4lpb0cHDvQEDzRETzRkbzQEDzQkLzOzv////939/yODj2enr4kJD0UVHzPT38xMT92tr5lZX1ZGT+6+v4g4P1bW35m5v7yMj91dX3fn76sLD1XFz6qan//f36trb+5OT0VVX6rKz7vb3yNDT4iIj/9vb0TEz5o6PtTEzlRUXsYWHiNzfyRETsSEiKDgROAAAAFHRSTlMAH+Z5+80n+JHu0AWTv6w6CX3V/BbNCjoAAAHfSURBVHgB7daDsisxGMDxHNtftLZqu+//WDebOu1p08H1f7D8zRoIoferx4djXb4htYvXy7vrI32NXi4U8v6KjzcbFTcKer48bQplS3dYwyhbwhpGRTpGRZpGoNvzjUT6RkU6RkX6RiJNM7dUhE/2NYkVhDU2lCgIa6DxxNr0eathBPoab5re6xjJ1pkaRu2XmP8GiIzKCSrHAW9NiKhiwKnKsFkukRMOZaWCVnWZA7uGxEaZn6UDApBGYjz3ekDFZtrGoig1FRPwZXnoQoXL6p0qwSTjy9pdxdicG41K1ue8g6kwRiWLOPcHQDzO84aoE7N9M2SMWX1eD11hal0zNMQ8tzQ2c0UU75saBXB9zhMmTJthsyc2J7cTuIRSQQ5sxzRZK9oYN4x4VGXCDMtz14IDxiusntiM0SILQ6oG71umMLKcHTCL+rEL+qZe5iWUwta+hUwYz7btoCAHTCdJEgcTgKUxY84NfPwc1AihABhLM+x2N+c6oICXqWa5RJo8bTQ59x04YgJhYMvIMnnvfGtivxmsTdr0RbmNCca0ZjR7FCtGNnCcAd6aEIELyhLFABXb35qg62k59v9d9d/8MnN5fa75QFeXZ5qvN4SezzTPCKEn8et/p9vD49UT+gEdNgrQ89qG8QAAAABJRU5ErkJggg==) !important; }\n  .msg-row .im-icon-txt {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA8CAMAAAD8KXLNAAAAvVBMVEUAAACfsLihsrl5kJp4kJultrygsrl5j5uzv8Z4kJp4kJt1jZmhsrh4j5t0i6J4kJusucB5kJp5kJt5kJt/n59/mZlviJSzv8Wvu8H///91jZh4j5pzi5d3jpl5kJv6+vuhsrmuvMJ+lJ5yipaktLvAys/FztN7kZyaq7OJnaaNoKn+/v/7/P21wcfr7vDx8/Tt8fKHm6WVp6+RpK3f5OequL+DmKLP1tra4ON7kJtviJSesLduh5N1ipNrgYvfIttIAAAAGXRSTlMA0crm/Cgh+JHueZO/rAXNOvQX1AgK8X2QgEGk0gAAAcVJREFUeAHt1IWS2zAUBVAvM5T7BM/MYeb//6zeLIRBmh0o3ZBgjsiOHcf5dvvl5lDOnp3NfH44uzo/ED28v9wgXx/4cPTQO91Ad2fHjbcx06dzA7MxE7OJAbI3QNYG6MLeeCcX1gbo0t5geaaGFwbLMzNSZhvIwIg82kB8NFq0NhAfjxDNbLwIEBtEq+kys58wRpGLTK5hLDP6oPlv5DLz8qJtreOAQUUzol/KG2hhRJHE76nm1SSJWLKuxkk3X3bEhV41YUSL1FsJvgotMpfIb9MirheuGY9ct1JSWXHLRptrRIniAdGA2/MOotJ1y/pYLQ2SBgG36lQrUEhVF4PmXkluFqIuMWGNA3RsnUHYhmkK7FSnfaIOpukLOe9owYTb54aoF6MZCTEyUm+Kl465USgcMkAJIVXFFmbkYd+VXFsYHWAz8+1YmNDHLC5VvNDYiLxBFGNLnVQYmxhnFqCKU5BmRmc4AF+EL7eQOGIaL0ZyB6sKtOxhhQkfNLoX+VEgWfa6vl+8zOf7fopfNER6p2EplHj5VUppRgQKbw3i/7Pqv/mjzNmVrfnh3J5Zmu/PjnNnae4cx3m8fbq5Ms3N0+2j8ws7X1cWmnQE/gAAAABJRU5ErkJggg==) !important; }\n  .msg-row [class*=\" im-icon-ppt\"] {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA8CAMAAAD8KXLNAAAAvVBMVEUAAAD72HT712j4yTf4yTj52nn72XX4yDj73475yTn/yjT3xzr4yTn5yDn5xzH63IL4yDn4yDj62Hb4xCr84I755Kj5yDT5yTj////5yDf5yTn823j5xzD5xi75xiz5xSr72XX60FD//vv6zET6yz796az/++/tvjL6zkr84I797bz6yjn+89LzxTzzxDb84pTyzFv96rT71mnuxUr+9dz10Wb834v72HH+9Nb+9drruCP73ID+9+H856b85Jt3fPirAAAAFnRSTlMA0Rx5/CbJ+JHtB+TNrJI6l9S58X2QIoLA1AAAAW5JREFUeAHt1oN6A0EUQOGJnXq0ZmzV7/9YvXXXe2udj4N/EW0IIc3SQSOt1h4JV+w0auW0JofFEGl2ZHpiYlZDaL+RbcxqJWBq5WwTRhLKNnB5eANnwhtAWAMVKngDCG/g8vAGzoQ3gHKajRJCMrPpCkwAZRsxnZvKc4BkDtRbzTdPzU9yGGjae+68ns+MXmSAwfYzDDWyo0FDrW1Wg61FA0a/sHlWtqK92ajL8enY59w/i+t2AdaXasAw13FGQ849tx/NWXA+HDmOywJGCkoNMFcGjWZ4YGBBRN4fpt0ancnbKJPPC+qt0WAm1QiLUazRZkNLZTijX/NLhapYw23P0pEGWitCIA00EAxp7EWfIs+zViiTOOP1YRvK+IpQce8PXVpwXSgDSCA+bwaNpqeYpO+Pu0g18HWMNvZTTULvaSTdzQZJzXZUxhhAanL07b/X/6ZVw5pjUmohzRH8Re8iTffur3+7Uctbo11qkhvyszc0CTNWCAAAAABJRU5ErkJggg==) !important; }\n  .msg-row .im-down-size::before {\n    display: inline-block;\n    content: \" \\2022 \";\n    margin: 0 4px; }\n  .message-text {\n  font-size: 14px;\n  margin: 8px 0;\n  color: rgba(0, 0, 0, 0.7);\n  line-height: 1.2; }\n  .title-user {\n  font-weight: 500; }\n  .msg-row {\n  margin-top: 7px;\n  margin-bottom: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N5bm9wc2lzL0VzY3JpdG9yaW8vUHJ1ZWJhIEZpbmFsL2lnLXdlYi1hcHAvc3JjL2FwcC9jaGF0L21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXLEVBQUE7RUFMZjtJQU9RLFdBQVcsRUFBQTtFQVBuQjtJQVVRLGdCQUFnQjtJQUNoQixlQUFlLEVBQUE7RUFYdkI7SUFjUSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLDJDQUEyQztJQUMzQyx3QkFBd0I7SUFDeEIsa0JBQWtCLEVBQUE7RUFsQjFCO01Bb0JZLHNCQUFzQjtNQUN0QixXQUFXLEVBQUE7RUFyQnZCO01Bd0JZLHlCQUF5QjtNQUN6QixZQUFZLEVBQUE7RUF6QnhCO01BNEJZLGVBQWU7TUFDZix5QkFBeUIsRUFBQTtFQTdCckM7TUFnQ1ksWUFBWTtNQUNaLHFCQUFxQixFQUFBO0VBakNqQztRQW1DZ0IsV0FBVyxFQUFBO0VBbkMzQjtNQXVDWSxZQUFZLEVBQUE7RUF2Q3hCO0lBMkNRLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDhCQUFtQjtJQUFuQiw2QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHlCQUFtQjtZQUFuQixtQkFBbUIsRUFBQTtFQW5EM0I7TUFxRFksNEJBQTRCO01BQzVCLHdCQUF3QjtNQUN4QixZQUFZO01BQ1osV0FBVztNQUNYLHl0QkFBeXRCLEVBQUE7RUF6RHJ1QjtNQTREWSxtQkFBVTtjQUFWLFVBQVUsRUFBQTtFQTVEdEI7TUErRFksbUJBQU87Y0FBUCxPQUFPO01BQ1AsZ0JBQWdCO01BQ2hCLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIsZUFBZTtNQUNmLGdCQUFnQixFQUFBO0VBcEU1QjtNQXVFWSxtQkFBVTtjQUFWLFVBQVUsRUFBQTtFQXZFdEI7TUEwRVksY0FBYyxFQUFBO0VBMUUxQjtJQThFUSx3eUJBQXd5QixFQUFBO0VBOUVoekI7SUFpRlEsdzVCQUF3NUIsRUFBQTtFQWpGaDZCO0lBb0ZRLDRqQ0FBNGpDLEVBQUE7RUFwRnBrQztJQXVGUSxnaUNBQWdpQyxFQUFBO0VBdkZ4aUM7SUEwRlEsdzZCQUF3NkIsRUFBQTtFQTFGaDdCO0lBNkZRLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsYUFBYSxFQUFBO0VBSXJCO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsZ0JBQWdCLEVBQUE7RUFHbEI7RUFDRSxnQkFBZ0IsRUFBQTtFQUdsQjtFQUNFLGVBQWU7RUFDZixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NoYXQvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1zZy1yb3d7XG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAmOjphZnRlcntcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgfVxuICAgIC50aXRsZS11c2VyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgICAubWVzc2FnZXtcbiAgICAgICAgbWF4LXdpZHRoOiA5NSU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDcuNXB4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDFweCAwLjVweCByZ2JhKDAsIDAsIDAsIDAuMTMpO1xuICAgICAgICBwYWRkaW5nOiA2cHggN3B4IDhweCA5cHg7XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgJi5pbntcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgfVxuICAgICAgICAmLm91dHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2Y4YzY7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgLmRhdGV7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgICAgICB9XG4gICAgICAgIC5pbWFnZXtcbiAgICAgICAgICAgIHdpZHRoOiAzMzBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2aWRlb3tcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgfVxuICAgIH1cbiAgICAuaXRlbS1kb3dubG9hZHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgd2lkdGg6IDI3NnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDEzcHggMTlweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NmZTliYTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBbY2xhc3MqPVwiIGltLWljb24tXCJde1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIHdpZHRoOiAyNnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRE1BQUFBOENBWUFBQURMOTRML0FBQUJ5RWxFUVZSNEFlM2F4ZEpUUVJBRllGeWVnQTN1OEFMc2VDRGNpY3NHaHh0M3grRzMyQlhjM1gzTkJuZlhZVHFwM3NabGh1cXBPbFhaUkw0NkhlOVJlSnlKeEdTVEVyZWFQZkVIWmlYKzF1U0p2ZWxWTnUrSnZqZDdZazl6SThhU1VlMGVEcGpDSVlmTlN1dzV2L3pGNUluLzZtVTI3NDc4dFhyaUxKdlhqZFN3UHExbENEVENteGppQ05hdjhHWllCVk13V0thZ1g4a1dqazl2Q2NNaFlXaEVGRXcxK29WMHdaamRQS1k2Vm45RXdtQkRUWVB3Qm9YQ1lQTEdEUVRKamtIUU5RUkpqMEZRdG1ncytDOHdPSElJa2gyRG9EdTV2RDVYZmt6OWhzVEJXRHl4aGpEWVVEcXZMUllTWTFKaWxTUUd5eXhYT3Q0UUtKUFg3ME5EUW1JMjdneXhIY245YkgvNVJGTU5BVWdvREk0YWZPQU1IQmlDZGlETmo1d29HQWhnc0NFWXVkU0kxbEJDUndvUEw5NTdzbEFvRERZRW9QWGIvWlZzM0ZFL3k5MDcyZkR4c3g0Qk1QVmZHT3BsMVZZL3k1Kys0RVdNMUZtOUxjQ0tweThScG5jaERHRUlReGpDRUlZd2hDRU1ZUWhER01JUWhqQ0VJUXhoQ0VNWXdoQ0dNSVFoREdFSVF4aFlObFhpUCtYSFhMUkRNNXRoUVZweXpJZlMyWXRMY2VWRWtSbXphbHNnTUFyUGhwMjU4YkE2Yi9MRWI4THFQTTkzMFZOZHZZL2ZoTW1DeHcrT2YrNEJUY1BJbkJvMkFBQUFBRWxGVGtTdVFtQ0MpO1xuICAgICAgICB9XG4gICAgICAgIC5kb3dubG9hZC1pY29ue1xuICAgICAgICAgICAgZmxleDogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuZG93bmxvYWQtdGV4dHtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuICAgICAgICAuZG93bmxvYWQtYnV0dG9ue1xuICAgICAgICAgICAgZmxleDogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgW2NsYXNzKj1cIiBpbS1pY29uLWRvY1wiXXtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRE1BQUFBOENBTUFBQUQ4S1hMTkFBQUF1bEJNVkVVQUFBQ1B3L2VQdy9sZ3F2VmZxdmFVeC9tUXhQaGZxZldqei9sZnFmVmZxdlpncC85Y3AvWmZxdlpncXZhYXlQcFRwUFZmcXZWanB2TmdxZmFRdy9tanp2cTQyUGRmcXZaZ3F2WmlxL1p3c3ZlUnhmbGtxZTlyc1BkY3FQWmVxUFJvcnZmTjVmenc5LzVicC9aMnR2ZFpvT3FUeHZxQ3V2UGo4UDcrLy8rUXhQbUJ2Zmwzc3UrUHcvbFdwZld4MWZ1SndQbFVwUFdWeHZucDgvNy8vLy80Ky85dXJlM0MzL3VxMGZ2YjdQMXVzZmZuOHYxNXRmRk1tT2NlR0lMZUFBQUFGM1JTVGxNQUlkSG03aWpKK0pIOGVRZVR6YXc2OGZvWDFMbDlrR1pkbGxBQUFBRVFTVVJCVkhnQjdkWlZjc013RklWaGhUa3A1a3JtTUpjWjlyK3NNbDdQRWN6b3BmQy9mN1pGdG9VUXJlWnVXVmVwSjNnNzNWS3RvU3ZhS3pEUzZrcDlhYlNzTXRRdW1RMUh0WWJaY0NTbDJUQmtaUml5TlUrbzRtNld4WXF6ZVVJRmQvUDBlTzdtNmZHc0RVTm1RK2xzeXBBMGxsNkU0WGRrWVNiclRUajk2QWxKY3pTSjFyT1A3dnJRc0Z0OWRsL0hCblg4eTAwQ2cwWUZxQnRrS0p1RGJnZEV3TVNMTTlDcDlHblVDV29ENTRBT1lIN1had1JEaHRRUmFnVk5mQTVhektYWDlSbWlycEdSYW93S2ZNNmJ0L05EZWtQWllhNnJJQUVHei9Wd05mSnZza0d1eTNGaW1BT1Z6emh2bEErWi8vZjF2eWx0dTVwOTBTdzVtcTJlRUcxSDAzNzU5ZStVYTdhVk84MldlQVN4ZERQME04WjlmQUFBQUFCSlJVNUVya0pnZ2c9PSkgIWltcG9ydGFudDtcbiAgICB9XG4gICAgW2NsYXNzKj1cIiBpbS1pY29uLXhsc1wiXXtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRE1BQUFBOENBTUFBQUQ4S1hMTkFBQUF1bEJNVkVVQUFBQ0s0SzVYMG90WDE0ZUkzNjJGM2FxRzRxMVgwWXFlNUx4WDBZcFcwb3RUMFloUzBZZFcwb3RXMG90WDBvdFkwSXVnNUxxZzVyMmU1YnlmM3JyLy8vOU8wSVZSMElkVTBZbFgwb3RWMG9wVjBZcEt6NEwrLy81UzBZako4ZHFLNEs3cCtmQ1E0cktJMzZ4NDI2S0w0SzV0MTVwMTJxRFQ5T0Z5Mlo1THo0Slh5SWRaem90YjA0NnI2TVZZMG96OS92MkQzcXBvMTVlNDdNNTkzS1hjOXVqNC9mcWg1cjVQeFlITDhkdlA4dDY4N2RDZDVidWU1YnpWRU9wbkFBQUFGWFJTVGxNQXdla0l5eHdrK0pIY2ZmR1cvS3pOMFNzK2VvNXZDaXBQQUFBQlprbEVRVlI0QWUzV2hmYXFNQUNBOGRuMVQzVkJkOWpkK3Y2UFpZL0wyWUV4YnRkbkt6OGFBUUJRYXI0M2VIMThBcmJLVzdIR2JWaW9NS1QwSnZGVGhoNkxYb3JaeG1SUTdWWEFNSWdQcURITGxkeUdUaW1QdWFGcWZtT1dxL2tOWFNaeFE2Y2thQnlUUVFKbTZURkl5b3o0dGhsSFFtYmcycDRYUjVJSThtZE9WUGt6TW55MEhVUnR1OVJrcFVTcGRXckU2Ly9WQnFucG9VUWpTODdtbU5iR1VaSU1rZll3dlowdUp4amxhODNhdXJXRzBJcTM1cG93NkYweklKejV2YWdnNUJwRFFSampCWVR6UHFZaHhlQ2JFYm0rUFVETjF5VWFHZjBJbzh1eWZEY3lUYzh5RTB3SXVabzVJalE4NFJ0cmZHc0Y0V0ljeS9ydTJ4Uk9iMm5QVnhyZmhNdkFkVjBEUWpOd2FjRXkvQTdyNEJkdFU2d2kxTC90YnlxaXFaaHZWdmF0RU1LVFozOXB4VFZhNHJyV3Z2YzJuYVlGRGNiUVhHZVdsaE5Rd2hpTTBzTi96di8xZjFOOHpXczZvRm5NYVZwdEFGNXltcGY3cGY5SHF5WmE2NzFaQWhlc1RERFQ0d2RuRUFBQUFBQkpSVTVFcmtKZ2dnPT0pICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5pbS1pY29uLXBkZntcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRE1BQUFBOENBTUFBQUQ4S1hMTkFBQUF2VkJNVkVVQUFBRDNkM2Z4UmtieVJrYnlSa2IzZm43NGc0UHlSVVgzbFpYelJVWHlSVVgvUmtieVFFRDNmbjd6UlVYMmlZbi9Sa2I0bHBiMGNIRHZRRUR6UkVUelJrYnpRRUR6UWtMek96di8vLy85MzkveU9EajJlbnI0a0pEMFVWSHpQVDM4eE1UOTJ0cjVsWlgxWkdUKzYrdjRnNFAxYlczNW01djd5TWo5MWRYM2ZuNzZzTEQxWEZ6NnFhbi8vZjM2dHJiKzVPVDBWVlg2ckt6N3ZiM3lORFQ0aUlqLzl2YjBURXo1bzZQdFRFemxSVVhzWVdIaU56ZnlSRVRzU0VpS0RnUk9BQUFBRkhSU1RsTUFIK1o1KzgwbitKSHUwQVdUdjZ3NkNYM1YvQmJOQ2pvQUFBSGZTVVJCVkhnQjdkYURzaXN4R01EeEhOdGZ0TFpxdSsvL1dEZWJPdTFwMDhIMWY3RDh6Um9Jb2Zlcng0ZGpYYjRodFl2WHk3dnJJMzJOWGk0VTh2NktqemNiRlRjS2VyNDhiUXBsUzNkWXd5aGJ3aHBHUlRwR1JacEdvTnZ6alVUNlJrVTZSa1g2UmlKTk03ZFVoRS8yTllrVmhEVTJsQ2dJYTZEeHhOcjBlYXRoQlBvYWI1cmU2eGpKMXBrYVJ1MlhtUDhHaUl6S0NTckhBVzlOaUtoaXdLbktzRmt1a1JNT1phV0NWbldaQTd1R3hFYVpuNlVEQXBCR1lqejNla0RGWnRyR29pZzFGUlB3Wlhub1FvWEw2cDBxd1NUank5cGR4ZGljRzQxSzF1ZThnNmt3UmlXTE9QY0hRRHpPODRhb0U3TjlNMlNNV1gxZUQxMWhhbDB6Tk1ROHR6UTJjMFVVNzVzYUJYQjl6aE1tVEp0aHN5YzJKN2NUdUlSU1FRNXN4elJaSzlvWU40eDRWR1hDRE10ejE0SUR4aXVzbnRpTTBTSUxRNm9HNzF1bU1MS2NIVENMK3JFTCtxWmU1aVdVd3RhK2hVd1l6N2J0b0NBSFRDZEpFZ2NUZ0tVeFk4NE5mUHdjMUFpaEFCaExNK3gyTitjNm9JQ1hxV2E1UkpvOGJUUTU5eDA0WWdKaFlNdklNbm52Zkd0aXZ4bXNUZHIwUmJtTkNjYTBaalI3RkN0R05uQ2NBZDZhRUlFTHloTEZBQlhiMzVxZzYyazU5djlkOWQvOE1uTjVmYTc1UUZlWFo1cXZONFNlenpUUENLRW44ZXQvcDl2RDQ5VVQrZ0VkTmdyUTg5cUc4UUFBQUFCSlJVNUVya0pnZ2c9PSkgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmltLWljb24tdHh0e1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFETUFBQUE4Q0FNQUFBRDhLWExOQUFBQXZWQk1WRVVBQUFDZnNMaWhzcmw1a0pwNGtKdWx0cnlnc3JsNWo1dXp2OFo0a0pwNGtKdDFqWm1oc3JoNGo1dDBpNko0a0p1c3VjQjVrSnA1a0p0NWtKdC9uNTkvbVpsdmlKU3p2OFd2dThILy8vOTFqWmg0ajVwemk1ZDNqcGw1a0p2Nit2dWhzcm11dk1KK2xKNXlpcGFrdEx2QXlzL0Z6dE43a1p5YXE3T0puYWFOb0tuKy92LzcvUDIxd2Nmcjd2RHg4L1R0OGZLSG02V1ZwNitScEszZjVPZXF1TCtEbUtMUDF0cmE0T043a0p0dmlKU2VzTGR1aDVOMWlwTnJnWXZmSXR0SUFBQUFHWFJTVGxNQTBjcm0vQ2doK0pIdWVaTy9yQVhOT3ZRWDFBZ0s4WDJRZ0VHazBnQUFBY1ZKUkVGVWVBSHQxSVdTMnpBVUJWQXZNNVQ3Qk0vTVllYi8vNnplTElSQm1oMG8zWkJnanNpT0hjZjVkdnZsNWxET25wM05mSDQ0dXpvL0VEMjh2OXdnWHgvNGNQVFFPOTFBZDJmSGpiY3gwNmR6QTdNeEU3T0pBYkkzUU5ZRzZNTGVlQ2NYMWdibzB0NWdlYWFHRndiTE16TlNaaHZJd0lnODJrQjhORnEwTmhBZmp4RE5iTHdJRUJ0RXEra3lzNTh3UnBHTFRLNWhMRFA2b1BsdjVETHo4cUp0cmVPQVFVVXpvbC9LRzJoaFJKSEU3Nm5tMVNTSldMS3V4a2szWDNiRWhWNDFZVVNMMUZzSnZnb3RNcGZJYjlNaXJoZXVHWTljdDFKU1dYSExScHRyUkluaUFkR0EyL01Pb3RKMXkvcFlMUTJTQmdHMzZsUXJVRWhWRjRQbVhrbHVGcUl1TVdHTkEzUnNuVUhZaG1rSzdGU25mYUlPcHVrTE9lOW93WVRiNTRhb0Y2TVpDVEV5VW0rS2w0NjVVU2djTWtBSklWWEZGbWJrWWQrVlhGc1lIV0F6OCsxWW1OREhMQzVWdk5EWWlMeEJGR05MblZRWW14aG5GcUNLVTVCbVJtYzRBRitFTDdlUU9HSWFMMFp5QjZzS3RPeGhoUWtmTkxvWCtWRWdXZmE2dmwrOHpPZjdmb3BmTkVSNnAyRXBsSGo1VlVwcFJnUUtidzNpLzdQcXYvbWp6Tm1WcmZuaDNKNVptdS9Qam5ObmFlNGN4M204ZmJxNU1zM04wKzJqOHdzN1gxY1dtblFFL2dBQUFBQkpSVTVFcmtKZ2dnPT0pICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFtjbGFzcyo9XCIgaW0taWNvbi1wcHRcIl17XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURNQUFBQThDQU1BQUFEOEtYTE5BQUFBdlZCTVZFVUFBQUQ3MkhUNzEyajR5VGY0eVRqNTJubjcyWFg0eURqNzM0NzV5VG4veWpUM3h6cjR5VG41eURuNXh6SDYzSUw0eURuNHlEajYySGI0eENyODRJNzU1S2o1eURUNXlUai8vLy81eURmNXlUbjgyM2o1eHpENXhpNzV4aXo1eFNyNzJYWDYwRkQvL3Z2NnpFVDZ5ejc5NmF6LysrL3R2akw2emtyODRJNzk3Yno2eWpuKzg5THp4VHp6eERiODRwVHl6RnY5NnJUNzFtbnV4VXIrOWR6MTBXYjgzNHY3MkhIKzlOYis5ZHJydUNQNzNJRCs5K0g4NTZiODVKdDNmUGlyQUFBQUZuUlNUbE1BMFJ4NS9DYkorSkh0QitUTnJKSTZsOVM1OFgyUUlvTEExQUFBQVc1SlJFRlVlQUh0MW9ONkEwRVVRT0dKblhxMFptelY3LzlZdlhYWGUydWRqNE4vRVcwSUljM1NRU090MWg0SlYrdzBhdVcwSm9mRkVHbDJaSHBpWWxaRGFMK1JiY3hxSldCcTVXd1RSaExLTm5CNWVBTm53aHRBV0FNVktuZ0RDRy9nOHZBR3pvUTNnSEthalJKQ01yUHBDa3dBWlJzeG5adktjNEJrRHRSYnpUZFB6VTl5R0dqYWUrNjhucytNWG1TQXdmWXpERFd5bzBGRHJXMVdnNjFGQTBhL3NIbFd0cUs5MmFqTDhlblk1OXcvaSt0MkFkYVhhc0F3MTNGR1E4NDl0eC9OV1hBK0hEbU95d0pHQ2tvTk1GY0dqV1o0WUdCQlJONGZwdDBhbmNuYktKUFBDK3F0MFdBbTFRaUxVYXpSWmtOTFpUaWpYL05MaGFwWXcyM1AwcEVHV2l0Q0lBMDBFQXhwN0VXZklzK3pWaWlUT09QMVlSdksrSXBRY2U4UFhWcHdYU2dEU0NBK2J3YU5wcWVZcE8rUHUwZzE4SFdNTnZaVFRVTHZhU1RkelFaSnpYWlV4aGhBYW5MMDdiL1gvNlpWdzVwalVtb2h6Ukg4UmU4aVRmZnVyMys3VWN0Ym8xMXFraHZ5c3pjMENUTldDQUFBQUFCSlJVNUVya0pnZ2c9PSkgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmltLWRvd24tc2l6ZTo6YmVmb3Jle1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGNvbnRlbnQ6IFwiIFxcMjAyMiBcIjtcbiAgICAgICAgbWFyZ2luOiAwIDRweDtcbiAgICB9XG59XG5cbi5tZXNzYWdlLXRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5cbi50aXRsZS11c2VyIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm1zZy1yb3cge1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/chat/message/message.component.ts":
/*!***************************************************!*\
  !*** ./src/app/chat/message/message.component.ts ***!
  \***************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/config/api.service */ "./src/app/config/api.service.ts");



var MessageComponent = /** @class */ (function () {
    function MessageComponent(apiService) {
        this.apiService = apiService;
    }
    MessageComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MessageComponent.prototype, "message", void 0);
    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'chat-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/chat/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.scss */ "./src/app/chat/message/message.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_config_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/chat/search/search.component.html":
/*!***************************************************!*\
  !*** ./src/app/chat/search/search.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background:white;\">\n <div [ngClass]=\"[message.modeMsg]\">\n \t<hr style=\"margin-bottom:20px; margin-top:0px;\" />\n  \t<div style=\"font-size: 13px;margin-left:20px;\">{{ message.msgDate }} {{ message.msgHour }}</div>\n    <div style=\"line-heigth:1.2; margin-top:10px; color:black; font-size:14px;margin-left:20px;\"*ngIf=\"message.msgText\"  [innerHTML]=\"message.msgText | safeHTML\"></div>\n      <hr style=\"margin-bottom:0px; margin-top:20px;\" />\n </div>\n</div>\n\n\t\t\t\t"

/***/ }),

/***/ "./src/app/chat/search/search.component.scss":
/*!***************************************************!*\
  !*** ./src/app/chat/search/search.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/chat/search/search.component.ts":
/*!*************************************************!*\
  !*** ./src/app/chat/search/search.component.ts ***!
  \*************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchComponent.prototype, "message", void 0);
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'chat-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/chat/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/chat/search/search.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/config/api.service.ts":
/*!***************************************!*\
  !*** ./src/app/config/api.service.ts ***!
  \***************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_config_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/config/shared.service */ "./src/app/config/shared.service.ts");
/* harmony import */ var _app_config_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/config/global */ "./src/app/config/global.ts");
/* harmony import */ var _app_config_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/config/shared */ "./src/app/config/shared.ts");
/* harmony import */ var _layermsg_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layermsg.service */ "./src/app/config/layermsg.service.ts");
/* harmony import */ var _app_handler_handler_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/handler/handler-error.service */ "./src/app/handler/handler-error.service.ts");










var ApiService = /** @class */ (function () {
    function ApiService(http, sharedService, layerMsgService, handlerError) {
        this.http = http;
        this.sharedService = sharedService;
        this.layerMsgService = layerMsgService;
        this.handlerError = handlerError;
        this.excluids = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.excluidsStatic = [];
    }
    ApiService.prototype.endpoint = function (endpoint) {
        return _app_config_global__WEBPACK_IMPORTED_MODULE_5__["GlobalVariable"].BASE_API_URL + endpoint;
    };
    ApiService.prototype.post = function (endpoint, data, onSuccess, onError) {
        var _this = this;
        if (onError === void 0) { onError = function (error) {
            _this.layerMsgService.showMessageError(error);
        }; }
        var headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        };
        var user = this.sharedService.get(_app_config_shared__WEBPACK_IMPORTED_MODULE_6__["SharedVariable"].USER);
        var sessionId = user ? user.getSessionId() : undefined;
        if (user) {
            headers['Authorization'] = sessionId;
        }
        var requestOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headers) };
        return this.http.post(this.endpoint(endpoint), JSON.stringify(data), requestOptions).subscribe(onSuccess, function (error) {
            console.log(error);
            _this.handlerError.handler(error, function () {
                onError(error);
            });
        });
    };
    ApiService.prototype.get = function (endpoint, data) {
        var headers = {
            'Access-Control-Allow-Origin': '*'
        };
        var user = this.sharedService.get(_app_config_shared__WEBPACK_IMPORTED_MODULE_6__["SharedVariable"].USER);
        var sessionId = user ? user.getSessionId() : undefined;
        if (user) {
            headers['Authorization'] = sessionId;
        }
        var requestOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headers), params: data };
        return this.http.get(this.endpoint(endpoint), requestOptions);
    };
    ApiService.prototype.urlGet = function (endpoint) {
        var user = this.sharedService.get(_app_config_shared__WEBPACK_IMPORTED_MODULE_6__["SharedVariable"].USER);
        return this.endpoint(endpoint) + '?Authorization=' + user.getSessionId();
    };
    ApiService.prototype.msgWithToken = function (msg) {
        var user = this.sharedService.get(_app_config_shared__WEBPACK_IMPORTED_MODULE_6__["SharedVariable"].USER);
        return msg.replace(/\[TOKEN\]/g, 'Authorization=' + user.getSessionId());
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
        // tslint:disable: indent
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _app_config_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
            _layermsg_service__WEBPACK_IMPORTED_MODULE_7__["LayermsgService"],
            _app_handler_handler_error_service__WEBPACK_IMPORTED_MODULE_8__["HandlerErrorService"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/config/config.service.ts":
/*!******************************************!*\
  !*** ./src/app/config/config.service.ts ***!
  \******************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfigService = /** @class */ (function () {
    function ConfigService() {
    }
    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/config/global.ts":
/*!**********************************!*\
  !*** ./src/app/config/global.ts ***!
  \**********************************/
/*! exports provided: GlobalVariable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalVariable", function() { return GlobalVariable; });
var GlobalVariable = Object.freeze({
    BASE_API_URL: GlobalVars.getConstant('BASE_API_URL'),
    PERSIST_SESSION: true
});


/***/ }),

/***/ "./src/app/config/layermsg.service.ts":
/*!********************************************!*\
  !*** ./src/app/config/layermsg.service.ts ***!
  \********************************************/
/*! exports provided: LayermsgService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayermsgService", function() { return LayermsgService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_model_control_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/model/control-message */ "./src/app/model/control-message.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_enumeration_enum_status_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/enumeration/enum-status.enum */ "./src/app/enumeration/enum-status.enum.ts");
/* harmony import */ var _app_enumeration_enum_status_error_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/enumeration/enum-status-error.enum */ "./src/app/enumeration/enum-status-error.enum.ts");






var LayermsgService = /** @class */ (function () {
    function LayermsgService() {
        this.timeout = null;
        this.control = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    LayermsgService.prototype.subscribe = function (callback) {
        return this.control.subscribe(callback);
    };
    LayermsgService.prototype.scrollTop = function () {
        var scrollToTop = window.setInterval(function () {
            var pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 20); // how far to scroll on each step
            }
            else {
                window.clearInterval(scrollToTop);
            }
        }, 16);
    };
    LayermsgService.prototype.showMessage = function (options) {
        var _this = this;
        clearTimeout(this.timeout);
        this.scrollTop();
        this.control.next(options);
        this.timeout = setTimeout(function () {
            options.onSuccess();
            _this.control.next(null);
        }, options.delay);
    };
    LayermsgService.prototype.showMessageOk = function (code, onComplete) {
        if (code === void 0) { code = 'Registro exitoso'; }
        if (onComplete === void 0) { onComplete = function () { }; }
        var status = _app_enumeration_enum_status_enum__WEBPACK_IMPORTED_MODULE_4__["EnumStatus"].findByCode(code);
        this.showMessage(new _app_model_control_message__WEBPACK_IMPORTED_MODULE_2__["ControlMessage"](((status && status.value) || code), 'mess_ok', 'fa-check-circle').success(onComplete));
    };
    LayermsgService.prototype.showMessageError = function (error, onComplete) {
        if (error === void 0) { error = 'Ocurrió un error inesperado.'; }
        if (onComplete === void 0) { onComplete = function () { }; }
        var code = '';
        if (error.error && error.error.status) {
            code = error.error.status.code;
        }
        else if (typeof error === 'string') {
            code = error;
        }
        var status = _app_enumeration_enum_status_error_enum__WEBPACK_IMPORTED_MODULE_5__["EnumStatusError"].findByCode(code);
        this.showMessage(new _app_model_control_message__WEBPACK_IMPORTED_MODULE_2__["ControlMessage"](((status && status.value) || code), 'mess_no', 'fa-times-circle').success(onComplete));
    };
    LayermsgService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LayermsgService);
    return LayermsgService;
}());



/***/ }),

/***/ "./src/app/config/parametries.ts":
/*!***************************************!*\
  !*** ./src/app/config/parametries.ts ***!
  \***************************************/
/*! exports provided: Parametries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parametries", function() { return Parametries; });
var Parametries = /** @class */ (function () {
    function Parametries() {
    }
    //EMPLOYEE
    Parametries.PASS_MIN_LENGTH = 8;
    Parametries.PASS_MAX_LENGTH = 15;
    Parametries.NAME_PAT_MAT_MIN_LENGTH = 3;
    Parametries.NAME_MAX_LENGTH = 100;
    Parametries.APE_PAT_MAX_LENGTH = 60;
    Parametries.APE_MAT_MAX_LENGTH = 60;
    Parametries.EMAIL_MAX_LENGTH = 150;
    Parametries.PHONE_MIN_LENGTH = 7;
    Parametries.PHONE_MAX_LENGTH = 12;
    Parametries.MOBILE_MIN_LENGTH = 9;
    Parametries.MOBILE_MAX_LENGTH = 12;
    Parametries.LOGIN_MIN_LENGTH = 5;
    Parametries.LOGIN_MAX_LENGTH = 20;
    Parametries.PATTERN_NUMBER = /^[0-9]*$/;
    Parametries.PATTERN_PASSWORD = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)([A-Za-z\d]){8,60}$/;
    Parametries.PATTERN_PASSWORD_VOID = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)([A-Za-z\d]){8,60}$|^$/;
    Parametries.ALIAS_MIN_LENGTH = 3;
    Parametries.ALIAS_MAX_LENGTH = 30;
    Parametries.PATTERN_ALL_CADENA = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;
    Parametries.PATTERN_LOGIN = /^[a-zA-Z]+$/;
    Parametries.EMPLOYEE_ONLY_NUMBER_AND_CADENA = /[A-Za-z0-9]+/;
    //AREA
    Parametries.AREA_NAME_MIN_LENGTH = 3;
    Parametries.AREA_NAME_MAX_LENGTH = 100;
    Parametries.AREA_ANEXO_MIN_LENGTH = 3;
    Parametries.AREA_ANEXO_MAX_LENGTH = 20;
    Parametries.AREA_PATTERN_ANEXO = /^([0-9]){3}$/;
    Parametries.AREA_ONLY_NUMBER_AND_CADENA = /[A-Za-z0-9]+/;
    Parametries.AREA_PHONE_MIN_LENGTH = 7;
    Parametries.AREA_PHONE_MAX_LENGTH = 12;
    return Parametries;
}());



/***/ }),

/***/ "./src/app/config/shared.service.ts":
/*!******************************************!*\
  !*** ./src/app/config/shared.service.ts ***!
  \******************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_model_state_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/model/state.class */ "./src/app/model/state.class.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global */ "./src/app/config/global.ts");
/* harmony import */ var _app_model_user_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/model/user.class */ "./src/app/model/user.class.ts");





var SharedService = /** @class */ (function () {
    function SharedService() {
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.state = new _app_model_state_class__WEBPACK_IMPORTED_MODULE_2__["State"]();
    }
    SharedService.prototype.set = function (key, value) {
        if (_global__WEBPACK_IMPORTED_MODULE_3__["GlobalVariable"].PERSIST_SESSION) {
            localStorage.setItem(key, JSON.stringify(value));
        }
        this.state[key] = value;
        this.onChange.emit(this.state);
    };
    SharedService.prototype.get = function (key) {
        var value = localStorage.getItem(key);
        if (this.state[key]) {
            value = this.state[key];
        }
        else if (_global__WEBPACK_IMPORTED_MODULE_3__["GlobalVariable"].PERSIST_SESSION && value) {
            var user = JSON.parse(value);
            value = new _app_model_user_class__WEBPACK_IMPORTED_MODULE_4__["User"](user.name, user.sessionId, user.roles, user.area);
        }
        return value;
    };
    SharedService.prototype.remove = function (key) {
        localStorage.removeItem(key);
    };
    SharedService.prototype.subscribe = function (component, callback) {
        return this.onChange.subscribe(function (data) {
            callback(component, data);
        });
    };
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/config/shared.ts":
/*!**********************************!*\
  !*** ./src/app/config/shared.ts ***!
  \**********************************/
/*! exports provided: SharedVariable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedVariable", function() { return SharedVariable; });
var SharedVariable = Object.freeze({
    USER: 'user'
});


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dashboard-header class=\"dashboard\"></dashboard-header>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/header/header.component.html":
/*!********************************************************!*\
  !*** ./src/app/dashboard/header/header.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard-header\">\r\n\t<div class=\"dashboard-header-logo\">\r\n\t\t<a routerLink=\"/dashboard\" routerLinkActive=\"active\">\r\n\t\t\t<img class=\"dashboard-header-logo-image\" src=\"assets/img/logo.jpg\" alt=\"logo\">\r\n\t\t</a>\r\n\t</div>\r\n\t<div class=\"dashboard-header-menu\">\r\n\t\t<ul class=\"dashboard-header-item-wrapper\" *ngFor=\"let nav of navs\">\r\n\t\t\t<li class=\"dashboard-header-item\">\r\n\t\t\t\t{{nav.header}}\r\n\t\t\t\t<mat-icon class=\"dashboard-header-arrow\" matSuffix>keyboard_arrow_down</mat-icon>\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t</li>\t\t\t\r\n\t\t\t<div class=\"dashboard-header-subitem-wrapper\">\r\n\t\t\t\t<ul  *ngFor=\"let item of nav.subitems\">\r\n\t\t\t\t\t<li class=\"dashboard-header-subitem\">\r\n\t\t\t\t\t\t<a md-raised-button\r\n\t\t\t\t\t\t\t[routerLink]=\"['/', item.path]\"\r\n\t\t\t\t\t\t\trouterLinkActive=\"active\" \r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t{{item.subitem}}\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</ul>\r\n\t</div>\r\n\t<div class=\"dashboard-header-options\">\r\n\t\t<div class=\"dashboard-header-option-name\"> Usuario :  {{ name }} | Area :  {{ arename }}</div>  \r\n\t\t\r\n\t\t<a (click)=\"logout()\" routerLink=\"/login\" class=\"dashboard-header-option-logout\">\r\n\t\t\t<img src=\"assets/icons/log-out.svg\" alt=\"salir\" class=\"dashboard-header-icon-logout\">\r\n\t\t\t<span>Salir</span>\r\n\t\t</a>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/header/header.component.scss":
/*!********************************************************!*\
  !*** ./src/app/dashboard/header/header.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard-header {\n  color: #fff;\n  background-color: #EF2A24;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 42px;\n  padding: 0 30px;\n  font-size: 14px; }\n\n.dashboard-header-logo {\n  margin-right: 40px; }\n\n.dashboard-header-logo-image {\n  width: 140px; }\n\n.dashboard-header-menu {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  position: relative;\n  display: -webkit-box;\n  display: flex; }\n\n.dashboard-header-item-wrapper {\n  display: -webkit-box;\n  display: flex;\n  position: relative; }\n\n.dashboard-header-item-wrapper:hover > .dashboard-header-subitem-wrapper {\n    display: block; }\n\n.dashboard-header-item-wrapper:hover .dashboard-header-arrow {\n    -webkit-transform: rotate(-180deg);\n            transform: rotate(-180deg); }\n\n.dashboard-header-item {\n  cursor: pointer;\n  position: relative;\n  height: 42px;\n  min-width: 140px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.dashboard-header-arrow {\n  color: #fff;\n  margin: 10px;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n  -webkit-transition: 0.3s -webkit-transform linear;\n  transition: 0.3s -webkit-transform linear;\n  transition: 0.3s transform linear;\n  transition: 0.3s transform linear, 0.3s -webkit-transform linear; }\n\n.dashboard-header-subitem-wrapper {\n  width: 100%;\n  z-index: 1;\n  border-color: rgba(0, 0, 0, 0.1);\n  border-style: solid;\n  border-width: 0px 1px 1px 1px;\n  position: absolute;\n  background-color: #fff;\n  top: 42px;\n  display: none;\n  z-index: 100; }\n\n.dashboard-header-subitem {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  color: #333;\n  padding: 10px 8px; }\n\n.dashboard-header-subitem:hover {\n    color: #515151;\n    font-weight: 500; }\n\n.dashboard-header-icon-logout {\n  margin-right: 4px;\n  height: 20px; }\n\n.dashboard-header-icon-logout ~ span {\n  line-height: 21px; }\n\n.dashboard-header-options {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.dashboard-header-option-name {\n  padding-right: 20px;\n  border-right: 2px solid #fff; }\n\n.dashboard-header-option-logout {\n  margin-left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N5bm9wc2lzL0VzY3JpdG9yaW8vUHJ1ZWJhIEZpbmFsL2lnLXdlYi1hcHAvc3JjL2FwcC9kYXNoYm9hcmQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsIi9ob21lL3N5bm9wc2lzL0VzY3JpdG9yaW8vUHJ1ZWJhIEZpbmFsL2lnLXdlYi1hcHAvc3JjL3Nhc3MvdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQ0Z3QjtFREd4QixvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLG1CQUFZO1VBQVosWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixvQkFBYTtFQUFiLGFBQWEsRUFBQTs7QUFHZjtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGtCQUFrQixFQUFBOztBQUZwQjtJQUlJLGNBQWMsRUFBQTs7QUFKbEI7SUFPSSxrQ0FBMEI7WUFBMUIsMEJBQTBCLEVBQUE7O0FBSTlCO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdDQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsaURBQWlDO0VBQWpDLHlDQUFpQztFQUFqQyxpQ0FBaUM7RUFBakMsZ0VBQWlDLEVBQUE7O0FBR25DO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxhQUFhO0VBQ2IsWUFBWSxFQUFBOztBQUdkO0VBQ0UsMkNBQTJDO0VBQzNDLFdDL0RlO0VEZ0VmLGlCQUFpQixFQUFBOztBQUhuQjtJQUtJLGNBQWM7SUFDZCxnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDRSxpQkFBaUI7RUFDakIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLG1CQUFtQjtFQUNuQiw0QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi8uLi8uLi8uLi9zYXNzL3ZhcnMuc2Nzcyc7XG5cbi5kYXNoYm9hcmQtaGVhZGVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICRpZy1jb2xvci1wcmltYXJ5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDQycHg7XG4gIHBhZGRpbmc6IDAgMzBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZGFzaGJvYXJkLWhlYWRlci1sb2dvIHtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xufVxuXG4uZGFzaGJvYXJkLWhlYWRlci1sb2dvLWltYWdlIHtcbiAgd2lkdGg6IDE0MHB4O1xufVxuXG4uZGFzaGJvYXJkLWhlYWRlci1tZW51IHtcbiAgZmxleC1ncm93OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kYXNoYm9hcmQtaGVhZGVyLWl0ZW0td3JhcHBlciAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7ICBcbiAgJjpob3ZlciA+IC5kYXNoYm9hcmQtaGVhZGVyLXN1Yml0ZW0td3JhcHBlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgJjpob3ZlciAuZGFzaGJvYXJkLWhlYWRlci1hcnJvdyB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7ICBcbiAgfVxufVxuXG4uZGFzaGJvYXJkLWhlYWRlci1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNDJweDtcbiAgbWluLXdpZHRoOiAxNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRhc2hib2FyZC1oZWFkZXItYXJyb3cge1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAxMHB4O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3MgdHJhbnNmb3JtIGxpbmVhcjtcbn1cblxuLmRhc2hib2FyZC1oZWFkZXItc3ViaXRlbS13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDBweCAxcHggMXB4IDFweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0b3A6IDQycHg7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLmRhc2hib2FyZC1oZWFkZXItc3ViaXRlbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGNvbG9yOiAkY29sb3ItZm9udDtcbiAgcGFkZGluZzogMTBweCA4cHg7XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAjNTE1MTUxO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbn1cblxuLmRhc2hib2FyZC1oZWFkZXItaWNvbi1sb2dvdXQge1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uZGFzaGJvYXJkLWhlYWRlci1pY29uLWxvZ291dCB+IHNwYW4ge1xuICBsaW5lLWhlaWdodDogMjFweDtcbn1cblxuLmRhc2hib2FyZC1oZWFkZXItb3B0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kYXNoYm9hcmQtaGVhZGVyLW9wdGlvbi1uYW1lIHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2ZmZjtcbn1cblxuLmRhc2hib2FyZC1oZWFkZXItb3B0aW9uLWxvZ291dCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuIiwiJGJvZHktY29sb3I6ICNmYWZiZmQ7XG5cbiRpZy1jb2xvci1wcmltYXJ5OiAjRUYyQTI0O1xuXG4kY29sb3ItYm9yZGVyOiAjZTJlOGVlO1xuJGNvbG9yLWZvbnQ6ICMzMzM7XG4kbGluZS1pbnB1dDogIzg5ODk4OTtcblxuJGlnLWNvbG9yLWVycm9yOiAjRUYyQTI0O1xuJGlnLWNvbG9yLXN1Y2Nlc3M6ICM0ODk3NjA7Il19 */"

/***/ }),

/***/ "./src/app/dashboard/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dashboard/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_config_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/config/api.service */ "./src/app/config/api.service.ts");
/* harmony import */ var _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _app_config_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/config/shared.service */ "./src/app/config/shared.service.ts");
/* harmony import */ var _app_config_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/config/shared */ "./src/app/config/shared.ts");







var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, apiService, router, sharedService) {
        this.authService = authService;
        this.apiService = apiService;
        this.router = router;
        this.sharedService = sharedService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var user = this.sharedService.get(_app_config_shared__WEBPACK_IMPORTED_MODULE_6__["SharedVariable"].USER);
        this.name = user.getName();
        this.roles = user.getRoles();
        this.arename = user.getArea();
        this.loadNavigations(this.name);
    };
    HeaderComponent.prototype.logout = function () {
        this.registerTrace(this.name);
        this.sharedService.set(_app_config_shared__WEBPACK_IMPORTED_MODULE_6__["SharedVariable"].USER, undefined);
        this.authService.logout();
    };
    HeaderComponent.prototype.loadNavigations = function (name) {
        var _this = this;
        if (this.navs == null) {
            this.apiService.post('/header/v1/loadHeader', {
                login: name
            }, function (result) {
                var navigations = result.data;
                _this.navs = navigations;
            });
        }
    };
    HeaderComponent.prototype.registerTrace = function (username) {
        this.apiService.post('/employTraze/v1/addEmployTraze', {
            login: username,
            operation: 'finalizó sesión'
        }, function (result) {
            console.log('Traza de acceso: "Usuario: ' + username + ' ha cerrado sesión"');
        });
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dashboard-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/dashboard/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/dashboard/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _app_config_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _app_config_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/layermsg/layermsg.component.html":
/*!************************************************************!*\
  !*** ./src/app/dashboard/layermsg/layermsg.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"bean && bean.msg\" [ngClass]=\"[bean.type]\" class=\"messagem js-msg-box-delete\" id=\"msg-home\">\n  <mat-icon class=\"layermsg-icon\" matSuffix>check_circle_outline\n  </mat-icon>\n  <p id=\"msg-dialog-error\">      \n    {{ bean.msg }}\n  </p>\n  \n</div>"

/***/ }),

/***/ "./src/app/dashboard/layermsg/layermsg.component.scss":
/*!************************************************************!*\
  !*** ./src/app/dashboard/layermsg/layermsg.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".messagem {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-size: 19px;\n  width: 100%;\n  padding: 30px 0;\n  line-height: 0.2;\n  color: #fff; }\n\n.messagem.mess_ok {\n  background-color: #489760; }\n\n.messagem.mess_no {\n  background-color: #EF2A24; }\n\n.container {\n  max-width: 1200px;\n  width: 100%;\n  margin: auto; }\n\n.layermsg-icon {\n  color: #fff;\n  margin-right: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N5bm9wc2lzL0VzY3JpdG9yaW8vUHJ1ZWJhIEZpbmFsL2lnLXdlYi1hcHAvc3JjL2FwcC9kYXNoYm9hcmQvbGF5ZXJtc2cvbGF5ZXJtc2cuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9zeW5vcHNpcy9Fc2NyaXRvcmlvL1BydWViYSBGaW5hbC9pZy13ZWItYXBwL3NyYy9zYXNzL3ZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBOztBQUdiO0VBQ0UseUJDTHdCLEVBQUE7O0FEUTFCO0VBQ0UseUJDVnNCLEVBQUE7O0FEYXhCO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUNGLEVBQUE7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvbGF5ZXJtc2cvbGF5ZXJtc2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zYXNzL3ZhcnMuc2Nzcyc7XG5cbi5tZXNzYWdlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE5cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAzMHB4IDA7XG4gIGxpbmUtaGVpZ2h0OiAwLjI7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubWVzc2FnZW0ubWVzc19vayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICAkaWctY29sb3Itc3VjY2Vzcztcbn1cblxuLm1lc3NhZ2VtLm1lc3Nfbm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAgJGlnLWNvbG9yLWVycm9yO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG9cbn1cblxuLmxheWVybXNnLWljb24ge1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufSIsIiRib2R5LWNvbG9yOiAjZmFmYmZkO1xuXG4kaWctY29sb3ItcHJpbWFyeTogI0VGMkEyNDtcblxuJGNvbG9yLWJvcmRlcjogI2UyZThlZTtcbiRjb2xvci1mb250OiAjMzMzO1xuJGxpbmUtaW5wdXQ6ICM4OTg5ODk7XG5cbiRpZy1jb2xvci1lcnJvcjogI0VGMkEyNDtcbiRpZy1jb2xvci1zdWNjZXNzOiAjNDg5NzYwOyJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/layermsg/layermsg.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/layermsg/layermsg.component.ts ***!
  \**********************************************************/
/*! exports provided: LayermsgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayermsgComponent", function() { return LayermsgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config_layermsg_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/config/layermsg.service */ "./src/app/config/layermsg.service.ts");



var LayermsgComponent = /** @class */ (function () {
    function LayermsgComponent(layerMsgService) {
        this.layerMsgService = layerMsgService;
    }
    LayermsgComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.layerMsgService.subscribe(function (controlMessage) {
            _this.bean = controlMessage;
        });
    };
    LayermsgComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    LayermsgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '<dashboard-layermsg>',
            template: __webpack_require__(/*! ./layermsg.component.html */ "./src/app/dashboard/layermsg/layermsg.component.html"),
            styles: [__webpack_require__(/*! ./layermsg.component.scss */ "./src/app/dashboard/layermsg/layermsg.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_config_layermsg_service__WEBPACK_IMPORTED_MODULE_2__["LayermsgService"]])
    ], LayermsgComponent);
    return LayermsgComponent;
}());



/***/ }),

/***/ "./src/app/employee/admin-update/admin-update.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/employee/admin-update/admin-update.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dashboard-header class=\"dashboard\"></dashboard-header>\n<dashboard-layermsg></dashboard-layermsg>\n<div class=\"ig-dashboard-title-wrapper\">\n  <h1 class=\"ig-dashboard-title\">Cambiar Contraseña del Administrador</h1>\n</div>\n<div class=\"ig-dashboard-container\">\n  <form [formGroup]=\"formEmployAdd\" (ngSubmit)=\"onFormSubmit()\">\n    <section class=\"section-main\">\n      <h2 class=\"ig-create-user-subtitle\">Datos</h2>\n      <div class=\"ig-form-column\">\n        <mat-form-field class=\"ig-input-wrapper\">\n          <input [type]=\"hide ? 'password' : 'text'\" matInput placeholder=\"Contraseña\" class=\"ig-input\"\n            formControlName=\"password\" autocomplete=\"new-password\" />\n          <button mat-icon-button matSuffix (click)=\"showPassword($event, 'hide')\" [attr.aria-label]=\"'Hide password'\"\n            [attr.aria-pressed]=\"hide\">\n            <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n          </button>\n          <div class=\"ig-error-wrapper\"\n            *ngIf=\"formGroup.password.invalid && (formGroup.password.dirty || formGroup.password.touched)\">\n            <label class=\"ig-error\" *ngIf=\"formGroup.password.errors.required\">\n              Campo es requerido.\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.password.errors.pattern\">\n              Solo letras y números (mínimo una mayúscula, minúscula y un número) de 8 a 60 caracteres.\n            </label>\n          </div>\n        </mat-form-field>\n        <mat-form-field class=\"ig-input-wrapper\">\n          <input [type]=\"hideConfirm ? 'password' : 'text'\" matInput placeholder=\"Confirmar contraseña\" class=\"ig-input\"\n            formControlName=\"confirmPassword\" />\n          <button mat-icon-button matSuffix (click)=\"showPassword($event, 'hideConfirm')\"\n            [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n            <mat-icon>{{hideConfirm ? 'visibility_off' : 'visibility'}}</mat-icon>\n          </button>\n          <div class=\"ig-error-wrapper\"\n            *ngIf=\"formGroup.confirmPassword.invalid && (formGroup.confirmPassword.dirty || formGroup.confirmPassword.touched)\">\n            <label class=\"ig-error\" *ngIf=\"formGroup.confirmPassword.errors.required\">\n              Campo es requerido.\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.confirmPassword.errors.mustMatch\">\n              Las contraseñas deben coincidir.\n            </label>\n          </div>\n        </mat-form-field>\n      </div>\n    </section>\n    <div class=\"ig-button-wrapper\">\n      <button mat-raised-button class=\"ig-button ig-button-save\" type=\"submit\">\n        Guardar\n        <img src=\"assets/icons/save.svg\">\n      </button>\n      <a mat-raised-button class=\"ig-button ig-button-cancel\" routerLink=\"/employee\">\n        Cancelar\n        <img src=\"assets/icons/x-circle.svg\">\n      </a>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/employee/admin-update/admin-update.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/employee/admin-update/admin-update.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ig-input-wrapper {\n  margin-right: 50px;\n  width: 22%;\n  margin-top: 1%; }\n\n.ig-create-user-section {\n  margin: 20px 0; }\n\n.ig-create-user-subtitle {\n  font-size: 18px;\n  margin: 0;\n  font-weight: 400; }\n\n.section-main {\n  padding: 24px;\n  background: #fff;\n  border-radius: 4px;\n  border: 1px solid #e2e8ee;\n  box-shadow: 0 1px 2px 0 #e2e8ee; }\n\n.section-main .ig-create-user-subtitle,\n.mat-expanded .ig-create-user-subtitle {\n  font-size: 24px;\n  position: relative;\n  padding-bottom: 10px; }\n\n.section-main .ig-create-user-subtitle::after,\n.mat-expanded .ig-create-user-subtitle::after {\n  content: '';\n  width: 32px;\n  height: 2px;\n  background-color: #ed0722;\n  position: absolute;\n  left: 0;\n  bottom: 0; }\n\n.ig-button-save,\n.ig-button-excluded {\n  margin-right: 20px;\n  border-radius: 5px;\n  box-shadow: none; }\n\n.ig-button-cancel {\n  border-radius: 5px;\n  border: 2px solid #e2e8ee;\n  color: #333;\n  background-color: #fff;\n  box-shadow: none; }\n\n.ig-input-excluded {\n  width: 100%; }\n\n.ig-textarea-excluded {\n  width: 100%; }\n\n@media screen and (max-width: 1024px) {\n  .ig-input-wrapper {\n    margin-left: 0;\n    width: 80%;\n    margin-top: 4%;\n    margin-bottom: 10px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N5bm9wc2lzL0VzY3JpdG9yaW8vUHJ1ZWJhIEZpbmFsL2lnLXdlYi1hcHAvc3JjL2FwcC9lbXBsb3llZS9lbXBsb3llZS1hZGQvZW1wbG95ZWUtYWRkLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvc3lub3BzaXMvRXNjcml0b3Jpby9QcnVlYmEgRmluYWwvaWctd2ViLWFwcC9zcmMvc2Fzcy92YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGNBQ0YsRUFBQTs7QUFFQTtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHlCQ2xCb0I7RURtQnBCLCtCQ25Cb0IsRUFBQTs7QURzQnRCOztFQUVFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsb0JBQW9CLEVBQUE7O0FBR3RCOztFQUVFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFNBQVMsRUFBQTs7QUFHWDs7RUFFRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdsQjtFQUVFLGtCQUFrQjtFQUNsQix5QkNsRG9CO0VEbURwQixXQ2xEZTtFRG1EZixzQkFBc0I7RUFDdEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0U7SUFDRSxjQUFjO0lBQ2QsVUFBVTtJQUNWLGNBQWM7SUFDZCxtQkFDRixFQUFBLEVBQUMiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS9hZG1pbi11cGRhdGUvYWRtaW4tdXBkYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi8uLi8uLi8uLi9zYXNzL3ZhcnMuc2Nzcyc7XG5cbi5pZy1pbnB1dC13cmFwcGVyIHtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICB3aWR0aDogMjIlO1xuICBtYXJnaW4tdG9wOiAxJVxufVxuXG4uaWctY3JlYXRlLXVzZXItc2VjdGlvbiB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG4uaWctY3JlYXRlLXVzZXItc3VidGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnNlY3Rpb24tbWFpbiB7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWJvcmRlcjsgXG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwICRjb2xvci1ib3JkZXJcbn1cblxuLnNlY3Rpb24tbWFpbiAuaWctY3JlYXRlLXVzZXItc3VidGl0bGUsXG4ubWF0LWV4cGFuZGVkIC5pZy1jcmVhdGUtdXNlci1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLnNlY3Rpb24tbWFpbiAuaWctY3JlYXRlLXVzZXItc3VidGl0bGU6OmFmdGVyLFxuLm1hdC1leHBhbmRlZCAuaWctY3JlYXRlLXVzZXItc3VidGl0bGU6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkMDcyMjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG59XG5cbi5pZy1idXR0b24tc2F2ZSxcbi5pZy1idXR0b24tZXhjbHVkZWQge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmlnLWJ1dHRvbi1jYW5jZWxcbntcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAkY29sb3ItYm9yZGVyOyAgXG4gIGNvbG9yOiAkY29sb3ItZm9udDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmlnLWlucHV0LWV4Y2x1ZGVkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pZy10ZXh0YXJlYS1leGNsdWRlZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmlnLWlucHV0LXdyYXBwZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLXRvcDogNCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweFxuICB9XG59IiwiJGJvZHktY29sb3I6ICNmYWZiZmQ7XG5cbiRpZy1jb2xvci1wcmltYXJ5OiAjRUYyQTI0O1xuXG4kY29sb3ItYm9yZGVyOiAjZTJlOGVlO1xuJGNvbG9yLWZvbnQ6ICMzMzM7XG4kbGluZS1pbnB1dDogIzg5ODk4OTtcblxuJGlnLWNvbG9yLWVycm9yOiAjRUYyQTI0O1xuJGlnLWNvbG9yLXN1Y2Nlc3M6ICM0ODk3NjA7Il19 */"

/***/ }),

/***/ "./src/app/employee/admin-update/admin-update.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/employee/admin-update/admin-update.component.ts ***!
  \*****************************************************************/
/*! exports provided: AdminUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUpdateComponent", function() { return AdminUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _app_utils_must_match_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/utils/must-match.validator */ "./src/app/utils/must-match.validator.ts");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _app_config_layermsg_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/config/layermsg.service */ "./src/app/config/layermsg.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service_employ_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/service/employ.service */ "./src/app/service/employ.service.ts");
/* harmony import */ var _app_service_role_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/service/role.service */ "./src/app/service/role.service.ts");
/* harmony import */ var _app_enumeration_enum_status_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/enumeration/enum-status.enum */ "./src/app/enumeration/enum-status.enum.ts");
/* harmony import */ var _app_config_parametries__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/config/parametries */ "./src/app/config/parametries.ts");












var AdminUpdateComponent = /** @class */ (function () {
    function AdminUpdateComponent(dialog, formBuilder, roleService, employService, layerMsgService, route, router) {
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.roleService = roleService;
        this.employService = employService;
        this.layerMsgService = layerMsgService;
        this.route = route;
        this.router = router;
        this.checkedConfiguration = true;
        this.checkedExcluded = true;
        this.hide = true;
        this.hideConfirm = true;
        this.displayedColumns = ['alias', 'mobile', 'action'];
        this.roleTypeFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.submitted = false;
        this.listeners = new Array();
    }
    AdminUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roleService.loadRoles();
        this.formEmployAdd = this.formBuilder.group({
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_app_config_parametries__WEBPACK_IMPORTED_MODULE_11__["Parametries"].PATTERN_PASSWORD)
                ]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        }, {
            validator: Object(_app_utils_must_match_validator__WEBPACK_IMPORTED_MODULE_4__["MustMatch"])('password', 'confirmPassword')
        });
        this.listeners.push(this.route.params.subscribe(function (params) {
            _this.employPk = _this.employPk;
        }));
    };
    AdminUpdateComponent.prototype.ngOnDestroy = function () {
        this.listeners.forEach(function (listener) {
            listener.unsubscribe();
        });
    };
    AdminUpdateComponent.prototype.showPassword = function (e, field) {
        e.preventDefault();
        if (field === 'hide')
            this.hide = !this.hide;
        if (field === 'hideConfirm')
            this.hideConfirm = !this.hideConfirm;
    };
    Object.defineProperty(AdminUpdateComponent.prototype, "formGroup", {
        get: function () {
            return this.formEmployAdd.controls;
        },
        enumerable: true,
        configurable: true
    });
    AdminUpdateComponent.prototype.updateAdminPassword = function () {
        var _this = this;
        var password = btoa(this.formEmployAdd.value.password);
        this.employService.updateAdminPassword(password, function (result) {
            _this.layerMsgService.showMessageOk(_app_enumeration_enum_status_enum__WEBPACK_IMPORTED_MODULE_10__["EnumStatus"].UPDATE_OK.code, function () {
                _this.router.navigate(['employee']);
            });
        });
    };
    AdminUpdateComponent.prototype.onFormSubmit = function () {
        this.submitted = true;
        if (this.formEmployAdd.invalid) {
            return;
        }
        else {
            this.updateAdminPassword();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
    ], AdminUpdateComponent.prototype, "sort", void 0);
    AdminUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-update',
            template: __webpack_require__(/*! ./admin-update.component.html */ "./src/app/employee/admin-update/admin-update.component.html"),
            styles: [__webpack_require__(/*! ./admin-update.component.scss */ "./src/app/employee/admin-update/admin-update.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _app_service_role_service__WEBPACK_IMPORTED_MODULE_9__["RoleService"],
            _app_service_employ_service__WEBPACK_IMPORTED_MODULE_8__["EmployService"],
            _app_config_layermsg_service__WEBPACK_IMPORTED_MODULE_6__["LayermsgService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], AdminUpdateComponent);
    return AdminUpdateComponent;
}());



/***/ }),

/***/ "./src/app/employee/employee-add-modal/employee-add-modal.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/employee/employee-add-modal/employee-add-modal.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Datos del Excluido</h1>\n<form [formGroup]=\"formExcluid\" (ngSubmit)=\"onFormModalSubmit()\">\n  <div mat-dialog-content>\n    <mat-form-field>\n      <input matInput placeholder=\"Alias\" class=\"ig-input\" formControlName=\"alias\" />\n      <div class=\"ig-error-wrapper\" *ngIf=\"formGroup.alias.invalid && (formGroup.alias.dirty || formGroup.alias.touched)\">\n        <label class=\"ig-error\" *ngIf=\"formGroup.alias.errors.required\">\n          Campo es requerido.\n        </label>\n        <label class=\"ig-error\" *ngIf=\"formGroup.alias.errors.minlength\">\n          Mínimo 3 caracteres.<br>\n        </label>\n        <label class=\"ig-error\" *ngIf=\"formGroup.alias.errors.maxlength\">\n          Máximo 60 caracteres.<br>\n        </label>\n        <label class=\"ig-error\" *ngIf=\"formGroup.alias.errors.pattern\">\n          Solo letras y espacio.\n        </label>\n      </div>\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"mobile\" class=\"ig-input\" formControlName=\"mobile\" />\n      <div class=\"ig-error-wrapper\" *ngIf=\"formGroup.mobile.invalid && (formGroup.mobile.dirty || formGroup.mobile.touched)\">\n        <label class=\"ig-error\" *ngIf=\"formGroup.mobile.errors.required\">\n          Campo es requerido.\n        </label>\n        <label class=\"ig-error\" *ngIf=\"formGroup.mobile.errors.minlength\">\n          Mínimo 9 dígitos.<br>\n        </label>\n        <label class=\"ig-error\" *ngIf=\"formGroup.mobile.errors.maxlength\">\n          Máximo 12 dígitos.<br>\n        </label>\n        <label class=\"ig-error\" *ngIf=\"formGroup.mobile.errors.pattern\">\n          Solo números.\n        </label>\n      </div>\n    </mat-form-field>\n  </div>\n  <div mat-dialog-actions>\n    <button mat-button mat-dialog-close (click)=\"onNoClick()\">Cancelar </button>\n    <button type=\"submit\" mat-button cdkFocusInitial class=\"ig-button ig-button-save\">Aceptar</button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/employee/employee-add-modal/employee-add-modal.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/employee/employee-add-modal/employee-add-modal.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-main {\n  padding: 24px;\n  background: #fff;\n  border-radius: 4px;\n  border: 1px solid #e2e8ee;\n  box-shadow: 0 1px 2px 0 #e2e8ee; }\n\n.ig-input-wrapper {\n  margin-right: 50px;\n  width: 22%; }\n\n.ig-button-save,\n.ig-button-excluded {\n  margin-right: 20px;\n  border-radius: 5px;\n  box-shadow: none; }\n\n.ig-button-cancel {\n  border-radius: 5px;\n  border: 2px solid #e2e8ee;\n  color: #333;\n  background-color: #fff;\n  box-shadow: none; }\n\n.mat-form-field {\n  display: inline-block;\n  position: relative;\n  text-align: left;\n  margin-top: 23px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N5bm9wc2lzL0VzY3JpdG9yaW8vUHJ1ZWJhIEZpbmFsL2lnLXdlYi1hcHAvc3JjL2FwcC9lbXBsb3llZS9lbXBsb3llZS1hZGQtbW9kYWwvZW1wbG95ZWUtYWRkLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvc3lub3BzaXMvRXNjcml0b3Jpby9QcnVlYmEgRmluYWwvaWctd2ViLWFwcC9zcmMvc2Fzcy92YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5QkNGb0I7RURHcEIsK0JDSG9CLEVBQUE7O0FETXRCO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFHWjs7RUFFRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdsQjtFQUVFLGtCQUFrQjtFQUNsQix5QkNyQm9CO0VEc0JwQixXQ3JCZTtFRHNCZixzQkFBc0I7RUFDdEIsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS9lbXBsb3llZS1hZGQtbW9kYWwvZW1wbG95ZWUtYWRkLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi8uLi8uLi8uLi9zYXNzL3ZhcnMuc2Nzcyc7XG5cbi5zZWN0aW9uLW1haW4ge1xuICBwYWRkaW5nOiAyNHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1ib3JkZXI7IFxuICBib3gtc2hhZG93OiAwIDFweCAycHggMCAkY29sb3ItYm9yZGVyXG59XG5cbi5pZy1pbnB1dC13cmFwcGVyIHtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICB3aWR0aDogMjIlO1xufVxuXG4uaWctYnV0dG9uLXNhdmUsXG4uaWctYnV0dG9uLWV4Y2x1ZGVkIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5pZy1idXR0b24tY2FuY2VsXG57XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAycHggc29saWQgJGNvbG9yLWJvcmRlcjsgIFxuICBjb2xvcjogJGNvbG9yLWZvbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4ubWF0LWZvcm0tZmllbGQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXRvcDogMjNweDtcbn0iLCIkYm9keS1jb2xvcjogI2ZhZmJmZDtcblxuJGlnLWNvbG9yLXByaW1hcnk6ICNFRjJBMjQ7XG5cbiRjb2xvci1ib3JkZXI6ICNlMmU4ZWU7XG4kY29sb3ItZm9udDogIzMzMztcbiRsaW5lLWlucHV0OiAjODk4OTg5O1xuXG4kaWctY29sb3ItZXJyb3I6ICNFRjJBMjQ7XG4kaWctY29sb3Itc3VjY2VzczogIzQ4OTc2MDsiXX0= */"

/***/ }),

/***/ "./src/app/employee/employee-add-modal/employee-add-modal.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/employee/employee-add-modal/employee-add-modal.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EmployeeAddModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeAddModalComponent", function() { return EmployeeAddModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _app_service_officer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/service/officer.service */ "./src/app/service/officer.service.ts");
/* harmony import */ var _app_request_req_excluid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/request/req-excluid */ "./src/app/request/req-excluid.ts");
/* harmony import */ var _app_config_parametries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/config/parametries */ "./src/app/config/parametries.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);








var EmployeeAddModalComponent = /** @class */ (function () {
    function EmployeeAddModalComponent(dialogRef, data, officerService, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.officerService = officerService;
        this.formBuilder = formBuilder;
        this.excluids = [];
        this.excluidsTem = [];
    }
    EmployeeAddModalComponent.prototype.ngOnInit = function () {
        this.formExcluid = this.formBuilder.group({
            idExcluid: [this.data.idExcluid, []],
            alias: [this.data.alias, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_6__["Parametries"].ALIAS_MIN_LENGTH),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_6__["Parametries"].ALIAS_MAX_LENGTH),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_app_config_parametries__WEBPACK_IMPORTED_MODULE_6__["Parametries"].PATTERN_ALL_CADENA)
                ]],
            mobile: [this.data.mobile, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_6__["Parametries"].MOBILE_MIN_LENGTH),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_6__["Parametries"].MOBILE_MAX_LENGTH),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_app_config_parametries__WEBPACK_IMPORTED_MODULE_6__["Parametries"].PATTERN_NUMBER)
                ]]
        });
    };
    EmployeeAddModalComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    Object.defineProperty(EmployeeAddModalComponent.prototype, "formGroup", {
        get: function () {
            return this.formExcluid.controls;
        },
        enumerable: true,
        configurable: true
    });
    EmployeeAddModalComponent.prototype.onFormModalSubmit = function () {
        if (this.formExcluid.invalid) {
            return;
        }
        else {
            this.saveExcluded();
        }
    };
    EmployeeAddModalComponent.prototype.validateMobile = function (mobile) {
        var size = this.officerService.excluidsStatic.length;
        if (size == 0) {
            return false;
        }
        else {
            if (this.data.idExcluid == undefined) {
                for (var i = 0; i < size; i++) {
                    if (this.officerService.excluidsStatic[i].mobile == mobile) {
                        return true;
                    }
                }
            }
            else {
                for (var i = 0; i < size; i++) {
                    if (this.officerService.excluidsStatic[i].mobile == mobile &&
                        this.officerService.excluidsStatic[i].idExcluid != this.data.idExcluid) {
                        return true;
                    }
                }
            }
        }
        return false;
    };
    EmployeeAddModalComponent.prototype.saveExcluded = function () {
        var mobile = this.formExcluid.value.mobile;
        if (this.validateMobile(mobile)) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                title: 'Error al guardar',
                text: 'Existe un excluido con el mismo número mobil.',
                icon: 'error',
                confirmButtonText: '<div style="margin: 0; padding: 0; display: flex; justify-content: center; align-items: center;"><span>Cerrar</span><img src="./../../../assets/icons/x-circle.svg"></div>',
                confirmButtonColor: "#EF2A24"
            });
        }
        else {
            var excluid = new _app_request_req_excluid__WEBPACK_IMPORTED_MODULE_5__["ReqExcluid"]();
            excluid.alias = this.formExcluid.value.alias;
            excluid.mobile = this.formExcluid.value.mobile;
            if (this.data.idExcluid == undefined) {
                excluid.idExcluid = this.officerService.excluidsStatic.length;
                this.officerService.excluidsStatic.push(excluid);
            }
            else {
                excluid.idExcluid = this.data.idExcluid;
                for (var i = 0; i < this.officerService.excluidsStatic.length; i++) {
                    if (this.officerService.excluidsStatic[i].idExcluid == this.data.idExcluid) {
                        this.officerService.excluidsStatic[i] = excluid;
                    }
                }
            }
            this.officerService.excluids.next(this.officerService.excluidsStatic);
            this.dialogRef.close();
        }
    };
    EmployeeAddModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-add-modal',
            template: __webpack_require__(/*! ./employee-add-modal.component.html */ "./src/app/employee/employee-add-modal/employee-add-modal.component.html"),
            styles: [__webpack_require__(/*! ./employee-add-modal.component.scss */ "./src/app/employee/employee-add-modal/employee-add-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            _app_request_req_excluid__WEBPACK_IMPORTED_MODULE_5__["ReqExcluid"],
            _app_service_officer_service__WEBPACK_IMPORTED_MODULE_4__["OfficerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], EmployeeAddModalComponent);
    return EmployeeAddModalComponent;
}());



/***/ }),

/***/ "./src/app/employee/employee-add/employee-add.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/employee/employee-add/employee-add.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dashboard-header class=\"dashboard\"></dashboard-header>\n<dashboard-layermsg></dashboard-layermsg>\n<div class=\"ig-dashboard-title-wrapper\">\n  <h1 class=\"ig-dashboard-title\">Crear empleado</h1>\n</div>\n<div class=\"ig-dashboard-container\">\n  <form [formGroup]=\"formEmployAdd\" (ngSubmit)=\"onFormSubmit()\">\n    <section class=\"section-main\">\n      <h2 class=\"ig-create-user-subtitle\">Datos</h2>\n\n      <div class=\"ig-form-column\">\n        <mat-form-field class=\"ig-input-wrapper\">\n          <mat-label>Rol</mat-label>\n          <mat-select formControlName=\"roleType\">\n            <mat-option *ngFor=\"let role of roles\" [value]=\"role.value\">\n              {{ role.viewValue }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field class=\"ig-input-wrapper\" *ngIf=\"formGroup.roleType.value === 2\">\n          <mat-label>Área</mat-label>\n          <mat-select formControlName=\"areaFk\">\n            <mat-option *ngFor=\"let area of areas\" [value]=\"area.areaPk\">\n              {{ area.name }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field class=\"ig-input-wrapper\" *ngIf=\"formGroup.roleType.value === 3\">\n          <input type=\"text\" placeholder=\"Supervisor\" matInput formControlName=\"employFk\" [matAutocomplete]=\"auto\">\n          <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n            <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n              {{option.nameEmploy}}\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n      </div>\n\n\n      <div class=\"ig-form-column\">\n        <mat-form-field class=\"ig-input-wrapper\">\n          <input matInput placeholder=\"Nombre(s)\" class=\"ig-input\" formControlName=\"name\" />\n          <div class=\"ig-error-wrapper\"\n            *ngIf=\"formGroup.name.invalid && (formGroup.name.dirty || formGroup.name.touched)\">\n            <label class=\"ig-error\" *ngIf=\"formGroup.name.errors.required\">\n              Campo es requerido. \n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.name.errors.minlength\">\n              Mínimo 3 caracteres.<br>\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.name.errors.maxlength\">\n              Máximo 100 caracteres.<br>\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.name.errors.pattern\">\n              Solo letras y números. \n            </label>\n          </div>\n        </mat-form-field>\n        <mat-form-field class=\"ig-input-wrapper\">\n          <input matInput placeholder=\"Apellido Paterno\" class=\"ig-input\" formControlName=\"apePat\" />\n          <div class=\"ig-error-wrapper\"\n            *ngIf=\"formGroup.apePat.invalid && (formGroup.apePat.dirty || formGroup.apePat.touched)\">\n            <label class=\"ig-error\" *ngIf=\"formGroup.apePat.errors.required\">\n              Campo es requerido. \n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.apePat.errors.minlength\">\n              Mínimo 3 caracteres.<br>\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.apePat.errors.maxlength\">\n              Máximo 60 caracteres.<br>\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.apePat.errors.pattern\">\n              Solo letras y números. \n            </label>\n          </div>\n        </mat-form-field>\n        <mat-form-field class=\"ig-input-wrapper\">\n          <input matInput placeholder=\"Apellido Materno\" class=\"ig-input\" formControlName=\"apeMat\" />\n          <div class=\"ig-error-wrapper\"\n            *ngIf=\" formGroup.apeMat.invalid && (formGroup.apeMat.dirty || formGroup.apeMat.touched)\">\n            <label class=\"ig-error\" *ngIf=\"formGroup.apeMat.errors.required\">\n              Campo es requerido. \n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.apeMat.errors.minlength\">\n              Mínimo 3 caracteres.<br>\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.apeMat.errors.maxlength\">\n              Máximo 60 caracteres.<br>\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.apeMat.errors.pattern\">\n              Solo letras y números.\n            </label>\n          </div>\n        </mat-form-field>\n      </div>\n      <div class=\"ig-form-column\">\n        <mat-form-field class=\"ig-input-wrapper\">\n          <input matInput placeholder=\"E-mail\" class=\"ig-input\" formControlName=\"email\" />\n          <div class=\"ig-error-wrapper\"\n            *ngIf=\" formGroup.email.invalid && (formGroup.email.dirty || formGroup.email.touched)\">\n            <label class=\"ig-error\" *ngIf=\"formGroup.email.errors.required\">\n              Campo es requerido.\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.email.errors.email\">\n              Formato de email obligatorio.<br>\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.email.errors.maxlength\">\n              Máximo 150 caracteres.\n            </label>\n          </div>\n        </mat-form-field>\n        <mat-form-field class=\"ig-input-wrapper\">\n          <input matInput placeholder=\"Celular\" class=\"ig-input\" formControlName=\"mobile\" />\n          <div class=\"ig-error-wrapper\"\n            *ngIf=\" formGroup.mobile.invalid && (formGroup.mobile.dirty || formGroup.mobile.touched)\">\n            <label class=\"ig-error\" *ngIf=\"formGroup.mobile.errors.required\">\n              Campo es requerido.\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.mobile.errors.minlength\">\n              Mínimo 9 dígitos.<br>\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.mobile.errors.maxlength\">\n              Máximo 12 dígitos.<br>\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.mobile.errors.pattern\">\n              Solo números.\n            </label>\n          </div>\n        </mat-form-field>\n        <mat-form-field class=\"ig-input-wrapper\">\n          <input matInput placeholder=\"Teléfono\" class=\"ig-input\" formControlName=\"phone\" />\n          <div class=\"ig-error-wrapper\"\n            *ngIf=\" formGroup.phone.invalid && (formGroup.phone.dirty || formGroup.phone.touched)\">\n            <label class=\"ig-error\" *ngIf=\"formGroup.phone.errors.pattern\">\n              Solo números y letras.\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.phone.errors.minlength\">\n              Mínimo 7 dígitos.<br>\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.phone.errors.maxlength\">\n              Máximo 12 dígitos.\n            </label>\n          </div>\n        </mat-form-field>\n      </div>\n      <div class=\"ig-form-column\">\n        <mat-form-field class=\"ig-input-wrapper\" *ngIf=\"formGroup.roleType.value != 3\">\n          <input matInput placeholder=\"Usuario\" class=\"ig-input\" formControlName=\"user\" autocomplete=\"new-user\" />\n          <div class=\"ig-error-wrapper\"\n            *ngIf=\" formGroup.user.invalid && (formGroup.user.dirty || formGroup.user.touched)\">\n            <label class=\"ig-error\" *ngIf=\"formGroup.user.errors.required\">\n              Campo es requerido.\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.user.errors.minlength\">\n              Mínimo 5 caracteres.<br>\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.user.errors.maxlength\">\n              Máximo 20 caracteres.<br>\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.user.errors.pattern\">\n              Solo letras.\n            </label>\n          </div>\n        </mat-form-field>\n        <mat-form-field class=\"ig-input-wrapper\" *ngIf=\"formGroup.roleType.value != 3\">\n          <input [type]=\"hide ? 'password' : 'text'\" matInput placeholder=\"Contraseña\" class=\"ig-input\"\n            formControlName=\"password\" autocomplete=\"new-password\" />\n          <button mat-icon-button matSuffix (click)=\"showPassword($event, 'hide')\" [attr.aria-label]=\"'Hide password'\"\n            [attr.aria-pressed]=\"hide\">\n            <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n          </button>\n          <div class=\"ig-error-wrapper\"\n            *ngIf=\" formGroup.password.invalid && (formGroup.password.dirty || formGroup.password.touched)\">\n            <label class=\"ig-error\" *ngIf=\"formGroup.password.errors.required\">\n              Campo es requerido.\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.password.errors.pattern\">\n              Solo letras y números (mínimo una mayúscula, minúscula y un número) de 8 a 60 caracteres.\n            </label>\n          </div>\n        </mat-form-field>\n        <mat-form-field class=\"ig-input-wrapper\" *ngIf=\"formGroup.roleType.value != 3\">\n          <input [type]=\"hideConfirm ? 'password' : 'text'\" matInput placeholder=\"Confirmar contraseña\" class=\"ig-input\"\n            formControlName=\"confirmPassword\" />\n          <button mat-icon-button matSuffix (click)=\"showPassword($event, 'hideConfirm')\"\n            [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n            <mat-icon>{{hideConfirm ? 'visibility_off' : 'visibility'}}</mat-icon>\n          </button>\n          <div class=\"ig-error-wrapper\"\n            *ngIf=\" formGroup.confirmPassword.invalid && (formGroup.confirmPassword.dirty || formGroup.confirmPassword.touched)\">\n            <label class=\"ig-error\" *ngIf=\"formGroup.confirmPassword.errors.required\">\n              Campo es requerido.\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.confirmPassword.errors.mustMatch\">\n              Las contraseñas deben coincidir.\n            </label>\n          </div>\n        </mat-form-field>\n      </div>\n\n\n\n    </section>\n    <section class=\"ig-create-user-section\" [hidden]=\"true\">\n      <mat-accordion>\n        <mat-expansion-panel [expanded]=\"true\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              <h2 class=\"ig-create-user-subtitle\">Privilegios</h2>\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <div class=\"ig-form-column\">\n            <mat-checkbox formControlName=\"checkedConfiguration\">Responder conversaciones</mat-checkbox>\n          </div>\n        </mat-expansion-panel>\n      </mat-accordion>\n    </section>\n    <section class=\"ig-create-user-section\" *ngIf=\"formGroup.roleType.value === 3\">\n      <mat-accordion>\n        <mat-expansion-panel [expanded]=\"true\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              <h2 class=\"ig-create-user-subtitle\">Contactos excluidos</h2>\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <div class=\"ig-form-column\">\n            <mat-checkbox formControlName=\"checkedExcluded\">Habilitar opción</mat-checkbox>\n          </div>\n          <div class=\"ig-form-column\">\n            <button type=\"button\" [disabled]=\"!formGroup.checkedExcluded.value\" (click)=\"openDialog(null)\" mat-raised-button\n              class=\"ig-button ig-button-excluded\">Agregar</button>\n          </div>\n\n          <mat-table [dataSource]=\"dataSource\" matSort>\n            <ng-container matColumnDef=\"alias\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> Alias </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.alias}} </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"mobile\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> Mobile </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.mobile}}</mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"action\">\n              <mat-header-cell *matHeaderCellDef> Acción </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\">\n                <button type=\"button\" mat-icon-button color=\"primary\" (click)=\"openDialog(row)\">\n                  <mat-icon>ballot</mat-icon>\n                </button>\n                <button type=\"button\" mat-icon-button color=\"accent\" (click)=\"deleteExcluid(row.idExcluid)\">\n                  <mat-icon>delete</mat-icon>\n                </button>\n              </mat-cell>\n            </ng-container>\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n          </mat-table>\n        </mat-expansion-panel>\n      </mat-accordion>\n    </section>\n    <div class=\"ig-button-wrapper\">\n      <button mat-raised-button class=\"ig-button ig-button-save\" type=\"submit\">\n        Guardar\n        <img src=\"assets/icons/save.svg\">\n      </button>\n      <a mat-raised-button class=\"ig-button ig-button-cancel\" routerLink=\"/employee\">\n        Cancelar\n        <img src=\"assets/icons/x-circle.svg\">\n      </a>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/employee/employee-add/employee-add.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/employee/employee-add/employee-add.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ig-input-wrapper {\n  margin-right: 50px;\n  width: 22%;\n  margin-top: 1%; }\n\n.ig-create-user-section {\n  margin: 20px 0; }\n\n.ig-create-user-subtitle {\n  font-size: 18px;\n  margin: 0;\n  font-weight: 400; }\n\n.section-main {\n  padding: 24px;\n  background: #fff;\n  border-radius: 4px;\n  border: 1px solid #e2e8ee;\n  box-shadow: 0 1px 2px 0 #e2e8ee; }\n\n.section-main .ig-create-user-subtitle,\n.mat-expanded .ig-create-user-subtitle {\n  font-size: 24px;\n  position: relative;\n  padding-bottom: 10px; }\n\n.section-main .ig-create-user-subtitle::after,\n.mat-expanded .ig-create-user-subtitle::after {\n  content: '';\n  width: 32px;\n  height: 2px;\n  background-color: #ed0722;\n  position: absolute;\n  left: 0;\n  bottom: 0; }\n\n.ig-button-save,\n.ig-button-excluded {\n  margin-right: 20px;\n  border-radius: 5px;\n  box-shadow: none; }\n\n.ig-button-cancel {\n  border-radius: 5px;\n  border: 2px solid #e2e8ee;\n  color: #333;\n  background-color: #fff;\n  box-shadow: none; }\n\n.ig-input-excluded {\n  width: 100%; }\n\n.ig-textarea-excluded {\n  width: 100%; }\n\n@media screen and (max-width: 1024px) {\n  .ig-input-wrapper {\n    margin-left: 0;\n    width: 80%;\n    margin-top: 4%;\n    margin-bottom: 10px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N5bm9wc2lzL0VzY3JpdG9yaW8vUHJ1ZWJhIEZpbmFsL2lnLXdlYi1hcHAvc3JjL2FwcC9lbXBsb3llZS9lbXBsb3llZS1hZGQvZW1wbG95ZWUtYWRkLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvc3lub3BzaXMvRXNjcml0b3Jpby9QcnVlYmEgRmluYWwvaWctd2ViLWFwcC9zcmMvc2Fzcy92YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGNBQ0YsRUFBQTs7QUFFQTtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHlCQ2xCb0I7RURtQnBCLCtCQ25Cb0IsRUFBQTs7QURzQnRCOztFQUVFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsb0JBQW9CLEVBQUE7O0FBR3RCOztFQUVFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFNBQVMsRUFBQTs7QUFHWDs7RUFFRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdsQjtFQUVFLGtCQUFrQjtFQUNsQix5QkNsRG9CO0VEbURwQixXQ2xEZTtFRG1EZixzQkFBc0I7RUFDdEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0U7SUFDRSxjQUFjO0lBQ2QsVUFBVTtJQUNWLGNBQWM7SUFDZCxtQkFDRixFQUFBLEVBQUMiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS9lbXBsb3llZS1hZGQvZW1wbG95ZWUtYWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi8uLi8uLi8uLi9zYXNzL3ZhcnMuc2Nzcyc7XG5cbi5pZy1pbnB1dC13cmFwcGVyIHtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICB3aWR0aDogMjIlO1xuICBtYXJnaW4tdG9wOiAxJVxufVxuXG4uaWctY3JlYXRlLXVzZXItc2VjdGlvbiB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG4uaWctY3JlYXRlLXVzZXItc3VidGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnNlY3Rpb24tbWFpbiB7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWJvcmRlcjsgXG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwICRjb2xvci1ib3JkZXJcbn1cblxuLnNlY3Rpb24tbWFpbiAuaWctY3JlYXRlLXVzZXItc3VidGl0bGUsXG4ubWF0LWV4cGFuZGVkIC5pZy1jcmVhdGUtdXNlci1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLnNlY3Rpb24tbWFpbiAuaWctY3JlYXRlLXVzZXItc3VidGl0bGU6OmFmdGVyLFxuLm1hdC1leHBhbmRlZCAuaWctY3JlYXRlLXVzZXItc3VidGl0bGU6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkMDcyMjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG59XG5cbi5pZy1idXR0b24tc2F2ZSxcbi5pZy1idXR0b24tZXhjbHVkZWQge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmlnLWJ1dHRvbi1jYW5jZWxcbntcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAkY29sb3ItYm9yZGVyOyAgXG4gIGNvbG9yOiAkY29sb3ItZm9udDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmlnLWlucHV0LWV4Y2x1ZGVkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pZy10ZXh0YXJlYS1leGNsdWRlZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmlnLWlucHV0LXdyYXBwZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLXRvcDogNCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweFxuICB9XG59IiwiJGJvZHktY29sb3I6ICNmYWZiZmQ7XG5cbiRpZy1jb2xvci1wcmltYXJ5OiAjRUYyQTI0O1xuXG4kY29sb3ItYm9yZGVyOiAjZTJlOGVlO1xuJGNvbG9yLWZvbnQ6ICMzMzM7XG4kbGluZS1pbnB1dDogIzg5ODk4OTtcblxuJGlnLWNvbG9yLWVycm9yOiAjRUYyQTI0O1xuJGlnLWNvbG9yLXN1Y2Nlc3M6ICM0ODk3NjA7Il19 */"

/***/ }),

/***/ "./src/app/employee/employee-add/employee-add.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/employee/employee-add/employee-add.component.ts ***!
  \*****************************************************************/
/*! exports provided: EmployeeAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeAddComponent", function() { return EmployeeAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _app_utils_must_match_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/utils/must-match.validator */ "./src/app/utils/must-match.validator.ts");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_config_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/config/api.service */ "./src/app/config/api.service.ts");
/* harmony import */ var _app_config_layermsg_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/config/layermsg.service */ "./src/app/config/layermsg.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_model_employee__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/model/employee */ "./src/app/model/employee.ts");
/* harmony import */ var _employee_add_modal_employee_add_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../employee-add-modal/employee-add-modal.component */ "./src/app/employee/employee-add-modal/employee-add-modal.component.ts");
/* harmony import */ var _app_service_officer_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/service/officer.service */ "./src/app/service/officer.service.ts");
/* harmony import */ var _app_service_supervisor_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/service/supervisor.service */ "./src/app/service/supervisor.service.ts");
/* harmony import */ var _app_service_role_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/service/role.service */ "./src/app/service/role.service.ts");
/* harmony import */ var _app_enumeration_enum_role_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/enumeration/enum-role.enum */ "./src/app/enumeration/enum-role.enum.ts");
/* harmony import */ var _app_request_req_excluid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/request/req-excluid */ "./src/app/request/req-excluid.ts");
/* harmony import */ var _app_enumeration_enum_status_enum__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/enumeration/enum-status.enum */ "./src/app/enumeration/enum-status.enum.ts");
/* harmony import */ var _app_config_parametries__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @app/config/parametries */ "./src/app/config/parametries.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_20__);





















var EmployeeAddComponent = /** @class */ (function () {
    function EmployeeAddComponent(dialog, formBuilder, apiService, officerService, supervisorService, layerMsgService, roleService, router) {
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.officerService = officerService;
        this.supervisorService = supervisorService;
        this.layerMsgService = layerMsgService;
        this.roleService = roleService;
        this.router = router;
        this.formGroupSupervisor = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.selectedRole = '';
        this.checkedConfiguration = true;
        this.checkedExcluded = true;
        this.hide = true;
        this.hideConfirm = true;
        this.displayedColumns = ['alias', 'mobile', 'action'];
        this.roleTypeFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.officerService.excluidsStatic.splice(0);
        this.listeners = new Array();
    }
    EmployeeAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listeners.push(this.roleService.subscribe(function (roles) {
            _this.roles = roles;
        }));
        this.roleService.loadRoles();
        this.loadArea();
        this.loadAllSupervisor();
        this.formEmployAdd = this.formBuilder.group({
            name: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_19__["Parametries"].NAME_PAT_MAT_MIN_LENGTH),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_19__["Parametries"].NAME_MAX_LENGTH),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_app_config_parametries__WEBPACK_IMPORTED_MODULE_19__["Parametries"].EMPLOYEE_ONLY_NUMBER_AND_CADENA)
                ]],
            apePat: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_19__["Parametries"].NAME_PAT_MAT_MIN_LENGTH),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_19__["Parametries"].APE_PAT_MAX_LENGTH),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_app_config_parametries__WEBPACK_IMPORTED_MODULE_19__["Parametries"].EMPLOYEE_ONLY_NUMBER_AND_CADENA)
                ]],
            apeMat: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_19__["Parametries"].NAME_PAT_MAT_MIN_LENGTH),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_19__["Parametries"].APE_MAT_MAX_LENGTH),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_app_config_parametries__WEBPACK_IMPORTED_MODULE_19__["Parametries"].EMPLOYEE_ONLY_NUMBER_AND_CADENA)
                ]],
            email: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_19__["Parametries"].EMAIL_MAX_LENGTH),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
                ]],
            mobile: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_19__["Parametries"].MOBILE_MIN_LENGTH),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_19__["Parametries"].MOBILE_MAX_LENGTH),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_app_config_parametries__WEBPACK_IMPORTED_MODULE_19__["Parametries"].PATTERN_NUMBER)
                ]],
            phone: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_app_config_parametries__WEBPACK_IMPORTED_MODULE_19__["Parametries"].EMPLOYEE_ONLY_NUMBER_AND_CADENA),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_19__["Parametries"].PHONE_MIN_LENGTH),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_19__["Parametries"].PHONE_MAX_LENGTH)
                ]],
            user: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_19__["Parametries"].LOGIN_MIN_LENGTH),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_19__["Parametries"].LOGIN_MAX_LENGTH),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_app_config_parametries__WEBPACK_IMPORTED_MODULE_19__["Parametries"].PATTERN_LOGIN)
                ]],
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_app_config_parametries__WEBPACK_IMPORTED_MODULE_19__["Parametries"].PATTERN_PASSWORD)
                ]],
            confirmPassword: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            roleType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            areaFk: ['', []],
            checkedConfiguration: [true],
            checkedExcluded: [true],
            employFk: this.formGroupSupervisor
        }, {
            validator: Object(_app_utils_must_match_validator__WEBPACK_IMPORTED_MODULE_5__["MustMatch"])('password', 'confirmPassword')
        });
        this.autocompleteSupervisor();
        this.officerService.excluids.subscribe(function (data) {
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
        });
        this.setUserCategoryValidators();
    };
    EmployeeAddComponent.prototype.ngOnDestroy = function () {
        this.listeners.forEach(function (listener) {
            listener.unsubscribe();
        });
    };
    EmployeeAddComponent.prototype.setUserCategoryValidators = function () {
        var confirmPassword = this.formEmployAdd.get('confirmPassword');
        var password = this.formEmployAdd.get('password');
        var username = this.formEmployAdd.get('user');
        this.formEmployAdd.get('roleType').valueChanges
            .subscribe(function (roleType) {
            if (roleType === 2) {
                confirmPassword.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
                password.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_app_config_parametries__WEBPACK_IMPORTED_MODULE_19__["Parametries"].PATTERN_PASSWORD)]);
                username.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_19__["Parametries"].LOGIN_MIN_LENGTH), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_19__["Parametries"].LOGIN_MAX_LENGTH), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_app_config_parametries__WEBPACK_IMPORTED_MODULE_19__["Parametries"].PATTERN_LOGIN)]);
            }
            if (roleType === 3) {
                confirmPassword.setValidators(null);
                password.setValidators(null);
                username.setValidators(null);
            }
            confirmPassword.updateValueAndValidity();
            password.updateValueAndValidity();
            username.updateValueAndValidity();
        });
    };
    EmployeeAddComponent.prototype.showPassword = function (e, field) {
        e.preventDefault();
        if (field === 'hide')
            this.hide = !this.hide;
        if (field === 'hideConfirm')
            this.hideConfirm = !this.hideConfirm;
    };
    EmployeeAddComponent.prototype.autocompleteSupervisor = function () {
        var _this = this;
        this.filteredOptions = this.formGroupSupervisor.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (value) { return typeof value === 'string' ? value : value.nameEmploy; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (nameEmploy) { return nameEmploy ? _this._filter(nameEmploy) : _this.supervisores.slice(); }));
    };
    EmployeeAddComponent.prototype._filter = function (name) {
        return this.supervisores.filter(function (option) { return option.nameEmploy.toLowerCase().indexOf(name.toLowerCase()) > -1; });
    };
    EmployeeAddComponent.prototype.displayFn = function (s) {
        return s ? s.nameEmploy : undefined;
    };
    Object.defineProperty(EmployeeAddComponent.prototype, "formGroup", {
        get: function () {
            return this.formEmployAdd.controls;
        },
        enumerable: true,
        configurable: true
    });
    EmployeeAddComponent.prototype.openDialog = function (excluid) {
        var gen = excluid != null ? excluid : new _app_request_req_excluid__WEBPACK_IMPORTED_MODULE_17__["ReqExcluid"]();
        var dialogRef = this.dialog.open(_employee_add_modal_employee_add_modal_component__WEBPACK_IMPORTED_MODULE_12__["EmployeeAddModalComponent"], {
            width: '300px',
            data: gen
        });
    };
    EmployeeAddComponent.prototype.loadArea = function () {
        var _this = this;
        this.apiService.post('/area/v1/loadAllArea', {
            state: 'A'
        }, function (result) {
            _this.areas = result.data;
        });
    };
    EmployeeAddComponent.prototype.loadAllSupervisor = function () {
        var _this = this;
        this.supervisorService.loadAllSupervisor(function (result) {
            _this.supervisores = result.data;
        });
    };
    EmployeeAddComponent.prototype.addEmploy = function () {
        var _this = this;
        var employee = new _app_model_employee__WEBPACK_IMPORTED_MODULE_11__["Employee"]();
        employee.fromFormEmploy(this.formEmployAdd);
        if (this.formGroup.roleType.value === _app_enumeration_enum_role_enum__WEBPACK_IMPORTED_MODULE_16__["EnumRole"].SUPERVISOR.code) {
            this.supervisorService.addSupervisor(employee.toSupervisor(), function (result) {
                _this.layerMsgService.showMessageOk(_app_enumeration_enum_status_enum__WEBPACK_IMPORTED_MODULE_18__["EnumStatus"].SAVE_OK.code, function () {
                    _this.router.navigate(['employee']);
                });
            });
        }
        else {
            employee.setExcluids(this.officerService.excluidsStatic);
            this.officerService.addOfficer(employee.toOfficer(), function (result) {
                _this.layerMsgService.showMessageOk(_app_enumeration_enum_status_enum__WEBPACK_IMPORTED_MODULE_18__["EnumStatus"].SAVE_OK.code, function () {
                    _this.router.navigate(['employee']);
                });
            });
        }
    };
    EmployeeAddComponent.prototype.deleteExcluid = function (idExcluid) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_20___default.a.fire({
            title: '¿Desea eliminar al excluido?',
            text: 'El excluido será eliminado de la lista.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: ' <div style="margin: 0; padding: 0; display: flex; justify-content: center; align-items: center;"><span>Aceptar</span><img src="./../../../assets/icons/save.svg"></div>',
            confirmButtonColor: "#EF2A24",
            cancelButtonText: '<div style="margin: 0; padding: 0; display: flex; justify-content: center; align-items: center;"><span>Cancelar</span><img src="./../../../assets/icons/x-circle.svg"></div>'
        }).then(function (result) {
            if (result.value) {
                for (var i = 0; i < _this.officerService.excluidsStatic.length; i++) {
                    if (_this.officerService.excluidsStatic[i].idExcluid == idExcluid) {
                        _this.officerService.excluidsStatic.splice(i, 1);
                        _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.officerService.excluidsStatic);
                        _this.dataSource.sort = _this.sort;
                        break;
                    }
                }
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_20___default.a.DismissReason.cancel) { }
        });
    };
    EmployeeAddComponent.prototype.onFormSubmit = function () {
        if (this.formEmployAdd.invalid) {
            return;
        }
        else {
            this.addEmploy();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"])
    ], EmployeeAddComponent.prototype, "sort", void 0);
    EmployeeAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-add',
            template: __webpack_require__(/*! ./employee-add.component.html */ "./src/app/employee/employee-add/employee-add.component.html"),
            styles: [__webpack_require__(/*! ./employee-add.component.scss */ "./src/app/employee/employee-add/employee-add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _app_config_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"],
            _app_service_officer_service__WEBPACK_IMPORTED_MODULE_13__["OfficerService"],
            _app_service_supervisor_service__WEBPACK_IMPORTED_MODULE_14__["SupervisorService"],
            _app_config_layermsg_service__WEBPACK_IMPORTED_MODULE_9__["LayermsgService"],
            _app_service_role_service__WEBPACK_IMPORTED_MODULE_15__["RoleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]])
    ], EmployeeAddComponent);
    return EmployeeAddComponent;
}());



/***/ }),

/***/ "./src/app/employee/employee-update/employee-update.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/employee/employee-update/employee-update.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dashboard-header class=\"dashboard\"></dashboard-header>\n<dashboard-layermsg></dashboard-layermsg>\n<div class=\"ig-dashboard-title-wrapper\">\n  <h1 class=\"ig-dashboard-title\">Editar empleado</h1>\n</div>\n<div class=\"ig-dashboard-container\">\n  <form [formGroup]=\"formEmployAdd\" (ngSubmit)=\"onFormSubmit()\">\n    <section class=\"section-main\">\n      <h2 class=\"ig-create-user-subtitle\">Datos</h2>\n      <div class=\"ig-form-column\">\n        <mat-form-field class=\"ig-input-wrapper\">\n          <input matInput placeholder=\"Nombre(s)\" class=\"ig-input\" formControlName=\"name\" />\n          <div class=\"ig-error-wrapper\"\n            *ngIf=\"formGroup.name.invalid && (formGroup.name.dirty || formGroup.name.touched)\">\n            <label class=\"ig-error\" *ngIf=\"formGroup.name.errors.required\">\n              Campo es requerido.\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.name.errors.minlength\">\n              Mínimo 3 caracteres.<br>\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.name.errors.maxlength\">\n              Máximo 100 caracteres.<br>\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.name.errors.pattern\">\n              Solo letras y números.\n            </label>\n          </div>\n        </mat-form-field>\n        <mat-form-field class=\"ig-input-wrapper\">\n          <input matInput placeholder=\"Apellido Paterno\" class=\"ig-input\" formControlName=\"apePat\" />\n          <div class=\"ig-error-wrapper\"\n            *ngIf=\"formGroup.apePat.invalid && (formGroup.apePat.dirty || formGroup.apePat.touched)\">\n            <label class=\"ig-error\" *ngIf=\"formGroup.apePat.errors.required\">\n              Campo es requerido.\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.apePat.errors.minlength\">\n              Mínimo 3 caracteres.<br>\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.apePat.errors.maxlength\">\n              Máximo 60 caracteres.<br>\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.apePat.errors.pattern\">\n              Solo letras y números.\n            </label>\n          </div>\n        </mat-form-field>\n        <mat-form-field class=\"ig-input-wrapper\">\n          <input matInput placeholder=\"Apellido Materno\" class=\"ig-input\" formControlName=\"apeMat\" />\n          <div class=\"ig-error-wrapper\"\n            *ngIf=\" formGroup.apeMat.invalid && (formGroup.apeMat.dirty || formGroup.apeMat.touched)\">\n            <label class=\"ig-error\" *ngIf=\"formGroup.apeMat.errors.required\">\n              Campo es requerido.\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.apeMat.errors.minlength\">\n              Mínimo 3 caracteres.<br>\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.apeMat.errors.maxlength\">\n              Máximo 60 caracteres.<br>\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.apeMat.errors.pattern\">\n              Solo letras y números.\n            </label>\n          </div>\n        </mat-form-field>\n      </div>\n      <div class=\"ig-form-column\">\n        <mat-form-field class=\"ig-input-wrapper\">\n          <input matInput placeholder=\"E-mail\" class=\"ig-input\" formControlName=\"email\" />\n          <div class=\"ig-error-wrapper\"\n            *ngIf=\" formGroup.email.invalid && (formGroup.email.dirty || formGroup.email.touched)\">\n            <label class=\"ig-error\" *ngIf=\"formGroup.email.errors.required\">\n              Campo es requerido.\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.email.errors.email\">\n              Formato de email obligatorio.<br>\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.email.errors.maxlength\">\n              Máximo 150 caracteres.\n            </label>\n          </div>\n        </mat-form-field>\n        <mat-form-field class=\"ig-input-wrapper\">\n          <input matInput placeholder=\"Celular\" class=\"ig-input\" formControlName=\"mobile\" />\n          <div class=\"ig-error-wrapper\"\n            *ngIf=\" formGroup.mobile.invalid && (formGroup.mobile.dirty || formGroup.mobile.touched)\">\n            <label class=\"ig-error\" *ngIf=\"formGroup.mobile.errors.required\">\n              Campo es requerido.\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.mobile.errors.minlength\">\n              Mínimo 9 dígitos.<br>\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.mobile.errors.maxlength\">\n              Máximo 12 dígitos.<br>\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.mobile.errors.pattern\">\n              Solo números.\n            </label>\n          </div>\n        </mat-form-field>\n        <mat-form-field class=\"ig-input-wrapper\">\n          <input matInput placeholder=\"Teléfono\" class=\"ig-input\" formControlName=\"phone\" />\n          <div class=\"ig-error-wrapper\"\n            *ngIf=\" formGroup.phone.invalid && (formGroup.phone.dirty || formGroup.phone.touched)\">\n            <label class=\"ig-error\" *ngIf=\"formGroup.phone.errors.pattern\">\n              Solo números y letras.\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.phone.errors.minlength\">\n              Mínimo 7 dígitos.<br>\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.phone.errors.maxlength\">\n              Máximo 12 dígitos.<br>\n            </label>\n          </div>\n        </mat-form-field>\n      </div>\n      <div class=\"ig-form-column\">\n        <mat-form-field class=\"ig-input-wrapper\" *ngIf=\"formGroup.roleType.value != 3\">\n          <input matInput placeholder=\"Usuario\" class=\"ig-input\" formControlName=\"user\" autocomplete=\"new-user\" />\n        </mat-form-field>\n        <mat-form-field class=\"ig-input-wrapper\" *ngIf=\"formGroup.roleType.value != 3\">\n          <input [type]=\"hide ? 'password' : 'text'\" matInput placeholder=\"Contraseña\" class=\"ig-input\"\n            formControlName=\"password\" autocomplete=\"new-password\" />\n          <button mat-icon-button matSuffix (click)=\"showPassword($event, 'hide')\" [attr.aria-label]=\"'Hide password'\"\n            [attr.aria-pressed]=\"hide\">\n            <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n          </button>\n          <div class=\"ig-error-wrapper\"\n            *ngIf=\" formGroup.password.invalid && (formGroup.password.dirty || formGroup.password.touched)\">\n            <label class=\"ig-error\" *ngIf=\"formGroup.password.errors.pattern\">\n              Solo letras y números (mínimo una mayúscula, minúscula y un número) de 8 a 60 caracteres.\n            </label>\n          </div>\n        </mat-form-field>\n        <mat-form-field class=\"ig-input-wrapper\" *ngIf=\"formGroup.roleType.value != 3\">\n          <input [type]=\"hideConfirm ? 'password' : 'text'\" matInput placeholder=\"Confirmar contraseña\" class=\"ig-input\"\n            formControlName=\"confirmPassword\" />\n          <button mat-icon-button matSuffix (click)=\"showPassword($event, 'hideConfirm')\"\n            [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n            <mat-icon>{{hideConfirm ? 'visibility_off' : 'visibility'}}</mat-icon>\n          </button>\n          <div class=\"ig-error-wrapper\"\n            *ngIf=\" formGroup.confirmPassword.invalid && (formGroup.confirmPassword.dirty || formGroup.confirmPassword.touched)\">\n            <label class=\"ig-error\" *ngIf=\"formGroup.confirmPassword.errors.required\">\n              Campo es requerido.\n            </label>\n            <label class=\"ig-error\" *ngIf=\"formGroup.confirmPassword.errors.mustMatch\">\n              Las contraseñas deben coincidir\n            </label>\n          </div>\n        </mat-form-field>\n      </div>\n      <div class=\"ig-form-column\">\n        <mat-form-field class=\"ig-input-wrapper\">\n          <mat-label>Rol</mat-label>\n          <mat-select formControlName=\"roleType\" [disabled]=\"true\">\n            <mat-option *ngFor=\"let role of roles\" [value]=\"role.value\">\n              {{ role.viewValue }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field class=\"ig-input-wrapper\" *ngIf=\"formGroup.roleType.value === 2\">\n          <mat-label>Área</mat-label>\n          <mat-select formControlName=\"areaFk\">\n            <mat-option *ngFor=\"let area of areas\" [value]=\"area.areaPk\">\n              {{ area.name }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field class=\"ig-input-wrapper\" *ngIf=\"formGroup.roleType.value === 3\">\n          <input type=\"text\" placeholder=\"Supervisor\" matInput formControlName=\"employFk\" [matAutocomplete]=\"auto\">\n          <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n            <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n              {{option.nameEmploy}}\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n      </div>\n    </section>\n    <section class=\"ig-create-user-section\" [hidden]=\"true\">\n      <mat-accordion>\n        <mat-expansion-panel [expanded]=\"true\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              <h2 class=\"ig-create-user-subtitle\">Privilegios</h2>\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <div class=\"ig-form-column\">\n            <mat-checkbox formControlName=\"checkedConfiguration\">Responder conversaciones</mat-checkbox>\n          </div>\n        </mat-expansion-panel>\n      </mat-accordion>\n    </section>\n    <section class=\"ig-create-user-section\" *ngIf=\"formGroup.roleType.value === 3\">\n      <mat-accordion>\n        <mat-expansion-panel [expanded]=\"true\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              <h2 class=\"ig-create-user-subtitle\">Contactos excluidos</h2>\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <div class=\"ig-form-column\">\n            <mat-checkbox formControlName=\"checkedExcluded\">Habilitar opción</mat-checkbox>\n          </div>\n          <div class=\"ig-form-column\">\n            <button type=\"button\" [disabled]=\"!formGroup.checkedExcluded.value\" (click)=\"openDialog(null)\" mat-raised-button\n              class=\"ig-button ig-button-excluded\">Agregar</button>\n          </div>\n\n          <mat-table [dataSource]=\"dataSource\" matSort>\n            <ng-container matColumnDef=\"alias\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> Alias </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.alias}} </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"mobile\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> Mobile </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.mobile}}</mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"action\">\n              <mat-header-cell *matHeaderCellDef> Acción </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\">\n                <button type=\"button\" mat-icon-button color=\"primary\" (click)=\"openDialog(row)\">\n                  <mat-icon>ballot</mat-icon>\n                </button>\n                <button type=\"button\" mat-icon-button color=\"accent\" (click)=\"deleteExcluid(row.idExcluid)\">\n                  <mat-icon>delete</mat-icon>\n                </button>\n              </mat-cell>\n            </ng-container>\n\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n          </mat-table>\n        </mat-expansion-panel>\n      </mat-accordion>\n    </section>\n    <div class=\"ig-button-wrapper\">\n      <button mat-raised-button class=\"ig-button ig-button-save\" type=\"submit\">\n        Guardar\n        <img src=\"assets/icons/save.svg\">\n      </button>\n      <a mat-raised-button class=\"ig-button ig-button-cancel\" routerLink=\"/employee\">\n        Cancelar\n        <img src=\"assets/icons/x-circle.svg\">\n      </a>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/employee/employee-update/employee-update.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/employee/employee-update/employee-update.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ig-input-wrapper {\n  margin-right: 50px;\n  width: 22%;\n  margin-top: 1%; }\n\n.ig-create-user-section {\n  margin: 20px 0; }\n\n.ig-create-user-subtitle {\n  font-size: 18px;\n  margin: 0;\n  font-weight: 400; }\n\n.section-main {\n  padding: 24px;\n  background: #fff;\n  border-radius: 4px;\n  border: 1px solid #e2e8ee;\n  box-shadow: 0 1px 2px 0 #e2e8ee; }\n\n.section-main .ig-create-user-subtitle,\n.mat-expanded .ig-create-user-subtitle {\n  font-size: 24px;\n  position: relative;\n  padding-bottom: 10px; }\n\n.section-main .ig-create-user-subtitle::after,\n.mat-expanded .ig-create-user-subtitle::after {\n  content: '';\n  width: 32px;\n  height: 2px;\n  background-color: #ed0722;\n  position: absolute;\n  left: 0;\n  bottom: 0; }\n\n.ig-button-save,\n.ig-button-excluded {\n  margin-right: 20px;\n  border-radius: 5px;\n  box-shadow: none; }\n\n.ig-button-cancel {\n  border-radius: 5px;\n  border: 2px solid #e2e8ee;\n  color: #333;\n  background-color: #fff;\n  box-shadow: none; }\n\n.ig-input-excluded {\n  width: 100%; }\n\n.ig-textarea-excluded {\n  width: 100%; }\n\n@media screen and (max-width: 1024px) {\n  .ig-input-wrapper {\n    margin-left: 0;\n    width: 80%;\n    margin-top: 4%;\n    margin-bottom: 10px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N5bm9wc2lzL0VzY3JpdG9yaW8vUHJ1ZWJhIEZpbmFsL2lnLXdlYi1hcHAvc3JjL2FwcC9lbXBsb3llZS9lbXBsb3llZS1hZGQvZW1wbG95ZWUtYWRkLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvc3lub3BzaXMvRXNjcml0b3Jpby9QcnVlYmEgRmluYWwvaWctd2ViLWFwcC9zcmMvc2Fzcy92YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGNBQ0YsRUFBQTs7QUFFQTtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHlCQ2xCb0I7RURtQnBCLCtCQ25Cb0IsRUFBQTs7QURzQnRCOztFQUVFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsb0JBQW9CLEVBQUE7O0FBR3RCOztFQUVFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFNBQVMsRUFBQTs7QUFHWDs7RUFFRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdsQjtFQUVFLGtCQUFrQjtFQUNsQix5QkNsRG9CO0VEbURwQixXQ2xEZTtFRG1EZixzQkFBc0I7RUFDdEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0U7SUFDRSxjQUFjO0lBQ2QsVUFBVTtJQUNWLGNBQWM7SUFDZCxtQkFDRixFQUFBLEVBQUMiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS9lbXBsb3llZS11cGRhdGUvZW1wbG95ZWUtdXBkYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi8uLi8uLi8uLi9zYXNzL3ZhcnMuc2Nzcyc7XG5cbi5pZy1pbnB1dC13cmFwcGVyIHtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICB3aWR0aDogMjIlO1xuICBtYXJnaW4tdG9wOiAxJVxufVxuXG4uaWctY3JlYXRlLXVzZXItc2VjdGlvbiB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG4uaWctY3JlYXRlLXVzZXItc3VidGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnNlY3Rpb24tbWFpbiB7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWJvcmRlcjsgXG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwICRjb2xvci1ib3JkZXJcbn1cblxuLnNlY3Rpb24tbWFpbiAuaWctY3JlYXRlLXVzZXItc3VidGl0bGUsXG4ubWF0LWV4cGFuZGVkIC5pZy1jcmVhdGUtdXNlci1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLnNlY3Rpb24tbWFpbiAuaWctY3JlYXRlLXVzZXItc3VidGl0bGU6OmFmdGVyLFxuLm1hdC1leHBhbmRlZCAuaWctY3JlYXRlLXVzZXItc3VidGl0bGU6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkMDcyMjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG59XG5cbi5pZy1idXR0b24tc2F2ZSxcbi5pZy1idXR0b24tZXhjbHVkZWQge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmlnLWJ1dHRvbi1jYW5jZWxcbntcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAkY29sb3ItYm9yZGVyOyAgXG4gIGNvbG9yOiAkY29sb3ItZm9udDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmlnLWlucHV0LWV4Y2x1ZGVkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pZy10ZXh0YXJlYS1leGNsdWRlZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmlnLWlucHV0LXdyYXBwZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLXRvcDogNCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweFxuICB9XG59IiwiJGJvZHktY29sb3I6ICNmYWZiZmQ7XG5cbiRpZy1jb2xvci1wcmltYXJ5OiAjRUYyQTI0O1xuXG4kY29sb3ItYm9yZGVyOiAjZTJlOGVlO1xuJGNvbG9yLWZvbnQ6ICMzMzM7XG4kbGluZS1pbnB1dDogIzg5ODk4OTtcblxuJGlnLWNvbG9yLWVycm9yOiAjRUYyQTI0O1xuJGlnLWNvbG9yLXN1Y2Nlc3M6ICM0ODk3NjA7Il19 */"

/***/ }),

/***/ "./src/app/employee/employee-update/employee-update.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/employee/employee-update/employee-update.component.ts ***!
  \***********************************************************************/
/*! exports provided: EmployeeUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeUpdateComponent", function() { return EmployeeUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _app_utils_must_match_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/utils/must-match.validator */ "./src/app/utils/must-match.validator.ts");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_config_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/config/api.service */ "./src/app/config/api.service.ts");
/* harmony import */ var _app_config_layermsg_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/config/layermsg.service */ "./src/app/config/layermsg.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_model_employee__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/model/employee */ "./src/app/model/employee.ts");
/* harmony import */ var _employee_add_modal_employee_add_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../employee-add-modal/employee-add-modal.component */ "./src/app/employee/employee-add-modal/employee-add-modal.component.ts");
/* harmony import */ var _app_service_area_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/service/area.service */ "./src/app/service/area.service.ts");
/* harmony import */ var _app_service_supervisor_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/service/supervisor.service */ "./src/app/service/supervisor.service.ts");
/* harmony import */ var _app_service_officer_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/service/officer.service */ "./src/app/service/officer.service.ts");
/* harmony import */ var _app_enumeration_enum_role_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/enumeration/enum-role.enum */ "./src/app/enumeration/enum-role.enum.ts");
/* harmony import */ var _app_service_role_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/service/role.service */ "./src/app/service/role.service.ts");
/* harmony import */ var _app_request_req_excluid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/request/req-excluid */ "./src/app/request/req-excluid.ts");
/* harmony import */ var _app_enumeration_enum_status_enum__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @app/enumeration/enum-status.enum */ "./src/app/enumeration/enum-status.enum.ts");
/* harmony import */ var _app_enumeration_enum_state_enum__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @app/enumeration/enum-state.enum */ "./src/app/enumeration/enum-state.enum.ts");
/* harmony import */ var _app_config_parametries__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @app/config/parametries */ "./src/app/config/parametries.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_22__);























var EmployeeUpdateComponent = /** @class */ (function () {
    function EmployeeUpdateComponent(dialog, formBuilder, apiService, areaService, supervisorService, officerService, roleService, layerMsgService, route, router) {
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.areaService = areaService;
        this.supervisorService = supervisorService;
        this.officerService = officerService;
        this.roleService = roleService;
        this.layerMsgService = layerMsgService;
        this.route = route;
        this.router = router;
        this.formGroupSupervisor = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.selectedRole = '';
        this.checkedConfiguration = true;
        this.checkedExcluded = true;
        this.hide = true;
        this.hideConfirm = true;
        this.displayedColumns = ['alias', 'mobile', 'action'];
        this.roleTypeFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.officerService.excluidsStatic.splice(0);
        this.listeners = new Array();
    }
    EmployeeUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listeners.push(this.roleService.subscribe(function (roles) {
            _this.roles = roles;
        }));
        this.roleService.loadRoles();
        this.loadArea();
        this.loadAllSupervisor();
        this.autocompleteSupervisor();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.officerService.excluidsStatic);
        this.dataSource.sort = this.sort;
        this.formEmployAdd = this.formBuilder.group({
            name: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_21__["Parametries"].NAME_PAT_MAT_MIN_LENGTH),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_21__["Parametries"].NAME_MAX_LENGTH),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_app_config_parametries__WEBPACK_IMPORTED_MODULE_21__["Parametries"].EMPLOYEE_ONLY_NUMBER_AND_CADENA)
                ]],
            apePat: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_21__["Parametries"].NAME_PAT_MAT_MIN_LENGTH),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_21__["Parametries"].APE_PAT_MAX_LENGTH),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_app_config_parametries__WEBPACK_IMPORTED_MODULE_21__["Parametries"].EMPLOYEE_ONLY_NUMBER_AND_CADENA)
                ]],
            apeMat: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_21__["Parametries"].NAME_PAT_MAT_MIN_LENGTH),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_21__["Parametries"].APE_MAT_MAX_LENGTH),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_app_config_parametries__WEBPACK_IMPORTED_MODULE_21__["Parametries"].EMPLOYEE_ONLY_NUMBER_AND_CADENA)
                ]],
            email: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_21__["Parametries"].EMAIL_MAX_LENGTH),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
                ]],
            mobile: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_21__["Parametries"].MOBILE_MIN_LENGTH),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_21__["Parametries"].MOBILE_MAX_LENGTH),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_app_config_parametries__WEBPACK_IMPORTED_MODULE_21__["Parametries"].PATTERN_NUMBER)
                ]],
            phone: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_app_config_parametries__WEBPACK_IMPORTED_MODULE_21__["Parametries"].EMPLOYEE_ONLY_NUMBER_AND_CADENA),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_21__["Parametries"].PHONE_MIN_LENGTH),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_21__["Parametries"].PHONE_MAX_LENGTH)
                ]],
            user: [{ value: '', disabled: true }, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_app_config_parametries__WEBPACK_IMPORTED_MODULE_21__["Parametries"].PATTERN_PASSWORD_VOID)
                ]],
            confirmPassword: [''],
            roleType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            areaFk: ['', []],
            checkedConfiguration: [true],
            checkedExcluded: [true],
            employFk: this.formGroupSupervisor
        }, {
            validator: Object(_app_utils_must_match_validator__WEBPACK_IMPORTED_MODULE_5__["MustMatch"])('password', 'confirmPassword')
        });
        this.listeners.push(this.route.params.subscribe(function (params) {
            _this.title = 'Editar ' + params.role;
            switch (params.role) {
                case _app_enumeration_enum_role_enum__WEBPACK_IMPORTED_MODULE_16__["EnumRole"].OFFICER.value:
                    _this.officerService.findOfficerById(params.employPk, function (result) {
                        _this.employ = result.data;
                        _this.employ.employPk = params.employPk;
                        var data = _this.employ;
                        _this.formEmployAdd.patchValue({
                            'name': data.name,
                            'apePat': data.apePat,
                            'apeMat': data.apeMat,
                            'email': data.email,
                            'mobile': data.mobile,
                            'phone': data.phone,
                            'user': data.login,
                            'areaFk': data.areaFk,
                            'checkedConfiguration': data.statePrivilege === _app_enumeration_enum_state_enum__WEBPACK_IMPORTED_MODULE_20__["EnumState"].ACTIVE.code,
                            'checkedExcluded': data.stateConfig === _app_enumeration_enum_state_enum__WEBPACK_IMPORTED_MODULE_20__["EnumState"].ACTIVE.code,
                            'roleType': _app_enumeration_enum_role_enum__WEBPACK_IMPORTED_MODULE_16__["EnumRole"].OFFICER.code
                        });
                        if (_this.supervisores == undefined) {
                            _this.loadAllSupervisor();
                            _this.autocompleteSupervisor();
                        }
                        var filtroAutocomplete = _this.supervisores.filter(function (supervisor) {
                            return supervisor.employPk === data.employFk;
                        });
                        _this.formGroupSupervisor.setValue(filtroAutocomplete[0]);
                        for (var i = 0; i < data.excluids.length; i++) {
                            data.excluids[i].idExcluid = i;
                            _this.officerService.excluidsStatic.push(data.excluids[i]);
                        }
                        _this.officerService.excluids.subscribe(function (data) {
                            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
                        });
                    });
                    break;
                case _app_enumeration_enum_role_enum__WEBPACK_IMPORTED_MODULE_16__["EnumRole"].SUPERVISOR.value:
                    _this.supervisorService.findSupervisorById(params.employPk, function (result) {
                        _this.employ = result.data;
                        _this.employ.employPk = params.employPk;
                        var data = _this.employ;
                        _this.formEmployAdd.patchValue({
                            'name': data.name,
                            'apePat': data.apePat,
                            'apeMat': data.apeMat,
                            'email': data.email,
                            'mobile': data.mobile,
                            'phone': data.phone,
                            'user': data.login,
                            'areaFk': data.areaFk,
                            'checkedConfiguration': data.statePrivilege === _app_enumeration_enum_state_enum__WEBPACK_IMPORTED_MODULE_20__["EnumState"].ACTIVE.code,
                            'roleType': _app_enumeration_enum_role_enum__WEBPACK_IMPORTED_MODULE_16__["EnumRole"].SUPERVISOR.code
                        });
                    });
                    break;
            }
        }));
    };
    EmployeeUpdateComponent.prototype.ngOnDestroy = function () {
        this.listeners.forEach(function (listener) {
            listener.unsubscribe();
        });
    };
    EmployeeUpdateComponent.prototype.showPassword = function (e, field) {
        e.preventDefault();
        if (field === 'hide')
            this.hide = !this.hide;
        if (field === 'hideConfirm')
            this.hideConfirm = !this.hideConfirm;
    };
    EmployeeUpdateComponent.prototype.autocompleteSupervisor = function () {
        var _this = this;
        this.filteredOptions = this.formGroupSupervisor.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (value) { return typeof value === 'string' ? value : value.nameEmploy; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (nameEmploy) { return nameEmploy ? _this._filter(nameEmploy) : _this.supervisores.slice(); }));
    };
    EmployeeUpdateComponent.prototype._filter = function (name) {
        return this.supervisores.filter(function (option) { return option.nameEmploy.toLowerCase().indexOf(name.toLowerCase()) > -1; });
    };
    EmployeeUpdateComponent.prototype.displayFn = function (s) {
        return s ? s.nameEmploy : undefined;
    };
    Object.defineProperty(EmployeeUpdateComponent.prototype, "formGroup", {
        get: function () {
            return this.formEmployAdd.controls;
        },
        enumerable: true,
        configurable: true
    });
    EmployeeUpdateComponent.prototype.openDialog = function (excluid) {
        var gen = excluid != null ? excluid : new _app_request_req_excluid__WEBPACK_IMPORTED_MODULE_18__["ReqExcluid"]();
        var dialogRef = this.dialog.open(_employee_add_modal_employee_add_modal_component__WEBPACK_IMPORTED_MODULE_12__["EmployeeAddModalComponent"], {
            width: '300px',
            data: gen
        });
    };
    EmployeeUpdateComponent.prototype.loadArea = function () {
        var _this = this;
        this.apiService.post('/area/v1/loadAllArea', {
            state: 'A'
        }, function (result) {
            _this.areas = result.data;
        });
    };
    EmployeeUpdateComponent.prototype.loadAllSupervisor = function () {
        var _this = this;
        this.supervisorService.loadAllSupervisor(function (result) {
            _this.supervisores = result.data;
        });
    };
    EmployeeUpdateComponent.prototype.addEmploy = function () {
        var _this = this;
        var employee = new _app_model_employee__WEBPACK_IMPORTED_MODULE_11__["Employee"]();
        employee.fromFormEmploy(this.formEmployAdd);
        employee.setEmployPk(this.employ.employPk);
        console.log(employee);
        if (this.formGroup.roleType.value === 2) {
            this.supervisorService.updateSupervisor(employee.toUpdateSupervisor(), function (result) {
                _this.layerMsgService.showMessageOk(_app_enumeration_enum_status_enum__WEBPACK_IMPORTED_MODULE_19__["EnumStatus"].UPDATE_OK.code, function () {
                    _this.router.navigate(['employee']);
                });
            });
        }
        else {
            employee.setExcluids(this.officerService.excluidsStatic);
            this.officerService.updateOfficer(employee.toUpdateOfficer(), function (result) {
                _this.layerMsgService.showMessageOk(_app_enumeration_enum_status_enum__WEBPACK_IMPORTED_MODULE_19__["EnumStatus"].UPDATE_OK.code, function () {
                    _this.router.navigate(['employee']);
                });
            });
        }
    };
    EmployeeUpdateComponent.prototype.deleteExcluid = function (idExcluid) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_22___default.a.fire({
            title: '¿Desea eliminar al excluido?',
            text: 'El excluido será eliminado de la lista.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: ' <div style="margin: 0; padding: 0; display: flex; justify-content: center; align-items: center;"><span>Aceptar</span><img src="./../../../assets/icons/save.svg"></div>',
            confirmButtonColor: "#EF2A24",
            cancelButtonText: '<div style="margin: 0; padding: 0; display: flex; justify-content: center; align-items: center;"><span>Cancelar</span><img src="./../../../assets/icons/x-circle.svg"></div>'
        }).then(function (result) {
            if (result.value) {
                for (var i = 0; i < _this.officerService.excluidsStatic.length; i++) {
                    if (_this.officerService.excluidsStatic[i].idExcluid == idExcluid) {
                        _this.officerService.excluidsStatic.splice(i, 1);
                        _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.officerService.excluidsStatic);
                        _this.dataSource.sort = _this.sort;
                        break;
                    }
                }
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_22___default.a.DismissReason.cancel) { }
        });
    };
    EmployeeUpdateComponent.prototype.onFormSubmit = function () {
        if (this.formEmployAdd.invalid) {
            return;
        }
        else {
            this.addEmploy();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"])
    ], EmployeeUpdateComponent.prototype, "sort", void 0);
    EmployeeUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-update',
            template: __webpack_require__(/*! ./employee-update.component.html */ "./src/app/employee/employee-update/employee-update.component.html"),
            styles: [__webpack_require__(/*! ./employee-update.component.scss */ "./src/app/employee/employee-update/employee-update.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _app_config_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"],
            _app_service_area_service__WEBPACK_IMPORTED_MODULE_13__["AreaService"],
            _app_service_supervisor_service__WEBPACK_IMPORTED_MODULE_14__["SupervisorService"],
            _app_service_officer_service__WEBPACK_IMPORTED_MODULE_15__["OfficerService"],
            _app_service_role_service__WEBPACK_IMPORTED_MODULE_17__["RoleService"],
            _app_config_layermsg_service__WEBPACK_IMPORTED_MODULE_9__["LayermsgService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]])
    ], EmployeeUpdateComponent);
    return EmployeeUpdateComponent;
}());



/***/ }),

/***/ "./src/app/employee/employee.component.html":
/*!**************************************************!*\
  !*** ./src/app/employee/employee.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<dashboard-header class=\"dashboard\"></dashboard-header>\n<dashboard-layermsg></dashboard-layermsg>\n<div class=\"ig-dashboard-title-wrapper\">\n  <h1 class=\"ig-dashboard-title\">Mantenimiento de empleados</h1>\n</div>\n<div class=\"ig-dashboard-container\"> \n  <div class=\"ig-searcher-container\">\n    <mat-icon class=\"ig-searcher-icon\" matSuffix>search</mat-icon>\n    <input type=\"text\" placeholder=\"Buscar usuario\" class=\"ig-input-search\" matInput (keyup)=\"applyFilter($event.target.value)\">\n  </div>\n  <div class=\"ig-dashboard-table-wrapper mat-elevation-z8\">\n    <table mat-table [dataSource]=\"dataSource\" matSort class=\"full-width-table\">\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Nombre </th>\n        <td mat-cell *matCellDef=\"let element\"> {{ element.nameEmploy}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"user\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Usuario </th>\n        <td mat-cell *matCellDef=\"let element\"> {{ element.login }} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"role\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Rol </th>\n        <td mat-cell *matCellDef=\"let element\"> {{ element.nameRole }} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"mobile\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Celular </th>\n        <td mat-cell *matCellDef=\"let element\"> {{ element.mobile }} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"area\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Área </th>\n        <td mat-cell *matCellDef=\"let element\"> {{ element.nameArea }} </td>\n      </ng-container>   \n      <ng-container matColumnDef=\"action\">\n        <th mat-header-cell *matHeaderCellDef> Acción </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <a href=\"#\" *ngIf=\"element.nameRole != 'ROLE_ADMINISTRADOR'\" class=\"\" [routerLink] = \"['/employee/update/', {employPk: element.employPk, role: element.nameRole}]\"><img class=\"table-icon\" src=\"assets/icons/edit.svg\"></a>\n          <a href=\"#\" *ngIf=\"element.nameRole != 'ROLE_ADMINISTRADOR'\" class=\"\" (click)=\"delete($event, element.employPk)\" ><img class=\"table-icon\" src=\"assets/icons/delete.svg\"></a>\n          <a href=\"#\" *ngIf=\"element.nameRole == 'ROLE_ADMINISTRADOR'\" class=\"\" [routerLink] = \"['/admin/update/', {employPk: element.employPk, role: element.nameRole}]\"><img class=\"table-icon\" src=\"assets/icons/edit.svg\"></a>\n        </td>\n      </ng-container>\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </div>\n  <div class=\"ig-dashboard-table-wrapper mat-elevation-z8\">\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n  </div>\n  <div class=\"ig-button-wrapper\">\n    <a routerLink=\"/employee/create\" mat-raised-button class=\"ig-button\">Agregar <img src=\"assets/icons/user-add.svg\"></a>    \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/employee/employee.component.scss":
/*!**************************************************!*\
  !*** ./src/app/employee/employee.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ig-searcher-container {\n  width: 700px; }\n\n.table-icon {\n  margin-bottom: 5px;\n  margin-right: 10px; }\n\n.mat-column-name {\n  width: 30% !important; }\n\n.mat-column-area {\n  width: 20% !important; }\n\n.mat-column-action {\n  width: 10% !important; }\n\n@media screen and (max-width: 765px) {\n  .ig-input-wrapper {\n    width: 300px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N5bm9wc2lzL0VzY3JpdG9yaW8vUHJ1ZWJhIEZpbmFsL2lnLXdlYi1hcHAvc3JjL2FwcC9lbXBsb3llZS9lbXBsb3llZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxxQkFBcUIsRUFBQTs7QUFldkI7RUFDRSxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRTtJQUNFLFlBQVksRUFBQSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWctc2VhcmNoZXItY29udGFpbmVyIHtcbiAgd2lkdGg6IDcwMHB4O1xufVxuXG4udGFibGUtaWNvbiB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ubWF0LWNvbHVtbi1uYW1lIHtcbiAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWNvbHVtbi11c2VyIHtcblxufVxuXG4ubWF0LWNvbHVtbi1yb2xlIHtcblxufVxuXG4ubWF0LWNvbHVtbi1tb2JpbGUge1xuXG59XG5cbi5tYXQtY29sdW1uLWFyZWEge1xuICB3aWR0aDogMjAlICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtY29sdW1uLWFjdGlvbiB7XG4gIHdpZHRoOiAxMCUgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY1cHgpIHtcbiAgLmlnLWlucHV0LXdyYXBwZXIge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/employee/employee.component.ts":
/*!************************************************!*\
  !*** ./src/app/employee/employee.component.ts ***!
  \************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_config_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/config/api.service */ "./src/app/config/api.service.ts");
/* harmony import */ var _app_service_employ_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/service/employ.service */ "./src/app/service/employ.service.ts");
/* harmony import */ var _app_config_layermsg_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/config/layermsg.service */ "./src/app/config/layermsg.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_enumeration_enum_status_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/enumeration/enum-status.enum */ "./src/app/enumeration/enum-status.enum.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);









var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(apiService, layerMsgService, employService, router) {
        this.apiService = apiService;
        this.layerMsgService = layerMsgService;
        this.employService = employService;
        this.router = router;
        this.displayedColumns = ['name', 'user', 'role', 'mobile', 'area', 'action'];
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        this.readDataUser();
    };
    EmployeeComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    EmployeeComponent.prototype.delete = function (e, employPk) {
        var _this = this;
        e.preventDefault();
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: '¿Desea eliminar el empleado?',
            text: 'Los datos eliminados no podrán ser recuperados.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: ' <div style="margin: 0; padding: 0; display: flex; justify-content: center; align-items: center;"><span>Aceptar</span><img src="./../../../assets/icons/save.svg"></div>',
            confirmButtonColor: "#EF2A24",
            cancelButtonText: '<div style="margin: 0; padding: 0; display: flex; justify-content: center; align-items: center;"><span>Cancelar</span><img src="./../../../assets/icons/x-circle.svg"></div>'
        }).then(function (result) {
            if (result.value) {
                e.preventDefault();
                _this.employService.deleteEmploy(employPk, function (result) {
                    for (var i = 0; i < _this.userData.length; i++) {
                        if (_this.userData[i].employPk == employPk) {
                            _this.userData.splice(i, 1);
                            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.userData);
                            _this.dataSource.sort = _this.sort;
                            _this.dataSource.paginator = _this.paginator;
                            break;
                        }
                    }
                    _this.layerMsgService.showMessageOk(_app_enumeration_enum_status_enum__WEBPACK_IMPORTED_MODULE_7__["EnumStatus"].DELETE_OK.code, function () { });
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.DismissReason.cancel) {
            }
        });
    };
    EmployeeComponent.prototype.readDataUser = function () {
        var _this = this;
        this.employService.loadAllEmploy(function (result) {
            _this.userData = result.data;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.userData);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], EmployeeComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], EmployeeComponent.prototype, "paginator", void 0);
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.scss */ "./src/app/employee/employee.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_config_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _app_config_layermsg_service__WEBPACK_IMPORTED_MODULE_5__["LayermsgService"],
            _app_service_employ_service__WEBPACK_IMPORTED_MODULE_4__["EmployService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/enumeration/enum-role.enum.ts":
/*!***********************************************!*\
  !*** ./src/app/enumeration/enum-role.enum.ts ***!
  \***********************************************/
/*! exports provided: EnumRole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumRole", function() { return EnumRole; });
/* harmony import */ var _app_model_role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/model/role */ "./src/app/model/role.ts");

var EnumRole = /** @class */ (function () {
    function EnumRole(code, value) {
        this.code = code;
        this.value = value;
    }
    EnumRole.prototype.toRole = function () {
        return new _app_model_role__WEBPACK_IMPORTED_MODULE_0__["Role"](this.code, this.value);
    };
    EnumRole.SUPERVISOR = new EnumRole(2, 'SUPERVISOR');
    EnumRole.OFFICER = new EnumRole(3, 'FUNCIONARIO');
    EnumRole.ADMINISTRATOR = new EnumRole(4, 'ROLE_ADMINISTRADOR');
    return EnumRole;
}());



/***/ }),

/***/ "./src/app/enumeration/enum-state.enum.ts":
/*!************************************************!*\
  !*** ./src/app/enumeration/enum-state.enum.ts ***!
  \************************************************/
/*! exports provided: EnumState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumState", function() { return EnumState; });
var EnumState = /** @class */ (function () {
    function EnumState(code, value) {
        this.code = code;
        this.value = value;
    }
    EnumState.list = function () {
        return [
            EnumState.ACTIVE,
            EnumState.INACTIVE
        ];
    };
    EnumState.findByCode = function (code) {
        for (var _i = 0, _a = EnumState.list(); _i < _a.length; _i++) {
            var status_1 = _a[_i];
            if (status_1.code === code) {
                return status_1;
            }
        }
    };
    EnumState.ACTIVE = new EnumState('A', 'Activo');
    EnumState.INACTIVE = new EnumState('B', 'Inactivo');
    return EnumState;
}());



/***/ }),

/***/ "./src/app/enumeration/enum-status-error.enum.ts":
/*!*******************************************************!*\
  !*** ./src/app/enumeration/enum-status-error.enum.ts ***!
  \*******************************************************/
/*! exports provided: EnumStatusError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumStatusError", function() { return EnumStatusError; });
var EnumStatusError = /** @class */ (function () {
    function EnumStatusError(code, value) {
        this.code = code;
        this.value = value;
    }
    EnumStatusError.list = function () {
        return [
            EnumStatusError.OFFICER_WITH_CONTACTS,
            EnumStatusError.PARAMETER_INVALID,
            EnumStatusError.SESSION_EXPIRE,
            EnumStatusError.ERROR_UNEXPECTED,
            EnumStatusError.ERROR_STORE_PROCEDURE,
            EnumStatusError.RESULT_OK,
            EnumStatusError.USER_NOT_EXIST,
            EnumStatusError.USER_LOCKOUT,
            EnumStatusError.USER_MAX_ATTEMPT,
            EnumStatusError.ERROR_STORE_PROCEDURE,
            EnumStatusError.LOGIN_ATTEMPT,
            EnumStatusError.LOGER_DESBLOCK,
            EnumStatusError.AREA_NAME_IN_USE,
            EnumStatusError.NUMBER_IN_USE,
            EnumStatusError.LOGIN_AND_PHONE_AND_EMAIL_IN_USE,
            EnumStatusError.LOGIN_AND_MOBILE_IN_USE,
            EnumStatusError.MOBILE_AND_EMAIL_IN_USE,
            EnumStatusError.NAME_AND_EMAIL_IN_USE,
            EnumStatusError.NAME_IN_USE,
            EnumStatusError.PHONE_IN_USE,
            EnumStatusError.EMAIL_IN_USE,
            EnumStatusError.ERROR_DELETE_AREA,
            EnumStatusError.EMAIL_AND_MOBILE_IN_USE,
            EnumStatusError.EMAI_IN_USE,
            EnumStatusError.MOBILE_IN_USE,
            EnumStatusError.NOT_CHANGE_OFFICER,
            EnumStatusError.NOT_CHANGE_SUPERVISOR,
            EnumStatusError.ERROR_DELETE_EMPLOY,
            EnumStatusError.ERROR_DELETE_OFFICER_EMPLOY
        ];
    };
    EnumStatusError.findByCode = function (code) {
        for (var _i = 0, _a = EnumStatusError.list(); _i < _a.length; _i++) {
            var status_1 = _a[_i];
            if (status_1.code === code) {
                return status_1;
            }
        }
    };
    EnumStatusError.OFFICER_WITH_CONTACTS = new EnumStatusError('8001', 'El funcionario tiene contactos asociados.');
    EnumStatusError.PARAMETER_INVALID = new EnumStatusError('0052', 'Valide los par\u00E1metros.');
    EnumStatusError.SESSION_EXPIRE = new EnumStatusError('7777', 'Su sesi\u00F3n ha expirado.');
    EnumStatusError.ERROR_UNEXPECTED = new EnumStatusError('9999', 'Ocurri\u00F3 un error inesperado.');
    EnumStatusError.RESULT_OK = new EnumStatusError("0000", "Procesado exitosamente.");
    EnumStatusError.USER_NOT_EXIST = new EnumStatusError("0002", "Usuario no existe.");
    EnumStatusError.USER_LOCKOUT = new EnumStatusError("0004", "El usuario se encuentra bloqueado.");
    EnumStatusError.USER_MAX_ATTEMPT = new EnumStatusError("0003", "Usuario ha supera el limite de intentos.");
    EnumStatusError.ERROR_STORE_PROCEDURE = new EnumStatusError('8888', 'Ocurri\u00F3 un error inesperado.');
    EnumStatusError.LOGIN_ATTEMPT = new EnumStatusError("0001", "Intento fallido de login.");
    EnumStatusError.LOGER_DESBLOCK = new EnumStatusError("0005", "Desbloqueo exitoso.");
    EnumStatusError.AREA_NAME_IN_USE = new EnumStatusError("0010", "\u00C1rea con ese nombre ya en uso.");
    EnumStatusError.NUMBER_IN_USE = new EnumStatusError("0011", "Numero ya en uso.");
    EnumStatusError.LOGIN_AND_PHONE_AND_EMAIL_IN_USE = new EnumStatusError("0021", "Nombre usuario, numero y email ya en uso.");
    EnumStatusError.LOGIN_AND_MOBILE_IN_USE = new EnumStatusError("0022", "Nombre de usuario y telefono en uso.");
    EnumStatusError.MOBILE_AND_EMAIL_IN_USE = new EnumStatusError("0023", "Tel\u00E9fono y email ya en uso.");
    EnumStatusError.NAME_AND_EMAIL_IN_USE = new EnumStatusError("0024", "Nombre y email ya en uso.");
    EnumStatusError.NAME_IN_USE = new EnumStatusError("0025", "Nombre ya en uso.");
    EnumStatusError.PHONE_IN_USE = new EnumStatusError("0026", "Celular ya en uso.");
    EnumStatusError.EMAIL_IN_USE = new EnumStatusError("0027", "Email ya en uso.");
    EnumStatusError.ERROR_DELETE_AREA = new EnumStatusError("0031", "El area ya fue asignada a un usuario.");
    EnumStatusError.EMAIL_AND_MOBILE_IN_USE = new EnumStatusError("0041", "Email y telefono en uso.");
    EnumStatusError.EMAI_IN_USE = new EnumStatusError("0042", "Telefono  ya esta en uso.");
    EnumStatusError.MOBILE_IN_USE = new EnumStatusError("0043", "Email en uso.");
    EnumStatusError.NOT_CHANGE_OFFICER = new EnumStatusError("0044", "Este supervisor tiene asignado funcionarios a su cargo.");
    EnumStatusError.NOT_CHANGE_SUPERVISOR = new EnumStatusError("0055", "Este supervisor tiene asignado funcionarios a su cargo.");
    EnumStatusError.ERROR_DELETE_EMPLOY = new EnumStatusError("0061", "el funcionarios ya tiene conversaciones.");
    EnumStatusError.ERROR_DELETE_OFFICER_EMPLOY = new EnumStatusError("0062", "El supervisor tiene funcionarios a su cargo.");
    return EnumStatusError;
}());



/***/ }),

/***/ "./src/app/enumeration/enum-status.enum.ts":
/*!*************************************************!*\
  !*** ./src/app/enumeration/enum-status.enum.ts ***!
  \*************************************************/
/*! exports provided: EnumStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumStatus", function() { return EnumStatus; });
var EnumStatus = /** @class */ (function () {
    function EnumStatus(code, value) {
        this.code = code;
        this.value = value;
    }
    EnumStatus.list = function () {
        return [
            EnumStatus.SAVE_OK,
            EnumStatus.DELETE_OK,
            EnumStatus.UPDATE_OK,
            EnumStatus.CHANGE_CONFIG_OK,
        ];
    };
    EnumStatus.findByCode = function (code) {
        for (var _i = 0, _a = EnumStatus.list(); _i < _a.length; _i++) {
            var status_1 = _a[_i];
            if (status_1.code === code) {
                return status_1;
            }
        }
    };
    EnumStatus.SAVE_OK = new EnumStatus('8000', 'Registro exitoso.');
    EnumStatus.DELETE_OK = new EnumStatus('8001', 'Registro eliminado.');
    EnumStatus.UPDATE_OK = new EnumStatus('8003', 'Registro Actualizado.');
    EnumStatus.CHANGE_CONFIG_OK = new EnumStatus('8888', 'Se ha cambiado el estado de la configuración.');
    return EnumStatus;
}());



/***/ }),

/***/ "./src/app/handler/handler-error.service.ts":
/*!**************************************************!*\
  !*** ./src/app/handler/handler-error.service.ts ***!
  \**************************************************/
/*! exports provided: HandlerErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandlerErrorService", function() { return HandlerErrorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_enumeration_enum_status_error_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/enumeration/enum-status-error.enum */ "./src/app/enumeration/enum-status-error.enum.ts");
/* harmony import */ var _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _app_config_layermsg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/config/layermsg.service */ "./src/app/config/layermsg.service.ts");





var HandlerErrorService = /** @class */ (function () {
    function HandlerErrorService(authService, layerMsgService) {
        this.authService = authService;
        this.layerMsgService = layerMsgService;
    }
    HandlerErrorService.prototype.extractCodeError = function (error) {
        if (error.error && error.error.status) {
            return error.error.status.code;
        }
        return undefined;
    };
    HandlerErrorService.prototype.isValid = function (status) {
        if (status) {
            switch (status) {
                case _app_enumeration_enum_status_error_enum__WEBPACK_IMPORTED_MODULE_2__["EnumStatusError"].SESSION_EXPIRE:
                    this.authService.logout();
                    return false;
            }
        }
        return true;
    };
    HandlerErrorService.prototype.handler = function (error, onSucces) {
        var code = this.extractCodeError(error);
        var status = _app_enumeration_enum_status_error_enum__WEBPACK_IMPORTED_MODULE_2__["EnumStatusError"].findByCode(code);
        if (this.isValid(status)) {
            onSucces();
        }
    };
    HandlerErrorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _app_config_layermsg_service__WEBPACK_IMPORTED_MODULE_4__["LayermsgService"]])
    ], HandlerErrorService);
    return HandlerErrorService;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\r\n  <div class=\"login-header\">\r\n    <img class=\"login-header-logo\" src=\"assets/icons/scotia-brand.svg\">\r\n  </div>\r\n  <form [formGroup]=\"fgroup\" (ngSubmit)=\"onFormSubmit()\" class=\"login-form\">\r\n    <h1 class=\"login-title\">Bienvenido</h1>\r\n    <div>\r\n      <div class=\"ig-form-column\">\r\n        <mat-form-field class=\"login-input-wrapper\">\r\n          <div>\r\n            <input id=\"usuario\" matInput placeholder=\"Usuario\" class=\"ig-input\" required formControlName=\"user\" />\r\n          </div>\r\n          <div class=\"ig-error-wrapper\" \r\n          *ngIf=\"formGroup.user.invalid && (formGroup.user.dirty || formGroup.user.touched)\">\r\n            <label *ngIf=\"formGroup.user.errors.required\" class=\"ig-error\">\r\n              Ingrese el usuario.\r\n            </label>\r\n            <label *ngIf=\"formGroup.user.errors.minlength\" class=\"ig-error\">\r\n              Mínimo 5 caracteres.<br>\r\n            </label>\r\n            <label *ngIf=\"formGroup.user.errors.maxlength\" class=\"ig-error\">\r\n              Máximo 20 caracteres.<br>\r\n            </label>\r\n            <label *ngIf=\"formGroup.user.errors.pattern\" class=\"ig-error\">\r\n              Solo letras.\r\n            </label>\r\n          </div>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"ig-form-column\">\r\n        <mat-form-field class=\"login-input-wrapper\">      \r\n          <input required id=\"pass\" matInput placeholder=\"Contraseña\" [type]=\"hide ? 'password' : 'text'\" formControlName=\"pass\">\r\n          <button type=\"button\" mat-icon-button matSuffix [attr.aria-label]=\"'Hide password'\"\r\n            [attr.aria-pressed]=\"hide\">\r\n            <mat-icon (click)=\"showPassword($event)\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n          </button>\r\n          <div class=\"ig-error-wrapper\" \r\n          *ngIf=\"formGroup.pass.invalid && (formGroup.pass.dirty || formGroup.pass.touched)\">\r\n            <label *ngIf=\"formGroup.pass.errors.required\" class=\"ig-error\">\r\n              Ingrese la contraseña.\r\n            </label>\r\n          </div>\r\n        </mat-form-field>\r\n      </div>\r\n      <span *ngIf=\"errors['service']\" class=\"login-error-general ig-error\" id=\"demo\">\r\n        {{ errors['message'] }}\r\n      </span>\r\n      <button type=\"submit\" mat-raised-button class=\"ig-button login-button\">Ingresar</button>\r\n    </div>\r\n  </form>\r\n  <div class=\"login-footer\">\r\n    &#169; 2019 Synopsis S.A. - IMGrabber\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-header {\n  padding: 20px 30px;\n  background: #FFF;\n  border-bottom: 1px solid #e2e8ee;\n  margin-bottom: 50px; }\n\n.login-header-logo {\n  height: 20px; }\n\n.login-title {\n  font-size: 42px;\n  margin-bottom: 20px; }\n\n.login-form {\n  border-radius: 2px;\n  border: 1px solid #e2e8ee;\n  margin: auto;\n  background: #fff;\n  padding: 30px;\n  width: 350px; }\n\n.login-input-wrapper {\n  width: 100%;\n  position: relative;\n  margin-top: 5px; }\n\n.login-button {\n  border-radius: 5px;\n  box-shadow: none;\n  width: 100%;\n  margin-top: 35px; }\n\n.login-footer {\n  text-align: center;\n  margin-top: 15px;\n  font-size: 14px; }\n\n.login-error-general {\n  position: absolute;\n  font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N5bm9wc2lzL0VzY3JpdG9yaW8vUHJ1ZWJhIEZpbmFsL2lnLXdlYi1hcHAvc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsIi9ob21lL3N5bm9wc2lzL0VzY3JpdG9yaW8vUHJ1ZWJhIEZpbmFsL2lnLXdlYi1hcHAvc3JjL3Nhc3MvdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0Msa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQ0NGcUI7RURHckIsbUJBQW1CLEVBQUE7O0FBR3BCO0VBQ0MsWUFBWSxFQUFBOztBQUdiO0VBQ0MsZUFBZTtFQUNmLG1CQUFtQixFQUFBOztBQUdwQjtFQUNDLGtCQUFrQjtFQUNsQix5QkNqQnFCO0VEa0JyQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZLEVBQUE7O0FBR2I7RUFDQyxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFHaEI7RUFDQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTs7QUFHakI7RUFDQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFHaEI7RUFDQyxrQkFBa0I7RUFDbEIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9zYXNzL3ZhcnMnO1xuXG5cbi5sb2dpbi1oZWFkZXIge1xuXHRwYWRkaW5nOiAyMHB4IDMwcHg7XG5cdGJhY2tncm91bmQ6ICNGRkY7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY29sb3ItYm9yZGVyO1xuXHRtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4ubG9naW4taGVhZGVyLWxvZ28ge1xuXHRoZWlnaHQ6IDIwcHg7XG59XG5cbi5sb2dpbi10aXRsZSB7XG5cdGZvbnQtc2l6ZTogNDJweDtcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmxvZ2luLWZvcm0ge1xuXHRib3JkZXItcmFkaXVzOiAycHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1ib3JkZXI7IFxuXHRtYXJnaW46IGF1dG87XG5cdGJhY2tncm91bmQ6ICNmZmY7XG5cdHBhZGRpbmc6IDMwcHg7XHRcdFxuXHR3aWR0aDogMzUwcHg7XG59XG5cbi5sb2dpbi1pbnB1dC13cmFwcGVyIHtcblx0d2lkdGg6IDEwMCU7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0bWFyZ2luLXRvcDogNXB4O1xufVxuXG4ubG9naW4tYnV0dG9uIHtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRib3gtc2hhZG93OiBub25lO1xuXHR3aWR0aDogMTAwJTtcblx0bWFyZ2luLXRvcDogMzVweDtcbn1cblxuLmxvZ2luLWZvb3RlciB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0bWFyZ2luLXRvcDogMTVweDtcblx0Zm9udC1zaXplOiAxNHB4O1xufVxuXG4ubG9naW4tZXJyb3ItZ2VuZXJhbCB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Zm9udC1zaXplOiAxNHB4O1xuXG59IiwiJGJvZHktY29sb3I6ICNmYWZiZmQ7XG5cbiRpZy1jb2xvci1wcmltYXJ5OiAjRUYyQTI0O1xuXG4kY29sb3ItYm9yZGVyOiAjZTJlOGVlO1xuJGNvbG9yLWZvbnQ6ICMzMzM7XG4kbGluZS1pbnB1dDogIzg5ODk4OTtcblxuJGlnLWNvbG9yLWVycm9yOiAjRUYyQTI0O1xuJGlnLWNvbG9yLXN1Y2Nlc3M6ICM0ODk3NjA7Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_config_layermsg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/config/layermsg.service */ "./src/app/config/layermsg.service.ts");
/* harmony import */ var _app_config_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/config/api.service */ "./src/app/config/api.service.ts");
/* harmony import */ var _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _app_model_user_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/model/user.class */ "./src/app/model/user.class.ts");
/* harmony import */ var _app_config_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/config/shared.service */ "./src/app/config/shared.service.ts");
/* harmony import */ var _app_config_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/config/shared */ "./src/app/config/shared.ts");
/* harmony import */ var _app_config_parametries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/config/parametries */ "./src/app/config/parametries.ts");











var LoginComponent = /** @class */ (function () {
    function LoginComponent(layerMsgService, apiService, authService, router, formBuilder, sharedService) {
        this.layerMsgService = layerMsgService;
        this.apiService = apiService;
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.sharedService = sharedService;
        this.submitted = false;
        this.errors = [];
        this.hide = true;
        this.authService.logout();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.fgroup = this.formBuilder.group({
            user: [
                '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_10__["Parametries"].LOGIN_MIN_LENGTH),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(_app_config_parametries__WEBPACK_IMPORTED_MODULE_10__["Parametries"].LOGIN_MAX_LENGTH),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_app_config_parametries__WEBPACK_IMPORTED_MODULE_10__["Parametries"].PATTERN_LOGIN)
                ]
            ],
            pass: [
                '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]
            ]
        });
    };
    LoginComponent.prototype.login = function (user, pass) {
        var _this = this;
        var $this = this;
        this.apiService.post('/auth/v1/login', {
            login: user,
            password: btoa(pass),
            environment: 'M',
            appVersion: '0.0'
        }, function (response) {
            $this.sharedService.set(_app_config_shared__WEBPACK_IMPORTED_MODULE_9__["SharedVariable"].USER, new _app_model_user_class__WEBPACK_IMPORTED_MODULE_7__["User"](user, response.data.sessionId, response.data.roles, response.data.area[0].areaName));
            _this.registerTrace(user);
            console.log(response.data.roles);
            console.log(response.data.area[0].areaName);
            console.log("entro al login");
            $this.authService.login().subscribe(function () { return $this.router.navigate(['/dashboard']); });
        }, function (error) {
            _this.errors['service'.toString()] = true;
            var msg = 'Ocurrio un error inesperado.';
            if (error.error && error.error.status) {
                var code = error.error.status.code;
                if ('0001' === code || '0052' == code) {
                    msg = "Intento fallido de login.";
                }
                else if ('0002' === code) {
                    msg = "Usuario no existe.";
                }
                else if ('0003' === code) {
                    msg = "Usuario ha supera el limite de intentos.";
                }
                else if ('0004' === code) {
                    msg = "El usuario se encuentra bloqueado.";
                }
            }
            _this.errors['message'.toString()] = msg;
            console.log(error);
        });
    };
    LoginComponent.prototype.onFormSubmit = function () {
        this.errors['service'.toString()] = false;
        this.submitted = true;
        if (this.fgroup.invalid) {
            return;
        }
        else {
            this.login(this.fgroup.value.user, this.fgroup.value.pass);
        }
    };
    LoginComponent.prototype.registerTrace = function (username) {
        this.apiService.post('/employTraze/v1/addEmployTraze', {
            login: username,
            operation: 'inició sesión'
        }, function (result) {
            console.log('Traza de acceso: "Usuario: ' + username + ' ha iniciado sesion"');
            console.log(result);
        });
    };
    LoginComponent.prototype.showPassword = function (event) {
        event.preventDefault();
        this.hide = !this.hide;
    };
    Object.defineProperty(LoginComponent.prototype, "formGroup", {
        get: function () {
            return this.fgroup.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_config_layermsg_service__WEBPACK_IMPORTED_MODULE_4__["LayermsgService"],
            _app_config_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _app_config_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/model/area.ts":
/*!*******************************!*\
  !*** ./src/app/model/area.ts ***!
  \*******************************/
/*! exports provided: Area */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Area", function() { return Area; });
var Area = /** @class */ (function () {
    function Area() {
    }
    Area.prototype.setAreaPk = function (areaPk) {
        this.areaPk = areaPk;
    };
    Area.prototype.evalState = function (isActive) {
        return isActive ? 'A' : 'B';
    };
    Area.prototype.fromFormAreaAdd = function (formAreaAdd) {
        this.name = formAreaAdd.value.name.trim();
        this.anexo = formAreaAdd.value.anexo;
        this.mobile = formAreaAdd.value.mobile;
    };
    Area.prototype.fromFormAreaUpdate = function (formAreaUpdate) {
        this.areaPk = formAreaUpdate.value.areaPk;
        this.name = formAreaUpdate.value.name.trim();
        this.anexo = formAreaUpdate.value.anexo;
        this.mobile = formAreaUpdate.value.mobile;
        this.state = formAreaUpdate.value.state;
    };
    Area.prototype.toAreaAdd = function () {
        return {
            "areaName": this.name,
            "areaAnexo": this.anexo,
            "areaMobile": this.mobile
        };
    };
    Area.prototype.toAreaUpdate = function (areaPk) {
        return {
            "areaPk": areaPk,
            "areaName": this.name,
            "areaAnexo": this.anexo,
            "areaMobile": this.mobile,
            "areaState": this.state
        };
    };
    return Area;
}());



/***/ }),

/***/ "./src/app/model/control-message.ts":
/*!******************************************!*\
  !*** ./src/app/model/control-message.ts ***!
  \******************************************/
/*! exports provided: ControlMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlMessage", function() { return ControlMessage; });
var ControlMessage = /** @class */ (function () {
    function ControlMessage(msg, type, icon) {
        this.msg = msg;
        this.type = type;
        this.icon = icon;
        this.delay = 3000;
    }
    ControlMessage.prototype.success = function (callback) {
        this.onSuccess = callback;
        return this;
    };
    return ControlMessage;
}());



/***/ }),

/***/ "./src/app/model/employee.ts":
/*!***********************************!*\
  !*** ./src/app/model/employee.ts ***!
  \***********************************/
/*! exports provided: Employee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
/* harmony import */ var _app_enumeration_enum_state_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/enumeration/enum-state.enum */ "./src/app/enumeration/enum-state.enum.ts");

var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.setEmployPk = function (employPk) {
        this.employPk = +employPk;
    };
    Employee.prototype.evalState = function (isActive) {
        return isActive ? _app_enumeration_enum_state_enum__WEBPACK_IMPORTED_MODULE_0__["EnumState"].ACTIVE.code : _app_enumeration_enum_state_enum__WEBPACK_IMPORTED_MODULE_0__["EnumState"].INACTIVE.code;
    };
    Employee.prototype.fromFormEmploy = function (formEmployAdd) {
        this.login = formEmployAdd.value.user;
        this.password = btoa(formEmployAdd.value.password);
        this.name = formEmployAdd.value.name.trim();
        this.apePat = formEmployAdd.value.apePat.trim();
        this.apeMat = formEmployAdd.value.apeMat.trim();
        this.phone = formEmployAdd.value.phone;
        this.mobile = formEmployAdd.value.mobile;
        this.email = formEmployAdd.value.email;
        this.employFk = formEmployAdd.value.employFk.employPk;
        this.stateConfig = this.evalState(formEmployAdd.value.checkedExcluded);
        this.statePrivilege = this.evalState(formEmployAdd.value.checkedConfiguration);
        this.areaFk = formEmployAdd.value.areaFk;
    };
    Employee.prototype.setExcluids = function (excluids) {
        this.excluids = excluids;
    };
    Employee.prototype.toSupervisor = function () {
        return {
            "employPk": this.employFk,
            "login": this.login,
            "password": this.password,
            "name": this.name,
            "apePat": this.apePat,
            "apeMat": this.apeMat,
            "phone": this.phone,
            "mobile": this.mobile,
            "email": this.email,
            "employFk": this.employFk,
            "statePrivilege": this.statePrivilege,
            "areaFk": this.areaFk
        };
    };
    Employee.prototype.toUpdateSupervisor = function () {
        return {
            "employPk": this.employPk,
            "password": this.password,
            "name": this.name,
            "apePat": this.apePat,
            "apeMat": this.apeMat,
            "phone": this.phone,
            "mobile": this.mobile,
            "email": this.email,
            "statePrivilege": this.statePrivilege,
            "areaFk": this.areaFk,
            "state": _app_enumeration_enum_state_enum__WEBPACK_IMPORTED_MODULE_0__["EnumState"].ACTIVE.code
        };
    };
    Employee.prototype.toOfficer = function () {
        return {
            "employPk": this.employPk,
            "areaFk": this.areaFk,
            "apeMat": this.apeMat,
            "apePat": this.apePat,
            "email": this.email,
            "employFk": this.employFk,
            "excluids": this.excluids,
            "login": this.login,
            "mobile": this.mobile,
            "name": this.name,
            "password": this.password,
            "phone": this.phone,
            "stateConfig": this.stateConfig,
            "statePrivilege": this.statePrivilege
        };
    };
    Employee.prototype.toUpdateOfficer = function () {
        return {
            "employPk": this.employPk,
            "apeMat": this.apeMat,
            "apePat": this.apePat,
            "email": this.email,
            "employFk": this.employFk,
            "excluids": this.excluids,
            "mobile": this.mobile,
            "name": this.name,
            "password": this.password,
            "phone": this.phone,
            "stateConfig": this.stateConfig,
            "statePrivilege": this.statePrivilege,
            "state": _app_enumeration_enum_state_enum__WEBPACK_IMPORTED_MODULE_0__["EnumState"].ACTIVE.code
        };
    };
    return Employee;
}());



/***/ }),

/***/ "./src/app/model/role.ts":
/*!*******************************!*\
  !*** ./src/app/model/role.ts ***!
  \*******************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
var Role = /** @class */ (function () {
    function Role(value, viewValue) {
        this.value = value;
        this.viewValue = viewValue;
    }
    return Role;
}());



/***/ }),

/***/ "./src/app/model/state.class.ts":
/*!**************************************!*\
  !*** ./src/app/model/state.class.ts ***!
  \**************************************/
/*! exports provided: State */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
var State = /** @class */ (function () {
    function State() {
    }
    return State;
}());



/***/ }),

/***/ "./src/app/model/user.class.ts":
/*!*************************************!*\
  !*** ./src/app/model/user.class.ts ***!
  \*************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(name, sessionId, roles, area) {
        this.name = name;
        this.sessionId = sessionId;
        this.roles = roles;
        this.area = area;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getSessionId = function () {
        return this.sessionId;
    };
    User.prototype.getRoles = function () {
        return this.roles;
    };
    User.prototype.getArea = function () {
        return this.area;
    };
    return User;
}());



/***/ }),

/***/ "./src/app/request/req-excluid.ts":
/*!****************************************!*\
  !*** ./src/app/request/req-excluid.ts ***!
  \****************************************/
/*! exports provided: ReqExcluid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReqExcluid", function() { return ReqExcluid; });
var ReqExcluid = /** @class */ (function () {
    function ReqExcluid() {
    }
    return ReqExcluid;
}());



/***/ }),

/***/ "./src/app/safe-html.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/safe-html.pipe.ts ***!
  \***********************************/
/*! exports provided: SafeHTMLPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHTMLPipe", function() { return SafeHTMLPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var SafeHTMLPipe = /** @class */ (function () {
    function SafeHTMLPipe(sanitized) {
        this.sanitized = sanitized;
    }
    SafeHTMLPipe.prototype.transform = function (value, args) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    SafeHTMLPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"])({
            name: 'safeHTML'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafeHTMLPipe);
    return SafeHTMLPipe;
}());



/***/ }),

/***/ "./src/app/service/area.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/area.service.ts ***!
  \*****************************************/
/*! exports provided: AreaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaService", function() { return AreaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/config/api.service */ "./src/app/config/api.service.ts");



var AreaService = /** @class */ (function () {
    function AreaService(apiService) {
        this.apiService = apiService;
    }
    AreaService.prototype.loadAllAreas = function (onSuccess) {
        return this.apiService.post('/area/v1/loadAllArea', {
            state: 'T'
        }, onSuccess);
    };
    AreaService.prototype.deleteArea = function (areaPk, onSuccess) {
        return this.apiService.post('/area/v1/deleteArea', {
            areaPk: areaPk
        }, onSuccess);
    };
    AreaService.prototype.addArea = function (area, onSuccess) {
        return this.apiService.post('/area/v1/addArea', area, onSuccess);
    };
    AreaService.prototype.updateArea = function (area, onSuccess) {
        return this.apiService.post('/area/v1/updateArea', area, onSuccess);
    };
    AreaService.prototype.findAreaById = function (areaPk, onSuccess) {
        return this.apiService.post('/area/v1/loadArea', {
            areaPk: areaPk
        }, onSuccess);
    };
    AreaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_config_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], AreaService);
    return AreaService;
}());



/***/ }),

/***/ "./src/app/service/employ.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/employ.service.ts ***!
  \*******************************************/
/*! exports provided: EmployService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployService", function() { return EmployService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/config/api.service */ "./src/app/config/api.service.ts");



var EmployService = /** @class */ (function () {
    function EmployService(apiService) {
        this.apiService = apiService;
    }
    EmployService.prototype.loadAllEmploy = function (onSuccess) {
        return this.apiService.post('/employ/v1/loadAllEmploy', {}, onSuccess);
    };
    EmployService.prototype.deleteEmploy = function (employPk, onSuccess) {
        return this.apiService.post('/employ/v1/deleteEmploy', {
            employPk: employPk
        }, onSuccess);
    };
    EmployService.prototype.updateAdminPassword = function (password, onSuccess) {
        return this.apiService.post('/employ/v1/updateAdminPassword', {
            "password": password
        }, onSuccess);
    };
    EmployService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_config_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], EmployService);
    return EmployService;
}());



/***/ }),

/***/ "./src/app/service/officer.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/officer.service.ts ***!
  \********************************************/
/*! exports provided: OfficerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficerService", function() { return OfficerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/config/api.service */ "./src/app/config/api.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var OfficerService = /** @class */ (function () {
    function OfficerService(apiService) {
        this.apiService = apiService;
        this.excluids = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.excluidsStatic = [];
    }
    OfficerService.prototype.addOfficer = function (officer, onSuccess) {
        return this.apiService.post('/employ/v1/addOfficerEmploy', officer, onSuccess);
    };
    OfficerService.prototype.updateOfficer = function (officer, onSuccess) {
        return this.apiService.post('/employ/v1/updateOfficerEmploy', officer, onSuccess);
    };
    OfficerService.prototype.findOfficerById = function (employPk, onSuccess) {
        return this.apiService.post('/employ/v1/loadOfficer', {
            employPk: employPk
        }, onSuccess);
    };
    OfficerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_config_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], OfficerService);
    return OfficerService;
}());



/***/ }),

/***/ "./src/app/service/role.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/role.service.ts ***!
  \*****************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_enumeration_enum_role_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/enumeration/enum-role.enum */ "./src/app/enumeration/enum-role.enum.ts");




var RoleService = /** @class */ (function () {
    function RoleService() {
        this._subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.roles = new Array(_app_enumeration_enum_role_enum__WEBPACK_IMPORTED_MODULE_3__["EnumRole"].SUPERVISOR.toRole(), _app_enumeration_enum_role_enum__WEBPACK_IMPORTED_MODULE_3__["EnumRole"].OFFICER.toRole());
    }
    RoleService.prototype.subscribe = function (callback) {
        var listener = this._subject.subscribe(callback);
        return listener;
    };
    RoleService.prototype.loadRoles = function () {
        this._subject.next(this.roles);
    };
    RoleService.prototype.findRoleById = function (code) {
        for (var _i = 0, _a = this.roles; _i < _a.length; _i++) {
            var rol = _a[_i];
            if (rol.value == code) {
                return rol;
            }
        }
    };
    RoleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RoleService);
    return RoleService;
}());



/***/ }),

/***/ "./src/app/service/supervisor.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/supervisor.service.ts ***!
  \***********************************************/
/*! exports provided: SupervisorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupervisorService", function() { return SupervisorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/config/api.service */ "./src/app/config/api.service.ts");



var SupervisorService = /** @class */ (function () {
    function SupervisorService(apiService) {
        this.apiService = apiService;
    }
    SupervisorService.prototype.loadAllSupervisor = function (onSuccess) {
        return this.apiService.post('/employ/v1/loadlAllSupervisorEmploy', {}, onSuccess);
    };
    SupervisorService.prototype.addSupervisor = function (employ, onSuccess) {
        return this.apiService.post('/employ/v1/addSupervisorEmploy', employ, onSuccess);
    };
    SupervisorService.prototype.updateSupervisor = function (employ, onSuccess) {
        return this.apiService.post('/employ/v1/updateSupervisorEmploy', employ, onSuccess);
    };
    SupervisorService.prototype.findSupervisorById = function (employPk, onSuccess) {
        return this.apiService.post('/employ/v1/loadEmploy', {
            employPk: +employPk
        }, onSuccess);
    };
    SupervisorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_config_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], SupervisorService);
    return SupervisorService;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dashboard-header class=\"dashboard\"></dashboard-header>\n<dashboard-layermsg></dashboard-layermsg>\n<div class=\"ig-dashboard-title-wrapper\">\n  <h1 class=\"ig-dashboard-title\">Configuraciones del sistema </h1>\n</div>\n<div class=\"ig-dashboard-container\">\n  <section class=\"ig-dashboard-section-main\">\n    <div class=\"ig-form-column\" *ngFor=\"let item of configs; index as i\">\n      <mat-checkbox \n        [checked]=\"item.state === 'A'\" \n        (click)=\"changeStateConf(i, $event)\"\n        [id]=\"item.generalConfigPk\" \n        [name]=\"item.name\"\n      >\n        {{ item.name }}\n      </mat-checkbox>\n    </div>\n  </section>\n</div>"

/***/ }),

/***/ "./src/app/settings/settings.component.scss":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ig-dashboard-title-wrapper {\n  text-align: center; }\n\n.ig-dashboard-section-main {\n  padding-left: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N5bm9wc2lzL0VzY3JpdG9yaW8vUHJ1ZWJhIEZpbmFsL2lnLXdlYi1hcHAvc3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWctZGFzaGJvYXJkLXRpdGxlLXdyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pZy1kYXNoYm9hcmQtc2VjdGlvbi1tYWluIHtcbiAgcGFkZGluZy1sZWZ0OiAyMDBweDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/config/api.service */ "./src/app/config/api.service.ts");
/* harmony import */ var _config_layermsg_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/layermsg.service */ "./src/app/config/layermsg.service.ts");




var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(apiService, layerMsgService) {
        this.apiService = apiService;
        this.layerMsgService = layerMsgService;
        this.configs = [];
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.post('/generalConfig/v1/loadGeneralConfig', {}, function (result) {
            var configurations = result.data;
            _this.configs = configurations;
            console.log(_this.configs);
        });
    };
    SettingsComponent.prototype.changeStateConf = function (i, e) {
        var _this = this;
        e.preventDefault();
        var stateCurrent = this.configs[i].state;
        var stateToChange;
        stateToChange = stateCurrent === 'A' ? stateToChange = 'B' : stateToChange = 'A';
        this.apiService.post('/generalConfig/v1/updateGeneralConfig', {
            inGeneralConfigState: stateToChange,
            generalConfigPk: this.configs[i].generalConfigPk
        }, function (result) {
            _this.configs[i].state = stateToChange;
            _this.layerMsgService.showMessageOk('8888');
        });
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/settings/settings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_config_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _config_layermsg_service__WEBPACK_IMPORTED_MODULE_3__["LayermsgService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/trace/trace.component.html":
/*!********************************************!*\
  !*** ./src/app/trace/trace.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dashboard-header class=\"dashboard\"></dashboard-header>\n<dashboard-layermsg></dashboard-layermsg>\n<div class=\"ig-dashboard-title-wrapper\">\n  <h1 class=\"ig-dashboard-title\">Registro de auditoría</h1>\n</div>\n<div class=\"ig-dashboard-container\">\n  <div class=\"ig-searcher-container\">\n    <mat-icon class=\"ig-searcher-icon\" matSuffix>search</mat-icon>\n    <input type=\"text\" placeholder=\"Buscar traza\" class=\"ig-input-search\" matInput (keyup)=\"applyFilter($event.target.value)\">\n  </div>\n  <div class=\"ig-dashboard-table-wrapper mat-elevation-z8\">\n    <table mat-table [dataSource]=\"dataSourceTrace\" class=\"full-width-table\">\n      <ng-container matColumnDef=\"item\">\n        <th mat-header-cell *matHeaderCellDef> Item </th>\n        <td mat-cell *matCellDef=\"let element\"> {{ element.employTrazePk }} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"date\">\n        <th mat-header-cell *matHeaderCellDef> Fecha </th>\n        <td mat-cell *matCellDef=\"let element\"> {{ element.date }} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"hour\">\n        <th mat-header-cell *matHeaderCellDef> Hora </th>\n        <td mat-cell *matCellDef=\"let element\"> {{ element.time }} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"operation\">\n        <th mat-header-cell *matHeaderCellDef> Operación </th>\n        <td mat-cell *matCellDef=\"let element\"> {{ element.operation }} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"user\">\n        <th mat-header-cell *matHeaderCellDef> Usuario </th>\n        <td mat-cell *matCellDef=\"let element\"> {{ element.login }} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"cdr\">\n        <th mat-header-cell *matHeaderCellDef> CDR </th>\n        <td mat-cell *matCellDef=\"let element\"> {{ element.areaAnexo }} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"area\">\n        <th mat-header-cell *matHeaderCellDef> Área </th>\n        <td mat-cell *matCellDef=\"let element\"> {{ element.areaName }} </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayColumnsTrace; sticky: true\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayColumnsTrace;\"></tr>\n    </table>\n  </div>\n  <div class=\"ig-dashboard-table-wrapper mat-elevation-z8\">\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/trace/trace.component.scss":
/*!********************************************!*\
  !*** ./src/app/trace/trace.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ig-dashboard-title-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.ig-dashboard-list-icons {\n  display: -webkit-box;\n  display: flex; }\n\n.ig-dashboard-item-icon {\n  margin-right: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N5bm9wc2lzL0VzY3JpdG9yaW8vUHJ1ZWJhIEZpbmFsL2lnLXdlYi1hcHAvc3JjL2FwcC90cmFjZS90cmFjZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUE4QjtVQUE5Qiw4QkFBOEI7RUFDOUIseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLG9CQUFhO0VBQWIsYUFBYSxFQUFBOztBQUdmO0VBQ0UsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90cmFjZS90cmFjZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pZy1kYXNoYm9hcmQtdGl0bGUtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmlnLWRhc2hib2FyZC1saXN0LWljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmlnLWRhc2hib2FyZC1pdGVtLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/trace/trace.component.ts":
/*!******************************************!*\
  !*** ./src/app/trace/trace.component.ts ***!
  \******************************************/
/*! exports provided: TraceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraceComponent", function() { return TraceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_config_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/config/api.service */ "./src/app/config/api.service.ts");




var TraceComponent = /** @class */ (function () {
    function TraceComponent(apiService) {
        this.apiService = apiService;
        this.displayColumnsTrace = ['item', 'date', 'hour', 'operation', 'user', 'cdr', 'area'];
    }
    TraceComponent.prototype.ngOnInit = function () {
        this.loadTrace();
    };
    TraceComponent.prototype.loadTrace = function () {
        var _this = this;
        this.apiService.post('/employTraze/v1/loadEmployTrace', {}, function (result) {
            _this.traceData = result.data;
            _this.dataSourceTrace = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.traceData);
            _this.dataSourceTrace.paginator = _this.paginator;
        });
    };
    TraceComponent.prototype.applyFilter = function (filterValue) {
        this.dataSourceTrace.filter = filterValue.trim().toLowerCase();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], TraceComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], TraceComponent.prototype, "paginator", void 0);
    TraceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trace',
            template: __webpack_require__(/*! ./trace.component.html */ "./src/app/trace/trace.component.html"),
            styles: [__webpack_require__(/*! ./trace.component.scss */ "./src/app/trace/trace.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_config_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], TraceComponent);
    return TraceComponent;
}());



/***/ }),

/***/ "./src/app/utils/PaginatorEspañol.ts":
/*!*******************************************!*\
  !*** ./src/app/utils/PaginatorEspañol.ts ***!
  \*******************************************/
/*! exports provided: PaginatorEspañol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorEspañol", function() { return PaginatorEspañol; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");


var PaginatorEspañol = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PaginatorEspañol, _super);
    function PaginatorEspañol() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itemsPerPageLabel = 'Items por Página';
        _this.nextPageLabel = 'Siguiente';
        _this.previousPageLabel = 'Previa';
        _this.firstPageLabel = "Primera Página";
        _this.lastPageLabel = "Última Página";
        _this.getRangeLabel = function (page, pageSize, length) {
            if (length === 0 || pageSize === 0) {
                return '0 de ' + length;
            }
            length = Math.max(length, 0);
            var startIndex = page * pageSize;
            var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
            return startIndex + 1 + ' - ' + endIndex + ' de ' + length;
        };
        return _this;
    }
    return PaginatorEspañol;
}(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorIntl"]));



/***/ }),

/***/ "./src/app/utils/must-match.validator.ts":
/*!***********************************************!*\
  !*** ./src/app/utils/must-match.validator.ts ***!
  \***********************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/assets/material/material.module.ts":
/*!************************************************!*\
  !*** ./src/assets/material/material.module.ts ***!
  \************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");












var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/synopsis/Escritorio/Prueba Final/ig-web-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map