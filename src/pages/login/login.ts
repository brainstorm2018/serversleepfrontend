import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { MainProvider } from "./../../providers/mainProvider";
import { LoginProvider } from "./../../providers/loginProvider";
import { HomePage } from "../home/home";
import { ToastController } from 'ionic-angular';

@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LogIn {
  form = {};
  response: any;

  constructor(
    public loginProvider: LoginProvider,
    public navCtrl: NavController,
    private toastCtrl: ToastController
  ) {}

  loginExec() {
    this.loginProvider.login(this.form).subscribe(
      data => {
        this.response = data;
        sessionStorage.setItem('token', this.response._body);
      this.navCtrl.push(HomePage)
      },error => {
        this.presentToast();
        console.log('error: ', error);
      }
    )
    console.log(this.form);
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Wrong Credentials',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
}

}
