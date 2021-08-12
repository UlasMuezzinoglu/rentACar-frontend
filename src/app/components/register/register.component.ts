import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  nowDate: Date = new Date()

  registerForm: FormGroup;


  constructor(private formBuilder: FormBuilder,
    private title:Title,
    private authService:AuthService,
    private toastrService:ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.title.setTitle("Kayıt Ol");
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      email: ["",Validators.required],
      password: ["",Validators.required],
      firstName: ["",Validators.required],
      lastName: ["",Validators.required],
    })
  }

  register(){
    if (this.registerForm.valid) {
      console.log(this.registerForm.value)

      let registerModel = Object.assign({},this.registerForm.value)

      this.authService.register(registerModel).subscribe(response =>{
        this.toastrService.success("Giriş Sayfasına Yönlendiriliyorsunuz","Kayıt Başarılı !")
        //console.log(response)
        //localStorage.setItem("token",response.data.token)
        this.router.navigate(["login"])
      },responseError =>{
        this.toastrService.error(responseError.error)
      })
    }
  }

  

}
