import { RentalService } from './../../services/rental.service';
import { Rental } from './../../models/rental';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentals: Rental[] = []
  dataLoadedForCar = false
  constructor(private rentalService: RentalService) { }

  ngOnInit(): void {
    this.getRentalsByDetailDto();
  }

  getRentalsByDetailDto() {
    console.log("api request Başladı")
    this.rentalService.getRentals().subscribe(response => {
      this.rentals = response.data;
      this.dataLoadedForCar = true
    })
    console.log("Method Bitti2");
  }

}
