import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor(
    private router: Router
  ) { 
    // 참고자료 : 
    // Angular2 Routing with Hashtag to page anchor
    // https://stackoverflow.com/a/36101788
    router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          const element = document.querySelector("#" + tree.fragment);
          if (element) { element.scrollIntoView({block: "start", behavior: "smooth"}); }
        }
      }
    });    
  }

  ngOnInit() {
  }

  showIt(elID) {
    const element = document.getElementById(elID);
    if (element) { element.scrollIntoView({block: "start", behavior: "smooth"}); }
  }

}
