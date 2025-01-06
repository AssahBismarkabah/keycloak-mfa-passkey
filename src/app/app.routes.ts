import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AdminComponent} from "./components/admin/admin.component";
import {authGuard} from "./guard/auth.guard";

export const routes: Routes = [
  { path: '', pathMatch: "full" , redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate: [authGuard] }
];
