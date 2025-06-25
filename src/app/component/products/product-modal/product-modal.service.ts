import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Product } from "../../../interfaces/product.interfaces";

@Injectable ({
    providedIn: "root"
})

export class ProductModalService {
    private productModalSubject = new BehaviorSubject<Product | null>(null);
    productModal$ = this.productModalSubject.asObservable();
    

    open(product: Product) {
        this.productModalSubject.next(product);
    }

    close() {
        this.productModalSubject.next(null);
    }
}