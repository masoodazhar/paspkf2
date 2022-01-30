import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-publicaccountscommittee',
  templateUrl: './publicaccountscommittee.component.html',
  styleUrls: ['./publicaccountscommittee.component.css']
})
export class PublicaccountscommitteeComponent implements OnInit {

  public allData:any=[];
  public allMembers:any=[];
  public allChairman:any=[];
  public singleData:any={};
  public imageUrl:any='';
  public isDetail:boolean=false;
  constructor(private getdataService:GetdataService) {  }

  ngOnInit(): void {
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
    const id:any=1;
    this.getdataService.getById('publicaccountscommittee',id)
    .subscribe((data:any)=>{
      this.allData = data;
      this.isDetail=false;
    });
  }
  
  getMembers() {
    const id:any=1;
    this.imageUrl = this.getdataService.getImageUrl();
    this.getdataService.getById('publicaccountscommitteemembers',id)
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
