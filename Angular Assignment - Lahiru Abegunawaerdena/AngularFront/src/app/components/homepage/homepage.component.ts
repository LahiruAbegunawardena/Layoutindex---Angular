import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FlashMessage} from 'angular-flash-message';
import {Router} from "@angular/router";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  Data:any;
  display = false;
  product = {
    _id: '',
    item_type: '',
    brand_name: '',
    color: '',
    quantity: '',
    price: ''
  };

  constructor(
    private auth: AuthService,
    private flashMessage:FlashMessage,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadDta();
  }

  loadDta(){
    this.auth.shwProduct().subscribe(res => {
      this.Data = res.data;
      console.log(this.Data);
    });
  }
  changeIt(item){
    this.product._id = item._id,
    this.product.item_type = item.item_type;
    this.product.brand_name = item.brand_name;
    this.product.color = item.color;
    this.product.quantity = item.quantity;
    this.product.price = item.price;
    this.display = true;
  }
  submitIt(){
    if (this.product.price=='' || this.product.brand_name=='' ||this.product.item_type=='' || this.product.color=='' ||this.product.qty==''){
      this.flashMessage.danger('Validation failed..', {
        delay: 1500,
        successClass: 'danger',
        close: true,
        //closeBtnClass: 'class1 class2',
        navigate: ''
      });
    } else {

      this.display = false;
      this.auth.updtProduct(this.product).subscribe(res => {
        console.log(res);

        this.flashMessage.success('Data updated Successfully..', {
          delay: 1500,
          successClass: 'success',
          close: true,
          //closeBtnClass: 'class1 class2',
          navigate: ''
        });
        this.loadDta();

      });
    }
  }

}
