import { ToastrService } from 'ngx-toastr';
import { CartService } from './../../services/cart.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  basePath = "https://localhost:44341";
  cars: Car[];
  carImages: CarImage[];
  currentImage:CarImage;
  data:any;


  //
  datePickerForm:FormGroup;

  brandNameForTitle :string


  nowDate:Date = new Date()
  newDate = new Date();
  

  constructor(private carDetailService:CarDetailService,
    private activatedRoute:ActivatedRoute,
    private titleService:Title,
    private cartService:CartService,
    private toastrService:ToastrService,
    private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.getCarDetail(params["carId"]);
        this.getCarImage(params["carId"]);
        this.testMetot(params["carId"]);
        this.createDatePickerForm();
        this.nowDate.setDate(this.nowDate.getDate()+1)
        
      
       // console.log(this.nowDate.getMonth().toString())
       

        
      

        
      }
    })
  }

  testMetot(carId:number){
    this.carDetailService.getCarImageByCarId(carId).subscribe(response=>{
      this.data = response.data
    })
  }
  

  getCarImage(carId:number){
    this.carDetailService.getCarImageByCarId(carId).subscribe(response=>{
      this.carImages = response.data
    })
  }
  getCarDetail(carId: number) {
    this.carDetailService.getCarDetail(carId).subscribe(response=>{
      this.cars = response.data
      this.cars.forEach(car => {
        
        //this.newDate = new Date(car.returnDate); //let birthday = new Date('December 17, 1995 03:24:00')
        //console.log(this.newDate)
        car.returnDate = new Date(car.returnDate)
        this.brandNameForTitle = car.brandName
      });
      this.titleService.setTitle("Araç Detayları"+" | "+this.brandNameForTitle);
    })
  }

  getActivePhoto(index: number) {
    if (index == 0) {
      return "carousel-item active"
    }
    return "carousel-item"
  }

  getPath() {
    return this.basePath;
  }

  getButtonClass(image:CarImage){
    if (image=this.carImages[0]) {
      return "active";
    }
    else{
      return "";
    }
  }

  getCurrentImageClass(image:CarImage){
    if(this.carImages[0]==image){
      return "carousel-item active";
    } else {
      return "carousel-item ";
    }
  }
  
  setCurrentImageClass(image:CarImage){
    this.currentImage = image;
    
  }

  addToCart(car:Car){
    
    
    car.returnDate = this.datePickerForm.value.returnDate;

    this.cartService.addToCart(car);
    //console.log("sepete eklendi",car.description)
    
    this.toastrService.success("Sepete Eklendii",car.brandName)
  
  }


  createDatePickerForm(){
    
    this.datePickerForm = this.formbuilder.group({
      returnDate: ["2021-12-30",Validators.required] //yyyy mm dd
    })
  }

  


}
