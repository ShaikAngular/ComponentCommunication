import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 title = "Header";
// @Input() sites:any;
 selectedValue:any;
 sitesArray:any;
 sitesArray$:Observable<any>;
 sa = []
  constructor(private apiService: ApiService) {
   
     }

  ngOnInit(): void {
   // this.apiService.sitesListSubject.subscribe(sites=> console.log('sites', sites))
   // console.log('sites', this.sites);
   this.sitesArray = localStorage.getItem('sitesList')
   this.sitesArray = JSON.parse(this.sitesArray)
   console.log('sites array', this.sitesArray)
  }
  
  selectedSite(e:any){
      console.log('e',e.target.value)
      this.apiService.passSite(e.target.value);
    }

}
