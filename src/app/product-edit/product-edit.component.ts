import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService  } from '../service/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  angForm: FormGroup;
  product: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private ps: ProductsService, private fb: FormBuilder) {
      this.createForm();
 }

  createForm() {
    this.angForm = this.fb.group({
      ProductName: ['', Validators.required ],
      ProductDescription: ['', Validators.required ],
      ProductCategory: ['', Validators.required ]
    });
  }

  updateProduct(ProductName, ProductDescription, ProductCategory) {
    this.route.params.subscribe(params => {
      this.ps.updateProduct(ProductName, ProductDescription, ProductCategory, params.id);
    });

  }
  ngOnInit() {
    this.route.params.subscribe(params => {
        this.ps.editProduct(params['id']).subscribe(res => {
          this.product = res;
      });
    });
  }
}