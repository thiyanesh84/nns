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

  presentPrompt1() {
    let alert = this.alertCtrl.create({
      title: 'Verify OTP',
      inputs: [
        {
          name: 'otp',
          placeholder: 'enter otp sent to '+this.homepage.primarymobile
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
          text: 'Verify',
          handler: data => {
            if ((data.otp)) {
              // logged in!
              console.log('logged clicked',data.otp);
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

  presentPrompt2() {
    let alert = this.alertCtrl.create({
      title: 'Verify OTP',
      inputs: [
        {
          name: 'otp',
          placeholder: 'enter otp sent to '+this.homepage.secondarymobile
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
          text: 'Verify',
          handler: data => {
            if ((data.otp)) {
              // logged in!
              console.log('logged clicked',data.otp);
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
