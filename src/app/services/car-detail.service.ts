import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl:string="https://localhost:44341/api/";

  constructor(private httpClient:HttpClient) { }

  getCarImageByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + "CarImages/getbycarid?carId="+carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getCarDetail(carId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "Cars/getcardetailsdtobycarid?id=" + carId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}

