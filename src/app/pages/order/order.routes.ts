import { Routes } from "@angular/router";

export default [
    {
        path:"cart",
        loadComponent: () => import("./cart/cart.component")
    },
    {
        path:"checkout",
        loadComponent: () => import("./checkout/checkout.component")
    }
] as Routes