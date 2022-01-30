import { Component, Inject } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { TranslateService } from '@ngx-translate/core';
import { GetdataService } from './getdata.service';
import { Router } from '@angular/router';
import { DOCUMENT } from "@angular/common";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'PASPK';
  public sociallinks:any={};
  public activeLangEN:string = '';
  public activeLangUR:string = '';
  public activeLangSD:string = '';
  public currentLang = localStorage.getItem('currentLang')
  public searchdataDict = [
    {'name':'about', 'value':'about'},
    {'name':'messages', 'value':'Messages'},
    {'name':'workingofassembly', 'value':'Working of Assembly'},
    {'name':'roleofassembly', 'value':'Role of Assembly'},
    {'name':'cabinetcomposition', 'value':'Cabinet Composition'},
    {'name':'leaderofthehouse', 'value':'Leader of the House'},
    {'name':'leaderoftheopposition', 'value':'Leader of the Opposition'},
    {'name':'rulesofprocedures', 'value':'Rules of Procedures'},
    {'name':'parliamentaryprivileges', 'value':'Parliamentary Privileges'},
    {'name':'overview', 'value':'Overview'},
    {'name':'organizationalchart', 'value':'Organizational Chart'},
    {'name':'directoryofofficers', 'value':'Directory of Officers'},
    {'name':'powersfunctions', 'value':'Powers & Functions'},
    {'name':'contactlist', 'value':'Contact List'},
    {'name':'rules', 'value':'Rules'},
    {'name':'thesindhtrans2016', 'value':'The Sindh Transparency and Right to Information Act, 2016'},
    {'name':'assemblylibrary', 'value':'Assembly Library'},
    {'name':'speakers', 'value':'Speaker'},
    {'name':'deputyspeaker', 'value':'Deputy Speaker'},
    {'name':'membersdirectory', 'value':'Members Directory'},
    {'name':'listofmembers', 'value':'List of Members'},
    {'name':'membersdirectory', 'value':'Members performance report'},
    {'name':'pastassemblymembers', 'value':'Past Assembly Members'},
    {'name':'currentassemblysummary', 'value':'Current Assembly Summary'},
    {'name':'sessions', 'value':'Sessions'},
    {'name':'orderofthedayagenda', 'value':'Order of the day Agenda'},
    {'name':'summaryofproceedings', 'value':'Summary of proceedings'},
    {'name':'housedebates', 'value':'House Debates'},
    {'name':'questions', 'value':'Questions'},
    {'name':'callattention', 'value':'Call Attention'},
    {'name':'resolutionspassed', 'value':'Resolutions Passed'},
    {'name':'stagesofbills', 'value':'Stages of Bills'},
    {'name':'bills', 'value':'Bills'},
    {'name':'acts', 'value':'Acts'},
    {'name':'motions', 'value':'Motions'},
    {'name':'performanceofassembly', 'value':'Performance of Assembly'},
    {'name':'parliamentarycalendar', 'value':'Parliamentary Calendar'},
    {'name':'committeesystem', 'value':'Committee System'},
    {'name':'committeerules', 'value':'Committee rules'},
    {'name':'publicaccountscommittee', 'value':'Public Accounts Committee'},
    {'name':'standingcommittees', 'value':'Standing Committees'},
    {'name':'committeesonrulesofprocedureprivileges', 'value':'Committees on Rules of Procedure & Privileges'},
    {'name':'financecommittee', 'value':'Finance Committee'},
    {'name':'selectcommitteeonbills', 'value':'Select committee on bills'},
    {'name':'committeeongovernmentassurance', 'value':'Committee on Government Assurance'},
    {'name':'librarycommittee', 'value':'Library committee'},
    {'name':'businessadvisorycommittee', 'value':'Business Advisory committee'},
    {'name':'specialcommittee', 'value':'Special Committee'},
    {'name':'reportslaid', 'value':'Reports Laid'},
    {'name':'housecommittee', 'value':'House Committee'},
    {'name':'constructioncommittee', 'value':'Construction Committee'},
    {'name':'notifications', 'value':'Notifications'},
    {'name':'notifyessions', 'value':'Notifications Sessions'},
    {'name':'notifymembers', 'value':'Notifications Members'},
    {'name':'notifycommittees', 'value':'Notifications Committees'},
    {'name':'notifygeneral', 'value':'Notifications General'},
    {'name':'pressreleases', 'value':'Press Releases'},
    {'name':'newsandactivities', 'value':'News and activities'},
    {'name':'picturegallery', 'value':'Picture Gallery'},
    {'name':'tenders', 'value':'Tenders'},
    {'name':'jobs', 'value':'Jobs'},
    {'name':'glossary', 'value':'Glossary'},
    {'name':'usefullinks', 'value':'Useful Links'},
    {'name':'faqs', 'value':'Faqs'},
    {'name':'webcastlivevideoaudio', 'value':'Webcast Live Video Audio'},
    {'name':'videoarchive', 'value':'Video Archive'},
    {'name':'publications', 'value':'Publications'},
    {'name':'reports', 'value':'Reports'},
    {'name':'contactus', 'value':'Contact Us'}
   
  ];

  public searchvalues:any = []
  public clang:any;
  
  constructor(@Inject(DOCUMENT) private document: Document, private ngxService: NgxUiLoaderService,  public translattion: TranslateService, private getdataService:GetdataService,public routes: Router ) {
    translattion.addLangs(['en', 'ur', 'sd']);
    translattion.setDefaultLang('en')
    this.translattion.use('en');
    // localStorage.setItem('currentLang', 'en')
      let currentLang = localStorage.getItem('currentLang')
      if(currentLang=='ur'){
        // translattion.setDefaultLang('ur');
        this.translattion.use(currentLang);
        this.clang = 'ur'
      }else if(currentLang=='sd'){
        // translattion.setDefaultLang('sd');
        this.translattion.use(currentLang);
        this.clang = 'sd'
      }
      else if(currentLang=='en'){
        // translattion.setDefaultLang('en');
        this.translattion.use(currentLang);
        this.clang = 'en'
      }else{
        // translattion.setDefaultLang('en');
        this.translattion.use('en');
        this.clang = 'en'
      }
    
  }
  // public convertLangs(lang:string){
  //   let lgs = {
  //     'en': 'English',
  //     'ur': 'Urdu',
  //     'sd': 'Sindhi'
  //   }
  //   return lgs.
  // }
  ngOnInit() {
    
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

    this.getSocialLink();
    this.changeCssFile(this.clang)
  }

  searchBasic(value:any){
    if(value.target.value.length>0){
      this.searchvalues = this.searchdataDict.filter(function (e:any){    
        return e.value.toLowerCase().indexOf(value.target.value.toLowerCase()) != -1;     
      });
    }else{
      this.searchvalues = []
    }

    // this.searchvalues = this.searchdataDict.filter(function (x:any) {
    //   return value.target.value in x.value
    // });
    // //console.log(this.searchvalues)
  }
  searchdata(type: any){    
    // //console.log('changed============================')
    // //console.log(type.target.value)
    let link = []
    link = this.searchdataDict.filter(function (x:any) {
      if(x.value == type.target.value){
        return x.name
      }else{
        return '' 
      }
    });


    if(link[0] != undefined){
      const links = link[0].name;
      this.routes.navigate([links])
    }
  }

   getSocialLink() {    
    this.getdataService.getAll('sociallinks')
    .subscribe((data:any)=>{
      this.sociallinks = data;
      // //console.log(this.speaker)
    });
  }

  
  switchLang(lang: any) {
    localStorage.setItem('currentLang',lang)
    this.translattion.use(lang);
    
    let langs = localStorage.getItem('currentLang');
    location.reload();
      // this.changeCssFile(langs);
      // location.reload();
      // let currentUrl = this.routes.url;
      // this.routes.routeReuseStrategy.shouldReuseRoute = () => true;
      // this.routes.onSameUrlNavigation = 'reload';
      // this.routes.navigate([currentUrl]);
  }

  changeCssFile(lang: any) {

    let htmlTag = this.document.getElementsByTagName("html")[0] as HTMLHtmlElement;
      htmlTag.dir = lang === "en" ? "ltr" : "rtl";
      htmlTag.lang = lang === "en" ? "en" : "ur";


    let classLeft = this.document.getElementsByClassName("text-sm-left")[0] as HTMLHtmlElement;
    let classRight = this.document.getElementsByClassName("text-sm-right")[0] as HTMLHtmlElement;
    let bodyTag = this.document.getElementsByTagName("body")[0] as HTMLBodyElement;

    if (lang == 'ur' || lang == 'sd'){
      if(lang == 'sd'){
        bodyTag.classList.remove('en')
        bodyTag.classList.remove('urdu')
        bodyTag.classList.add('sindhi')
        this.translattion.setDefaultLang(lang);
      }else if(lang == 'ur'){
        bodyTag.classList.remove('en')
        bodyTag.classList.remove('sindhi')
        bodyTag.classList.add('urdu')
        this.translattion.setDefaultLang(lang);
      }
      classLeft.classList.remove('text-sm-left')
      classLeft.classList.add('text-sm-right')
    }else{
      this.translattion.setDefaultLang(lang == 'en' ? 'en': 'ur');
      classRight.classList.remove('text-sm-right')
      classRight.classList.add('text-sm-left')
      bodyTag.classList.remove('urdu')
      bodyTag.classList.remove('sindhi')
      bodyTag.classList.add('en')
    }
    // //console.log(lang)
    let headTag = this.document.getElementsByTagName("head")[0] as HTMLHeadElement;
    let existingLink = this.document.getElementById("langCss") as HTMLLinkElement;
    let bundleName = lang == "en" ? "./assets/css/style-ltr.css":"./assets/css/style-rtl.css";
    // //console.log(bundleName)
    if (existingLink) {
       existingLink.href = bundleName;
    } 
    else {
       let newLink = this.document.createElement("link");
       newLink.rel = "stylesheet";
       newLink.type = "text/css";
       newLink.id = "langCss";
       newLink.href = bundleName;
       headTag.appendChild(newLink);
    }
    }
    
}
