import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '@app/config/api.service';
import { FormGroup , FormBuilder, Validators, FormControl  } from '@angular/forms';
import { SharedService } from '@app/config/shared.service';
import { SharedVariable } from '@app/config/shared';
import { User } from '@app/model/user.class';
import { MatDialog } from '@angular/material';

import { ChatService } from '@app/service/chat.service';
import { LayermsgService } from '@app/config/layermsg.service';
import { EnumStatus } from '@app/enumeration/enum-status.enum';
import { Message } from '@app/model/message';
import { ExcluidCustomerDialogComponent } from '@app/chat/excluid-customer-dialog/excluid-customer-dialog.component';
import { IncidenceCustomerDialogComponent } from '@app/chat/incidence-customer-dialog/incidence-customer-dialog.component';

declare var $: any;
@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

	formSendMessage: FormGroup;
	currentDate: string = "2020-06-25 17:02:07.08";

	sectionView1 = true;
	sectionView2 = false;
	officers = [];
	officersTemp = [];
	nameOfficer;
	officer;
	contacts = [];
	contactsTemp = [];
	messages;
	tempMessages = false;
	customerSelect = '';
	customerSave;
	resultsMsg = [];
	idChat;
	indexCustomer;
	isLoadMore;
	page;
	filterValueContact;
	allSupervisores;
	supervisores = [];
	allAreas;
	areas;

	private roles: {};
	rolePk: number;
	dataEmploy = null;

	constructor(
		private apiService: ApiService,
		private chatService: ChatService,
		private formBuilder: FormBuilder,
		private layerMsgService: LayermsgService,
		private router: Router,
		private sharedService: SharedService,
		private dialog: MatDialog) {
	}

	ngOnInit() {
		this.loadViewRole();
		this.buildForm();
	}

	private buildForm() {
		this.formSendMessage =  this.formBuilder.group({
			msgText: ['', [Validators.required]]
		});
	}

	loadViewRole() {
		const user: User = this.sharedService.get(SharedVariable.USER);

		this.apiService.post('/employ/v1/loadRoleEmploy', {}, (result: any) => {
			this.dataEmploy = result.data;
			this.rolePk = this.dataEmploy.roleFk;
			switch (this.rolePk) {
				case 1:
					this.loadAllAreaByRole();
					this.isLoadMore = false;
					break;
				case 2:
					this.loadAllAreaByRole();
					this.loadAllOfficerBySupervisorEmploy(this.dataEmploy.employPk);
					break;
				case 3:
					this.sectionView1 = false;
					this.sectionView2 = true;
					this.getContacts(this.dataEmploy.employPk, this.dataEmploy.nameEmploy);
					break;
				default:
					break;
			}
		}, (error) => {
					console.log(error);
		});

	}

	selectOfficer(officerSelected) {
		console.log(officerSelected);
		let nameOfficer = officerSelected.selected.viewValue;
		let idOfficer = officerSelected.selected.value;
		// this.toggleView();	
		this.sectionView1 = false;
		this.sectionView2 = true;
		this.getContacts(idOfficer, nameOfficer);
	}

	goBackView() {
		// this.toggleView();
		this.sectionView1 = !this.sectionView1;
		// this.messages = [];
		// this.contacts = [];
		// this.tempMessages = false;
	}

	getOfficer() {
		this.apiService.post('/employ/v1/loadAllOfficerEmploy', {}, (result: any) => {
			this.officers = result.data;
		});
	}

	getContacts(idOfficer, nameOfficer) {
		this.officer = idOfficer;
		this.indexCustomer = null;
		this.nameOfficer = nameOfficer;
		this.contacts=[];
		this.apiService.post('/chat/v1/contacts', {
			"idOfficer": idOfficer
		}, (result: any) => {
			result.data.forEach(element => {
				this.contacts.push({
					...element,
					selected: false
				})
			});
			this.contactsTemp = this.contacts;
			// this.messages = [];
			this.indexCustomer = null;
		}, (error) => {
			console.log(error);
		});
	}

	toggleView() {
		this.sectionView1 = !this.sectionView1;
		this.sectionView2 = !this.sectionView2;
	}

	loadImage(resourceId: string) {
		return this.apiService.urlGet('/resource/v1/load/' + resourceId);
	}

	loadMessages(customer, index) {
		this.formSendMessage.reset();
		this.changeStyleContactSelected(customer);
		this.customerSave = customer;
		let $this = this;
		console.log($this);
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
			}, (result: any) => {
				this.messages = result.data;
				if (this.messages.length) {
					this.scrollWithJquery();
				}
				setTimeout(function () {
					$this.autoload($this);
				}, 20);
			});

		}
	}

	changeStyleContactSelected(customer) {

		this.contacts.forEach((element) => {
			if (element.idChat == customer.idChat) element.selected = true;
			else element.selected = false;
		})
		this.contactsTemp=this.contacts;
		this.findContactsBy(this.filterValueContact);
	}

	autoload($this) {
		let el = $("#contentMsg")[0];
		el.scrollTop = el.scrollHeight;
		if (el.scrollHeight <= $(el).height()) {
			$this.loadMorePages(function () {
				setTimeout(function () {
					$this.autoload($this);
				}, 20);
			});
		}
	}

	loadMorePages(callback) {
		if (this.indexCustomer != null && this.page < this.contacts[this.indexCustomer].pages.length 
			&& !this.isLoadMore) 
		{
			let customer = this.contacts[this.indexCustomer];
			if (customer.pages.length > 0) {
				let el = $("#contentMsg")[0];
				var scHeight = el.scrollHeight;
				this.isLoadMore = true;
				this.apiService.post('/chat/v1/messages', {
					"idChat": customer.idChat,
					"page": customer.pages[this.page++].date
				}, (result: any) => {
					this.messages = result.data.concat(this.messages);
					setTimeout(function () {
						el.scrollTop = el.scrollHeight - scHeight;
					}, 20);
					if (callback) {
						callback();
					}
					this.isLoadMore = false;
				}, (error) => {
					console.log(error);
					this.isLoadMore = false;
				});
				console.log(this.messages);
			}
		}
	}

	reloadClients(e) {
		e.preventDefault();
		this.getContacts(this.officer, this.nameOfficer);
	}

	scrollWithJquery() {
		let $this = this;
		let el = $("#contentMsg");
		$(el)
		.on('scroll', function () {
			var height = el[0].scrollTop;
			if (height === 0 || ((el[0].scrollHeight - 16) === parseInt(el.height()))) {
				console.log("desde scrollWithjQuery");
				$this.loadMorePages(null);
			}
		})
		.on('mouseenter mouseleave',function (){
			if ( el[0].scrollHeight - 16 === parseInt(el.height()) ) {
				$this.loadMorePages(null);
			}
		});
	}

	reloadMessages(e) {
		e.preventDefault();
		this.messages = [];
		let index = this.indexCustomer;
		this.indexCustomer = null;
		this.apiService.post('/chat/v1/pages', {
			"idChat": this.contacts[index].idChat
		}, (result: any) => {
			this.indexCustomer = index
			this.contacts[index].pages = result.data;
			this.loadMessages(this.customerSave, this.indexCustomer);
		}, (error) => {
			this.indexCustomer = index;
			console.log(error);
		});
	}

	searchMessage(filterValue) {
		this.resultsMsg = this.messages.filter(function (message) {
			if (filterValue) {
				return message.msgText && message.msgText.indexOf(filterValue) !== -1;
			}
		});
	}

	findContactsBy(filterValue) {
		this.filterValueContact = filterValue;
		this.contactsTemp = this.contacts.filter(function (contact) {
			if (filterValue == 1 || filterValue == 0) {
				return contact.attended == filterValue;
			}
			else return 1;
		})
	}

	excluidCustomerDialog():void{
		console.log(this.changeToRequestDate( new Date().toLocaleDateString() ));
		if (this.idChat){
			const dialogRef = this.dialog.open(ExcluidCustomerDialogComponent,{
				width: '400px',
				data: {}
			});

			dialogRef.afterClosed().subscribe(result => {
				this.apiService.post('/excluidCust/v1/addExcluidCust',{ 
					phoneCust : this.customerSave.mobile,
					reason: result.reason
				},(result:any)=>{
					this.getContacts(this.officer, this.nameOfficer);
					this.layerMsgService.showMessageOk(EnumStatus.SAVE_OK.code, () => {});
				})
			});
		}

	}

	changeToRequestDate(date : string):string{
		let dateTmp =[];
		date.split("/").forEach( (element,index) => {
			if(element.length==1) dateTmp[index] = "0" + element;
			else dateTmp[index] = element
		}) ;
		return dateTmp.join("/") 
	}

	insideCustomerDialog(){
		if (this.idChat){
			const dialogRef1 = this.dialog.open(IncidenceCustomerDialogComponent,{
				width: '400px',
				data: {}
			});

			dialogRef1.afterClosed().subscribe(result => {
				console.log("dialog temrinado")
				// this.apiService.post('/excluidCust/v1/addExcluidCust',{ 
				// 	phoneCust : this.customerSave.mobile,
				// 	reason: result.reason,
				// 	date: this.changeToRequestDate( new Date().toLocaleDateString() )
				// },(result:any)=>{

				// })
			});
		}
	}


	loadAllAreaByRole() {
		this.apiService.post('/area/v1/loadAllAreaByRole', {}, (result: any) => {
			this.allAreas = result.data;
			this.areas = this.allAreas;
		}, (error) => {
			console.log(error);
		});
	}

	loadsupervisor() {
		this.apiService.post('/employ/v1/loadAllSupervisorEmploy', {

		}, (result: any) => {
			this.allSupervisores = result.data;
			this.supervisores = this.allSupervisores;
		});
	}

	// loadAllSupervisorAndOfficersByAreaEmploy(areaPk) {

	// 	this.loadAllSupervisorByAreaEmploy(areaPk);
	// 	this.loadAllOfficerByAreaEmploy(areaPk);

	// }

	loadAllSupervisorByArea(areaPk) {

		this.apiService.post('/employ/v1/loadAllSupervisorByArea', {
			"areaPk": areaPk
		}, (result: any) => {
			this.allSupervisores = result.data;
			this.supervisores = this.allSupervisores;
		});
	}

	loadAllOfficerByAreaEmploy(areaPk) {

		this.apiService.post('/employ/v1/loadAllOfficerByAreaEmploy', {
			"areaPk": areaPk
		}, (result: any) => {
			this.officers = result.data;
		});
	}

	loadAllOfficerBySupervisorEmploy(employPk) {
		this.apiService.post('/employ/v1/loadAllOfficerBySupervisor', {
			"employPk": employPk
		}, (result: any) => {
			this.officers = result.data;
			this.officersTemp = result.data;
		}, (error) => {
			console.log(error);
		});
	}

	onFormSubmit() {
		//event.preventDefault();
		if(this.formSendMessage.valid) {
			this.sendMessage();
		} else {
			console.log("invalid");
		}
	}

	sendMessage() {
		var message = new Message();
		message.setChatMobile(this.customerSave.mobile);
		message.setChatFK(this.customerSave.idChat);
		message.setEmployFK(this.dataEmploy.employPk);
		message.setToUser(this.dataEmploy.name);
		message.setToAlias(this.dataEmploy.name);
		message.fromFormSendMessage(this.formSendMessage);
		this.chatService.sendMessage(message.requestSendMessage(), (result: any) => {
			console.log(result);
			this.loadMessages(this.customerSave, this.indexCustomer);
		});
	}

	uploadFile(event: Event) {
		event.preventDefault();
		console.log(event);
	}

}