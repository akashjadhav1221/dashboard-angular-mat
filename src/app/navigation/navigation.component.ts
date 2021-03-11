import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NavService } from '../services/nav.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  selectedTab: string = '';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private navService: NavService) {}

    ngOnInit(){
      this.navService.tab.subscribe((val) => {
        console.log('Val', val);
        this.selectedTab = val;
      } );
    }

    linkCliked(cmp: string){

      switch(cmp){
        case 'component1':
          this.navService.setComponent('component1');
          break;
        case 'component2':
          this.navService.setComponent('component2');
          break;
        case 'component3':
          this.navService.setComponent('component3');
          break;
      }

    }

}
