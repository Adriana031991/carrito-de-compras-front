import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseIDShoppingCart } from 'src/app/core/models/ShoppingCart.model';
import { SharedDataService } from 'src/app/shared/shared-data.service';
import { ShoopingCartService } from '../../../core/services/shooping-cart.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {


  constructor(private service: ShoopingCartService, private sharedService: SharedDataService, private router: Router) { }

  ngOnInit(): void {
  }

  createShoppingCart() {
    this.service.createShoppingCart().subscribe(
      id => {
        this.sharedService.sharedCardId(id);
        localStorage.setItem('idCart', id.idShoppingCart)
      }
    );
      this.router.navigate(['/products/cards'])
  }

}
