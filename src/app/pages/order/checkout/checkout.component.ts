import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Product } from '../../../interfaces/product.interfaces';

@Component({
  selector: 'app-checkout',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export default class CheckoutComponent {
  userDataForm: FormGroup;
  fb: FormBuilder = inject(FormBuilder);
  isSaveInfo:boolean = true;
  orderProducts: {product: Product, quantity: number}[] = [];
  cuponPrice: number = 0;

  constructor() {
    this.userDataForm = this.fb.group({
      firstName: ["", Validators.required],
      companyName: ["", Validators.required],
      adress: ["", Validators.required],
      apartment: ["", Validators.required],
      city: ["", Validators.required],
      phoneNumber: ["", Validators.required],
      email: ["", Validators.required],
      paymentType: ["bank-card"],
      cupon: [""]
    })
  }

  ngOnInit () {
    this.orderProducts = JSON.parse(localStorage.getItem("order-products") || "");
  }

  getTotal() {
    let total = 0;
    this.orderProducts.forEach(item => {
      total += item.product.currentPrice * item.quantity;
    });
    return Math.max(0, total - this.cuponPrice);
  }  
  

  setSaveInfo(){
    this.isSaveInfo = !this.isSaveInfo

    console.log(this.userDataForm.value);
    
  }

  onSubmit(){
    console.log(this.userDataForm.value);
    console.log(this.orderProducts);
    console.log(this.isSaveInfo);
  }

  activeCupon(){
    if(this.userDataForm.get("cupon")?.value === "123"){
      this.cuponPrice = 1000;
      alert("cupon worked")
    }  if(this.userDataForm.get("cupon")?.value === "987"){
      this.cuponPrice = 5000;
      alert("cupon worked")
    }
  }
}