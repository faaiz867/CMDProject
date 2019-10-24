import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
//import {Process} from './process';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import{Global} from '../app/global';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Type } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  server:any;
  // searchText;
  contacts = [
     {id: 1, name: 'contact 001', description: 'Contact 001 des', email: 'c001@email.com'},
     {id: 2, name: 'Contact 002', description: 'Contact 002 des', email: 'c002@email.com'},
     {id: 3, name: 'Contact 003', description: 'Contact 003 des', email: 'c003@email.com'},
     {id: 4, name: 'Contact 004', description: 'Contact 004 des', email: 'c004@email.com'}
   ];

  constructor(private http: Http, private global:Global) { 
    this.server = this.global.server;
  }
  // retrieving DataService
  getProcesslist()
  {
   return this.http.get(this.server+'/api/process')
      .map(res => res.json());
  }

  getProcessDetail(_id)
  {
   return this.http.get(this.server+'/api/process/'+_id)
      .map(res => res.json());
  }
  addProcessData(newProcess)
  {
    var headers=new headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.server+'/api/process', newProcess,{headers:headers})
    .map(res=>res.json());

  }
  

  //add Process Data
  // addProcess(newProcess)
  // {
  //   var headers = new Headers();
  //   headers.append('Content-Type','application/json');
  //   return this.http.post('http://localhost:4600/api/process',newProcess,{headers:headers})
  //   .map(res => res.json());
  // }

  public getContacts(): Array <{id, name, description, email}> {
    return this.contacts;
  }
  public createContact(contact: {id, name, description, email}) {
    this.contacts.push(contact);
  }
}
