import { Component, inject } from '@angular/core';
import { ProductModalService } from './product-modal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-modal',
  imports: [CommonModule],
  templateUrl: './product-modal.component.html',
  styleUrl: './product-modal.component.scss'
})
export class ProductModalComponent {
  productModalService = inject(ProductModalService);
  productModal$ = this.productModalService.productModal$;


  closeModal() {
    this.productModalService.close();
  }
}
