import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {


  public allData:any=[];
  public allAssemblyTenure:any=[];
  public selectedTenure:any;
  public singleData:any={};
  public isDetail:boolean=false;
  public imageUrl:any='';
  constructor(private getdataService:GetdataService) {  }

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.getData();
    this.imageUrl = this.getdataService.getImageUrl();
  }



  filterItemsOfType(tab:any){
      return this.allData.filter(function (x:any) {
       return x.parliamentaryyearsname == tab;
      });
  }

  getData() {
    const id:any=false;
    this.getdataService.getById('questions', id)
    .subscribe((data:any)=>{
      this.allData = data;
      //console.log(this.allData)
    });
  }

  onChange2(tenureid:any) {
    this.getdataService.getById('questions',tenureid)
    .subscribe((data:any)=>{
      this.singleData = data;
      this.isDetail = true;
      //console.log(this.allData)
    });
  }

  back(id:any){
    this.isDetail = false;
  }

}
