import { ChangeDetectorRef } from '@angular/core';
import { Brand } from './../../models/brand';
import { CarService } from './../../services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { Component, OnInit, Input } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder ,FormControl ,Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Color } from 'src/app/models/color';
import { Car } from 'src/app/models/car';

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

  //deleteForms (also update)
  brandDeleteForm:FormGroup;
  colorDeleteForm:FormGroup;
  carDeleteForm:FormGroup;
  //end of deleteForms (also update)
  
  

  //brandd:Brand = {"id": 11, "name" : "Bmw"}

  


  //
  brands:Brand[] = []
  colors:Color[] = []
  cars:Car[] = []
  //

  //
  currentbrand : Brand
  currentcolor : Color
  currentcar : Car

  //
  

  

  constructor(private formbuilder:FormBuilder,
    private brandService:BrandService,
    private colorService:ColorService,
    private carService:CarService,
    private toastrService:ToastrService,
    private titleService:Title
    ) {  }
    

     

  ngOnInit(): void {
    this.titleService.setTitle("Yönetici Paneli");
    this.createBrandAddForm();
    this.createColorAddForm();
    this.createCarAddForm();
    this.createBrandDeleteForm();
    this.createBrandUpdateForm();
    this.createColorDeleteForm();
    this.createColorUpdateForm();
    this.createCarDeleteForm();
    this.createCarUpdateForm();

    
    this.getBrands();
    this.getColors();
    this.getCars();
    
    
  }













  // form create

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
  createBrandUpdateForm(){
    this.brandDeleteForm = this.formbuilder.group({
      id: ["",Validators.required],
      name: ["",Validators.required]
    })
    
  }

  //
  createColorDeleteForm(){
    this.colorDeleteForm = this.formbuilder.group({
      id: ["",Validators.required],
      name: ["",Validators.required]
    })
    
  }
  createColorUpdateForm(){
    this.colorDeleteForm = this.formbuilder.group({
      id: ["",Validators.required],
      name: ["",Validators.required]
    })
    
  }
  //
  createCarDeleteForm(){
    this.carDeleteForm = this.formbuilder.group({
      id: ["",Validators.required],
      brandId: ["",Validators.required],
      colorId: ["",Validators.required],
      modelYear: ["",Validators.required],
      dailyPrice: ["",Validators.required],
      description: ["",Validators.required]

    })
    
  }
  createCarUpdateForm(){
    this.carDeleteForm = this.formbuilder.group({
      id: ["",Validators.required],
      brandId: ["",Validators.required],
      colorId: ["",Validators.required],
      modelYear: ["",Validators.required],
      dailyPrice: ["",Validators.required],
      description: ["",Validators.required]
    })
    
  }
  
  // form create end





  

  
  


  // action Methods
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
  //
  updateBrand(){
    
    if (this.brandDeleteForm.valid) {
      let brandModel = Object.assign({},this.brandDeleteForm.value)
      this.brandService.update(brandModel).subscribe(response => {
        this.toastrService.success(response.message,brandModel.name)
      })
    }else{
      this.toastrService.error("Formunuz Eksik","Hata !")
    }
  }
  //
  //Color
  deleteColor(){
    if (this.colorDeleteForm.valid) {
      let colorModel = Object.assign({},this.colorDeleteForm.value)
      this.colorService.delete(colorModel).subscribe(response => {
        this.toastrService.success(response.message,colorModel.name)
      })
    }else{
      this.toastrService.error("Formunuz Eksik","Hata !")
    }
  }
  //
  updateColor(){
    
    if (this.colorDeleteForm.valid) {
      let colorModel = Object.assign({},this.colorDeleteForm.value)
      this.colorService.update(colorModel).subscribe(response => {
        this.toastrService.success(response.message,colorModel.name)
      })
    }else{
      this.toastrService.error("Formunuz Eksik","Hata !")
    }
  }
  //
  // car
  deleteCar(){
    if (this.carDeleteForm.valid) {
      let carModel = Object.assign({},this.carDeleteForm.value)
      this.carService.delete(carModel).subscribe(response => {
        this.toastrService.success(response.message,carModel.id)
      })
    }else{
      this.toastrService.error("Formunuz Eksik","Hata !")
    }
  }

  updateCar(){
    if (this.carDeleteForm.valid) {
      this.carDeleteForm.controls['brandId'].setValue(parseInt(this.carDeleteForm.controls['brandId'].value))
      this.carDeleteForm.controls['colorId'].setValue(parseInt(this.carDeleteForm.controls['colorId'].value))
      let carModel = Object.assign({},this.carDeleteForm.value)
      this.carService.update(carModel).subscribe(response => {
        this.toastrService.success(response.message,carModel.id)
      })
    }else{
      this.toastrService.error("Formunuz Eksik","Hata !")
    }
  }
  //
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
  // action Methods end

  // get methots
  getBrands(){
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data;
    })
  }
  getColors(){
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data;
    })
  }
  getCars(){
    this.carService.getCars().subscribe(response => {
      this.cars = response.data;
    })
  }
  // get methots end

  
  // Custom Methods
  //for brand
  customIddForBrand(brand:Brand) {
    return "#a"+brand.id.toString()
  }
  customIdddForBrand(brand:Brand) {
    return "a"+brand.id.toString()
  }
  //for color
  customIddForColor(color:Color) {
    return "#a"+color.id.toString()
  }
  customIdddForColor(color:Color) {
    return "a"+color.id.toString()
  }
  //for car
  customIddForCar(car:Car) {
    return "#a"+car.id.toString()
  }
  customIdddForCar(car:Car) {
    return "a"+car.id.toString()
  }


  // getBrandItemId(brand:Brand){
  //   return brand.id.toString()
  // }
  markayiGetir(brand:Brand){
    this.currentbrand = brand
    this.brandDeleteForm.controls['name'].setValue(this.currentbrand.name)
    this.brandDeleteForm.controls['id'].setValue(this.currentbrand.id)
  }
  rengiGetir(color:Color){
    this.currentcolor = color
    this.colorDeleteForm.controls['name'].setValue(this.currentcolor.name)
    this.colorDeleteForm.controls['id'].setValue(this.currentcolor.id)
  }
  //aracıGetir(car:Car){
    //this.currentcar = car
    //this.carDeleteForm.controls['id'].setValue(this.currentcar.id)
    //this.carDeleteForm.controls['brandId'].setValue(this.currentcar.brandId)
    // this.carDeleteForm.controls['colorId'].setValue(this.currentcar.colorId)
    // this.carDeleteForm.controls['modelYear'].setValue(this.currentcar.modelYear)
    // this.carDeleteForm.controls['dailyPrice'].setValue(this.currentcar.dailyPrice)
    // this.carDeleteForm.controls['description'].setValue(this.currentcar.description)
  //}

  aracGetir(car:Car){
    this.currentcar = car
    this.carDeleteForm.controls['id'].setValue(this.currentcar.id)
    this.carDeleteForm.controls['brandId'].setValue(this.currentcar.brandId)
    this.carDeleteForm.controls['colorId'].setValue(this.currentcar.colorId)
    this.carDeleteForm.controls['modelYear'].setValue(this.currentcar.modelYear)
    this.carDeleteForm.controls['dailyPrice'].setValue(this.currentcar.dailyPrice)
    this.carDeleteForm.controls['description'].setValue(this.currentcar.description)
  }
  // Custom Methods end


  ekranaYazTest(){
    this.carDeleteForm.controls['brandId'].setValue(parseInt(this.carDeleteForm.controls['brandId'].value))
    this.carDeleteForm.controls['colorId'].setValue(parseInt(this.carDeleteForm.controls['colorId'].value))
    console.log(this.carDeleteForm.value)
    
  }
 }
