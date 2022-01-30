import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
// ====LOCAL=====
// const baseUrl = 'http://localhost:81/backend/api';
// const imageUrl = 'http://localhost:81/backend/uploads/';
 

// ==============ONLINE=========
const baseUrl = 'https://tadmin.paspk.xyz/api';
const imageUrl = 'https://tadmin.paspk.xyz/public/uploads/';
// const httpHandlers = new HttpHeaders({'Content-Type': 'application/json','Authorization': 'Token 96914cd04d52e943e369cc83a961194ed33768aa'})
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { TranslateService, TranslateLoader } from '@ngx-translate/core';

interface Member{
  
}

@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  private accessToken:any;
  private headers:any;
  private language:any;
  constructor(private http: HttpClient, private ngxService: NgxUiLoaderService, private translattion: TranslateService) { 

    // this.translattion.use(this.translattion.getBrowserLang());
    // //console.log(this.translattion.currentLang)
    // this.language = this.translattion.currentLang;
    // this.language = 'ur'
    let currentLang = localStorage.getItem('currentLang')
      if(currentLang=='ur'){
        this.language = 'ur'
      }else if(currentLang=='sd'){
        this.language = 'sd'
      }
      else if(currentLang=='en'){
        this.language = 'en'
      }else{
        this.language = 'en'
      }
  }
  
  // getTranslation(lang: any): Observable<any> {
  //   //console.log('================================================')
  //   //console.log(lang)
  //   return this.http.get(`${baseUrl}/about/${lang}`);
  // }

  getImageUrl(){
    return imageUrl;
  }

  getAll(url:string){
    //console.log(this.language)
    return this.http.get(`${baseUrl}/${url}/${this.language}`);
  }

  getById( url:string, id:BigInteger) {
    return this.http.get(`${baseUrl}/${url}/${id}/${this.language}`);
  }

  getByPageById(url:string, page:string, id:BigInteger) {
    return this.http.get(`${baseUrl}/${url}/${page}/${id}/${this.language}`);
 }

  getByTenurePageSession( url:string, tenureid:BigInteger, sessionid:BigInteger) {
    return this.http.get(`${baseUrl}/${url}/${tenureid}/${sessionid}/${this.language}`);
  }

  getByPageByIdTitle(url:string, page:string, id:BigInteger, title:string) {
    return this.http.get(`${baseUrl}/${url}/${page}/${id}/${title}/${this.language}`);
  }

  findByName(name:string, url:string) {
    return this.http.get(`${baseUrl}/${url}/?name=${name}/${this.language}`);
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  advanceSearch(form:any):Observable<any>{
    return this.http.post(`${baseUrl}/advanceSearch/${this.language}`,form, this.httpOptions);
  }


  loadingloader(){
    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 5000);

    // OR
    this.ngxService.startBackground("do-background-things");
    // Do something here...
    this.ngxService.stopBackground("do-background-things");

    this.ngxService.startLoader("loader-01"); // start foreground spinner of the loader "loader-01" with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stopLoader("loader-01"); // stop foreground spinner of the loader "loader-01" with 'default' taskId
    
    }, 5000);
  }
}
