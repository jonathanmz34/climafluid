import {NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {homePage} from "../acomptes/acomptes";
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'page-interventiondetails',
  templateUrl: 'interventiondetails.html'
})
export class InterventiondetailsPage {
  public parameter1;
  public http;
  public data;
  public doub;

  constructor(public navCtrl: NavController, http:Http, private navParams: NavParams) {
    this.http = http;
    this.data = {};
  }

   ngOnInit() {
    this.parameter1 = this.navParams.get('param1');
      var link = 'http://vps1.agilizer.fr/interventiondetails.php';
    var data2 = JSON.stringify({username: this.parameter1});

    this.http.post(link, data2)
      .subscribe(data => {
        this.data.response = data._body;
        console.log(this.data.response);
        this.doub = JSON.parse(this.data.response);
        console.log(this.doub);
      }, error => {
        console.log("Oooops!");
      });
  }
}