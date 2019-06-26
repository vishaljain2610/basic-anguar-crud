import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  uri = 'http://localhost:4000/products';

  constructor(private http : HttpClient,private router : Router) { }
  addProduct(ProductName,ProductDescription,ProductCategory){
    const request = {
      ProductCategory,
      ProductDescription,
      ProductName
    };
    console.log(request);
    this.http.post(`${this.uri}/add`, request).subscribe(res => console.log('Done'));

  }
  getProducts(){
    return this.http.get(`${this.uri}`);
  }

  editProduct(id) {
    return this.http.get(`${this.uri}/edit/${id}`);
  }

  updateProduct(ProductName, ProductDescription, ProductCategory, id) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductCategory
    };
    this.http.post(`${this.uri}/update/${id}`, obj).subscribe(res => this.router.navigate(['products']));

  }

  deleteProduct(id){
    return this.http.get(`${this.uri}/delete/${id}`);
  }
}
