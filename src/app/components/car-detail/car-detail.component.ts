import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';

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

  constructor(private carDetailService:CarDetailService,
    private activatedRoute:ActivatedRoute,
    private titleService:Title) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.getCarDetail(params["carId"]);
        this.getCarImage(params["carId"]);
        this.testMetot(params["carId"]);
        this.titleService.setTitle("Araç Detayları");
        
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


}
