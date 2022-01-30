import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-actslistsdetails',
  templateUrl: './actslistsdetails.component.html',
  styleUrls: ['./actslistsdetails.component.css']
})
export class ActslistsdetailsComponent implements OnInit {

  
  public allData:any={};
  public imageUrl:any='';
  public id:any = 0;
  constructor(private getdataService:GetdataService, private _Activatedroute:ActivatedRoute) {}

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.id = this._Activatedroute.snapshot.paramMap.get("id");
    this.getData();
    //console.log(this.id)
  }

  getData():any{
    this.imageUrl = this.getdataService.getImageUrl();
    this.allData = this.getdataService.getById('actdetail', this.id)
    .subscribe((data:any)=>{
      this.allData = data;
    });
  }

}
