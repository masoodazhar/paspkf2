import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-rulesdetail',
  templateUrl: './rulesdetail.component.html',
  styleUrls: ['./rulesdetail.component.css']
})
export class RulesdetailComponent implements OnInit {

  public allData:any={};
  public imageUrl:any='';
  public id:any = 0;
  constructor(private getdataService:GetdataService,private _Activatedroute:ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.id = this._Activatedroute.snapshot.paramMap.get("id");
    this.getData();
    //console.log(this.id)
  }

  getData():any{
    this.imageUrl = this.getdataService.getImageUrl();
    this.allData = this.getdataService.getById('rules', this.id)
    .subscribe((data:any)=>{
      this.allData = data;
    });
  }

}
