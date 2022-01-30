import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetdataService } from '../getdata.service';


@Component({
  selector: 'app-committeeongovernmentassurancedetail1',
  templateUrl: './committeeongovernmentassurancedetail1.component.html',
  styleUrls: ['./style.scss']
})

export class Committeeongovernmentassurancedetail1Component implements OnInit {

  public allData:any=[];
  public allAssemblyTenure:any=[];
  public imageUrl = '';
  public selectedTenure:any;
  public assemblyId:any;
  public singleSpeaker:any;
  public singleDeputySpeaker:any;
  public assemblyName:any;
  constructor(private getdataService:GetdataService, private _Activatedroute:ActivatedRoute) {  }

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.assemblyId = this._Activatedroute.snapshot.paramMap.get("id");
    this.getAssemblyTenure();
    this.getSpeakers();
    this.getDeputySpeakers();
  }

  getSpeakers(){
    this.imageUrl = this.getdataService.getImageUrl();
    this.getdataService.getAll('committeeongovernmentassurancemembersSpeaker')
    .subscribe((data:any)=>{
      this.singleSpeaker = data; 
    });
  }

  getDeputySpeakers(){
    this.getdataService.getAll('committeeongovernmentassurancemembersDeputySpeaker')
    .subscribe((data:any)=>{
      this.singleDeputySpeaker = data; 
    });
  }

  getAssemblyTenure():any{
    this.getdataService.getAll('assemblytenure')
    .subscribe((data:any)=>{
      this.allAssemblyTenure = data;   
      this.onChange2(this.assemblyId);
    });
  }

  filterItemsOfType(tab:any){
      return this.allData.filter(function (x:any) {
        return x.parliamentaryyearsname == tab;
      });
  }

  
  onChange2(tenureid:any) {
    this.getdataService.getById('committeeongovernmentassurancebyassembly',tenureid)
    .subscribe((data:any)=>{
      this.allData = data;
      this.assemblyName=data[0].assemblyname;
      // //console.log(this.allData)
    });
  }
 
}
