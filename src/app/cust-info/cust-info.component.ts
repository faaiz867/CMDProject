import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-cust-info',
  templateUrl: './cust-info.component.html',
  styleUrls: ['./cust-info.component.css']
})
export class CustInfoComponent implements OnInit {

  contacts;
  selectedContact;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.contacts = this.dataService.getContacts();
  }
  public selectContact(contact) {
    this.selectedContact = contact;
  }

}
