import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-standingcommitteestabs',
  templateUrl: './standingcommitteestabs.component.html',
  styleUrls: ['./standingcommitteestabs.component.css']
})
export class StandingcommitteestabsComponent implements OnInit {


  public allData:any={};
  public allMembers:any={};
  public imageUrl:any='';
  public id:any = 0;
  public singleData:any={};
  public standingCommitteeHeading:any = "";
  public isDetail:boolean=false;

  constructor(private getdataService:GetdataService,private _Activatedroute:ActivatedRoute) {}

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.id = this._Activatedroute.snapshot.paramMap.get("id");
    this.getData();
    this.getMember();
    this.getstandingCommitteeHeading();
  }

  getstandingCommitteeHeading():any{
    this.getdataService.getById('getndingcommitteescategory_by_id', this.id)
    .subscribe((data:any)=>{
      this.standingCommitteeHeading = data;
      console.log('=================allstandingCommitteeHeadingData=============');
    
      console.log(this.standingCommitteeHeading);
    });
  }


  filterItemsOfType(tab:any){
    return this.allData.filter(function (x:any) {
     return x.tab_type == tab;
    });
  }

  getData():any{
    this.getdataService.getById('standingcommittees', this.id)
    .subscribe((data:any)=>{
      this.allData = data[0]?data:data;
    });
  }

  getMember():any{
    this.imageUrl = this.getdataService.getImageUrl();
    this.getdataService.getById('standingcommitteesmembers', this.id)
    .subscribe((data:any)=>{
      this.allMembers = data;
      //console.log('=================================')
      //console.log(this.allMembers)
    });
  }

  listofmembersdetail(id:any){
    this.imageUrl = this.getdataService.getImageUrl();
    var data = this.allData.filter((x: { id: any; })=>x.id === id);
    this.singleData = data[0];
  
    
    this.isDetail=true;
    //console.log(this.singleData)
  }

  back(id:any){
    this.isDetail=false;
  }
}
