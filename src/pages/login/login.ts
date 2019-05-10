import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
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
    
  constructor(public navCtrl: NavController, public navParams: NavParams, public apiService: ApiInvokerProvider, public toastController: ToastController) {
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
      this.apiService.getData()
      .subscribe(data => {
        this.loader = false;
        console.log("Login Page Response:::::: ",data); 
        this.navCtrl.setRoot(HomePage,{
          item:data       
          }); 
      }, (err) => {        
        this.loader = false;
          const toast = this.toastController.create({
            message: 'Apologies, system is currently unavailable. Please try again later.',
            position: 'top',
            duration: 5000
          });
          toast.present();
        console.log(err.message);
      });  

      // return Observable.from(new Promise((resolve, reject) => {
      //   let headers = new Headers();
      //   headers.append('Content-Type', 'application/json');
      //   this.http.post(this.url + '/api/', JSON.stringify({}), { headers: headers }).timeout(15000)
      //     .subscribe(res => {
      //       let data = res.json();
      //       resolve(data);
      //     }, (err) => {
      //       reject(err);
      //     });
      // }))
      
    }else{
      this.formdata.username = '';
      this.formdata.password = '';
      this.formdata.loginfailed = true;
    }
  }

}
