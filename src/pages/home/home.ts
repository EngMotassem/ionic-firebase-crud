import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { DbService } from '../../app/services/db.service';
import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';

import { Product } from '../../app/models/product';

import {Observable} from 'rxjs/Observable';
import { DetailsPage } from '../details/details';
import { FormGroup, FormControl, Validators } from '../../../node_modules/@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[DbService],
})
export class HomePage {

  product ={}as  Product

  prodcuts:  Product[]

  key : string


terms:string


  constructor(public navCtrl: NavController,private dbservice:DbService,private alertCtrl:AlertController) {

    
  }
  filterproducts(){
  //  this.prodcuts.filter(callbackfn, value, index, array, thisArg)
  }

  addnewProduct(p:Product){
    this.dbservice.addproduct(p)
    //console.log(this.product.$key)

   // console.log(this.prodcuts=this.dbservice.getall())

    
  }

  details(p : Product){

  this.key= this.dbservice.getItemKey(p)
   this.navCtrl.push(DetailsPage,{

    itemid:p.$key
   })
   



  }

  delProduct(p:Product){

    this.dbservice.deleteitem(p.$key)
  }


  // user alert 

  presentConfirm(p:Product) {
    let alert = this.alertCtrl.create({
      title: 'Confirm delete',
      message: 'Do you want to remove  this item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'remove',
          handler: () => {
            console.log('Buy clicked');

            this.delProduct(p)
          }
        }
      ]
    });
    alert.present();
  }
  ionViewDidLoad() {

   //this.prodcuts=this.dbservice.getAllProducts()


  

this.dbservice.getall().snapshotChanges().subscribe(data=> {

  this.prodcuts=[]

  data.forEach(element => {
    const y = element.payload.toJSON()
    y['$key'] = element.key;
    console.log(y)
    this.prodcuts.push(y as Product);
  });



})



    /*const x = this.dbservice.getall();
    x.valueChanges().subscribe(item => {
      /*this.prodcuts = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
       this.prodcuts.push(y as Product);
      });
    });
    */
    // Put here the code you want to execute
    //console.log(item)
  }


  editItem(p:Product){
    this.dbservice.updateItem(p.$key,p)
}



}
