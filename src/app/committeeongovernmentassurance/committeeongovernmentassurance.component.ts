import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-committeeongovernmentassurance',
  templateUrl: './committeeongovernmentassurance.component.html',
  styleUrls: ['./committeeongovernmentassurance.component.css']
})
export class CommitteeongovernmentassuranceComponent implements OnInit {

  public allData:any=[];
  

  constructor(private getdataService:GetdataService) {  }

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.onChange2(); 
  }

  filterItemsOfType(tab:any){
      return this.allData.filter(function (x:any) {
       return x.parliamentaryyearsname == tab;
      });
  }
  
  onChange2() {
    // const id:any=1;
    this.getdataService.getAll('committeeongovernmentassurance')
    .subscribe((data:any)=>{
      this.allData = data;
      // //console.log(this.allData)
    });
  }  

}
