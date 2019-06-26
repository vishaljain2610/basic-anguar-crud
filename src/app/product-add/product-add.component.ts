import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ProductsService  } from '../service/products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder,private ps : ProductsService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      ProductName: ['', Validators.required ],
      ProductDescription: ['', Validators.required ],
      ProductCategory: ['', Validators.required ]
      // ProductImage : ['',Validators.required]
    });
  }

  addProduct(ProductName, ProductDescription, ProductCategory) {
    this.ps.addProduct(ProductName, ProductDescription, ProductCategory);
  }

  ngOnInit() {
  }

}
