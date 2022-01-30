import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-notifycommittees',
  templateUrl: './notifycommittees.component.html',
  styleUrls: ['./notifycommittees.component.css']
})
export class NotifycommitteesComponent implements OnInit {

 
  public allData:any=[];
  public singleData:any={};
  public imageUrl:any='';
  public isDetail:boolean=false;
  constructor(private getdataService:GetdataService) {  }

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.getData(); 
  }

  filterItemsOfType(tab:any){
      return this.allData.filter(function (x:any) {
       return x.tab_type == tab;
      });
  }

  getData() {
    this.imageUrl = this.getdataService.getImageUrl();
    const page:any = 'Committees';
    this.getdataService.getById('notifications',page)
    .subscribe((data:any)=>{
      this.allData = data;
      this.isDetail=false;
    });
  }

  getDataMemeber(id:any){
    this.imageUrl = this.getdataService.getImageUrl();
    var data = this.allData.filter((x: { id: any; })=>{ return x.id === id})
    this.singleData = data[0]
    this.isDetail = true;
  }

  back(id:any){
    this.isDetail = false;
  }


}
