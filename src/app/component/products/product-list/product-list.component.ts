import { Component, inject, Input } from '@angular/core';
import { Product } from '../../../interfaces/product.interfaces';
import { CommonModule } from '@angular/common';
import { ProductModalService } from '../product-modal/product-modal.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  productModalSerice = inject(ProductModalService);
  selectedColor = ''

  ngOnInit() {
    let favoriteProducts: number [] = JSON.parse(localStorage.getItem("favorite-products") || "[]");
    let CardProducts: number [] = JSON.parse(localStorage.getItem("Card-products") || "[]");


    this.products.filter(item=>favoriteProducts.includes(item.id)).map(item=>item.isFavorite = true)
    this.products.filter(item=>CardProducts.includes(item.id)).map(item=>item.isAddToCard = true)
  }


  setFavorite(productId: number){
    let favoriteProducts: number [] = JSON.parse(localStorage.getItem("favorite-products") || "[]");
    this.products.filter(item=> item.id==productId).map(item=> {
      item.isFavorite=!item.isFavorite;
      if(item.isFavorite) favoriteProducts.push(productId);
      else favoriteProducts = favoriteProducts.filter(item => item!= productId);
    })

    localStorage.setItem("favorite-products", JSON.stringify(favoriteProducts));
  }
  setCard(productId: number){
    let CardProducts: number [] = JSON.parse(localStorage.getItem("Card-products") || "[]");
    this.products.filter(item=> item.id==productId).map(item=> {
      item.isAddToCard=!item.isAddToCard;
      if(item.isAddToCard) CardProducts.push(productId);
      else CardProducts = CardProducts.filter(item => item!= productId);
    })

    localStorage.setItem("Card-products", JSON.stringify(CardProducts));
  }

  viewModal(product:Product){
    this.productModalSerice.open(product);
    console.log();
  }

  addToCart(productId: number) {
    let stored = localStorage.getItem("cart-products");
    let cartIds: number[] = [];
  
    if (stored) {
      try {
        cartIds = JSON.parse(stored);
      } catch (e) {
        cartIds = [];
      }
    }
  
    if (!cartIds.includes(productId)) {
      cartIds.push(productId);
      localStorage.setItem("cart-products", JSON.stringify(cartIds));
    }
  }
}
