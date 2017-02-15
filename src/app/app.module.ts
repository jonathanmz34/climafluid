import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InterventionaddPage } from '../pages/interventionadd/Interventionadd';
import { SignaturePadModule } from 'angular2-signaturepad';
import { Storage } from '@ionic/storage';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InterventionaddPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    SignaturePadModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InterventionaddPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Storage]
})
export class AppModule {}
