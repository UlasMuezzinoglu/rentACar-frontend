import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../services/auth.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  nowDate: Date = new Date()

  temp:number

  constructor(private formBuilder: FormBuilder,
    private title:Title,
    private authService:AuthService,
    private toastrService:ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.title.setTitle("Giriş Ekranı")
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ["",Validators.required],
      password: ["",Validators.required]
    })
  }
  login(){
    if (this.loginForm.valid) {
      console.log(this.loginForm.value)

      let loginModel = Object.assign({},this.loginForm.value)

      this.authService.login(loginModel).subscribe(response =>{
        this.toastrService.success("Anasayfaya Yönlendiriliyorsunuz","Giriş Başarılı !")
        console.log(response)
        localStorage.setItem("token",response.data.token)
        localStorage.setItem("firstName",response.data.firstName)
        localStorage.setItem("lastName",response.data.lastName)
        //localStorage.setItem('userId', response.data.userId.toString())
        this.authService.userId = response.data.userId
        this.temp = response.data.userId
        this.router.navigate(["cars"])
      },responseError =>{
        this.toastrService.error(responseError.error)
      })
    }
  }
  


}
