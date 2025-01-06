import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  API_URL: string = "/api/menus";

  constructor(private http: HttpClient) { }

  getMenus(){
    return this.http.get<any[]>(this.API_URL)
  }

  getMenu(menuId: number){
    return this.http.get<any>(`${this.API_URL}/${menuId}`)
  }

}
