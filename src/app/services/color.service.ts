import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = "https://localhost:44341/api/"
  constructor(private httpClient:HttpClient) { }

  getColors(): Observable<ListResponseModel<Color>> {
    return this.httpClient
    .get<ListResponseModel<Color>>(this.apiUrl+"Colors/getall");
  }
  add(color:Color) :Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Colors/add",color)
  }
  update(color:Color) :Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Colors/update",color)
  }
  delete(color:Color) :Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Colors/delete",color)
  }
}
