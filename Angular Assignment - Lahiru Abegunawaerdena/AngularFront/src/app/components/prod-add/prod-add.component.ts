import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FlashMessage} from "angular-flash-message/dist";
import {Router} from "@angular/router";

@Component({
  selector: 'app-prod-add',
  templateUrl: './prod-add.component.html',
  styleUrls: ['./prod-add.component.css']
})
export class ProdAddComponent implements OnInit {

  product = {
    item_type: '',
    brand_name: '',
    color: '',
    qty: '',
    price: ''
  };

  constructor(
    private auth: AuthService,
    private flashMessage:FlashMessage,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submitIt() {
    console.log(this.product);

    if (this.product.price=='' || this.product.brand_name=='' ||this.product.item_type=='' || this.product.color=='' ||this.product.qty==''){
      this.flashMessage.danger('Validation failed..', {
        delay: 1500,
        successClass: 'danger',
        close: true,
        //closeBtnClass: 'class1 class2',
        navigate: ''
      });
    }else {


      this.auth.addProduct(this.product).subscribe(res => {
        console.log(res);
      });
      // this.auth.

      this.flashMessage.success('Data updated Successfully..', {
        delay: 1500,
        successClass: 'success',
        close: true,
        //closeBtnClass: 'class1 class2',
        navigate: ''
      });

    }
  }

}
