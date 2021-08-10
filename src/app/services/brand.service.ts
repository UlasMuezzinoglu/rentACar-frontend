import { Brand } from './../models/brand';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = "https://localhost:44341/api/"
  constructor(private httpClient:HttpClient) { }

  getBrands(): Observable<ListResponseModel<Brand>> {
    return this.httpClient
    .get<ListResponseModel<Brand>>(this.apiUrl+"Brands/getall");
  }
  add(brand:Brand) :Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Brands/add",brand)
  }
  delete(brand:Brand) :Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Brands/deletebrand",brand)
  }
}
