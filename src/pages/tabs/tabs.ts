import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ListPage } from '../list/list';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  notification: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {    
    this.notification = this.navParams.data.item;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
