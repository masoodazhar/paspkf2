import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-speakersdetail',
  templateUrl: './speakersdetail.component.html',
  styleUrls: ['./speakersdetail.component.css']
})
export class SpeakersdetailComponent implements OnInit {

  public allData:any={};
  public imageUrl:any='';
  public id:any = 0;

  public newvar = 10;

  constructor(private getdataService:GetdataService,private _Activatedroute:ActivatedRoute) {}
   
  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.id = this._Activatedroute.snapshot.paramMap.get("id");
    this.getData();
  }

  
  getData():any{
    this.imageUrl = this.getdataService.getImageUrl();
    this.allData = this.getdataService.getById('speakers', this.id)
    .subscribe((data:any)=>{
      this.allData = data;
    });
  }

}
