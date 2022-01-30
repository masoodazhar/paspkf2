import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-committeeongovernmentassurancedetail2',
  templateUrl: './committeeongovernmentassurancedetail2.component.html',
  styleUrls: ['./committeeongovernmentassurancedetail2.component.css']
})
export class Committeeongovernmentassurancedetail2Component implements OnInit {


  public allData:any=[];
  public allAssemblyTenure:any=[];
  public imageUrl = '';
  public assemblyId:any;

  constructor(private getdataService:GetdataService, private _Activatedroute:ActivatedRoute) {  }

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.assemblyId = this._Activatedroute.snapshot.paramMap.get("id");
    this.getAssemblyTenure();
  }

  getAssemblyTenure():any{
    this.getdataService.getAll('assemblytenure')
    .subscribe((data:any)=>{
      this.allAssemblyTenure = data;   
      this.onChange2(this.assemblyId);
    });
  }

  
  onChange2(tenureid:any) {
    this.getdataService.getById('committeeongovernmentassurancemembers',tenureid)
    .subscribe((data:any)=>{
      this.allData = data[0];
      // //console.log(this.allData)
    });
  }

}
