import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  selectedSite:any;
  passSiteSubject = new BehaviorSubject<string>('')

  sitesListSubject = new BehaviorSubject<any>('');
  constructor(private httpClient: HttpClient) { }

  fetchSites(){
   // console.log('selected site', this.selectedSite);
    return this.httpClient.get(`http://localhost:3000/sites`)
  }

  passSite(value:string){
    this.passSiteSubject.next(value);
  }

  siteList(value:any){
    this.sitesListSubject.next(value);
  }
}
