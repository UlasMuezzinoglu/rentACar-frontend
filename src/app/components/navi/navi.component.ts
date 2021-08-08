import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  currentClass:string = ''

  flagForAnasayfa:boolean = false
  flagForKiralamalar:boolean = false
  
  constructor() { }

  ngOnInit(): void {
    
  }
  menuClassAnasayfa(){
    if (this.flagForAnasayfa) {
      return "nav-link active"
    } else {
      return "nav-link"
    }
  }
  menuClassKiralamalar(){
    if (this.flagForKiralamalar) {
      return "nav-link active"
    } else {
      return "nav-link"
    }
  }

  setflagForAnasayfaMetot(){
    this.flagForAnasayfa = true
    this.flagForKiralamalar = false;
  }
  setflagForKiralamalarMetot(){
    this.flagForKiralamalar = true
    this.flagForAnasayfa = false
  }
}
