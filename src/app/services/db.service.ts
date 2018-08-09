import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


import { Product } from '../models/product';
import { ToastController } from 'ionic-angular';



@Injectable()
export class DbService {

      // Creating a new Object 
  shoppingItem : Product;

 itemlist : Product[];



  shoppingItemRef$:AngularFireList<Product>;



constructor(private database: AngularFireDatabase ,private toast:ToastController) { 

}

getall(){

    return this.shoppingItemRef$ = this.database.list('shopping-list',ref=>
    ref.orderByChild('price').startAt(5555,'price')


);
    
 
}

deleteitem(key:string){

    this.database.object(`shopping-list/${key}`).remove()

}

updateItem (key:string , P:Product){

    this.database.object(`shopping-list/${key}`).update(P);

}

getAllProducts(): Product []{

    
 this.database.list('/shopping-list').valueChanges().subscribe(res=>{
     
    this.itemlist=<Product []> res

    console.log(this.itemlist)

      
    }
        
    ),(err)=>{
   console.log("probleme : ", err)
};
  
//console.log(this.itemlist)
return this.itemlist

}


addproduct(_product : Product){ 

    this.shoppingItemRef$.push(_product)

    this.toast.create({
        message:'added success',
        duration:3000
    }).present()


    
   // this.shoppingItem = {} as Product;
}

getItemKey( _product : Product):string{
    console.log('product key',_product.$key)

   return _product.$key
}

getSingleItem(key : string ) {

    //pr:Product
    
    
    return this.database.object(`shopping-list/${key}`)


    
}








}
