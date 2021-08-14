import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  nowDate: Date = new Date()

  constructor(private authService:AuthService,private router:Router,private toastrService : ToastrService) { }

  ngOnInit(): void {
  }

  isSigned() : boolean{
    return this.authService.isAuthenticated();
  }
  logOut(){
    this.router.navigate(["cars"])
    this.toastrService.warning("Çıkış Yapıldı...")
    localStorage.removeItem("token")
  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
