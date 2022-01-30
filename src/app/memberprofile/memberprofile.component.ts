import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetdataService } from '../getdata.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-memberprofile',
  templateUrl: './memberprofile.component.html',
  styleUrls: ['./memberprofile.component.css']
})
export class MemberprofileComponent implements OnInit {

  
 
  public allData:any={};
  public imageUrl = '';
  public memberid:any;

  constructor(private getdataService:GetdataService, private _Activatedroute:ActivatedRoute,  private location: Location) {  }

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.memberid = this._Activatedroute.snapshot.paramMap.get("id");
    this.gerData(this.memberid);
  }

  gerData(tenureid:any) {
    this.imageUrl = this.getdataService.getImageUrl();
    this.getdataService.getById('memberprofile',tenureid)
    .subscribe((data:any)=>{
      this.allData = data;
      //console.log(this.allData)
    });
  }

  convertData(data:any){
    return JSON.parse(data);
  }

  isAlphaOrParen(str:string) {
    // //console.log('=============CHECKING PROFILE=============');
    
    // //console.log(str)
    if (! /^[a-zA-Z0-9]+$/.test(str)) {
      return false;
    }else{
      return true;
    }
  }
  backPage(asd:any): void {
    this.location.back()
  }
}
