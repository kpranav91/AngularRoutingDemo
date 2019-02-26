import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularRoutingDemo';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    // router.events.subscribe(r => {
    //   console.log("CHanges " );
    //   console.log(r);
    // });
    /* activatedRoute.url.subscribe(r=>{
      console.log("CHecking for data ");
      activatedRoute.data.subscribe(d=>{
        console.log('data ; ');
        console.log(d);
      });
    }) */
  }
}
