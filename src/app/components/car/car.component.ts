import { Car } from './../../models/car';
import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: Car[] = []
  dataLoadedForCar = false;
  filterText: string = '';
  constructor(private carService: CarService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["brandId"]) {
        this.getCarsByBrand(params["brandId"])
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"]);
      }else{
        this.getCarsByDetailDto();
      } 
    })
  }

  getCarsByDetailDto() {
    console.log("api request Başladı")
    this.carService.getCarsByDetailsDto().subscribe(response => {
      this.cars = response.data;
      this.dataLoadedForCar = true
    })
    console.log("Method Bitti2");
  }

  getCarsByBrand(brandId:number) {
    console.log("api request Başladı")
    this.carService.getCarsByBrand(brandId).subscribe(response => {
      this.cars = response.data;
      this.dataLoadedForCar = true
    })
    console.log("Method Bitti");
  }
  getCarsByColor(colorId:number) {
    console.log("api request Başladı")
    this.carService.getCarsByColor(colorId).subscribe(response => {
      this.cars = response.data;
      this.dataLoadedForCar = true
    })
    console.log("Method Bitti");
  }
}
