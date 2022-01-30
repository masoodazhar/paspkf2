import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-parliamentaryprivilegesdetails',
  templateUrl: './parliamentaryprivilegesdetails.component.html',
  styleUrls: ['./parliamentaryprivilegesdetails.component.css']
})

export class ParliamentaryprivilegesdetailsComponent implements OnInit {

  public allData:any=[];
  public allAssemblyTenure:any=[];
  public imageUrl = '';
  public id:any = 0;
  constructor(private getdataService:GetdataService,private _Activatedroute:ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.id = this._Activatedroute.snapshot.paramMap.get("id");
    this.getData();
    //console.log(this.id)
  }

  getData():any{
    this.allData = this.getdataService.getById('parliamentaryprivilegesbyid', this.id)
    .subscribe((data:any)=>{
      this.allData = data;
      //console.log(this.allData)
    });
  }

  filterItemsOfType(type: any, tab:any){
      return this.allData.filter(function (x:any) {
        return x.category == type && x.tabs == tab;
      });
  }


}
