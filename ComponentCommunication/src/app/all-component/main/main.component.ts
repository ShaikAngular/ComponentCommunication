import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private apiService: ApiService) { 
   // this.apiService.passSiteSubject.subscribe(data=>console.log('data-->', data))
  }

  ngOnInit(): void {
   
  }

}
