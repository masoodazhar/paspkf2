import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-membersperformancereport',
  templateUrl: './membersperformancereport.component.html',
  styleUrls: ['./membersperformancereport.component.css']
})
export class MembersperformancereportComponent implements OnInit {

 
  public allData:any=[];
  public allAssemblyTenure:any=[];
  public imageUrl = '';
  public memberid:any;
  public memberSingleData={id: 7, assembly_tenures_id: 3, name: "masoodazhar", image: "1624489914.jpg", fatherhusbandname: "-"};

  constructor(private getdataService:GetdataService, private _Activatedroute:ActivatedRoute) {  }

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.memberid = this._Activatedroute.snapshot.paramMap.get("id");
    this.gerData(this.memberid);
    this.gerMemberData(this.memberid);
  }

  gerData(tenureid:any) {
    this.imageUrl = this.getdataService.getImageUrl();
    this.getdataService.getById('membersperformancereport',tenureid)
    .subscribe((data:any)=>{
      this.allData = data;
    });
  }
  

  gerMemberData(tenureid:any) {
    this.imageUrl = this.getdataService.getImageUrl();
    this.getdataService.getById('memberprofile',tenureid)
    .subscribe((data:any)=>{
      this.memberSingleData = data;
      //console.log('-======================-')
      //console.log(this.memberSingleData)
    });
  }

}
