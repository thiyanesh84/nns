import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  selectedItem: any;
  icons: string[];
  items: Array<{ id: string, entity: string, timestamp: string, sentTo: string, url: string, title: string, note: string, icon: string }>;

  //notification


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 20; i++) {
      this.items.push({
        id: i + '',
        entity: 'General Directorate of Traffic',
        timestamp: '20/jan/2019',
        sentTo: '+973-1111111, +973-323232323, test@test.com, test2@test.com',
        url: 'https://www.google.com/',
        title: 'Notification Title ' + i,
        note: 'This is notification description for notification ' + i + ': These services, provided by Information & eGovernment Authority (IGA), allow the citizens, residents and GCC citizens to register and update their contact details which will be used to receive latest government notifications with the ability to view these notifications via the e-service.',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }

  notificationView(event: any, item: any) {
    console.log(item);
    this.navCtrl.push(TabsPage, {
      item: item
    });
  }
}
