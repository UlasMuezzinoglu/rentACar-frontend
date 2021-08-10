import { ChangeDetectorRef } from '@angular/core';
import { Brand } from './../../models/brand';
import { CarService } from './../../services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { Component, OnInit, Input } from '@angular/core';
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

  //forms
  //addForms
  carAddForm:FormGroup;
  brandAddForm:FormGroup;
  colorAddForm:FormGroup;
  //end of addForms

  //deleteForms
  brandDeleteForm:FormGroup;
  //end of deleteForms

  //brandd:Brand = {"id": 11, "name" : "Bmw"}

  


  //
  brands:Brand[] = []
  //

  currentbrand : Brand
  

  

  constructor(private formbuilder:FormBuilder,
    private brandService:BrandService,
    private colorService:ColorService,
    private carService:CarService,
    private toastrService:ToastrService,
    private titleService:Title,
    private cdRef:ChangeDetectorRef) {  }
    

     

  ngOnInit(): void {
    
    this.createBrandAddForm();
    this.createColorAddForm();
    this.createCarAddForm();
    this.createBrandDeleteForm();
    

    this.titleService.setTitle("Yönetim");
    this.getBrands();
    
    
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

  createBrandDeleteForm(){
    this.brandDeleteForm = this.formbuilder.group({
      id: ["",Validators.required],
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

  getBrands(){
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data;
      
    })
  }
  customIdd(brand:Brand) {
    
    return "#a"+brand.id.toString()
  }
  customIddd(brand:Brand) {
    
    
    return "a"+brand.id.toString()
  }
  getBrandItemId(brand:Brand){
    return brand.id.toString()
  }
  markayiGetir(brand:Brand){
    this.currentbrand = brand
    this.brandDeleteForm.controls['name'].setValue(this.currentbrand.name)
    this.brandDeleteForm.controls['id'].setValue(this.currentbrand.id)
  }

  
  deleteBrand(){
    if (this.brandDeleteForm.valid) {
      let brandModel = Object.assign({},this.brandDeleteForm.value)
      this.brandService.delete(brandModel).subscribe(response => {
        this.toastrService.success(response.message,brandModel.name)
      })
    }else{
      this.toastrService.error("Formunuz Eksik","Hata !")
    }
  }

  updateBrand(){
    this.toastrService.error("Henüz Güncelleme Metotu Yazmadın Unutma Yazmayı","Unutma !")
  }








}
