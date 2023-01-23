import { Component, OnInit } from '@angular/core';
import { ResponseIDShoppingCart } from 'src/app/core/models/RespIdShoppingCart';
import { ShoopingCartService } from '../../../core/services/shooping-cart.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  uno!:ResponseIDShoppingCart;
  constructor( private service: ShoopingCartService) { }

  ngOnInit(): void {
  }

  createShoppingCart(){
    this.service.createShoppingCart().subscribe( 
      id => {
      this.uno = id;

    }
    );
  }

}
