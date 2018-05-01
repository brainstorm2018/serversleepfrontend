import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import "rxjs/Rx";
import { Storage } from "@ionic/storage";


@Injectable()
export class MainProvider {
    constructor(public http: Http, public storage: Storage) {

    }

    lock(){
      let token = sessionStorage.getItem('token');
      let myHeader = new Headers();
        myHeader.append("Authorization", "Bearer "+token);
        return this.http.get("http://localhost:8080/admin/lock", {headers:myHeader}).map(res => res.json());
    }

    sleep(){
      let token = sessionStorage.getItem('token');
      let myHeader = new Headers();
        myHeader.append("Authorization", "Bearer "+token);
        return this.http.get("http://localhost:8080/admin/sleep", {headers:myHeader}).map(res => res.json());
    }
    shutdown(){
      let token = sessionStorage.getItem('token');
      let myHeader = new Headers();
        myHeader.append("Authorization", "Bearer "+token);
        return this.http.get("http://localhost:8080/admin/shutdown", {headers:myHeader}).map(res => res.json());
    }
    fourthApiCall(){
      let token = sessionStorage.getItem('token');
      let myHeader = new Headers();
        myHeader.append("Authorization", "Bearer "+token);
        return this.http.get("http://localhost:8080/admin/lock", {headers:myHeader}).map(res => res.json());
    }
    logOut(){
      sessionStorage.removeItem('token');
    }

}
