import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-workingofassembly',
  templateUrl: './workingofassembly.component.html',
  styleUrls: ['./workingofassembly.component.css']
})
export class WorkingofassemblyComponent implements OnInit {

  public allData:any=[];
  constructor(private getdataService:GetdataService) {  }

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.getData();
  }

  getData():any{
    this.allData = this.getdataService.getAll('workingofassembly')
    .subscribe((data:any)=>{
      this.allData = data;
    })
  }

}
