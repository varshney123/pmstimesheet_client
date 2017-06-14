import { Component } from '@angular/core';
import { NavController ,  LoadingController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController , public loadingCtrl: LoadingController) {

  }

  login(){
       this.navCtrl.push(WelcomePage);
 }



}
