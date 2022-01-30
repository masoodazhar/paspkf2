import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-organizationalchart',
  templateUrl: './organizationalchart.component.html',
  styleUrls: ['./organizationalchart.component.css']
})
export class OrganizationalchartComponent implements OnInit {

  public allData:any=[];
  public imageUrl:string='';
  public singleData:any;
  public isDetail:boolean=false;
  public urls:string='http://127.0.0.1:8000/files/1618802842.pdf';
  constructor(private getdataService:GetdataService){}

  ngOnInit(): void {
    this.getData();
  }

  getData():any{
    this.getdataService.loadingloader();
    this.imageUrl = this.getdataService.getImageUrl();
    this.allData = this.getdataService.getAll('organizationalchart')
    .subscribe((data:any)=>{
      this.allData = data;
    });
  }



  getDetails(id:any){
    this.imageUrl = this.getdataService.getImageUrl();
    var data = this.allData.filter((x: { id: any; })=>{ return x.id === id})
    this.singleData = data[0]
    this.isDetail = true;
  }
  back(id:any){
    this.isDetail = false;
  }
}
