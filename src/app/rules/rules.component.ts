import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  public allData:any=[];
  public imageUrl:any='';
  constructor(private getdataService:GetdataService){}

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.getData();
  }

  getData():any{
    this.imageUrl = this.getdataService.getImageUrl();
    this.getdataService.getAll('rules')
    .subscribe((data:any)=>{
      this.allData = data;
    });

  }

}
