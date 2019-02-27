import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header-layout',
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.css']
})
export class HeaderLayoutComponent implements OnInit {
  isHeaderShown = true;

  constructor(private router: Router, private route: ActivatedRoute, private renderer: Renderer2) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('Event ');
        console.log(event);
        this.isHeaderShown = true;
        renderer.removeClass(document.body, 'hide-header');
        if (route.snapshot.firstChild && route.snapshot.firstChild.children[0].data[0]
          && typeof route.snapshot.firstChild.children[0].data[0].hideHeader !== 'undefined') {
          // console.log('isHeaderShown');
          // console.log(route.snapshot.firstChild.children[0].data[0].hideHeader);
          this.isHeaderShown = !route.snapshot.firstChild.children[0].data[0].hideHeader;
          if (this.isHeaderShown === false) {
            renderer.addClass(document.body, 'hide-header');
          }
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
