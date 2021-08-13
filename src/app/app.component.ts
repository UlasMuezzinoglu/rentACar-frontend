import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rentACar-frontend';

  constructor() { }

  ngOnInit(): void {
    window.console.log.apply(console, ["\n %c Made with love \u2665 And Coffee - By Ulaş Müezzinoğlu \n",
    "color: #000; background: #fd0; padding:5px 0;"])
  }



}

