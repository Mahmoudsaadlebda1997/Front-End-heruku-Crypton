import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../_models/category';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public search = new BehaviorSubject<string>("");


  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get('https://cryptonecommerce.herokuapp.com/api/categories')
  }
  addData(data:Category){
    return this.http.post('https://cryptonecommerce.herokuapp.com/api/categories',data);
  }
  deleteData(id:any){
    return this.http.delete('https://cryptonecommerce.herokuapp.com/api/categories/'+id);
  }

  getProducts(id : any){
    return this.http.get('https://cryptonecommerce.herokuapp.com/api/categories/'+id);
  }


}
