import { Component } from '@angular/core';
import { NavController, NavParams, AlertController  } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
value:any;
homepage = {
  firstname: 'Mohammed',
  lastname: 'Ahmed',
  primarymobile:'',
  primaryemail:'',
  secondarymobile:'',
  secondaryemail: ''
};
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController) {
    this.value = navParams.get('item').results[0].title;
  } 
  appendISD(s:string){
    if (this.homepage.primarymobile.length == 1) {
      this.homepage.primarymobile = '+973-'+this.homepage.primarymobile;
    }
    if (this.homepage.secondarymobile.length == 1) {
      this.homepage.secondarymobile = '+973-'+this.homepage.secondarymobile;
    }
  }

  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Login',
      inputs: [
        {
          name: 'username',
          placeholder: 'Username'
        },
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Login',
          handler: data => {
            if ((data.username == data.password)) {
              // logged in!
              console.log('logged clicked');
            } else {
              // invalid login
              return false;
            }
          }
        }
      ]
    });
    alert.present();
  }
}
