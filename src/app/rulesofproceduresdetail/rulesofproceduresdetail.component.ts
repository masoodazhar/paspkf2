import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-rulesofproceduresdetail',
  templateUrl: './rulesofproceduresdetail.component.html',
  styleUrls: ['./rulesofproceduresdetail.component.css']
})
export class RulesofproceduresdetailComponent implements OnInit {

  public allData:any=[];
  public imageUrl = '';
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
    this.allData = this.getdataService.getById('rulesofprocedures', this.id)
    .subscribe((data:any)=>{
      this.allData = data;
      //console.log(this.allData)
    });
  }

 

}
