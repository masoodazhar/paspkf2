import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetdataService } from '../getdata.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sittingsdetail',
  templateUrl: './sittingsdetail.component.html',
  styleUrls: ['./sittingsdetail.component.css']
})
export class SittingsdetailComponent implements OnInit {

  
  public singleData:any={};
  public imageUrl:any='';
  public id:any = 0;
  constructor(private getdataService:GetdataService,private _Activatedroute:ActivatedRoute, private location: Location) { 
    
  }

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.id = this._Activatedroute.snapshot.paramMap.get("id");
    this.getData();
    //console.log(this.id)
  }

  getData():any{
    this.imageUrl = this.getdataService.getImageUrl();
    this.getdataService.getById('sittingsbyidorderoftheday', this.id)
    .subscribe((data:any)=>{
      this.singleData = data;
      //console.log(this.singleData)
    });
  }

  back(asd:any): void {
    this.location.back()
  }

}
