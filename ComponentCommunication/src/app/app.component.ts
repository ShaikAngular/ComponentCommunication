import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ComponentCommunication';
  sitesList;
  constructor(private apiService:ApiService){
    this.apiService.fetchSites().subscribe(data =>{
      console.log('data', data);
      this.sitesList = data;
      this.apiService.siteList(data);
      localStorage.setItem('sitesList',JSON.stringify(this.sitesList ));
    })
  }
  ngOnInit(): void{
  
  }
}
