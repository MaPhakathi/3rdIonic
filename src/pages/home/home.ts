import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage { 

  valueb:number;
  valuea:number;
   
  constructor(public navCtrl: NavController) {
      this.valueb=0;
      this.valuea=0;
  }


  
onClickA(num:number){
    if(num == 3){
        this.valuea += 3;
    }else  if(num == 2){
        this.valuea += 2;
    }else  if(num == 1){
        this.valuea += 1;
    }
}
 
onClickB(num:number){
    if(num == 3){
        this.valueb += 3;
    }else  if(num == 2){
        this.valueb += 2;
    }else  if(num == 1){
        this.valueb += 1;
    }
}
reset(){
    this.valuea = 0;
    this.valueb = 0;
}
}
