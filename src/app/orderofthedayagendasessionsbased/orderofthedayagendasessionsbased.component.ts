import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GetdataService } from '../getdata.service';
@Component({
  selector: 'app-orderofthedayagendasessionsbased',
  templateUrl: './orderofthedayagendasessionsbased.component.html',
  styleUrls: ['./orderofthedayagendasessionsbased.component.css']
})
export class OrderofthedayagendasessionsbasedComponent implements OnInit {

  public sessionid:any;
  public allData:any=[];
  public resolutionPassedData:any=[];
  public questionData:any=[];
  public allAssemblyTenure:any=[];
  public selectedTenure:any;
  public singleData:any={};
  public isDetail:boolean=false;
  public imageUrl:any='';
  constructor(private getdataService:GetdataService, private _Activatedroute:ActivatedRoute) {  }

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.imageUrl = this.getdataService.getImageUrl();
    this.sessionid = this._Activatedroute.snapshot.paramMap.get("id");
    this.getAssemblyTenure(); 
    //console.log(this.sessionid)
  }

  getAssemblyTenure():any{
    this.getdataService.getAll('assemblytenure')
    .subscribe((data:any)=>{
      this.allAssemblyTenure = data;   
      this.onChange2(data[0].id);
      //console.log(this.allAssemblyTenure)
    });
  }

  filterItemsOfOrder(tab:any){
      return this.allData.filter(function (x:any) {
       return x.sittingstype == tab;
      });
  }

 

  onChange(tenureid:any) {
    this.getdataService.getByTenurePageSession('orderofthedayagendasessionsbased',tenureid.target.value, this.sessionid)
    .subscribe((data:any)=>{
      this.allData = data;
      //console.log(this.allData)
    });

    this.getdataService.getByTenurePageSession('resolutionpassedsessionsbased',tenureid.target.value, this.sessionid)
    .subscribe((data:any)=>{
      this.resolutionPassedData = data;
    });

    this.getdataService.getByTenurePageSession('questionasessionsbased',tenureid.target.value, this.sessionid)
    .subscribe((data:any)=>{
      this.questionData = data;
      //console.log(this.questionData)
    });
  }
  
  onChange2(tenureid:any) {
    // const id:any=1;
    this.getdataService.getByTenurePageSession('orderofthedayagendasessionsbased',tenureid, this.sessionid)
    .subscribe((data:any)=>{
      this.allData = data;
    });

    this.getdataService.getByTenurePageSession('resolutionpassedsessionsbased',tenureid, this.sessionid)
    .subscribe((data:any)=>{
      this.resolutionPassedData = data;
    });

    this.getdataService.getByTenurePageSession('questionasessionsbased',tenureid, this.sessionid)
    .subscribe((data:any)=>{
      this.questionData = data;
    });
  }

  // listofmembersdetail(id:any){
  //   this.getdataService.getByPageById('orderofthedayagendabyid','Order of the Day',id)
  //   .subscribe((data:any)=>{
  //     this.isDetail = true;
  //     this.singleData = data;
  //     //console.log(this.singleData)
  //   }); 
  // }

  back(id:any){
    this.isDetail = false;
  }
}
