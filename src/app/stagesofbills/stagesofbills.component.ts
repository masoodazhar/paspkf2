import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-stagesofbills',
  templateUrl: './stagesofbills.component.html',
  styleUrls: ['./stagesofbills.component.css']
})
export class StagesofbillsComponent implements OnInit {

 
  public singleData:any={};
  constructor(private getdataService:GetdataService) {  }

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.getAssemblyTenure(); 
  }

  getAssemblyTenure():any{
    this.getdataService.getAll('stagesofbills')
    .subscribe((data:any)=>{
      this.singleData = data;   
      
    });
  } 





  

}
