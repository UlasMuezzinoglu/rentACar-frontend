import { Title } from '@angular/platform-browser';
import { CartItem } from './../../models/cartItem';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[] = [];

  nowDate = new Date();
  kacGunluk:number
  newDatee : Date
  totalPrice : number = 0
  constructor(private cartService:CartService, private toastrService:ToastrService, private titleService:Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Sepet")
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

  kacGunlukHesapla(item:CartItem){
    this.newDatee = new Date(item.car.returnDate)

    var zamanFark = Math.abs(this.newDatee.getTime() - this.nowDate.getTime());

    var gunFark = Math.ceil(zamanFark / (1000 * 3600 * 24));

    return gunFark-1

  }

  calculateTotalPrice(){
    let totalPrice = 0
   this.cartItems.forEach(element => {
    totalPrice =  (this.kacGunlukHesapla(element) * element.car.dailyPrice) + totalPrice
   });
   return totalPrice
  }
  
  

}
