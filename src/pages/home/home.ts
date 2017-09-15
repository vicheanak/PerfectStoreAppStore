import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import{AboutPage} from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

    showConfirm() {
        let confirm = this.alertCtrl.create({
            title: 'ប្តូរយករង្វាន់នេះ?',
            buttons: [
                {
                    text: 'ទេ',
                    handler: () => {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'ប្តូរ',
                    handler: () => {
                        console.log('Agree clicked');
                        this.navCtrl.parent.select(1);
                        //this.navCtrl.setPages([
                        //    { page: AboutPage }
                        //]);
                    }
                }
            ]
        });
        confirm.present();
    }

}
