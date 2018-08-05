import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DbService } from '../../app/services/db.service';
import { Product } from '../../app/models/product';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
  providers:[DbService],
})
export class DetailsPage {

shoppingItemId

shoppingitem : Product

  constructor(public navCtrl: NavController, public navParams: NavParams ,private dbservice:DbService) {

    

  // 


  }

     // Capture the shoppingItemId as a NavParameter

     // Log out the NavParam


  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
    this.shoppingItemId = this.navParams.get('itemid');

    console.log(this.shoppingItemId)

    this.showdetails()


  }

  showdetails(){

    this.dbservice.getSingleItem(this.shoppingItemId).valueChanges().subscribe(data =>
        
      console.log(this.shoppingitem=<Product>data))

  }

}
