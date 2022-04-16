import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-parliamentarycalendar',
  templateUrl: './parliamentarycalendar.component.html',
  styleUrls: ['./parliamentarycalendar.component.css']
})
export class ParliamentarycalendarComponent implements OnInit {

  public allData:any=[];
  public allAssemblyTenure:any=[];
  public selectedTenure:any;
  public sociallinks_get_year_only:any={};
  public myarray:any = [];
  public range31 =['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
  public range30 =['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30']
  public range28 =['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28']
  
  constructor(private getdataService:GetdataService) { }

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.getAssemblyTenure(); 
    this.getSocialLink();
  }

  getAssemblyTenure():any{
    this.getdataService.getAll('assemblytenure')
    .subscribe((data:any)=>{
      this.allAssemblyTenure = data;   
      this.onChange2(data[0].id);
      
    });
  }

  getSocialLink() {    
    this.getdataService.getAll('sociallinks')
    .subscribe((data:any)=>{
      this.sociallinks_get_year_only = data;
      // //console.log(this.speaker)
    });
  }

  filterDays(year:any, month:any, day:any){

    let date = year+'-'+month+'-'+day;
    let check:boolean=false;

    // this.allData.filter(function (x:any) {
    //   return x.fromdate == date? check=true: check=false;
    // });
    // return check
     for(let index in this.allData)
     {
       if(this.allData[index].fromdate == date){
        check = this.allData[index].type;
        // //console.log('====================got it==========', this.allData[index].fromdate)
       }
     }
     return check;
  }

  onChange(tenureid:any) {
    this.getdataService.getById('parliamentarycalendar',tenureid.target.value)
    .subscribe((data:any)=>{
      this.allData = data;
      console.log(this.allData)
    });
  }
  
  onChange2(tenureid:any) {
    this.getdataService.getById('parliamentarycalendar',tenureid)
    .subscribe((data:any)=>{
      this.allData = data;
      // //console.log(this.allData)
      // this.calculateDiff()
      // //console.log(this.filterDays('2021','04', '02'))
      // //console.log(this.range(1,10))
    });
  }

  calculateDiff(calender:any[], startDate:Date, endDate:Date){
  //   let members = [
  //     {'date': '05/01/2021'},
  //     {'date': '06/02/2021'},
  //     {'date': '05/03/2021'},
  //     {'date': '07/03/2021'},
  //     {'date': '05/03/2021'},
  // ]
    // let startDate = "05/01/2021";
    // let endDate = "06/25/2021";
    let selectedMembers = calender.filter(
      ( m:{ date: string | number | Date; }) => new Date(m.date) >= new Date(startDate) && new Date(m.date) <= new Date(endDate)
    )  

    //console.log(selectedMembers)
    }

  // getDays(){
  //   var date1 = new Date("05/01/2021"); 
  //   var date2 = new Date("04/25/2021"); 
    
  //     var Time = date2.getTime() - date1.getTime(); 
  //     var Days = Time / (1000 * 3600 * 24); //Diference in Days
  //     this.calculateDiff()
      
  // }



}
