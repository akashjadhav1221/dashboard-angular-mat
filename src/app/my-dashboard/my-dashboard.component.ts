import { Component, OnInit } from '@angular/core';
import { NavService } from '../services/nav.service';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent implements OnInit {
  selectedTab: string = '';
  constructor(public navService: NavService) {
  }

  ngOnInit(){

    this.navService.tab.subscribe(val => {
      this.selectedTab = val;
    })

  }
}
