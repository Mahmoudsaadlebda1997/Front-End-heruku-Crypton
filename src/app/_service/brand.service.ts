import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brand } from '../_models/brand';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  public search = new BehaviorSubject<string>("");


  constructor(private http: HttpClient) { }
  getBrandData(){
    return this.http.get('https://cryptonecommerce.herokuapp.com/api/brands')
  }
  addData(data:Brand){
    return this.http.post('https://cryptonecommerce.herokuapp.com/api/brands',data);
  }
  deleteData(id:any){
    return this.http.delete('https://cryptonecommerce.herokuapp.com/api/brands/'+id);
  }

  getProducts(id : any){
    return this.http.get('https://cryptonecommerce.herokuapp.com/api/brands/'+id);
  }
  
  getBrandById(id:any){
    return this.http.get('https://cryptonecommerce.herokuapp.com/api/brands/'+id);
  }

}




