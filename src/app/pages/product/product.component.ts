import { Component, inject } from '@angular/core';
import { JustForYouProducts, FlashProduct, BestProduct, OurProduct } from '../../data/product.data';
import { Product } from '../../interfaces/product.interfaces';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule,],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
  export default class ProductComponent {
    allProducts: Product[] = [];
    product!:  Product;
    justForYouProducts: Product[] = JustForYouProducts;
    activateRoute: ActivatedRoute = inject(ActivatedRoute);
    
    
    ngOnInit() {
      let productId = this.activateRoute.snapshot.paramMap.get("id");
      
      this.allProducts = this.allProducts.concat(FlashProduct,BestProduct,OurProduct);
      
      this.product = this.allProducts.filter(product => product.id === Number.parseInt(productId || ""))[0];  
    }

  }
