import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-assemblylibrary',
  templateUrl: './assemblylibrary.component.html',
  styleUrls: ['./assemblylibrary.component.css']
})
export class AssemblylibraryComponent implements OnInit {

  public allData:any=[];
  public imageUrl:any='';
  constructor(private getdataService:GetdataService){}

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.getData();
  }

  getData():any{
    this.imageUrl = this.getdataService.getImageUrl();
    this.getdataService.getAll('assemblylibrary')
    .subscribe((data:any)=>{
      this.allData = data;
    });

  }

}
