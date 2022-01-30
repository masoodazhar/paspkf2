import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
 
@Component({
  selector: 'app-roleofassembly',
  templateUrl: './roleofassembly.component.html',
  styleUrls: ['./roleofassembly.component.css']
})
export class RoleofassemblyComponent implements OnInit {

  public allData:any=[];
  constructor(private getdataService:GetdataService) {  }

  ngOnInit(): void {
    this.getData();
  }

  getData():any{
    this.getdataService.loadingloader();
    this.allData = this.getdataService.getAll('roleofassembly')
    .subscribe((data:any)=>{
      this.allData = data;
    })
  }
  


}
