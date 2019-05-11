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
  item: {id: string, entity: string, timestamp: string, sentTo: string, url: string, title: string, note: string, icon: string};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  entity: any = ListPage;
  // set some user information on chatParams
  entityParams = {
    orderby: 'entity'
  };
  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
    console.log(this.navParams.data.item.id);
    this.item = {
      id: this.navParams.data.item.id,
        entity: this.navParams.data.item.entity,
        timestamp: this.navParams.data.item.timestamp,
        sentTo: this.navParams.data.item.sentTo,
        url: this.navParams.data.item.url,
        title: this.navParams.data.item.title,
        note: this.navParams.data.item.note,
        icon: this.navParams.data.item.icon
    }
  }

}
