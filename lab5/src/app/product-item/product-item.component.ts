import { Component, Input } from '@angular/core';

import {Product, products} from '../products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  products = products;
  // @ts-ignore
  @Input() categoryId: number;
  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  like(product: Product){
    product.like += 1;
  }
  remove(product: any) : void{
    const index: number = this.products.indexOf(product);
    if(index != -1){
      this.products.splice(index, 1);
    }
  }
}
