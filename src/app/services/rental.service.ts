import { Rental } from './../models/rental';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44341/api/Rentals/getrentaldetails"


  constructor(private httpClient:HttpClient) { }
  getRentals(): Observable<ListResponseModel<Rental>> {
    return this.httpClient
    .get<ListResponseModel<Rental>>(this.apiUrl);
  }
}
