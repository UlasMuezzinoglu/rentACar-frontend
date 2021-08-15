import { AuthService } from 'src/app/services/auth.service';
import { LoginComponent } from './../login/login.component';
import { RentalService } from './../../services/rental.service';
import { Rental } from './../../models/rental';
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
  kacGunluk: number
  newDatee: Date
  totalPrice: number = 0
  constructor(private cartService: CartService,
    private toastrService: ToastrService,
    private titleService: Title,
    private RentalService: RentalService,
    private authService:AuthService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Sepet")
    this.getCart();

  }

  getCart() {
    this.cartItems = this.cartService.list();
  }
  removeFromCart(car: Car) {
    this.cartService.removeFromCart(car);
    //console.log(car.description+" "+"Sepetten silindi")
    this.toastrService.error(car.brandName + " " + "Başarı ile Sepetten Silindi", "Silindi ! ");
  }

  kacGunlukHesapla(item: CartItem) {
    this.newDatee = new Date(item.car.returnDate)

    var zamanFark = Math.abs(this.newDatee.getTime() - this.nowDate.getTime());

    var gunFark = Math.ceil(zamanFark / (1000 * 3600 * 24));

    return gunFark - 1

  }

  calculateTotalPrice() {
    let totalPrice = 0
    this.cartItems.forEach(element => {
      totalPrice = (this.kacGunlukHesapla(element) * element.car.dailyPrice) + totalPrice
    });
    return totalPrice
  }

  // addRental(items:CartItem){
  //   let rentModel = {"carId": items.car.id,"userId":parseInt(localStorage.getItem("userId")),"rentDate":"2021-08-14","returnDate":items.car.returnDate}
  //   //let rentModel = {"carId": 3,"userId":1,"rentDate":"2021-08-14","returnDate":"2029-08-15"}
  //   this.RentalService.add(rentModel).subscribe(response =>{
  //     this.toastrService.success(response.message)
  //   },responseError => {
  //     if (responseError.error.Errors.length >0) {
  //       for (let i = 0; i < responseError.error.Errors.length; i++) {
  //         this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası")
  //       } 
  //     }  
  //   })
  // }

  addRentals(items: CartItem[]) {

    let rentModell: any[] = []

    items.forEach(element => {
      rentModell.push({ "carId": element.car.id, "userId": this.authService.userId, "rentDate": "2021-08-14", "returnDate": element.car.returnDate })
    });

    this.RentalService.addMultiple(rentModell).subscribe(response => {
      this.toastrService.success("Kiralama İşlemi Başarılı ", "TEBRİKLER !")
      this.clearCart();
    }, responseErrors => {
      this.toastrService.error(responseErrors.error.message)
    })

    


  }


  clearCart() {
    this.cartItems.splice(0, this.cartItems.length)
  }


}
