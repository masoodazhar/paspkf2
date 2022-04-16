import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-committeesystem',
  templateUrl: './committeesystem.component.html',
  styleUrls: ['./committeesystem.component.css']
})
export class CommitteesystemComponent implements OnInit {

  public allData:any=[];
  public singleData:any={};
  public isDetail:boolean=false;
  public imageUrl:any='';
  constructor(private getdataService:GetdataService) {  }

  ngOnInit(): void {
    this.getdataService.loadingloader()
    this.getAssemblyTenure(); 
  }

  getAssemblyTenure():any{
    this.imageUrl = this.getdataService.getImageUrl();
    this.getdataService.getAll('committeesystemdetail')
    .subscribe((data:any)=>{
      this.allData = data;   
    });
  }

  getDetial(id:any){
     var data = this.allData.filter(function(x:any){ return x.id === id})
     this.singleData = data[0];
     this.isDetail = true;
  }
 
  back(id:any){
    this.isDetail = false;
  }

}
