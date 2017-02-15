import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from "@angular/http";
import { InterventiondetailsPage } from '../interventiondetails/interventiondetails';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public http;
  public doub;
  public data;


  constructor(public navCtrl: NavController, http:Http) {
    this.http = http;
    this.data = {};

  }

  ngOnInit() {
    var link = 'http://vps1.agilizer.info/interventionslist.php';
    this.http.post(link)
      .subscribe(data => {
        this.data.response = data._body;
        this.doub = JSON.parse(this.data.response);
        console.log(this.doub);
      }, error => {
        console.log("Oooops!");
      });
  }

  goNewIntervention(){
  }

  goInterventionDetails(numfiche){
    this.navCtrl.push(InterventiondetailsPage,{param1: numfiche})
  
  }

}
