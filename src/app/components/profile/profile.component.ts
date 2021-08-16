import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm:FormGroup
  id:number

  constructor(
              private formBuilder:FormBuilder,
              private toastrService:ToastrService,
              private userService:UserService,
              private authService:AuthService,
              private router:Router,
              private title:Title
              ) { }
  user :User

  ngOnInit(): void {
    this.title.setTitle("Profil")
    this.id = this.authService.userId
    this.createProfileAddForm()
    this.getUser();
    
  }
  createProfileAddForm(){
    this.profileForm=this.formBuilder.group({
      id:this.authService.userId,
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required],
      status:true

    })
  }

  
  getUser(){
    if(this.id){
      this.userService.getById(this.id).subscribe(response=>{
        this.user = response.data
        this.profileForm.controls['firstName'].setValue(this.user.firstName)
        this.profileForm.controls['lastName'].setValue(this.user.lastName)
        this.profileForm.controls['email'].setValue(this.user.email)
        

      },responseError=>{
        this.toastrService.error(responseError.error)
      })
    }
    
  }
  updateProfile(){
    if(this.profileForm.valid){
      let profileModel = Object.assign({},this.profileForm.value)
      this.userService.profileUpdate(profileModel).subscribe(response=>{
        this.toastrService.success(response.message);
        localStorage.clear()
        this.router.navigate(["login"])
        this.toastrService.info("Onaylanması İçin Hesabınıza Tekrardan Giriş Yapınız.")
      },responseError=>{
       this.toastrService.error(responseError.error);
      });
    }else{
      this.toastrService.error("Formu Boş Bıraktınız")
    }
  }

}
