import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[] = [];

  constructor(private cartService:CartService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getCart();
  }

  getCart(){
    this.cartItems = this.cartService.list();
  }
  removeFromCart(car:Car){
    this.cartService.removeFromCart(car);
    //console.log(car.description+" "+"Sepetten silindi")
    this.toastrService.error(car.brandName +" "+ "Başarı ile Sepetten Silindi","Silindi ! ");
  }

  
  

}
