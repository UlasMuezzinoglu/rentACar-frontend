import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrandService } from './../../services/brand.service';
import { ColorService } from './../../services/color.service';
import { Brand } from './../../models/brand';
import { Car } from 'src/app/models/car';
import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: Car[] = []
  dataLoadedForCar = false;
  filterText: string = '';
  carImageBasePath = 'https://localhost:44341'
  newDate:Date;
  nowDate:Date = new Date()
  
  constructor(private carService: CarService,
    private activatedRoute:ActivatedRoute,
    private cartService:CartService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    console.log("Made by Coffee And <3")
    this.activatedRoute.params.subscribe(params => {

      if (params['brandId'] && params['colorId']) {
        this.getCarsByBrandIdAndColorId(params['brandId'], params['colorId']);
      }

      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"]);
      }

      else if (params["brandId"]) {
        this.getCarsByBrand(params["brandId"])
      }
      else{
        this.getCarsByDetailDto();
        //this.nowDate;
      } 
    })
  }

  getCarsByDetailDto() {
    this.carService.getCarsByDetailsDto().subscribe(response => {
      this.cars = response.data;

      
      this.cars.forEach(car => {
        
        //this.newDate = new Date(car.returnDate); //let birthday = new Date('December 17, 1995 03:24:00')
        //console.log(this.newDate)
        car.returnDate = new Date(car.returnDate)
      });
      
      this.dataLoadedForCar = true
    })
  }






  getCarsByBrand(brandId:number) {
    this.carService.getCarsByBrand(brandId).subscribe(response => {
      this.cars = response.data;
      this.dataLoadedForCar = true
    })
  }
  getCarsByColor(colorId:number) {
    this.carService.getCarsByColor(colorId).subscribe(response => {
      this.cars = response.data;
      this.dataLoadedForCar = true
    })
  }
  getCarImage(car:Car){
    if (car.imagePath) {
      return car.imagePath;
    } else {
      return '/images/default.png';
    }
  }

  getCarsByBrandIdAndColorId(brandId: number, colorId: number) {
    this.carService
      .getCarsByBrandIdAndColorId(brandId, colorId)
      .subscribe((response) => {
        this.cars = response.data;
      });
  }

  addToCart(car:Car){
    
    this.cartService.addToCart(car);
    //console.log("sepete eklendi",car.description)
    
    this.toastrService.success("Sepete Eklendi",car.brandName)
  
  }
  


}
