import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainProvider } from './../../providers/mainProvider';
import {LogIn} from "../login/login"
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  response = '';
  constructor(public navCtrl: NavController, public mainProvider: MainProvider, private toastCtrl: ToastController) {

  }

  lockMethod(){
      this.presentToast('Locked');

    // this.mainProvider.lock().subscribe(data =>{
    //   this.presentToast('Locked');
    // },
    // error =>{
    //   this.presentToast('Locked');
    //   console.log(error);
    // })
  }
  sleepMethod(){
    this.mainProvider.sleep().subscribe(data =>{
      this.presentToast('Sleep');
    },
    error =>{
      this.presentToast('Sleep');
      console.log(error);
    })
  }
  shutDownMethod(){
    this.mainProvider.shutdown().subscribe(data =>{
      this.presentToast('Shut Down');
    },
    error =>{
      this.presentToast('Shut Down');
      console.log(error);
    })
  }
  logOut(){
    this.mainProvider.logOut()
    this.navCtrl.push(LogIn)
  }


  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
}
}
