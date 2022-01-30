import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactData:any={};

  constructor(private getdataService:GetdataService) { }
  ngOnInit(): void {
    this.getContactData();
  }

  getContactData():any{
    this.getdataService.getAll('contactus')
    .subscribe((data:any)=>{
      this.contactData = data;
     
    });
  }

}
