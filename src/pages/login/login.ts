import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ApiInvokerProvider } from "../../providers/api-invoker/api-invoker";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loader = false;
  formdata = {
     username : "test",
     password : "test123",
     selectedSecurity : "eKey",
     loginfailed : false
    };
  constructor(public navCtrl: NavController, public navParams: NavParams, public apiService: ApiInvokerProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    console.log(this.formdata.username+','+this.formdata.password+','+this.formdata.selectedSecurity);
    if (this.formdata.username == "test" && this.formdata.password == "test123") {
      console.log("Login Success");
      this.formdata.loginfailed = false;
      this.loader = true;
      this.apiService.getData().subscribe(data => {
        this.loader = false;
        console.log("Login Page Response:::::: ",data); 
        this.navCtrl.setRoot(HomePage,{
          item:data       
          }); 
      });  
      
    }else{
      this.formdata.username = '';
      this.formdata.password = '';
      this.formdata.loginfailed = true;
    }
  }

}
