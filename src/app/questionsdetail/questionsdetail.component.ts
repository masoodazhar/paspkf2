import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-questionsdetail',
  templateUrl: './questionsdetail.component.html',
  styleUrls: ['./questionsdetail.component.css']
})
export class QuestionsdetailComponent implements OnInit {

 
  public singleData:any={};
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
    this.getdataService.getById('sittingsbyidquestion', this.id)
    .subscribe((data:any)=>{
      this.singleData = data;
      //console.log(this.singleData)
    });
  }

}
