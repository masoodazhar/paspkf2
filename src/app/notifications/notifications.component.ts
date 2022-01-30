import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  public allData:any=[];
  public ParlimentryNotification:any=[];
  public singleData:any={};
  public imageUrl:any='';
  public isDetail:boolean=false;
  constructor(private getdataService:GetdataService) {  }

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.getData(); 
    this.getParlimentryNotification();
  }

  filterItemsOfType(tab:any){
      return this.allData.filter(function (x:any) {
       return x.tab_type == tab;
      });
  }

  getData() {
    this.getdataService.getAll('notifications')
    .subscribe((data:any)=>{
      this.allData = data;
      this.isDetail=false;
    });
  }

  getParlimentryNotification(){
    const page:any = 'notification';
    this.getdataService.getById('parliamentaryprivileges', page)
    .subscribe((data:any)=>{
      this.ParlimentryNotification = data;
    });
  }

  getParlimentryNotificationData(id:any){
    this.getdataService.getById('parliamentaryprivilegesbyid', id)
    .subscribe((data:any)=>{
      this.singleData = data;
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
