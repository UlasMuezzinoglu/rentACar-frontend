import { BrandService } from './../../services/brand.service';
import { Brand } from './../../models/brand';
import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  colors: Color[] = []
  brands: Brand[] = []
  dataLoadedForColor = false
  dataLoadedForBrand = false
  //
  currentBrand :Brand;
  currentColor :Color;
  //
  constructor(private colorService: ColorService, private brandService : BrandService) { }

  ngOnInit(): void {
    this.getColors();
    this.getBrands();
  }
  getColors() {
    console.log("api request Başladı")
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data;
      this.dataLoadedForColor = true
    })
    console.log("Method Bitti");
  }
  getBrands() {
    console.log("api request Başladı")
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data;
      this.dataLoadedForBrand = true
    })
    console.log("Method Bitti");
  }
  setCurrentBrand(brand:Brand){
    this.currentBrand = brand
  }
  setCurrentColor(color:Color){
    this.currentColor = color
  }

  getCurrentBrandClass(brand:Brand){
    if (brand == this.currentBrand) {
       return "list-group-item selected"
    }else{
      return "list-group-item"
    }
  }
  getCurrentColorClass(color:Color){
    if (color == this.currentColor) {
       return "list-group-item selected"
    }else{
      return "list-group-item"
    }
  }

}
