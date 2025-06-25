import { Component } from '@angular/core';
import { Product } from '../../../interfaces/product.interfaces';
import { FlashProduct, BestProduct, OurProduct } from '../../../data/product.data';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export default class CartComponent {
  cartProducts: {product: Product, quantity: number}[] = [];
  allProducts: Product[] = [];


  ngOnInit() {
    let cartProductsId: number[] = [];
  
    const stored = localStorage.getItem("cart-products");
  
    if (stored) {
      try {
        cartProductsId = JSON.parse(stored);
      } catch (e) {
        console.error("❌ Ошибка при разборе cart-products из localStorage:", e);
        cartProductsId = []; 
      }
    } else {
      cartProductsId = [];
    }
  
    this.allProducts = [...FlashProduct, ...BestProduct, ...OurProduct];
  
    const products = this.allProducts.filter(product =>
      cartProductsId.includes(product.id)
    );
  
    this.cartProducts = products.map(product => ({
      product,
      quantity: 1
    }));
  }

  quantityIncrement(productId:  number){
    this.cartProducts.filter(cartProduct=> cartProduct.product.id===productId && cartProduct.quantity<99).map(item=>item.quantity++);
  }
  quantityDiscrement(productId:  number){
    this.cartProducts.filter(cartProduct=> cartProduct.product.id===productId && cartProduct.quantity>1).map(item=>item.quantity--);
  }
  
  onInputQuantity(event: Event, productId:number){
    let changeQuantity = event.currentTarget as HTMLInputElement;

    changeQuantity.value = changeQuantity.value.substring(0.2);
    console.log(productId);
    
    this.cartProducts.filter(cartProduct=> cartProduct.product.id===productId && cartProduct.quantity+1>1).map(item=>item.quantity = Number.parseInt(changeQuantity.value)||1);
    console.log(this.cartProducts);
  }


  removeCartProducts(productId:number){
    let cartProductsId: number[] = JSON.parse(localStorage.getItem("cart-products") || "");
    cartProductsId = cartProductsId.filter(id => id!=productId);
    localStorage.setItem("cart-products", JSON.stringify(cartProductsId));
    this.cartProducts = this.cartProducts.filter(cartProduct => cartProduct.product.id!==productId)
  }
  

  getTotal(){
    let total = 0;
    this.cartProducts.forEach(item => {
      total += item.product.currentPrice * item.quantity;
    })
    return total;
  }

  onSubmit(){
    let orderProducts = [...this.cartProducts];
    localStorage.setItem("order-products", 
      JSON.stringify(orderProducts))
  }

 }