import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-parliamentaryprivileges',
  templateUrl: './parliamentaryprivileges.component.html',
  styleUrls: ['./parliamentaryprivileges.component.css']
})
export class ParliamentaryprivilegesComponent implements OnInit {



  public allData:any=[];
  constructor(private getdataService:GetdataService) { 
    
  }

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.getData();

  }

  getData():any{
    const id:any = 1;
    this.allData = this.getdataService.getAll('parliamentaryprivileges')
    .subscribe((data:any)=>{
      this.allData = data;
    });
  }

  // filterItemsOfType(type: any, tab:any){
  //     return this.allData.filter(function (x:any) {
  //       return x.category == type && x.tabs == tab;
  //     });
  // }

}
