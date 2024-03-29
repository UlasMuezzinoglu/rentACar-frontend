import { RegisterModel } from './../models/registerModel';
import { TokenModel } from './../models/tokenModel';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from './../models/loginModel';
import { Injectable } from '@angular/core';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  apiUrl = "https://localhost:44341/api/Auth/"

  userId :number


  constructor(private httpClient: HttpClient) { }

  login(loginModel: LoginModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "login", loginModel)
  }
  register(registerModel: RegisterModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "register", registerModel)
  }


  isAuthenticated() {
    if (localStorage.getItem("token")) {
      return true;
    }
    else {
      return false;
    }
  }
  


}
