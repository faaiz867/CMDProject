import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {DataService} from '../data.service';
import {Process} from '../process';
@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css'],
  providers:[DataService]
})
export class ProcessComponent implements OnInit {
  process:Process[];
  processform:any;
  //process:Process;
  process_no: string;
  //process_date: Date;
  cust_name:string;
  so:string;
  date = new FormControl(new Date());
  // startDate = new Date(0, 0, 2);
  constructor(private dataService:DataService) {}
  //contacts;
  selectedContact;
  ngOnInit() {
    this.getData();

    // this.dataService.getProcess()
    // .subscribe(processg =>
    //   this.processg = processg);
  }
  
  getData(){
    this.dataService.getProcesslist().subscribe(
      data=>{
        console.log("Helo",data);
        this.process=data;
      }
    )
  }

  getDataDetail(_id){
    console.log(_id)
    this.dataService.getProcessDetail(_id).subscribe(
      data=>{
        console.log(data);
        this.processform=data[0];
      }
    )
  }
  
}
