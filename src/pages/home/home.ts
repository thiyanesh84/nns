import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  value: any;
  homepage = {
    firstname: 'Mohammed',
    lastname: 'Ahmed',
    primarymobile: '',
    primaryemail: '',
    secondarymobile: '',
    secondaryemail: '',
    isFormInValid: false
  };
  isOTPVerified1: boolean;
  isOTPVerified2: boolean;
  readOnlyInput1: boolean;
  readOnlyInput2: boolean;
  primaryMsg: String;
  secondaryMsg: String;
  disabledSubmitBtn: boolean;
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController) {
    this.value = navParams.get('item');   
    this.readOnlyInput1 = false;
    this.readOnlyInput2 = false;
    this.disabledSubmitBtn = false;
  }
  appendISD(s: string) {
    if (this.homepage.primarymobile.length == 1) {
      this.homepage.primarymobile = '+973-' + this.homepage.primarymobile;
    }
    if (this.homepage.secondarymobile.length == 1) {
      this.homepage.secondarymobile = '+973-' + this.homepage.secondarymobile;
    }
  }
  presentPrompt1(event: any) {
    console.log(event.ngControl.name);
    if (this.homepage.primarymobile.length > 0 && !this.isOTPVerified1) {
      let alert = this.alertCtrl.create({
        title: 'Verify OTP',
        inputs: [
          {
            name: 'otp',
            placeholder: 'enter otp sent to ' + this.homepage.primarymobile
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
                this.isOTPVerified1 = true;
                this.readOnlyInput1 = true;
                this.primaryMsg = 'otp verified';
                console.log('Valid OTP::: ', data.otp);
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

  presentPrompt2(event: any) {
    console.log(event.ngControl.name);
    if (this.homepage.secondarymobile.length > 0 && !this.isOTPVerified2 && this.isOTPVerified1) {
      let alert = this.alertCtrl.create({
        title: 'Verify OTP',
        inputs: [
          {
            name: 'otp',
            placeholder: 'enter otp sent to ' + this.homepage.secondarymobile
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
                this.isOTPVerified2 = true;
                this.readOnlyInput2 = true;
                this.secondaryMsg = 'otp verified';
                console.log('Valid OTP::: ', data.otp);
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

 submitContactDetails(){   
    this.disabledSubmitBtn = true;  
    if (this.homepage.primarymobile == "" || this.homepage.primaryemail == "") {
      this.disabledSubmitBtn = false;
      this.homepage.isFormInValid = true;
    }else{
      this.homepage.isFormInValid = false;
    }
  }
}

/*
Call this function like 
await delay(300); //3 sec
*/
function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

