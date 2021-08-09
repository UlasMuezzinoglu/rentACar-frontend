import { CarService } from './../../services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder ,FormControl ,Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-managementcrud',
  templateUrl: './managementcrud.component.html',
  styleUrls: ['./managementcrud.component.css']
})
export class ManagementcrudComponent implements OnInit {

  carAddForm:FormGroup;
  brandAddForm:FormGroup;
  colorAddForm:FormGroup;
  
  constructor(private formbuilder:FormBuilder,
    private brandService:BrandService,
    private colorService:ColorService,
    private carService:CarService,
    private toastrService:ToastrService,
    private titleService:Title) {  }
    

     

  ngOnInit(): void {
    this.createBrandAddForm();
    this.createColorAddForm();
    this.createCarAddForm();
    this.titleService.setTitle("Yönetim");
  }

  createCarAddForm(){
    this.carAddForm = this.formbuilder.group({
      modelYear: ["",Validators.required],
      dailyPrice: ["",Validators.required],
      description: ["",Validators.required],
      brandId:["",Validators.required],
      colorId:["",Validators.required]
    })
  }

  createBrandAddForm(){
    this.brandAddForm = this.formbuilder.group({
      name: ["",Validators.required]
    })
  }
  createColorAddForm(){
    this.colorAddForm = this.formbuilder.group({
      name: ["",Validators.required]
    })
  }

  addCar(){
    if (this.carAddForm.valid) {
      let carModel = Object.assign({},this.carAddForm.value)
      this.carService.add(carModel).subscribe(response => {
        this.toastrService.success(response.message,carModel.description)
      },responseError => {
        if (responseError.error.Errors.length >0) {
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası")
          } 
        }  
      })
    }else{
      this.toastrService.error("Formunuz Eksik","Hata !")
    }
  }


  addBrand(){
    if (this.brandAddForm.valid) {
      let brandModel = Object.assign({},this.brandAddForm.value)
      this.brandService.add(brandModel).subscribe(response => {
        this.toastrService.success(response.message,brandModel.name)
      },responseError => {
        if (responseError.error.Errors.length >0) {
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası")
          } 
        }  
      })
    }else{
      this.toastrService.error("Formunuz Eksik","Hata !")
    }
  }

  addColor(){
    if (this.colorAddForm.valid) {
      let colorModel = Object.assign({},this.colorAddForm.value)
      this.colorService.add(colorModel).subscribe(response => {
        this.toastrService.success(response.message,colorModel.name)
      },responseError => {
        if (responseError.error.Errors.length >0) {
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası")
          } 
        }  
      })
    }else{
      this.toastrService.error("Formunuz Eksik","Hata !")
    }
  }
}
