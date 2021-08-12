import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  currentClass:string = ''

  flagForAnasayfa:boolean = false
  flagForKiralamalar:boolean = false
  


  constructor(private authService:AuthService,private router:Router,private toastrService : ToastrService) { }

  ngOnInit(): void {
    
  }
  
  isSigned() : boolean{
    return this.authService.isAuthenticated();
  }
  isNotSigned() : boolean{
    return this.authService.isAuthenticated();
  }


  logOut(){
    this.router.navigate(["cars"])
    this.toastrService.warning("Çıkış Yapıldı...")
    localStorage.removeItem("token")
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
