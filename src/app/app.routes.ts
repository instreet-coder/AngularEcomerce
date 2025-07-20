import { Route, Routes } from "@angular/router";
import { LayoutsComponent } from "./layout/layouts/layouts.component";

export const routes: Routes = [
    {
        path:"",
        pathMatch:"full",
        redirectTo:"home",
    },
    {
        path:"",
        component: LayoutsComponent,
        children: [
            {
                path:"home", loadChildren: () => import("./pages/home/home.routes")
            },
            {
                path:"auth", loadChildren: () => import("./pages/auth/auth.routes")
            },
            {
                path:"wishlist", loadComponent: () => import("./pages/wishlist/wishlist.component")
            },
            {
                path:"order", loadChildren: () => import("./pages/order/order.routes")
            },
            {
                path:"account", loadComponent: () => import("./pages/account/account.component")
            },
            {
                path:"about", loadComponent: () => import("./pages/about/about.component")
            },
            {
                path:"contact", loadComponent: () => import("./pages/contact/contact.component")
            },
        ]
    }
];