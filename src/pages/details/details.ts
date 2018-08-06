import { Component ,ElementRef,Renderer2 } from '@angular/core';
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

productname:string

productprice:number

shoppingitem : Product

  constructor(public navCtrl: NavController, public navParams: NavParams ,private dbservice:DbService
  ,private elm:ElementRef ,private render:Renderer2
  ) {

    

  // 


  }

  update(){

    this.dbservice.updateItem(this.shoppingItemId,{
      productname:this.productname,
      price:this.productprice
    })

    this.navCtrl.pop()


  }

     // Capture the shoppingItemId as a NavParameter

     // Log out the NavParam

     ionViewWillEnter(){
      console.log('ion will enter  DetailsPage');


     }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
    this.shoppingItemId = this.navParams.get('itemid');

    console.log(this.shoppingItemId)

    this.showdetails()


  }

  showdetails(){

    this.dbservice.getSingleItem(this.shoppingItemId).valueChanges().subscribe(data =>{
        
     // console.log(this.shoppingitem=<Product>data)
     this.shoppingitem=<Product>data


     this.productname=this.shoppingitem.productname
     console.log('product name',this.productname)

     this.productprice=this.shoppingitem.price

     
     

    }
  )

  }

}
