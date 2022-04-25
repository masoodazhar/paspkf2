import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-allcommitteesdata',
  templateUrl: './allcommitteesdata.component.html',
  styleUrls: ['./allcommitteesdata.component.css']
})
export class AllcommitteesdataComponent implements OnInit {

  public allData:any=[];
  public allMembers:any=[];
  public allChairman:any=[];
  public singleData:any={};
  public imageUrl:any='';
  public isDetail:boolean=false;
  public id:any;

  constructor(private getdataService:GetdataService,private _Activatedroute:ActivatedRoute) {}

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.id = this._Activatedroute.snapshot.paramMap.get("id");
    this.getdataService.loadingloader();
    this.getData();
    this.getMembers();
  }



  filterItemsOfType(tab:any){
      return this.allData.filter(function (x:any) {
       return x.tab_type == tab;
      });
  }

  getData() {
    const id:any=this.id;
    this.getdataService.getById('othercommittee',id)
    .subscribe((data:any)=>{
      this.allData = data;
      this.isDetail=false;
      console.log(this.allData);

    });
  }

  getMembers() {
    const id:any=this.id;
    this.imageUrl = this.getdataService.getImageUrl();
    this.getdataService.getById('othercommitteemembers',id)
    .subscribe((data:any)=>{
      this.allMembers = data[0].members;
      this.allChairman = data[0].data;
      //console.log('================================')
      //console.log(this.allMembers)
    });
  }

  getDataMemeber(id:any){
    var data = this.allData.filter((x: { id: any; })=>{ return x.id === id})
    this.singleData = data[0]
    this.isDetail = true;
  }

  back(id:any){
    this.isDetail = false;
  }


}
