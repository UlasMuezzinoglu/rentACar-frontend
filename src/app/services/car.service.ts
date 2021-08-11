import { Car } from './../models/car';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';

var headers = new Headers();
headers.append("Authorization", "Bearer "+localStorage.getItem("token"));
@Injectable({
  providedIn: 'root'
})

export class CarService {

  apiUrl = "https://localhost:44341/api/"
  constructor(private httpClient:HttpClient) { }

  getCarsByDetailsDto(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl +"Cars/getcardetailsbydto"
    return this.httpClient
    .get<ListResponseModel<Car>>(newPath);
  }
  getCarsByBrand(brandId:number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "Cars/getbybrandid?id="+brandId;
    return this.httpClient
    .get<ListResponseModel<Car>>(newPath);
  }
  getCarsByColor(colorId:number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "Cars/getbycolorid?id="+colorId;
    return this.httpClient
    .get<ListResponseModel<Car>>(newPath);
  }
  getCarsByBrandIdAndColorId(brandId:number,colorId:number) : Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "Cars/getbycoloridandbrandid?colorId="+colorId+"&brandId="+brandId 
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  

  add(car:Car) :Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Cars/add",car)

    //return this.httpClient.post<ResponseModel>(this.apiUrl+"Cars/add",car,{headers: {"Authorization": "Bearer "+localStorage.getItem("token")}})
  }
}
