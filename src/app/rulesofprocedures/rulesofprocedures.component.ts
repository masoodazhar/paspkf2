import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-rulesofprocedures',
  templateUrl: './rulesofprocedures.component.html',
  styleUrls: ['./rulesofprocedures.component.css']
})
export class RulesofproceduresComponent implements OnInit {



  public allData:any=[];
  public allAssemblyTenure:any=[];
  public imageUrl = '';

  constructor(private getdataService:GetdataService) {

  }

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.getData();

  }

  getData():any{
    const id:any = false;

    this.allData = this.getdataService.getById('rulesofprocedures',id)
    .subscribe((data:any)=>{
      this.allData = data;
    });
  }

  filterItemsOfType(type: any, tab:any){
      return this.allData.filter(function (x:any) {
        return x.category == type && x.tabs == tab;
      });
  }

}
