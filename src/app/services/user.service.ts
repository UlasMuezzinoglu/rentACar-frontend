import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44341/api/Users/"
getById(id:number):Observable<SingleResponseModel<User>>{
  return this.httpClient.get<SingleResponseModel<User>>(this.apiUrl+"getbyid?id="+id)
}

profileUpdate(user:User):Observable<ResponseModel>{
  console.log(user)
  return this.httpClient.post<ResponseModel>(this.apiUrl + 'updateprofile', {
    user:{
      'id': user.id,
      'firstName': user.firstName,
      'lastName': user.lastName,
      'email': user.email,
      'status':user.status
    },
    password:user.password
  });
}
getUsers():Observable<ListResponseModel<User>>{
  let newPath = this.apiUrl + "getall"
  return this.httpClient.get<ListResponseModel<User>>(newPath);
}
}
