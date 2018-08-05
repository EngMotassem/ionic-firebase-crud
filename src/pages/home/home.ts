import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DbService } from '../../app/services/db.service';
import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';

import { Product } from '../../app/models/product';

import {Observable} from 'rxjs/Observable';
import { DetailsPage } from '../details/details';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[DbService],
})
export class HomePage {

  product ={}as  Product

  prodcuts:  Product[]

  key : string

  constructor(public navCtrl: NavController,private dbservice:DbService) {

    

  }

  addnewProduct(){
    this.dbservice.addproduct(this.product)
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





}
