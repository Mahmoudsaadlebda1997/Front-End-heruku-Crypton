import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order, orderInterface } from '../_models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  getOrders(){

    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })

    return this.httpClient.get('https://cryptonecommerce.herokuapp.com/api/orders',{ headers: header });

  }

  createOrder(data:orderInterface) {

    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })

    return this.httpClient.post('https://cryptonecommerce.herokuapp.com/api/orders', data, { headers: header });

  }

  updateOrder(id : number, data : any){

    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })

    return this.httpClient.put('https://cryptonecommerce.herokuapp.com/api/orders/'+id, data, { headers: header });

  }

  getOrder(id: number) {

    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })

    return this.httpClient.get('https://cryptonecommerce.herokuapp.com/api/order/'+id, { headers: header });

  }
  deleteOrder(id: number) {

    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })

    return this.httpClient.delete('https://cryptonecommerce.herokuapp.com/api/orders/'+id, { headers: header });

  }


  searchOrders(data: any) {

    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })

    return this.httpClient.post('https://cryptonecommerce.herokuapp.com/api/orders/search', data), ({ headers: header });

  }
}
