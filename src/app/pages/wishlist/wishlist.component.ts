import { CommonModule } from '@angular/common';
import { Component, inject} from '@angular/core';
import { ProductModalService } from '../../component/products/product-modal/product-modal.service';
import { Product } from '../../interfaces/product.interfaces';
import { BestProduct, FlashProduct, JustForYouProducts, OurProduct } from '../../data/product.data';
import { ProductModalComponent } from '../../component/products/product-modal/product-modal.component';

@Component({
  selector: 'app-wishlist',
  imports: [  CommonModule, ProductModalComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export default class WishlistComponent {
  productModalSerice = inject(ProductModalService);
  allProducts: Product[] = [];
  favoriteProducts:  Product[] = [];
  justForYouProducts: Product[] = JustForYouProducts;

  ngOnInit() {
    let favoriteProductsId: number[] = JSON.parse(localStorage.getItem("favorite-products") || "");
     
    this.allProducts = this.allProducts.concat(FlashProduct,BestProduct,OurProduct);
    
    this.favoriteProducts = this.allProducts.filter(product => favoriteProductsId.includes(product.id));  
  }

  removeFavoriteProduct(productId: number){
    let favoriteProductsId: number[] = JSON.parse(localStorage.getItem("favorite-products") || "");
    favoriteProductsId = favoriteProductsId.filter(id => id!=productId);
    localStorage.setItem("favorite-products", JSON.stringify(favoriteProductsId));
    this.favoriteProducts = this.favoriteProducts.filter(product => product.id!==productId)
  }

  viewModal(product:Product){
    this.productModalSerice.open(product);
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