import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Injectable } from '@angular/core';
import { cartItems } from './../models/cartItems';
import { CartItem } from './../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  flag:boolean = false;
  constructor(private toastrService:ToastrService) { }

  addToCart(car:Car){
    let item = cartItems.find
    (c => c.car.id === car.id);
    if (item) {
        this.toastrService.warning("Bu Ürün Zaten Sepette Olduğundan Yeni Ekleme Yapılmadı", car.brandName)
        this.flag = false; 
    }else{
      let cartItem = new CartItem();
      cartItem.car = car;
      
      cartItems.push(cartItem)
    }
  }

  removeFromCart(car:Car){
    let item: CartItem = cartItems.find
    (c => c.car.id === car.id);

    
      cartItems.splice(cartItems.indexOf(item),1);
    

    
  }


  list():CartItem[]{
    return cartItems; // be careful
  }

}
