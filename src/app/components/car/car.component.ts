import { Car } from './../../models/car';
import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: Car[] = []
  dataLoadedForCar = false
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getCarsByDetailDto();
  }

  getCarsByDetailDto() {
    console.log("api request Başladı")
    this.carService.getCarsByDetailsDto().subscribe(response => {
      this.cars = response.data;
      this.dataLoadedForCar = true
    })
    console.log("Method Bitti2");
  }
}
