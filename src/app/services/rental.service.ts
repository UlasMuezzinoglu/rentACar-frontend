import { Rental } from './../models/rental';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44341/api/"


  constructor(private httpClient:HttpClient) { }
  getRentals(): Observable<ListResponseModel<Rental>> {
    return this.httpClient
    .get<ListResponseModel<Rental>>(this.apiUrl+"Rentals/getrentaldetails");
  }
  add(rental:any) :Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Rentals/add",rental)
  }
  addMultiple(rentals:any[]) :Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Rentals/addmultiple",rentals)
  }
}
