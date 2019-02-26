import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header-layout',
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.css']
})
export class HeaderLayoutComponent implements OnInit {
  isShowLoader = true;

  constructor(private router: Router, private route: ActivatedRoute) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('Event ');
        console.log(event);
        this.isShowLoader = true;
        if (route.snapshot.firstChild && route.snapshot.firstChild.children[0].data[0]
          && typeof route.snapshot.firstChild.children[0].data[0].hideHeader !== 'undefined') {
          console.log('IsHideloader');
          console.log(route.snapshot.firstChild.children[0].data[0].hideHeader);
          this.isShowLoader = route.snapshot.firstChild.children[0].data[0].hideHeader;
        }
      }
    });
    /* .filter(event => (event instanceof NavigationEnd))
        .subscribe((routeData: any) => {
            if(routeData.urlAfterRedirects === '/') {
                this.showAfterLogin = true;
            }
        }); */
    /* route.url.subscribe(() => {
      this.isShowLoader = true;
      if (route.firstChild) {
        route.firstChild.url.subscribe(() => {
          this.isShowLoader = true;
          console.log('Printing Snapshots : ');
          console.log(route.snapshot);
          // for(var i=0;i<route.snapshot.)
          if (route.snapshot.firstChild.children[0].data[0]
            && typeof route.snapshot.firstChild.children[0].data[0].hideHeader !== 'undefined') {
            this.isShowLoader = route.snapshot.firstChild.children[0].data[0].hideHeader;
          }
        });
      }
    }); */
    /*  route.firstChild.url.subscribe(() => {
       this.isShowLoader = true;
       console.log('Printing Snapshots : ');
       console.log(route.snapshot);
      // for(var i=0;i<route.snapshot.)
       if (route.snapshot.firstChild.children[0].data[0]
         && typeof route.snapshot.firstChild.children[0].data[0].hideHeader !== 'undefined') {
         this.isShowLoader = route.snapshot.firstChild.children[0].data[0].hideHeader;
       }
     }); */
  }

  ngOnInit() {
  }

}
