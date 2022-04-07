import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) { }

  addData(product_id:any,user_id:any){
    return this.http.post('https://cryptonecommerce.herokuapp.com/api/userproducts',{product_id,user_id});
  }

  removeData(product_id:any,user_id:any){
    return this.http.delete('https://cryptonecommerce.herokuapp.com/api/userproducts/'+product_id+'/'+user_id);
  }


getData(user_id:any){
  return this.http.get('https://cryptonecommerce.herokuapp.com/api/userproducts/'+user_id);
}



}
