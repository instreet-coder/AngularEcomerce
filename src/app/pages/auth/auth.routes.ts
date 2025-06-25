import { Routes } from "@angular/router";

export default [
    {
        path:"sing-up",
        loadComponent: () => import("./sing-up/sing-up.component")
    },
    {
        path:"log-in",
        loadComponent: () => import("./log-in/log-in.component")
    },

] as Routes