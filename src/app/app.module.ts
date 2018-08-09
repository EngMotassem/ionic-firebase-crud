import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FireBase_Config } from './firebase.credintals';
import { DbService } from './services/db.service';
import { DetailsPage } from '../pages/details/details';
import { FormsModule} from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DetailsPage,
    SearchPipe
    
  ],
  imports: [
    BrowserModule,
    FormsModule,

    AngularFireModule.initializeApp(FireBase_Config),
    AngularFireDatabaseModule,

    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
  ]
})
export class AppModule {}
