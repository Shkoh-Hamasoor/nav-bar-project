import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AngularFireModule.initializeApp({
    apiKey: "AIzaSyDqfLrI75DERzid7Ij3EeYcT3KFb9TkUpg",
    authDomain: "login-logout-1d9da.firebaseapp.com",
    projectId: "login-logout-1d9da",
    storageBucket: "login-logout-1d9da.appspot.com",
    messagingSenderId: "998851211896",
    appId: "1:998851211896:web:65aba3fb721deb9792338d"
  })
  ],
  declarations: [ AppComponent, HelloComponent, NavigationComponent, HomepageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
